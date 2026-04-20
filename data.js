const DIMENSIONS = [
  "loyalty",
  "courage",
  "wisdom",
  "righteousness",
  "freedom",
  "tenacity",
  "adaptability",
  "benevolence",
  "ambition",
  "charisma",
];

const CHARACTERS = [
  {
    id: "song_jiang",
    name: "宋江",
    nickname: "及时雨",
    archetype: "忠义凝聚型领导",
    tags: ["忠义", "凝聚", "宽厚", "抱负"],
    scores: {
      loyalty: 90, courage: 40, wisdom: 55, righteousness: 70,
      freedom: 25, tenacity: 55, adaptability: 65, benevolence: 80,
      ambition: 75, charisma: 88,
    },
  },
  {
    id: "lu_junyi",
    name: "卢俊义",
    nickname: "玉麒麟",
    archetype: "英武忠厚型统帅",
    tags: ["英武", "忠厚", "名声", "正道"],
    scores: {
      loyalty: 72, courage: 70, wisdom: 45, righteousness: 65,
      freedom: 30, tenacity: 60, adaptability: 25, benevolence: 55,
      ambition: 50, charisma: 65,
    },
  },
  {
    id: "wu_yong",
    name: "吴用",
    nickname: "智多星",
    archetype: "智谋型军师",
    tags: ["智谋", "筹策", "权变", "辅佐"],
    scores: {
      loyalty: 60, courage: 30, wisdom: 90, righteousness: 40,
      freedom: 35, tenacity: 50, adaptability: 85, benevolence: 35,
      ambition: 55, charisma: 50,
    },
  },
  {
    id: "gongsun_sheng",
    name: "公孙胜",
    nickname: "入云龙",
    archetype: "超脱淡泊型隐士",
    tags: ["超脱", "淡泊", "灵慧", "自由"],
    scores: {
      loyalty: 40, courage: 50, wisdom: 82, righteousness: 55,
      freedom: 92, tenacity: 30, adaptability: 70, benevolence: 50,
      ambition: 15, charisma: 35,
    },
  },
  {
    id: "guan_sheng",
    name: "关胜",
    nickname: "大刀",
    archetype: "威严正统型猛将",
    tags: ["威严", "正统", "忠烈", "名节"],
    scores: {
      loyalty: 82, courage: 75, wisdom: 40, righteousness: 80,
      freedom: 20, tenacity: 70, adaptability: 25, benevolence: 45,
      ambition: 40, charisma: 55,
    },
  },
  {
    id: "lin_chong",
    name: "林冲",
    nickname: "豹子头",
    archetype: "隐忍刚烈型武将",
    tags: ["隐忍", "刚烈", "被迫", "正道"],
    scores: {
      loyalty: 65, courage: 72, wisdom: 45, righteousness: 75,
      freedom: 20, tenacity: 88, adaptability: 30, benevolence: 50,
      ambition: 30, charisma: 40,
    },
  },
  {
    id: "qin_ming",
    name: "秦明",
    nickname: "霹雳火",
    archetype: "刚烈暴躁型先锋",
    tags: ["暴烈", "果决", "先锋", "刚烈"],
    scores: {
      loyalty: 70, courage: 88, wisdom: 20, righteousness: 55,
      freedom: 35, tenacity: 75, adaptability: 15, benevolence: 30,
      ambition: 45, charisma: 40,
    },
  },
  {
    id: "hua_rong",
    name: "花荣",
    nickname: "小李广",
    archetype: "忠诚优雅型将领",
    tags: ["忠诚", "优雅", "精准", "重情"],
    scores: {
      loyalty: 92, courage: 65, wisdom: 50, righteousness: 70,
      freedom: 30, tenacity: 55, adaptability: 40, benevolence: 60,
      ambition: 35, charisma: 55,
    },
  },
  {
    id: "chai_jin",
    name: "柴进",
    nickname: "小旋风",
    archetype: "仗义疏财型贵族",
    tags: ["仗义", "疏财", "贵族", "礼贤"],
    scores: {
      loyalty: 60, courage: 35, wisdom: 50, righteousness: 65,
      freedom: 50, tenacity: 35, adaptability: 55, benevolence: 82,
      ambition: 30, charisma: 68,
    },
  },
  {
    id: "lu_zhishen",
    name: "鲁智深",
    nickname: "花和尚",
    archetype: "豪爽正义型好汉",
    tags: ["豪爽", "正义", "粗中有细", "慈悲"],
    scores: {
      loyalty: 78, courage: 85, wisdom: 45, righteousness: 90,
      freedom: 75, tenacity: 65, adaptability: 55, benevolence: 85,
      ambition: 15, charisma: 70,
    },
  },
  {
    id: "wu_song",
    name: "武松",
    nickname: "行者",
    archetype: "刚烈果敢型英雄",
    tags: ["刚烈", "果敢", "嫉恶", "复仇"],
    scores: {
      loyalty: 70, courage: 92, wisdom: 40, righteousness: 80,
      freedom: 55, tenacity: 90, adaptability: 30, benevolence: 35,
      ambition: 30, charisma: 55,
    },
  },
  {
    id: "dong_ping",
    name: "董平",
    nickname: "双枪将",
    archetype: "野心果决型将领",
    tags: ["果决", "野心", "双面", "灵活"],
    scores: {
      loyalty: 35, courage: 80, wisdom: 55, righteousness: 30,
      freedom: 50, tenacity: 60, adaptability: 75, benevolence: 20,
      ambition: 85, charisma: 65,
    },
  },
  {
    id: "yang_zhi",
    name: "杨志",
    nickname: "青面兽",
    archetype: "志高运蹇型英雄",
    tags: ["志高", "运蹇", "刚直", "不甘"],
    scores: {
      loyalty: 55, courage: 72, wisdom: 40, righteousness: 60,
      freedom: 25, tenacity: 82, adaptability: 20, benevolence: 30,
      ambition: 78, charisma: 35,
    },
  },
  {
    id: "dai_zong",
    name: "戴宗",
    nickname: "神行太保",
    archetype: "机敏务实型执行者",
    tags: ["机敏", "务实", "执行", "快速"],
    scores: {
      loyalty: 65, courage: 50, wisdom: 60, righteousness: 50,
      freedom: 40, tenacity: 45, adaptability: 70, benevolence: 45,
      ambition: 40, charisma: 45,
    },
  },
  {
    id: "li_kui",
    name: "李逵",
    nickname: "黑旋风",
    archetype: "粗犷直率型猛将",
    tags: ["粗犷", "直率", "忠义", "冲动"],
    scores: {
      loyalty: 85, courage: 95, wisdom: 10, righteousness: 50,
      freedom: 65, tenacity: 70, adaptability: 10, benevolence: 25,
      ambition: 20, charisma: 45,
    },
  },
  {
    id: "shi_jin",
    name: "史进",
    nickname: "九纹龙",
    archetype: "热血少年型好汉",
    tags: ["热血", "少年", "好武", "单纯"],
    scores: {
      loyalty: 72, courage: 78, wisdom: 25, righteousness: 60,
      freedom: 60, tenacity: 55, adaptability: 35, benevolence: 50,
      ambition: 40, charisma: 40,
    },
  },
  {
    id: "shi_xiu",
    name: "石秀",
    nickname: "拼命三郎",
    archetype: "精明果敢型行动者",
    tags: ["精明", "果敢", "拼命", "敏锐"],
    scores: {
      loyalty: 70, courage: 82, wisdom: 65, righteousness: 55,
      freedom: 45, tenacity: 78, adaptability: 60, benevolence: 30,
      ambition: 50, charisma: 35,
    },
  },
  {
    id: "yan_qing",
    name: "燕青",
    nickname: "浪子",
    archetype: "聪慧灵动型浪子",
    tags: ["聪慧", "灵动", "多才", "忠心"],
    scores: {
      loyalty: 80, courage: 55, wisdom: 75, righteousness: 55,
      freedom: 70, tenacity: 40, adaptability: 85, benevolence: 55,
      ambition: 25, charisma: 78,
    },
  },
  {
    id: "zhang_shun",
    name: "张顺",
    nickname: "浪里白条",
    archetype: "水上豪杰型义士",
    tags: ["勇猛", "义气", "水战", "信义"],
    scores: {
      loyalty: 78, courage: 80, wisdom: 35, righteousness: 65,
      freedom: 45, tenacity: 72, adaptability: 40, benevolence: 50,
      ambition: 35, charisma: 45,
    },
  },
  {
    id: "ruan_xiaoqi",
    name: "阮小七",
    nickname: "活阎罗",
    archetype: "豪放不羁型渔民",
    tags: ["豪放", "不羁", "江湖", "自在"],
    scores: {
      loyalty: 60, courage: 80, wisdom: 25, righteousness: 45,
      freedom: 90, tenacity: 55, adaptability: 50, benevolence: 40,
      ambition: 15, charisma: 40,
    },
  },
  {
    id: "zhu_tong",
    name: "朱仝",
    nickname: "美髯公",
    archetype: "仁义温和型义士",
    tags: ["仁义", "温和", "重情", "体面"],
    scores: {
      loyalty: 82, courage: 60, wisdom: 45, righteousness: 75,
      freedom: 35, tenacity: 50, adaptability: 40, benevolence: 78,
      ambition: 25, charisma: 55,
    },
  },
  {
    id: "li_jun",
    name: "李俊",
    nickname: "混江龙",
    archetype: "自主独立型水上首领",
    tags: ["自主", "独立", "远见", "开拓"],
    scores: {
      loyalty: 50, courage: 72, wisdom: 65, righteousness: 45,
      freedom: 78, tenacity: 65, adaptability: 70, benevolence: 35,
      ambition: 80, charisma: 60,
    },
  },
  {
    id: "lei_heng",
    name: "雷横",
    nickname: "插翅虎",
    archetype: "正直勇猛型都头",
    tags: ["正直", "勇猛", "讲理", "忠义"],
    scores: {
      loyalty: 75, courage: 72, wisdom: 35, righteousness: 70,
      freedom: 30, tenacity: 60, adaptability: 30, benevolence: 55,
      ambition: 35, charisma: 40,
    },
  },
  {
    id: "shi_qian",
    name: "时迁",
    nickname: "鼓上蚤",
    archetype: "灵活机巧型奇才",
    tags: ["灵活", "机巧", "非常规", "实用"],
    scores: {
      loyalty: 50, courage: 45, wisdom: 60, righteousness: 30,
      freedom: 75, tenacity: 40, adaptability: 90, benevolence: 25,
      ambition: 35, charisma: 30,
    },
  },
];

