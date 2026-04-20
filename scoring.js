const scoringData =
  typeof require !== "undefined"
    ? require("./data.js")
    : window.SHUIHU_DATA;

const {
  DIMENSIONS: SCORING_DIMENSIONS,
  CHARACTERS: SCORING_CHARACTERS,
  QUESTIONS: SCORING_QUESTIONS,
} = scoringData;

function createZeroScores(dimensions = SCORING_DIMENSIONS) {
  return Object.fromEntries(dimensions.map((d) => [d, 0]));
}

function getQuestionMap(questions = SCORING_QUESTIONS) {
  return new Map(questions.map((q) => [q.id, q]));
}

function validateAnswers(answers, questions = SCORING_QUESTIONS) {
  if (!answers || typeof answers !== "object" || Array.isArray(answers)) {
    throw new Error("Answers must be an object keyed by question id.");
  }
  const questionMap = getQuestionMap(questions);
  const answerIds = Object.keys(answers);
  const expectedCount = questions.length;
  for (const id of answerIds) {
    if (!questionMap.has(id)) throw new Error(`Unknown question id: ${id}`);
  }
  const missingIds = questions
    .map((q) => q.id)
    .filter((qId) => !Object.prototype.hasOwnProperty.call(answers, qId));
  if (missingIds.length > 0 || answerIds.length !== expectedCount) {
    throw new Error(
      `Expected ${expectedCount} answers, received ${answerIds.length}. Missing: ${missingIds.join(", ") || "none"}.`
    );
  }
  for (const q of questions) {
    const key = answers[q.id];
    const opt = q.options.find((o) => o.key === key);
    if (!opt) throw new Error(`Invalid option key for ${q.id}: ${key}`);
  }
  return true;
}

function calculateRawScores(answers, questions = SCORING_QUESTIONS, dimensions = SCORING_DIMENSIONS) {
  validateAnswers(answers, questions);
  const raw = createZeroScores(dimensions);
  for (const q of questions) {
    const selected = q.options.find((o) => o.key === answers[q.id]);
    for (const [dim, val] of Object.entries(selected.weights)) {
      raw[dim] = (raw[dim] || 0) + val;
    }
  }
  return raw;
}

function calculateScoreBounds(questions = SCORING_QUESTIONS, dimensions = SCORING_DIMENSIONS) {
  const bounds = Object.fromEntries(dimensions.map((d) => [d, { min: 0, max: 0 }]));
  for (const q of questions) {
    for (const d of dimensions) {
      const vals = q.options.map((o) => o.weights[d] || 0);
      bounds[d].min += Math.min(...vals);
      bounds[d].max += Math.max(...vals);
    }
  }
  for (const [d, b] of Object.entries(bounds)) {
    if (b.max <= b.min) throw new Error(`Invalid bounds for ${d}: ${b.min} to ${b.max}`);
  }
  return bounds;
}

function clamp(v, lo, hi) { return Math.min(hi, Math.max(lo, v)); }
function roundScore(v) { return Math.round(v * 10) / 10; }

function normalizeScores(raw, bounds, dimensions = SCORING_DIMENSIONS) {
  const norm = {};
  for (const d of dimensions) {
    const b = bounds[d];
    const val = raw[d] || 0;
    norm[d] = roundScore(clamp(((val - b.min) / (b.max - b.min)) * 100, 0, 100));
  }
  return norm;
}

function calculateDistance(user, character, dimensions = SCORING_DIMENSIONS) {
  return Math.sqrt(dimensions.reduce((sum, d) => {
    const diff = user[d] - character[d];
    return sum + diff * diff;
  }, 0));
}

function distanceToSimilarity(dist, dimensions = SCORING_DIMENSIONS) {
  const max = Math.sqrt(dimensions.length * 100 * 100);
  return Math.round(clamp(100 - (dist / max) * 100, 0, 100));
}

function matchCharacters(normalized, characters = SCORING_CHARACTERS, dimensions = SCORING_DIMENSIONS) {
  return characters
    .map((ch, idx) => {
      const dist = calculateDistance(normalized, ch.scores, dimensions);
      return { character: ch, distance: roundScore(dist), similarity: distanceToSimilarity(dist, dimensions), index: idx };
    })
    .sort((a, b) => {
      if (b.similarity !== a.similarity) return b.similarity - a.similarity;
      if (a.distance !== b.distance) return a.distance - b.distance;
      return a.index - b.index;
    })
    .slice(0, 3)
    .map(({ index, ...rest }) => rest);
}

function calculateResult(answers) {
  validateAnswers(answers, SCORING_QUESTIONS);
  const raw = calculateRawScores(answers, SCORING_QUESTIONS, SCORING_DIMENSIONS);
  const bounds = calculateScoreBounds(SCORING_QUESTIONS, SCORING_DIMENSIONS);
  const normalized = normalizeScores(raw, bounds, SCORING_DIMENSIONS);
  const matches = matchCharacters(normalized, SCORING_CHARACTERS, SCORING_DIMENSIONS);
  return { rawScores: raw, bounds, normalizedScores: normalized, matches };
}

const SHUIHU_SCORING = {
  validateAnswers, calculateRawScores, calculateScoreBounds,
  normalizeScores, calculateDistance, distanceToSimilarity,
  matchCharacters, calculateResult,
};

if (typeof window !== "undefined") {
  window.SHUIHU_SCORING = SHUIHU_SCORING;
}

if (typeof module !== "undefined") {
  module.exports = SHUIHU_SCORING;
}
