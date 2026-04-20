(function() {
  const data = window.SHUIHU_DATA;
  const results = window.SHUIHU_RESULTS;
  const scoring = window.SHUIHU_SCORING;

  const questions = data && Array.isArray(data.QUESTIONS) ? data.QUESTIONS : [];

  const views = {
    home: document.getElementById("homeView"),
    quiz: document.getElementById("quizView"),
    loading: document.getElementById("calculatingView"),
    result: document.getElementById("resultView"),
  };

  const startButton = document.getElementById("startButton");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  const restartButton = document.getElementById("restartButton");
  const copyResultButton = document.getElementById("copyResultButton");

  const questionProgress = document.getElementById("questionProgress");
  const quizTitle = document.getElementById("quizTitle");
  const questionText = document.getElementById("questionText");
  const optionsList = document.getElementById("optionsList");
  const answerHint = document.getElementById("answerHint");
  const progressBar = document.getElementById("progressBar");
  const copyStatus = document.getElementById("copyStatus");

  const resultTextByCharacterId = new Map(results.RESULT_TEXTS.map((r) => [r.characterId, r]));
  const characterById = new Map(data.CHARACTERS.map((c) => [c.id, c]));

  const state = {
    currentView: "home",
    currentQuestionIndex: 0,
    answers: {},
    latestResult: null,
  };

  function showView(viewKey) {
    if (viewKey === "result") renderResult();
    state.currentView = viewKey;
    Object.entries(views).forEach(([k, el]) => {
      if (!el) return;
      el.classList.toggle("is-active", k === viewKey);
    });
    window.scrollTo(0, 0);
  }

  function getCurrentQuestion() {
    return questions[state.currentQuestionIndex];
  }

  function clearHint() {
    if (answerHint) answerHint.textContent = "";
  }

  function setHint(msg) {
    if (answerHint) answerHint.textContent = msg;
  }

  function shuffleOptions(options) {
    const arr = options.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function updateProgress() {
    const total = questions.length;
    const current = state.currentQuestionIndex + 1;
    questionProgress.textContent = `第 ${current} / ${total} 题`;
    progressBar.style.width = `${(current / total) * 100}%`;
  }

  function renderQuestion() {
    const q = getCurrentQuestion();
    const selectedKey = state.answers[q.id];

    updateProgress();
    quizTitle.textContent = q.text;
    questionText.textContent = "请选择一个最接近你的答案。";
    optionsList.innerHTML = "";

    const shuffled = shuffleOptions(q.options);
    shuffled.forEach((opt) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option-button";
      btn.textContent = `${opt.key}. ${opt.text}`;
      btn.dataset.optionKey = opt.key;
      btn.classList.toggle("is-selected", selectedKey === opt.key);
      btn.setAttribute("aria-pressed", String(selectedKey === opt.key));
      btn.addEventListener("click", () => selectAnswer(opt.key));
      optionsList.appendChild(btn);
    });

    prevButton.disabled = state.currentQuestionIndex === 0;
    nextButton.textContent = state.currentQuestionIndex === questions.length - 1 ? "查看结果" : "下一题";
  }

  function selectAnswer(key) {
    const q = getCurrentQuestion();
    state.answers[q.id] = key;
    clearHint();
    renderQuestion();
  }

  function resetQuiz() {
    state.currentQuestionIndex = 0;
    state.answers = {};
    state.latestResult = null;
    clearHint();
    copyStatus.textContent = "";
    renderQuestion();
  }

  function startQuiz() {
    resetQuiz();
    showView("quiz");
  }

  function goToPrev() {
    if (state.currentQuestionIndex === 0) return;
    state.currentQuestionIndex--;
    clearHint();
    renderQuestion();
  }

  function goToNext() {
    const q = getCurrentQuestion();
    if (!state.answers[q.id]) {
      setHint("请先选择一个答案。");
      return;
    }
    if (state.currentQuestionIndex < questions.length - 1) {
      state.currentQuestionIndex++;
      clearHint();
      renderQuestion();
      return;
    }
    finishQuiz();
  }

  function finishQuiz() {
    try {
      state.latestResult = scoring.calculateResult(state.answers);
      clearHint();
      showView("loading");
      setTimeout(() => showView("result"), 500);
    } catch (e) {
      setHint(e && e.message ? e.message : "计算结果时出现错误。");
      showView("quiz");
    }
  }

  function getResultText(charId) {
    return resultTextByCharacterId.get(charId) || {
      characterId: charId,
      resultTitle: "结果已生成",
      subtitle: "文案整理中",
      classicalQuote: "...",
      description: ["结果已生成，文案待补充。"],
      strengths: ["匹配完成"],
      blindSpots: ["文案待补"],
      bestRole: "请稍后重试",
      teamRole: "文案整理中",
      growthAdvice: ["等待补充"],
      lifeInsight: "请稍后重试",
      relatedCharacters: { similar: null, complementary: null, opposing: null },
      shareText: "我刚做完水浒人格测试，你也来试试？",
    };
  }

  function renderResult() {
    if (!state.latestResult || !state.latestResult.matches || state.latestResult.matches.length === 0) {
      renderEmptyResult();
      return;
    }

    const primaryMatch = state.latestResult.matches[0];
    const primaryText = getResultText(primaryMatch.character.id);
    const ch = primaryMatch.character;

    // 主匹配人物
    const primaryResult = document.getElementById("primaryResult");
    primaryResult.innerHTML = `
      <h2>${primaryText.resultTitle}</h2>
      <p class="result-subtitle">${primaryText.subtitle}</p>
      <div class="meta-row">
        <span>${ch.nickname}</span>
        <span>${ch.archetype}</span>
        <span class="similarity-badge">${primaryMatch.similarity}% 相似</span>
      </div>
      <div class="tag-list">
        ${ch.tags.map((t) => `<span>${t}</span>`).join("")}
      </div>
    `;

    // 经典语录
    const quoteBlock = document.getElementById("quoteBlock");
    quoteBlock.innerHTML = `
      <h3>经典语录</h3>
      <p class="classical-quote">${primaryText.classicalQuote}</p>
    `;

    // 人物解读
    const resultDesc = document.getElementById("resultDescription");
    resultDesc.innerHTML = `
      <h3>人物解读</h3>
      <div class="description-list">
        ${primaryText.description.map((p) => `<p>${p}</p>`).join("")}
      </div>
    `;

    // 优势与盲点
    const resultStrengths = document.getElementById("resultStrengths");
    resultStrengths.innerHTML = `
      <h3>优势与盲点</h3>
      <div class="result-columns">
        <div>
          <h4>你的优势</h4>
          <ul class="plain-list">
            ${primaryText.strengths.map((s) => `<li>${s}</li>`).join("")}
          </ul>
        </div>
        <div>
          <h4>需要注意的盲点</h4>
          <ul class="plain-list">
            ${primaryText.blindSpots.map((b) => `<li>${b}</li>`).join("")}
          </ul>
        </div>
      </div>
    `;

    // 团队角色
    const resultRole = document.getElementById("resultRole");
    resultRole.innerHTML = `
      <h3>适合位置与团队角色</h3>
      <p class="best-role-text"><strong>适合位置：</strong>${primaryText.bestRole}</p>
      <p class="team-role">${primaryText.teamRole}</p>
    `;

    // 成长建议
    const growthAdvice = document.getElementById("growthAdvice");
    growthAdvice.innerHTML = `
      <h3>成长建议</h3>
      <ul class="growth-advice">
        ${primaryText.growthAdvice.map((g) => `<li>${g}</li>`).join("")}
      </ul>
    `;

    // 人生启示
    const lifeInsight = document.getElementById("lifeInsight");
    lifeInsight.innerHTML = `
      <h3>人生启示</h3>
      <p class="life-insight">${primaryText.lifeInsight}</p>
    `;

    // 雷达图与维度分数
    renderScoreSummary(state.latestResult.normalizedScores);

    // 相关人物
    renderRelatedCharacters(primaryText.relatedCharacters, primaryMatch.similarity);
  }

  function renderEmptyResult() {
    document.getElementById("primaryResult").innerHTML = `
      <h2>还没有测试结果</h2>
      <p class="result-subtitle">完成 60 道题后，这里会显示你的水浒人物结果。</p>
    `;
  }

  function renderScoreSummary(normScores) {
    const container = document.getElementById("scoreSummary");
    const scoreListHtml = Object.entries(normScores)
      .map(([key, val]) => {
        const label = results.DIMENSION_LABELS[key] || key;
        const score = Math.round(val);
        return `
          <div class="score-item">
            <div class="score-label"><span>${label}</span><span>${score}</span></div>
            <div class="progress-track"><div class="progress-bar" style="width:${score}%"></div></div>
          </div>
        `;
      })
      .join("");

    container.innerHTML = `
      <h3>十维倾向</h3>
      <div id="radarChartContainer">
        <canvas id="radarChart" width="400" height="400"></canvas>
      </div>
      <div class="score-list">${scoreListHtml}</div>
    `;

    // 重绘雷达图
    drawRadarChart(normScores);
  }

  function drawRadarChart(scores) {
    const canvas = document.getElementById("radarChart");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;
    const cx = w / 2;
    const cy = h / 2;
    const maxR = Math.min(cx, cy) - 50;

    ctx.clearRect(0, 0, w, h);

    const dims = data.DIMENSIONS;
    const labels = dims.map((d) => results.DIMENSION_LABELS[d] || d);
    const n = dims.length;
    const angleStep = (2 * Math.PI) / n;

    // 背景网格
    ctx.strokeStyle = "#e0ddd8";
    ctx.lineWidth = 1;
    for (let level = 1; level <= 5; level++) {
      const r = (maxR * level) / 5;
      ctx.beginPath();
      for (let i = 0; i <= n; i++) {
        const a = i * angleStep - Math.PI / 2;
        const x = cx + r * Math.cos(a);
        const y = cy + r * Math.sin(a);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();
    }

    // 轴线
    dims.forEach((d, i) => {
      const a = i * angleStep - Math.PI / 2;
      const ex = cx + maxR * Math.cos(a);
      const ey = cy + maxR * Math.sin(a);
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(ex, ey);
      ctx.stroke();
    });

    // 数据多边形
    ctx.fillStyle = "rgba(47, 111, 85, 0.25)";
    ctx.strokeStyle = "#2f6f55";
    ctx.lineWidth = 2;
    ctx.beginPath();
    dims.forEach((d, i) => {
      const val = scores[d] || 0;
      const r = (val / 100) * maxR;
      const a = i * angleStep - Math.PI / 2;
      const x = cx + r * Math.cos(a);
      const y = cy + r * Math.sin(a);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // 标签
    ctx.fillStyle = "#3d3530";
    ctx.font = "13px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    dims.forEach((d, i) => {
      const a = i * angleStep - Math.PI / 2;
      const lx = cx + (maxR + 28) * Math.cos(a);
      const ly = cy + (maxR + 28) * Math.sin(a);
      ctx.fillText(labels[i], lx, ly);
    });
  }

  function renderRelatedCharacters(related, primarySim) {
    const container = document.getElementById("relatedCharacters");
    const similarCh = related.similar ? characterById.get(related.similar) : null;
    const compCh = related.complementary ? characterById.get(related.complementary) : null;
    const oppCh = related.opposing ? characterById.get(related.opposing) : null;

    container.innerHTML = `
      <h3>相近·互补·对立人物</h3>
      <div class="related-grid">
        <div class="related-card similar-card">
          <h4>相近人物</h4>
          <p class="relation-type">性格相似，路线相近</p>
          ${similarCh ? `
            <p class="character-name">${similarCh.name}</p>
            <p class="character-nickname">${similarCh.nickname}</p>
            <p class="similarity">≈ ${Math.max(5, primarySim - 3)}% 相似</p>
          ` : `<p class="character-name">暂无</p>`}
        </div>
        <div class="related-card complementary-card">
          <h4>互补人物</h4>
          <p class="relation-type">能力互补，合作潜力大</p>
          ${compCh ? `
            <p class="character-name">${compCh.name}</p>
            <p class="character-nickname">${compCh.nickname}</p>
            <p class="similarity">互补型</p>
          ` : `<p class="character-name">暂无</p>`}
        </div>
        <div class="related-card opposing-card">
          <h4>对立人物</h4>
          <p class="relation-type">性格相反，或有冲突</p>
          ${oppCh ? `
            <p class="character-name">${oppCh.name}</p>
            <p class="character-nickname">${oppCh.nickname}</p>
            <p class="similarity">对立型</p>
          ` : `<p class="character-name">暂无</p>`}
        </div>
      </div>
    `;
  }

  function copyResultSummary() {
    if (!state.latestResult || !state.latestResult.matches || state.latestResult.matches.length === 0) {
      copyStatus.textContent = "请先完成测试。";
      return;
    }
    const primaryMatch = state.latestResult.matches[0];
    const resultText = getResultText(primaryMatch.character.id);
    const summary = resultText.shareText || results.RESULT_SHARE_TEMPLATE
      .replace("{name}", primaryMatch.character.name)
      .replace("{nickname}", primaryMatch.character.nickname);

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(summary).then(
        () => { copyStatus.textContent = "结果摘要已复制。"; },
        () => { copyStatus.textContent = summary; }
      );
    } else {
      copyStatus.textContent = summary;
    }
  }

  function wireEvents() {
    startButton.addEventListener("click", startQuiz);
    prevButton.addEventListener("click", goToPrev);
    nextButton.addEventListener("click", goToNext);
    restartButton.addEventListener("click", () => {
      resetQuiz();
      showView("home");
    });
    copyResultButton.addEventListener("click", copyResultSummary);
  }

  function assertDependencies() {
    const required = [
      startButton, prevButton, nextButton,
      questionProgress, quizTitle, questionText, optionsList, answerHint,
    ];
    if (!data || !results || !scoring) {
      throw new Error("水浒页面依赖数据未正确加载。");
    }
    if (!Array.isArray(questions) || questions.length !== 60) {
      throw new Error(`题库数量异常：期望60，实际${questions.length}。`);
    }
    if (typeof scoring.calculateResult !== "function") {
      throw new Error("评分函数 calculateResult 不存在。");
    }
    if (required.some((n) => !n)) {
      throw new Error("答题页核心节点缺失。");
    }
  }

  assertDependencies();
  renderQuestion();
  wireEvents();
  showView("home");

  window.SHUIHU_APP = {
    views, state, showView, renderQuestion, resetQuiz, startQuiz,
    get latestResult() { return state.latestResult; },
  };
})();