const QUESTIONS = [
  // ===== 模块一：处事抉择 (q001-q010) =====
  {
    id: "q001", module: "处事抉择",
    text: "团队遇到一个高风险但高回报的机会，你通常会怎么做？",
    options: [
      { key: "A", text: "先评估风险，确认可控再行动", weights: { courage: -3, wisdom: 2, adaptability: 1 } },
      { key: "B", text: "机不可失，先抢占位置再调整", weights: { courage: 4, ambition: 2, tenacity: 1 } },
      { key: "C", text: "召集伙伴一起商量，共同决定", weights: { charisma: 2, benevolence: 2, loyalty: 1 } },
      { key: "D", text: "分析背后利益，判断值不值得出手", weights: { wisdom: 2, adaptability: 3, ambition: 1 } },
    ],
  },
  {
    id: "q002", module: "处事抉择",
    text: "当你发现原计划已经很难成功时，你会：",
    options: [
      { key: "A", text: "咬牙坚持，不能轻易放弃", weights: { tenacity: 4, righteousness: 1, loyalty: 1 } },
      { key: "B", text: "立刻调整方案，结果比面子重要", weights: { adaptability: 4, wisdom: 2, freedom: 1 } },
      { key: "C", text: "稳住大家情绪，再慢慢想办法", weights: { benevolence: 3, charisma: 2, loyalty: 1 } },
      { key: "D", text: "暂时蛰伏，等待更好的时机", weights: { wisdom: 2, tenacity: 1, adaptability: 2 } },
    ],
  },
  {
    id: "q003", module: "处事抉择",
    text: "面对不熟悉的新领域，你更可能：",
    options: [
      { key: "A", text: "直接上手，在实践中摸索", weights: { courage: 3, freedom: 2, tenacity: 1 } },
      { key: "B", text: "找有经验的人请教，理清思路", weights: { wisdom: 3, benevolence: 1, loyalty: 1 } },
      { key: "C", text: "判断它能否带来实际收益", weights: { ambition: 2, adaptability: 2, wisdom: 1 } },
      { key: "D", text: "先观察别人怎么做的再切入", weights: { wisdom: 2, courage: -2, adaptability: 1 } },
    ],
  },
  {
    id: "q004", module: "处事抉择",
    text: "如果你有一次孤注一掷的机会，你会：",
    options: [
      { key: "A", text: "看准了就敢赌，不犹豫", weights: { courage: 4, tenacity: 2, ambition: 1 } },
      { key: "B", text: "会考虑这会不会牵连身边人", weights: { benevolence: 3, loyalty: 2, righteousness: 1 } },
      { key: "C", text: "先想好退路，再做决定", weights: { adaptability: 3, wisdom: 2, courage: -1 } },
      { key: "D", text: "除非别无选择，否则不会押上全部", weights: { wisdom: 2, courage: -3, tenacity: -1 } },
    ],
  },
  {
    id: "q005", module: "处事抉择",
    text: "你更欣赏哪种做事方式？",
    options: [
      { key: "A", text: "稳扎稳打，靠长期积累取胜", weights: { tenacity: 3, wisdom: 2, loyalty: 1 } },
      { key: "B", text: "出奇制胜，一战改变局面", weights: { courage: 3, adaptability: 2, ambition: 1 } },
      { key: "C", text: "众人同心，一起把事情做成", weights: { charisma: 3, benevolence: 2, loyalty: 1 } },
      { key: "D", text: "精准算计，用最小代价赢", weights: { wisdom: 3, adaptability: 2, ambition: 1 } },
    ],
  },
  {
    id: "q006", module: "处事抉择",
    text: "做重要决定时，你最看重什么？",
    options: [
      { key: "A", text: "是否符合自己的原则", weights: { righteousness: 4, tenacity: 1, loyalty: 1 } },
      { key: "B", text: "能否实现目标", weights: { ambition: 4, adaptability: 1, courage: 1 } },
      { key: "C", text: "是否留有余地", weights: { adaptability: 3, wisdom: 1, freedom: 1 } },
      { key: "D", text: "是否对关系有利", weights: { benevolence: 3, loyalty: 2, charisma: 1 } },
    ],
  },
  {
    id: "q007", module: "处事抉择",
    text: "如果一件事手段不漂亮但结果很好，你怎么看？",
    options: [
      { key: "A", text: "底线不能破，否则赢了也不稳", weights: { righteousness: 4, loyalty: 1, tenacity: 1 } },
      { key: "B", text: "结果最重要，过程可以妥协", weights: { adaptability: 3, ambition: 2, wisdom: 1 } },
      { key: "C", text: "只要不伤无辜，可以接受", weights: { benevolence: 2, adaptability: 2, righteousness: 1 } },
      { key: "D", text: "看具体代价，不能一概而论", weights: { wisdom: 3, adaptability: 1, tenacity: -1 } },
    ],
  },
  {
    id: "q008", module: "处事抉择",
    text: "你如何看待规则？",
    options: [
      { key: "A", text: "规则是秩序的基础，应该遵守", weights: { righteousness: 3, loyalty: 2, tenacity: 1 } },
      { key: "B", text: "规则可以变通，关键是目的", weights: { adaptability: 4, freedom: 1, ambition: 1 } },
      { key: "C", text: "不公平的规则就该打破", weights: { courage: 3, righteousness: 2, freedom: 1 } },
      { key: "D", text: "规则是工具，看你怎么用", weights: { wisdom: 3, adaptability: 2, ambition: 1 } },
    ],
  },
  {
    id: "q009", module: "处事抉择",
    text: "当你需要说服别人时，你通常：",
    options: [
      { key: "A", text: "用感情和义气打动对方", weights: { benevolence: 3, charisma: 2, loyalty: 1 } },
      { key: "B", text: "摆事实讲道理，用逻辑说服", weights: { wisdom: 3, righteousness: 1, tenacity: 1 } },
      { key: "C", text: "找到对方弱点，精准突破", weights: { wisdom: 2, adaptability: 3, ambition: 1 } },
      { key: "D", text: "先做出来再说，结果最有说服力", weights: { courage: 3, tenacity: 1, ambition: 1 } },
    ],
  },
  {
    id: "q010", module: "处事抉择",
    text: "你更愿意选择哪种人生路径？",
    options: [
      { key: "A", text: "靠专业能力被长期信任", weights: { wisdom: 2, tenacity: 2, loyalty: 1 } },
      { key: "B", text: "靠关键机会一举成名", weights: { courage: 3, ambition: 3, freedom: 1 } },
      { key: "C", text: "靠凝聚人心稳步扩张", weights: { charisma: 3, benevolence: 2, loyalty: 1 } },
      { key: "D", text: "从底层慢慢积累，最终逆袭", weights: { tenacity: 3, ambition: 2, courage: 1 } },
    ],
  },
  // ===== 模块二：危机应对 (q011-q020) =====
  {
    id: "q011", module: "危机应对",
    text: "当形势突然恶化时，你的第一反应是：",
    options: [
      { key: "A", text: "冷静分析，找到关键变量", weights: { wisdom: 4, tenacity: 1, courage: -1 } },
      { key: "B", text: "先稳住阵脚，保护身边的人", weights: { benevolence: 3, loyalty: 2, charisma: 1 } },
      { key: "C", text: "迎难而上，用行动打破僵局", weights: { courage: 4, tenacity: 2, ambition: 1 } },
      { key: "D", text: "寻找退路，先保证安全", weights: { adaptability: 3, wisdom: 1, freedom: 1 } },
    ],
  },
  {
    id: "q012", module: "危机应对",
    text: "如果你被逼到绝境，你会：",
    options: [
      { key: "A", text: "拼了，反正没有退路", weights: { courage: 4, tenacity: 3, freedom: 1 } },
      { key: "B", text: "寻找对方破绽，以退为进", weights: { wisdom: 3, adaptability: 2, tenacity: 1 } },
      { key: "C", text: "向信任的人求助", weights: { loyalty: 3, benevolence: 2, charisma: 1 } },
      { key: "D", text: "暂时隐忍，等待翻盘时机", weights: { tenacity: 3, wisdom: 2, adaptability: 1 } },
    ],
  },
  {
    id: "q013", module: "危机应对",
    text: "团队士气低落时，你会：",
    options: [
      { key: "A", text: "站出来鼓舞大家，把话说重", weights: { charisma: 3, courage: 2, ambition: 1 } },
      { key: "B", text: "先找一个小胜利恢复信心", weights: { wisdom: 3, charisma: 1, tenacity: 1 } },
      { key: "C", text: "安抚大家，重建信任", weights: { benevolence: 4, loyalty: 1, charisma: 1 } },
      { key: "D", text: "分析问题，给出可行方案", weights: { wisdom: 3, adaptability: 1, tenacity: 1 } },
    ],
  },
  {
    id: "q014", module: "危机应对",
    text: "当你的判断被证明是错误的时候，你会：",
    options: [
      { key: "A", text: "立刻承认，快速调整", weights: { adaptability: 3, wisdom: 2, freedom: 1 } },
      { key: "B", text: "分析哪里出了问题，避免再犯", weights: { wisdom: 3, tenacity: 2, righteousness: 1 } },
      { key: "C", text: "很难接受，但会硬扛到底", weights: { tenacity: 4, courage: 1, ambition: 1 } },
      { key: "D", text: "想办法挽回，不让别人看笑话", weights: { ambition: 3, charisma: 1, courage: 1 } },
    ],
  },
  {
    id: "q015", module: "危机应对",
    text: "面对比你强大得多的对手，你会：",
    options: [
      { key: "A", text: "正面硬刚，不惧强权", weights: { courage: 4, tenacity: 2, righteousness: 1 } },
      { key: "B", text: "用智慧周旋，寻找破绽", weights: { wisdom: 4, adaptability: 2, tenacity: 1 } },
      { key: "C", text: "联合其他人一起对抗", weights: { charisma: 3, loyalty: 2, benevolence: 1 } },
      { key: "D", text: "先退一步，保存实力", weights: { adaptability: 3, wisdom: 1, tenacity: 1 } },
    ],
  },
  {
    id: "q016", module: "危机应对",
    text: "你最怕在危机中遇到什么？",
    options: [
      { key: "A", text: "身边人背叛", weights: { loyalty: 4, benevolence: 1, righteousness: 1 } },
      { key: "B", text: "信息不足，无法判断", weights: { wisdom: 4, adaptability: 1, ambition: 1 } },
      { key: "C", text: "无法行动，被困住", weights: { freedom: 3, courage: 2, tenacity: 1 } },
      { key: "D", text: "失去控制权", weights: { ambition: 4, charisma: 1, tenacity: 1 } },
    ],
  },
  {
    id: "q017", module: "危机应对",
    text: "当需要快速做出重大决定时，你依靠：",
    options: [
      { key: "A", text: "直觉和胆识", weights: { courage: 3, tenacity: 2, freedom: 1 } },
      { key: "B", text: "经验和判断力", weights: { wisdom: 3, tenacity: 1, adaptability: 1 } },
      { key: "C", text: "伙伴的建议", weights: { loyalty: 3, benevolence: 1, charisma: 1 } },
      { key: "D", text: "对局势的冷静分析", weights: { wisdom: 3, adaptability: 2, ambition: 1 } },
    ],
  },
  {
    id: "q018", module: "危机应对",
    text: "如果必须牺牲小部分利益来换整体稳定，你会：",
    options: [
      { key: "A", text: "接受，大局为重", weights: { wisdom: 2, charisma: 2, adaptability: 1 } },
      { key: "B", text: "反对，不能轻易牺牲任何人", weights: { benevolence: 4, righteousness: 2, loyalty: 1 } },
      { key: "C", text: "接受，但要给出补偿", weights: { benevolence: 2, adaptability: 2, charisma: 1 } },
      { key: "D", text: "看自己是否属于被牺牲的一方", weights: { ambition: 3, adaptability: 1, freedom: 1 } },
    ],
  },
  {
    id: "q019", module: "危机应对",
    text: "遇到不公平对待时，你通常会：",
    options: [
      { key: "A", text: "当场反抗，绝不忍气吞声", weights: { courage: 4, righteousness: 2, tenacity: 1 } },
      { key: "B", text: "先忍耐，找机会翻盘", weights: { tenacity: 3, wisdom: 2, adaptability: 1 } },
      { key: "C", text: "寻求盟友支持，一起争取", weights: { charisma: 3, loyalty: 1, benevolence: 1 } },
      { key: "D", text: "利用规则漏洞反制", weights: { adaptability: 3, wisdom: 2, ambition: 1 } },
    ],
  },
  {
    id: "q020", module: "危机应对",
    text: "你最不能接受的失败原因是：",
    options: [
      { key: "A", text: "背叛了自己的原则", weights: { righteousness: 4, loyalty: 1, tenacity: 1 } },
      { key: "B", text: "没有发挥出全部实力", weights: { courage: 3, tenacity: 2, ambition: 1 } },
      { key: "C", text: "判断失误", weights: { wisdom: 4, ambition: 1, adaptability: 1 } },
      { key: "D", text: "没有人支持我", weights: { loyalty: 2, charisma: 2, benevolence: 1 } },
    ],
  },
  // ===== 模块三：人际关系 (q021-q030) =====
  {
    id: "q021", module: "人际关系",
    text: "朋友遇到麻烦但帮他会影响你的利益，你会：",
    options: [
      { key: "A", text: "能帮就帮，情义不能只看得失", weights: { loyalty: 4, benevolence: 2, righteousness: 1 } },
      { key: "B", text: "先判断会不会把自己拖下水", weights: { adaptability: 3, wisdom: 1, ambition: 1 } },
      { key: "C", text: "帮，但设定边界", weights: { wisdom: 2, loyalty: 1, adaptability: 1 } },
      { key: "D", text: "看这段关系值不值得投入", weights: { wisdom: 2, ambition: 2, adaptability: 1 } },
    ],
  },
  {
    id: "q022", module: "人际关系",
    text: "在一个新团队里，你会优先建立什么？",
    options: [
      { key: "A", text: "信任关系", weights: { loyalty: 3, benevolence: 2, charisma: 1 } },
      { key: "B", text: "权责边界", weights: { righteousness: 2, wisdom: 1, tenacity: 1 } },
      { key: "C", text: "个人影响力", weights: { charisma: 3, ambition: 2, courage: 1 } },
      { key: "D", text: "信息渠道", weights: { wisdom: 3, adaptability: 1, ambition: 1 } },
    ],
  },
  {
    id: "q023", module: "人际关系",
    text: "你和朋友意见冲突时，你通常：",
    options: [
      { key: "A", text: "直接说清楚，不憋着", weights: { courage: 3, righteousness: 1, freedom: 1 } },
      { key: "B", text: "先照顾对方感受", weights: { benevolence: 4, loyalty: 1, charisma: 1 } },
      { key: "C", text: "用事实和逻辑说服对方", weights: { wisdom: 3, righteousness: 1, tenacity: 1 } },
      { key: "D", text: "暂时不争，等时机成熟", weights: { adaptability: 2, tenacity: 1, wisdom: 1 } },
    ],
  },
  {
    id: "q024", module: "人际关系",
    text: "你更愿意追随哪类领导？",
    options: [
      { key: "A", text: "重情义、愿意保护团队的人", weights: { loyalty: 3, benevolence: 2, righteousness: 1 } },
      { key: "B", text: "目标清晰、效率很高的人", weights: { ambition: 3, wisdom: 1, courage: 1 } },
      { key: "C", text: "有远见、会培养人的人", weights: { wisdom: 2, charisma: 2, tenacity: 1 } },
      { key: "D", text: "敢打敢拼、能带大家赢的人", weights: { courage: 3, charisma: 1, ambition: 1 } },
    ],
  },
  {
    id: "q025", module: "人际关系",
    text: "当别人误解你时，你会：",
    options: [
      { key: "A", text: "马上解释清楚", weights: { courage: 2, freedom: 2, charisma: 1 } },
      { key: "B", text: "不急，时间会筛掉误解", weights: { tenacity: 3, wisdom: 1, adaptability: 1 } },
      { key: "C", text: "用后续结果证明自己", weights: { tenacity: 2, wisdom: 2, courage: 1 } },
      { key: "D", text: "看对方是否值得解释", weights: { adaptability: 2, wisdom: 1, ambition: 1 } },
    ],
  },
  {
    id: "q026", module: "人际关系",
    text: "你最看重朋友的什么品质？",
    options: [
      { key: "A", text: "信义，说到做到", weights: { loyalty: 4, righteousness: 2, tenacity: 1 } },
      { key: "B", text: "真诚，没有心机", weights: { benevolence: 3, freedom: 1, righteousness: 1 } },
      { key: "C", text: "聪明，有见地", weights: { wisdom: 3, ambition: 1, adaptability: 1 } },
      { key: "D", text: "有趣，自在不拘", weights: { freedom: 3, benevolence: 1, charisma: 1 } },
    ],
  },
  {
    id: "q027", module: "人际关系",
    text: "你更容易被哪种人打动？",
    options: [
      { key: "A", text: "真诚重情的人", weights: { loyalty: 3, benevolence: 3, righteousness: 1 } },
      { key: "B", text: "聪明通透的人", weights: { wisdom: 3, adaptability: 1, ambition: 1 } },
      { key: "C", text: "勇敢果断的人", weights: { courage: 3, tenacity: 1, ambition: 1 } },
      { key: "D", text: "隐忍强大的人", weights: { tenacity: 3, wisdom: 1, charisma: 1 } },
    ],
  },
  {
    id: "q028", module: "人际关系",
    text: "你如何看待面子？",
    options: [
      { key: "A", text: "很重要，关系和名声都需要维护", weights: { charisma: 2, loyalty: 2, benevolence: 1 } },
      { key: "B", text: "不重要，实际利益更关键", weights: { ambition: 3, adaptability: 1, wisdom: 1 } },
      { key: "C", text: "对外重要，对内可以放下", weights: { adaptability: 3, charisma: 1, wisdom: 1 } },
      { key: "D", text: "适度重要，但不能影响判断", weights: { wisdom: 2, righteousness: 1, tenacity: 1 } },
    ],
  },
  {
    id: "q029", module: "人际关系",
    text: "如果必须和讨厌的人合作，你会：",
    options: [
      { key: "A", text: "公事公办，不带情绪", weights: { wisdom: 2, tenacity: 1, righteousness: 1 } },
      { key: "B", text: "尝试缓和关系，减少内耗", weights: { benevolence: 3, charisma: 1, adaptability: 1 } },
      { key: "C", text: "先判断能从合作中得到什么", weights: { ambition: 3, adaptability: 2, wisdom: 1 } },
      { key: "D", text: "保持距离，只谈目标", weights: { freedom: 2, tenacity: 1, wisdom: 1 } },
    ],
  },
  {
    id: "q030", module: "人际关系",
    text: "你最希望别人如何评价你？",
    options: [
      { key: "A", text: "可靠", weights: { loyalty: 3, righteousness: 1, tenacity: 1 } },
      { key: "B", text: "强大", weights: { courage: 2, ambition: 2, charisma: 1 } },
      { key: "C", text: "有情义", weights: { benevolence: 3, loyalty: 2, charisma: 1 } },
      { key: "D", text: "自由", weights: { freedom: 4, courage: 1, adaptability: 1 } },
    ],
  },
  // ===== 模块四：价值取舍 (q031-q040) =====
  {
    id: "q031", module: "价值取舍",
    text: "你认为最重要的是：",
    options: [
      { key: "A", text: "情义", weights: { loyalty: 4, benevolence: 2, righteousness: 1 } },
      { key: "B", text: "自由", weights: { freedom: 4, courage: 1, adaptability: 1 } },
      { key: "C", text: "成就", weights: { ambition: 4, courage: 1, tenacity: 1 } },
      { key: "D", text: "正道", weights: { righteousness: 4, tenacity: 1, loyalty: 1 } },
    ],
  },
  {
    id: "q032", module: "价值取舍",
    text: "如果必须选一个人生关键词，你会选：",
    options: [
      { key: "A", text: "忠义", weights: { loyalty: 4, righteousness: 2, tenacity: 1 } },
      { key: "B", text: "权变", weights: { adaptability: 4, wisdom: 1, ambition: 1 } },
      { key: "C", text: "突破", weights: { courage: 3, ambition: 2, freedom: 1 } },
      { key: "D", text: "智谋", weights: { wisdom: 4, adaptability: 1, ambition: 1 } },
    ],
  },
  {
    id: "q033", module: "价值取舍",
    text: "你更不能接受别人哪种行为？",
    options: [
      { key: "A", text: "背信弃义", weights: { loyalty: 4, righteousness: 2, tenacity: 1 } },
      { key: "B", text: "愚蠢低效", weights: { wisdom: 2, ambition: 2, courage: 1 } },
      { key: "C", text: "没有担当", weights: { courage: 3, righteousness: 2, tenacity: 1 } },
      { key: "D", text: "虚伪做作", weights: { righteousness: 2, freedom: 2, loyalty: 1 } },
    ],
  },
  {
    id: "q034", module: "价值取舍",
    text: "当理想和现实冲突时，你会：",
    options: [
      { key: "A", text: "尽量守住核心理想", weights: { righteousness: 3, tenacity: 2, loyalty: 1 } },
      { key: "B", text: "调整方式，让理想能落地", weights: { adaptability: 3, wisdom: 2, ambition: 1 } },
      { key: "C", text: "先向现实低头，以后再说", weights: { adaptability: 2, ambition: 1, wisdom: 1 } },
      { key: "D", text: "换一条路，不想被困住", weights: { freedom: 3, courage: 2, tenacity: 1 } },
    ],
  },
  {
    id: "q035", module: "价值取舍",
    text: "你觉得强者的责任是什么？",
    options: [
      { key: "A", text: "保护弱者", weights: { benevolence: 4, righteousness: 2, loyalty: 1 } },
      { key: "B", text: "成就自己", weights: { ambition: 4, freedom: 1, courage: 1 } },
      { key: "C", text: "改变不公", weights: { righteousness: 3, courage: 2, tenacity: 1 } },
      { key: "D", text: "维护秩序", weights: { wisdom: 2, charisma: 2, righteousness: 1 } },
    ],
  },
  {
    id: "q036", module: "价值取舍",
    text: "你如何看待隐忍？",
    options: [
      { key: "A", text: "有时是成熟的表现", weights: { wisdom: 3, tenacity: 1, adaptability: 1 } },
      { key: "B", text: "只要目标值得，就能忍", weights: { tenacity: 3, ambition: 2, wisdom: 1 } },
      { key: "C", text: "太憋屈，不如直接解决", weights: { courage: 3, freedom: 2, tenacity: -1 } },
      { key: "D", text: "要看对象，有些人不值得忍", weights: { righteousness: 2, adaptability: 1, ambition: 1 } },
    ],
  },
  {
    id: "q037", module: "价值取舍",
    text: "如果你身处乱世，最想守住什么？",
    options: [
      { key: "A", text: "身边人的安全", weights: { benevolence: 4, loyalty: 2, charisma: 1 } },
      { key: "B", text: "自己的理想和名节", weights: { righteousness: 3, tenacity: 2, loyalty: 1 } },
      { key: "C", text: "活下去并等待机会", weights: { adaptability: 3, wisdom: 1, tenacity: 1 } },
      { key: "D", text: "自由，不想被任何人控制", weights: { freedom: 4, courage: 1, tenacity: 1 } },
    ],
  },
  {
    id: "q038", module: "价值取舍",
    text: "你更愿意接受哪种结局？",
    options: [
      { key: "A", text: "没有站到最高处，但问心无愧", weights: { righteousness: 3, loyalty: 2, benevolence: 1 } },
      { key: "B", text: "隐忍多年，最后掌握局面", weights: { tenacity: 3, wisdom: 2, ambition: 1 } },
      { key: "C", text: "经历很多争议，但完成大事", weights: { ambition: 3, adaptability: 2, courage: 1 } },
      { key: "D", text: "灿烂一时，即使代价很高", weights: { courage: 3, freedom: 2, tenacity: 1 } },
    ],
  },
  {
    id: "q039", module: "价值取舍",
    text: "你更想拥有哪种能力？",
    options: [
      { key: "A", text: "统领众人", weights: { charisma: 3, ambition: 2, courage: 1 } },
      { key: "B", text: "洞察人心", weights: { wisdom: 3, adaptability: 1, benevolence: 1 } },
      { key: "C", text: "临场破局", weights: { courage: 3, adaptability: 2, tenacity: 1 } },
      { key: "D", text: "长期布局", weights: { wisdom: 2, tenacity: 2, ambition: 1 } },
    ],
  },
  {
    id: "q040", module: "价值取舍",
    text: "你觉得自己更像哪类人？",
    options: [
      { key: "A", text: "为信念而活的人", weights: { righteousness: 3, tenacity: 2, loyalty: 1 } },
      { key: "B", text: "为自由而活的人", weights: { freedom: 4, courage: 1, adaptability: 1 } },
      { key: "C", text: "为成就而活的人", weights: { ambition: 4, tenacity: 1, courage: 1 } },
      { key: "D", text: "为情义而活的人", weights: { loyalty: 3, benevolence: 2, charisma: 1 } },
    ],
  },
  // ===== 模块五：自我认知 (q041-q050) =====
  {
    id: "q041", module: "自我认知",
    text: "你更适合在团队里扮演：",
    options: [
      { key: "A", text: "头领，负责方向和凝聚", weights: { charisma: 4, benevolence: 1, ambition: 1 } },
      { key: "B", text: "军师，负责判断和布局", weights: { wisdom: 4, adaptability: 1, ambition: 1 } },
      { key: "C", text: "猛将，负责突破和执行", weights: { courage: 4, tenacity: 1, freedom: 1 } },
      { key: "D", text: "联络人，负责协调和谈判", weights: { adaptability: 2, charisma: 2, benevolence: 1 } },
    ],
  },
  {
    id: "q042", module: "自我认知",
    text: "你生气时通常：",
    options: [
      { key: "A", text: "直接表现出来", weights: { courage: 2, freedom: 2, tenacity: 1 } },
      { key: "B", text: "尽量控制，之后再处理", weights: { wisdom: 2, tenacity: 1, adaptability: 1 } },
      { key: "C", text: "冷处理，让对方自己意识到", weights: { adaptability: 2, wisdom: 1, charisma: 1 } },
      { key: "D", text: "转化成行动，先解决问题", weights: { tenacity: 2, courage: 1, wisdom: 1 } },
    ],
  },
  {
    id: "q043", module: "自我认知",
    text: "当你获得很大成功时，你会：",
    options: [
      { key: "A", text: "克制一点，避免招人嫉妒", weights: { wisdom: 2, adaptability: 1, tenacity: 1 } },
      { key: "B", text: "大方庆祝，成功就该被看见", weights: { courage: 2, freedom: 2, charisma: 1 } },
      { key: "C", text: "感谢伙伴和支持者", weights: { loyalty: 2, benevolence: 2, charisma: 1 } },
      { key: "D", text: "立刻思考下一步", weights: { ambition: 3, tenacity: 1, wisdom: 1 } },
    ],
  },
  {
    id: "q044", module: "自我认知",
    text: "你更像哪种表达方式？",
    options: [
      { key: "A", text: "情绪鲜明，喜欢有话直说", weights: { courage: 2, freedom: 2, tenacity: 1 } },
      { key: "B", text: "话不多，但每句都经过考虑", weights: { wisdom: 3, tenacity: 1, righteousness: 1 } },
      { key: "C", text: "温和沟通，尽量让人舒服", weights: { benevolence: 3, charisma: 1, loyalty: 1 } },
      { key: "D", text: "说话有策略，看对象调整", weights: { adaptability: 3, wisdom: 1, ambition: 1 } },
    ],
  },
  {
    id: "q045", module: "自我认知",
    text: "当你发现自己不如别人时，你会：",
    options: [
      { key: "A", text: "默默学习，追上去", weights: { tenacity: 3, wisdom: 2, ambition: 1 } },
      { key: "B", text: "不服气，想正面赢回来", weights: { courage: 3, ambition: 2, tenacity: 1 } },
      { key: "C", text: "接受差距，但争取合作", weights: { benevolence: 2, adaptability: 1, charisma: 1 } },
      { key: "D", text: "找自己的优势赛道", weights: { adaptability: 3, wisdom: 1, freedom: 1 } },
    ],
  },
  {
    id: "q046", module: "自我认知",
    text: "你面对长期目标时：",
    options: [
      { key: "A", text: "可以持续投入，慢慢推进", weights: { tenacity: 3, wisdom: 1, loyalty: 1 } },
      { key: "B", text: "需要阶段性成果维持动力", weights: { ambition: 2, courage: 1, charisma: 1 } },
      { key: "C", text: "如果看不到回报会及时止损", weights: { adaptability: 3, ambition: 1, wisdom: 1 } },
      { key: "D", text: "会不断调整路线", weights: { adaptability: 3, freedom: 1, wisdom: 1 } },
    ],
  },
  {
    id: "q047", module: "自我认知",
    text: "你更希望自己成为：",
    options: [
      { key: "A", text: "被人信任的人", weights: { loyalty: 3, righteousness: 1, benevolence: 1 } },
      { key: "B", text: "被人敬畏的人", weights: { ambition: 3, courage: 1, charisma: 1 } },
      { key: "C", text: "被人理解的人", weights: { benevolence: 2, freedom: 2, charisma: 1 } },
      { key: "D", text: "被人需要的人", weights: { benevolence: 2, charisma: 2, loyalty: 1 } },
    ],
  },
  {
    id: "q048", module: "自我认知",
    text: "如果你没有正式权力，你会如何影响局面？",
    options: [
      { key: "A", text: "靠专业能力让别人信服", weights: { wisdom: 3, tenacity: 1, righteousness: 1 } },
      { key: "B", text: "靠行动力先做出成果", weights: { courage: 3, tenacity: 1, ambition: 1 } },
      { key: "C", text: "靠关系和沟通形成联盟", weights: { charisma: 3, benevolence: 1, loyalty: 1 } },
      { key: "D", text: "靠信息差找到关键支点", weights: { adaptability: 3, wisdom: 1, ambition: 1 } },
    ],
  },
  {
    id: "q049", module: "自我认知",
    text: "你觉得自己最大的特点是：",
    options: [
      { key: "A", text: "能扛事", weights: { tenacity: 3, loyalty: 1, courage: 1 } },
      { key: "B", text: "想得深", weights: { wisdom: 3, adaptability: 1, ambition: 1 } },
      { key: "C", text: "够义气", weights: { loyalty: 3, benevolence: 2, righteousness: 1 } },
      { key: "D", text: "不受拘束", weights: { freedom: 4, courage: 1, adaptability: 1 } },
    ],
  },
  {
    id: "q050", module: "自我认知",
    text: "你面对压力时更倾向于：",
    options: [
      { key: "A", text: "独处消化，自己扛过去", weights: { tenacity: 3, freedom: 1, wisdom: 1 } },
      { key: "B", text: "找朋友倾诉，分担一下", weights: { loyalty: 2, benevolence: 2, charisma: 1 } },
      { key: "C", text: "化压力为行动力", weights: { courage: 3, tenacity: 1, ambition: 1 } },
      { key: "D", text: "理性分析，制定对策", weights: { wisdom: 3, adaptability: 1, tenacity: 1 } },
    ],
  },
  // ===== 模块六：江湖态度 (q051-q060) =====
  {
    id: "q051", module: "江湖态度",
    text: "如果你是梁山好汉，你最想做什么位置？",
    options: [
      { key: "A", text: "头把交椅，统领全局", weights: { charisma: 4, ambition: 2, courage: 1 } },
      { key: "B", text: "军师位，出谋划策", weights: { wisdom: 4, adaptability: 1, ambition: 1 } },
      { key: "C", text: "先锋位，冲锋陷阵", weights: { courage: 4, tenacity: 1, freedom: 1 } },
      { key: "D", text: "自由身，不受束缚", weights: { freedom: 4, courage: 1, adaptability: 1 } },
    ],
  },
  {
    id: "q052", module: "江湖态度",
    text: "路遇不平之事，你会：",
    options: [
      { key: "A", text: "立刻出手相助", weights: { courage: 4, righteousness: 3, tenacity: 1 } },
      { key: "B", text: "先了解清楚情况再决定", weights: { wisdom: 3, adaptability: 1, righteousness: 1 } },
      { key: "C", text: "看看有没有其他人先出手", weights: { adaptability: 2, wisdom: 1, courage: -1 } },
      { key: "D", text: "用自己的方式暗中帮忙", weights: { adaptability: 2, benevolence: 2, freedom: 1 } },
    ],
  },
  {
    id: "q053", module: "江湖态度",
    text: "你如何看待招安（接受体制收编）？",
    options: [
      { key: "A", text: "可以接受，正统之路更稳", weights: { loyalty: 2, righteousness: 2, wisdom: 1 } },
      { key: "B", text: "绝不接受，自由比什么都重要", weights: { freedom: 4, courage: 1, tenacity: 1 } },
      { key: "C", text: "看条件，如果对兄弟们好就行", weights: { benevolence: 3, charisma: 1, adaptability: 1 } },
      { key: "D", text: "可以利用，但保持独立", weights: { adaptability: 3, ambition: 2, wisdom: 1 } },
    ],
  },
  {
    id: "q054", module: "江湖态度",
    text: "梁山聚义，你觉得最吸引你的是：",
    options: [
      { key: "A", text: "兄弟情深，有归属感", weights: { loyalty: 3, benevolence: 2, charisma: 1 } },
      { key: "B", text: "大碗喝酒大块吃肉，痛快", weights: { freedom: 3, courage: 2, tenacity: 1 } },
      { key: "C", text: "能做一番事业", weights: { ambition: 4, charisma: 1, tenacity: 1 } },
      { key: "D", text: "远离世俗规矩，按自己的方式活", weights: { freedom: 4, adaptability: 1, courage: 1 } },
    ],
  },
  {
    id: "q055", module: "江湖态度",
    text: "如果你和兄弟意见严重分歧，你会：",
    options: [
      { key: "A", text: "各走各路，但不会反目", weights: { freedom: 2, loyalty: 2, righteousness: 1 } },
      { key: "B", text: "忍让一步，维护兄弟情分", weights: { loyalty: 4, benevolence: 1, tenacity: 1 } },
      { key: "C", text: "据理力争，对事不对人", weights: { righteousness: 3, courage: 1, tenacity: 1 } },
      { key: "D", text: "找折中方案，避免决裂", weights: { adaptability: 3, charisma: 1, wisdom: 1 } },
    ],
  },
  {
    id: "q056", module: "江湖态度",
    text: "你更欣赏哪种江湖人物？",
    options: [
      { key: "A", text: "义薄云天、说到做到的人", weights: { loyalty: 3, righteousness: 2, tenacity: 1 } },
      { key: "B", text: "足智多谋、运筹帷幄的人", weights: { wisdom: 3, adaptability: 1, ambition: 1 } },
      { key: "C", text: "豪放不羁、不拘小节的人", weights: { freedom: 3, courage: 2, benevolence: 1 } },
      { key: "D", text: "心狠手辣、不择手段的人", weights: { ambition: 3, adaptability: 1, courage: 1 } },
    ],
  },
  {
    id: "q057", module: "江湖态度",
    text: "你觉得江湖最重要的规矩是什么？",
    options: [
      { key: "A", text: "义气，兄弟如手足", weights: { loyalty: 4, benevolence: 1, charisma: 1 } },
      { key: "B", text: "信用，说到做到", weights: { righteousness: 3, loyalty: 2, tenacity: 1 } },
      { key: "C", text: "实力，拳头大才是硬道理", weights: { courage: 3, ambition: 2, tenacity: 1 } },
      { key: "D", text: "没有规矩，自己说了算", weights: { freedom: 4, courage: 1, adaptability: 1 } },
    ],
  },
  {
    id: "q058", module: "江湖态度",
    text: "如果你在江湖中遇到强敌，你的策略是：",
    options: [
      { key: "A", text: "正面硬碰硬，不惧任何对手", weights: { courage: 4, tenacity: 2, freedom: 1 } },
      { key: "B", text: "智取，用谋略弥补实力差距", weights: { wisdom: 4, adaptability: 1, tenacity: 1 } },
      { key: "C", text: "找帮手，不一个人扛", weights: { charisma: 3, loyalty: 1, benevolence: 1 } },
      { key: "D", text: "避其锋芒，择机而动", weights: { adaptability: 3, wisdom: 1, tenacity: 1 } },
    ],
  },
  {
    id: "q059", module: "江湖态度",
    text: "你如何看待梁山好汉最终的结局？",
    options: [
      { key: "A", text: "悲壮但值得，忠义不能丢", weights: { loyalty: 3, righteousness: 2, tenacity: 1 } },
      { key: "B", text: "不该招安，应该一直自由", weights: { freedom: 4, courage: 1, tenacity: 1 } },
      { key: "C", text: "可惜了，如果换一种策略可能不同", weights: { wisdom: 3, adaptability: 2, ambition: 1 } },
      { key: "D", text: "人生如此，至少曾经一起拼过", weights: { benevolence: 2, loyalty: 1, tenacity: 1 } },
    ],
  },
  {
    id: "q060", module: "江湖态度",
    text: "如果给你一个水浒身份，你最想成为：",
    options: [
      { key: "A", text: "聚义堂上的首领", weights: { charisma: 3, ambition: 2, loyalty: 1 } },
      { key: "B", text: "幕后的军师", weights: { wisdom: 3, adaptability: 2, ambition: 1 } },
      { key: "C", text: "冲锋陷阵的猛将", weights: { courage: 4, tenacity: 1, freedom: 1 } },
      { key: "D", text: "行走江湖的浪子", weights: { freedom: 4, adaptability: 1, courage: 1 } },
    ],
  },
];

if (typeof window !== "undefined") {
  window.SHUIHU_DATA = { DIMENSIONS, CHARACTERS, QUESTIONS };
}

if (typeof module !== "undefined") {
  module.exports = { DIMENSIONS, CHARACTERS, QUESTIONS };
}
