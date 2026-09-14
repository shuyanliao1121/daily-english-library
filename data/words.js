const words = [
  {
    "w": "proxy",
    "zh": "代理指标",
    "type": "vocab",
    "ex": "When something is difficult to measure, people often rely on a proxy.",
    "src": "#35"
  },
  {
    "w": "metric",
    "zh": "衡量指标",
    "type": "academic",
    "ex": "A metric is a quantitative measure used to track performance.",
    "src": "#35"
  },
  {
    "w": "distort",
    "zh": "扭曲",
    "type": "vocab",
    "ex": "Poorly designed targets can distort behavior.",
    "src": "#35"
  },
  {
    "w": "productivity",
    "zh": "生产率；工作效率",
    "type": "academic",
    "ex": "Visible activity is not necessarily the same as productivity.",
    "src": "#35"
  },
  {
    "w": "self-fulfilling prophecy",
    "zh": "自我实现预言",
    "type": "academic",
    "ex": "A belief may change behavior in ways that make itself more likely to become true.",
    "src": "#34"
  },
  {
    "w": "credibility",
    "zh": "可信度",
    "type": "vocab",
    "ex": "Central-bank credibility can influence expectations.",
    "src": "#34"
  },
  {
    "w": "amplify",
    "zh": "放大",
    "type": "vocab",
    "ex": "Fear can amplify market movements.",
    "src": "#34"
  },
  {
    "w": "Veblen goods",
    "zh": "凡勃伦商品",
    "type": "academic",
    "ex": "A high price can sometimes contribute to a product's status value.",
    "src": "#33"
  },
  {
    "w": "Thorstein Veblen",
    "zh": "索尔斯坦·凡勃伦",
    "type": "proper",
    "ex": "An economist and sociologist associated with conspicuous consumption.",
    "src": "#33"
  },
  {
    "w": "exclusivity",
    "zh": "排他性；稀缺感",
    "type": "vocab",
    "ex": "Limited supply can create exclusivity.",
    "src": "#33"
  },
  {
    "w": "symbolic value",
    "zh": "象征价值",
    "type": "academic",
    "ex": "Luxury goods can provide symbolic value beyond practical function.",
    "src": "#33"
  },
  {
    "w": "craftsmanship",
    "zh": "工艺；手艺",
    "type": "vocab",
    "ex": "Customers may pay more for craftsmanship.",
    "src": "#33"
  },
  {
    "w": "paradox of thrift",
    "zh": "节俭悖论",
    "type": "academic",
    "ex": "What is prudent for one household can weaken demand if everyone does it at once.",
    "src": "#32"
  },
  {
    "w": "aggregate demand",
    "zh": "总需求",
    "type": "academic",
    "ex": "Weak aggregate demand can reduce employment.",
    "src": "#32"
  },
  {
    "w": "countercyclical",
    "zh": "逆周期的",
    "type": "academic",
    "ex": "Governments sometimes use countercyclical policy.",
    "src": "#32"
  },
  {
    "w": "underlying cause",
    "zh": "根本原因",
    "type": "vocab",
    "ex": "Policy should address the underlying cause.",
    "src": "#31"
  },
  {
    "w": "Federal Reserve",
    "zh": "美国联邦储备系统",
    "type": "proper",
    "ex": "The central bank of the United States.",
    "src": "#31"
  },
  {
    "w": "priced in",
    "zh": "已被市场计价",
    "type": "academic",
    "ex": "Good news may already be priced in.",
    "src": "#30"
  },
  {
    "w": "wealth effect",
    "zh": "财富效应",
    "type": "academic",
    "ex": "Rising asset values can affect consumption through the wealth effect.",
    "src": "#29"
  },
  {
    "w": "liquidity",
    "zh": "流动性",
    "type": "academic",
    "ex": "Investors often prefer liquidity during uncertainty.",
    "src": "#29"
  },
  {
    "w": "pain of paying",
    "zh": "支付痛感",
    "type": "academic",
    "ex": "Payment methods can change the psychological pain of paying.",
    "src": "#28"
  },
  {
    "w": "friction",
    "zh": "摩擦；阻力",
    "type": "vocab",
    "ex": "Useful friction can create a decision point.",
    "src": "#28"
  },
  {
    "w": "incentive",
    "zh": "激励",
    "type": "vocab",
    "ex": "People respond to incentives.",
    "src": "#27"
  },
  {
    "w": "attention economy",
    "zh": "注意力经济",
    "type": "academic",
    "ex": "In the attention economy, human attention is a scarce resource.",
    "src": "#27"
  },
  {
    "w": "scarcity",
    "zh": "稀缺性",
    "type": "academic",
    "ex": "Abundance in one area can create scarcity elsewhere.",
    "src": "#26"
  },
  {
    "w": "Goodhart's Law",
    "zh": "古德哈特定律",
    "type": "proper",
    "ex": "When a measure becomes a target, it can stop being a good measure.",
    "src": "#35"
  },
  {
    "w": "index fund",
    "zh": "指数基金",
    "type": "academic",
    "ex": "An index fund aims to track a market index rather than pick individual winners.",
    "src": "#2"
  },
  {
    "w": "passive investing",
    "zh": "被动投资",
    "type": "academic",
    "ex": "Passive investing usually relies on broad market exposure and low turnover.",
    "src": "#2"
  },
  {
    "w": "diversification",
    "zh": "分散投资；多元化",
    "type": "academic",
    "ex": "Diversification reduces dependence on the performance of a single asset.",
    "src": "#2"
  },
  {
    "w": "expense ratio",
    "zh": "基金费用率",
    "type": "academic",
    "ex": "A lower expense ratio leaves more of the investment return with the investor.",
    "src": "#2"
  },
  {
    "w": "conspicuous consumption",
    "zh": "炫耀性消费",
    "type": "academic",
    "ex": "Conspicuous consumption can turn purchases into signals of social status.",
    "src": "#3"
  },
  {
    "w": "status signal",
    "zh": "地位信号",
    "type": "academic",
    "ex": "A luxury product may function as a status signal as well as a useful object.",
    "src": "#3"
  },
  {
    "w": "attention economy",
    "zh": "注意力经济",
    "type": "academic",
    "ex": "In the attention economy, platforms compete for a limited amount of human focus.",
    "src": "#4"
  },
  {
    "w": "engagement",
    "zh": "参与度；用户互动",
    "type": "vocab",
    "ex": "Platforms often optimize recommendations to increase engagement.",
    "src": "#4"
  },
  {
    "w": "herd behavior",
    "zh": "羊群行为；从众行为",
    "type": "academic",
    "ex": "Herd behavior can amplify price movements during a market bubble.",
    "src": "#5"
  },
  {
    "w": "FOMO",
    "zh": "错失恐惧",
    "type": "academic",
    "ex": "FOMO can push investors to buy after prices have already risen sharply.",
    "src": "#5"
  },
  {
    "w": "overconfidence",
    "zh": "过度自信",
    "type": "academic",
    "ex": "Overconfidence can make investors underestimate uncertainty.",
    "src": "#5"
  },
  {
    "w": "AI agent",
    "zh": "AI智能体",
    "type": "academic",
    "ex": "An AI agent can plan and execute multiple steps toward a goal.",
    "src": "#6"
  },
  {
    "w": "autonomy",
    "zh": "自主性",
    "type": "vocab",
    "ex": "Greater autonomy can make a system more useful but also harder to supervise.",
    "src": "#6"
  },
  {
    "w": "human capital",
    "zh": "人力资本",
    "type": "academic",
    "ex": "Education and health can strengthen a country's human capital.",
    "src": "#7"
  },
  {
    "w": "institution",
    "zh": "制度；机构",
    "type": "academic",
    "ex": "Strong institutions can support investment and long-term economic development.",
    "src": "#7"
  },
  {
    "w": "brain drain",
    "zh": "人才外流",
    "type": "academic",
    "ex": "Brain drain can weaken a country's stock of highly skilled workers.",
    "src": "#7"
  },
  {
    "w": "creator economy",
    "zh": "创作者经济",
    "type": "academic",
    "ex": "The creator economy allows individuals to monetize audiences and digital content.",
    "src": "#8"
  },
  {
    "w": "winner-take-most",
    "zh": "赢家通吃大部分收益的",
    "type": "academic",
    "ex": "Many online markets have a winner-take-most distribution of attention and income.",
    "src": "#8"
  },
  {
    "w": "burnout",
    "zh": "倦怠；职业耗竭",
    "type": "vocab",
    "ex": "Constant pressure to publish can contribute to burnout.",
    "src": "#8"
  },
  {
    "w": "network effect",
    "zh": "网络效应",
    "type": "academic",
    "ex": "A network effect makes a service more valuable as more people join it.",
    "src": "#9"
  },
  {
    "w": "switching cost",
    "zh": "转换成本",
    "type": "academic",
    "ex": "High switching costs can make customers reluctant to move to a competitor.",
    "src": "#9"
  },
  {
    "w": "competitive moat",
    "zh": "竞争护城河",
    "type": "academic",
    "ex": "Strong network effects can create a competitive moat.",
    "src": "#9"
  },
  {
    "w": "opportunity cost",
    "zh": "机会成本",
    "type": "academic",
    "ex": "The opportunity cost of an hour is the best alternative use of that time.",
    "src": "#10"
  },
  {
    "w": "time scarcity",
    "zh": "时间稀缺",
    "type": "academic",
    "ex": "Time scarcity can change how people value convenience.",
    "src": "#10"
  },
  {
    "w": "recurring revenue",
    "zh": "经常性收入；持续性收入",
    "type": "academic",
    "ex": "Subscriptions can provide companies with predictable recurring revenue.",
    "src": "#11"
  },
  {
    "w": "automatic renewal",
    "zh": "自动续订",
    "type": "academic",
    "ex": "Automatic renewal can keep a subscription active without a new decision each month.",
    "src": "#11"
  },
  {
    "w": "upward social comparison",
    "zh": "向上社会比较",
    "type": "academic",
    "ex": "Upward social comparison can motivate people, but constant comparison may reduce life satisfaction.",
    "src": "#12"
  },
  {
    "w": "extrinsic",
    "zh": "外在的；外部驱动的",
    "type": "vocab",
    "ex": "Salary and status are common extrinsic measures of success.",
    "src": "#12"
  },
  {
    "w": "intrinsic",
    "zh": "内在的；内在驱动的",
    "type": "vocab",
    "ex": "Intrinsic motivation can come from curiosity, purpose or enjoyment.",
    "src": "#12"
  },
  {
    "w": "hedonic adaptation",
    "zh": "享乐适应",
    "type": "academic",
    "ex": "Hedonic adaptation can make a major achievement feel normal surprisingly quickly.",
    "src": "#12"
  },
  {
    "w": "information asymmetry",
    "zh": "信息不对称",
    "type": "academic",
    "ex": "A trusted brand can reduce information asymmetry between sellers and buyers.",
    "src": "#13"
  },
  {
    "w": "identity consumption",
    "zh": "身份消费",
    "type": "academic",
    "ex": "Identity consumption describes purchases that express how people see themselves.",
    "src": "#13"
  },
  {
    "w": "premium",
    "zh": "溢价；额外价格",
    "type": "vocab",
    "ex": "Consumers may pay a premium for greater confidence in quality.",
    "src": "#13"
  },
  {
    "w": "selection bias",
    "zh": "选择偏差",
    "type": "academic",
    "ex": "Selection bias can make online reviews unrepresentative of all customers.",
    "src": "#14"
  },
  {
    "w": "information cascade",
    "zh": "信息级联",
    "type": "academic",
    "ex": "An information cascade can occur when people follow earlier choices instead of relying on their own information.",
    "src": "#14"
  },
  {
    "w": "externality",
    "zh": "外部性",
    "type": "academic",
    "ex": "Pollution is a classic negative externality when its cost is not fully reflected in the product price.",
    "src": "#15"
  },
  {
    "w": "supply chain",
    "zh": "供应链",
    "type": "academic",
    "ex": "Fast-fashion companies rely on highly responsive global supply chains.",
    "src": "#15"
  },
  {
    "w": "Buy Now, Pay Later (BNPL)",
    "zh": "先买后付",
    "type": "academic",
    "ex": "BNPL can reduce the immediate psychological impact of a large purchase.",
    "src": "#16"
  },
  {
    "w": "present bias",
    "zh": "当下偏误；现时偏好",
    "type": "academic",
    "ex": "Present bias makes immediate benefits feel more important than future costs.",
    "src": "#16"
  },
  {
    "w": "mental accounting",
    "zh": "心理账户",
    "type": "academic",
    "ex": "Mental accounting can change how the same amount of money feels in different contexts.",
    "src": "#16"
  },
  {
    "w": "retail therapy",
    "zh": "购物疗愈；通过消费调节情绪",
    "type": "academic",
    "ex": "Retail therapy refers to shopping used partly to improve one's mood.",
    "src": "#17"
  },
  {
    "w": "wanting",
    "zh": "想要；欲求动机",
    "type": "academic",
    "ex": "Wanting can remain strong even when the eventual pleasure is limited.",
    "src": "#17"
  },
  {
    "w": "liking",
    "zh": "实际享受；愉悦体验",
    "type": "academic",
    "ex": "Liking describes the pleasure people actually experience from a reward.",
    "src": "#17"
  },
  {
    "w": "loss aversion",
    "zh": "损失厌恶",
    "type": "academic",
    "ex": "Loss aversion can make a loss feel more powerful than an equivalent gain.",
    "src": "#18"
  },
  {
    "w": "sunk cost",
    "zh": "沉没成本",
    "type": "academic",
    "ex": "A sunk cost should not determine a decision when it cannot be recovered.",
    "src": "#18"
  },
  {
    "w": "anticipation",
    "zh": "期待；预期中的愉悦",
    "type": "vocab",
    "ex": "Anticipation can make a holiday enjoyable before it even begins.",
    "src": "#19"
  },
  {
    "w": "affective forecasting",
    "zh": "情感预测",
    "type": "academic",
    "ex": "Affective forecasting is our attempt to predict how future events will make us feel.",
    "src": "#19"
  },
  {
    "w": "mind-wandering",
    "zh": "思维漫游；走神",
    "type": "academic",
    "ex": "Mind-wandering can sometimes support reflection and creative thought.",
    "src": "#20"
  },
  {
    "w": "social proof",
    "zh": "社会证明",
    "type": "academic",
    "ex": "Social proof makes popular choices appear safer when people are uncertain.",
    "src": "#21"
  },
  {
    "w": "positive feedback loop",
    "zh": "正反馈循环",
    "type": "academic",
    "ex": "Popularity can create a positive feedback loop that attracts even more users.",
    "src": "#21"
  },
  {
    "w": "lifestyle inflation",
    "zh": "生活方式膨胀",
    "type": "academic",
    "ex": "Lifestyle inflation can absorb much of a person's salary increase.",
    "src": "#22"
  },
  {
    "w": "reference group",
    "zh": "参照群体",
    "type": "academic",
    "ex": "A person's reference group can change as their income and social environment change.",
    "src": "#22"
  },
  {
    "w": "choice overload",
    "zh": "选择过载",
    "type": "academic",
    "ex": "Choice overload can make decisions slower and less satisfying.",
    "src": "#23"
  },
  {
    "w": "decision fatigue",
    "zh": "决策疲劳",
    "type": "academic",
    "ex": "Too many small choices can contribute to decision fatigue.",
    "src": "#23"
  },
  {
    "w": "zero-price effect",
    "zh": "零价格效应",
    "type": "academic",
    "ex": "The zero-price effect can make a free option unusually attractive.",
    "src": "#24"
  },
  {
    "w": "default effect",
    "zh": "默认效应",
    "type": "academic",
    "ex": "The default effect helps explain why people often remain with preselected options.",
    "src": "#25"
  },
  {
    "w": "inertia",
    "zh": "惰性；维持现状的倾向",
    "type": "vocab",
    "ex": "Consumer inertia can keep unused subscriptions active for months.",
    "src": "#25"
  },
  {
    "w": "complementary skill",
    "zh": "互补性技能",
    "type": "academic",
    "ex": "Complementary skill is a useful concept in the analytical framework from #26.",
    "src": "#26"
  },
  {
    "w": "bottleneck",
    "zh": "瓶颈；限制整体表现的稀缺环节",
    "type": "vocab",
    "ex": "Bottleneck is a useful concept in the analytical framework from #26.",
    "src": "#26"
  },
  {
    "w": "domain knowledge",
    "zh": "领域知识",
    "type": "academic",
    "ex": "Domain knowledge is a useful concept in the analytical framework from #26.",
    "src": "#26"
  },
  {
    "w": "engagement metric",
    "zh": "用户参与度指标",
    "type": "academic",
    "ex": "Engagement metric is a useful concept in the analytical framework from #27.",
    "src": "#27"
  },
  {
    "w": "monetize",
    "zh": "商业化；变现",
    "type": "vocab",
    "ex": "Monetize is a useful concept in the analytical framework from #27.",
    "src": "#27"
  },
  {
    "w": "salience",
    "zh": "显著性",
    "type": "academic",
    "ex": "Salience is a useful concept in the analytical framework from #28.",
    "src": "#28"
  },
  {
    "w": "pain of paying",
    "zh": "支付痛感",
    "type": "academic",
    "ex": "Pain of paying is a useful concept in the analytical framework from #28.",
    "src": "#28"
  },
  {
    "w": "stock variable",
    "zh": "存量变量",
    "type": "academic",
    "ex": "Stock variable is a useful concept in the analytical framework from #29.",
    "src": "#29"
  },
  {
    "w": "flow variable",
    "zh": "流量变量",
    "type": "academic",
    "ex": "Flow variable is a useful concept in the analytical framework from #29.",
    "src": "#29"
  },
  {
    "w": "market expectation",
    "zh": "市场预期",
    "type": "academic",
    "ex": "Market expectation is a useful concept in the analytical framework from #30.",
    "src": "#30"
  },
  {
    "w": "first-order effect",
    "zh": "一阶效应",
    "type": "academic",
    "ex": "First-order effect is a useful concept in the analytical framework from #30.",
    "src": "#30"
  },
  {
    "w": "second-order effect",
    "zh": "二阶效应",
    "type": "academic",
    "ex": "Second-order effect is a useful concept in the analytical framework from #30.",
    "src": "#30"
  },
  {
    "w": "discount rate",
    "zh": "贴现率",
    "type": "academic",
    "ex": "Discount rate is a useful concept in the analytical framework from #31.",
    "src": "#31"
  },
  {
    "w": "monetary easing",
    "zh": "货币宽松",
    "type": "academic",
    "ex": "Monetary easing is a useful concept in the analytical framework from #31.",
    "src": "#31"
  },
  {
    "w": "feedback loop",
    "zh": "反馈循环",
    "type": "academic",
    "ex": "Feedback loop is a useful concept in the analytical framework from #34.",
    "src": "#34"
  },
  {
    "w": "signaling",
    "zh": "信号传递",
    "type": "academic",
    "ex": "Signaling is a useful concept in the analytical framework from #33.",
    "src": "#33"
  },
  {
    "w": "frictionless",
    "zh": "几乎无阻力的；极其便捷的",
    "type": "vocab",
    "ex": "Frictionless is a useful concept from Article #36.",
    "src": "#36"
  },
  {
    "w": "reconsider",
    "zh": "重新考虑",
    "type": "vocab",
    "ex": "Reconsider is a useful concept from Article #36.",
    "src": "#36"
  },
  {
    "w": "consequential",
    "zh": "后果重大的",
    "type": "vocab",
    "ex": "Consequential is a useful concept from Article #36.",
    "src": "#36"
  },
  {
    "w": "irreversible",
    "zh": "不可逆的",
    "type": "vocab",
    "ex": "Irreversible is a useful concept from Article #36.",
    "src": "#36"
  },
  {
    "w": "threshold",
    "zh": "门槛；临界点",
    "type": "vocab",
    "ex": "Threshold is a useful concept from Article #36.",
    "src": "#36"
  },
  {
    "w": "execution friction",
    "zh": "执行摩擦",
    "type": "academic",
    "ex": "Execution friction is a useful concept from Article #36.",
    "src": "#36"
  },
  {
    "w": "decision friction",
    "zh": "决策摩擦",
    "type": "academic",
    "ex": "Decision friction is a useful concept from Article #36.",
    "src": "#36"
  },
  {
    "w": "sludge",
    "zh": "不必要的程序性摩擦",
    "type": "academic",
    "ex": "Sludge is a useful concept from Article #36.",
    "src": "#36"
  }
];


// Imported Article #37
words.push(...[
  {
    "w": "automation bias",
    "zh": "自动化偏误；对自动系统建议给予过高权重的倾向",
    "type": "academic",
    "ex": "Automation bias can make users accept a machine's recommendation without sufficient verification.",
    "src": "#37"
  },
  {
    "w": "overreliance",
    "zh": "过度依赖",
    "type": "vocab",
    "ex": "Overreliance on automated advice can weaken independent judgment.",
    "src": "#37"
  },
  {
    "w": "verification",
    "zh": "核实；验证",
    "type": "vocab",
    "ex": "Important financial claims require independent verification.",
    "src": "#37"
  },
  {
    "w": "benchmark",
    "zh": "基准；比较标准",
    "type": "vocab",
    "ex": "A growth rate is difficult to interpret without a relevant benchmark.",
    "src": "#37"
  },
  {
    "w": "retrieval",
    "zh": "检索；提取（信息）",
    "type": "academic",
    "ex": "Some tasks are information-retrieval problems rather than judgment problems.",
    "src": "#37"
  },
  {
    "w": "competing goals",
    "zh": "相互竞争或冲突的目标",
    "type": "vocab",
    "ex": "Policy decisions often involve competing goals such as efficiency and fairness.",
    "src": "#37"
  },
  {
    "w": "illusion of objectivity",
    "zh": "客观性的幻觉",
    "type": "academic",
    "ex": "A precise numerical score can create an illusion of objectivity.",
    "src": "#37"
  },
  {
    "w": "proxy",
    "zh": "代理指标；用来间接衡量目标的指标",
    "type": "academic",
    "ex": "Response time is only a proxy for service quality.",
    "src": "#37"
  },
  {
    "w": "self-fulfilling",
    "zh": "自我实现的",
    "type": "academic",
    "ex": "Some predictions can become self-fulfilling when people act on them.",
    "src": "#37"
  },
  {
    "w": "inconsistent",
    "zh": "不一致的；前后不稳定的",
    "type": "vocab",
    "ex": "Human decisions can become inconsistent when people are tired.",
    "src": "#37"
  },
  {
    "w": "vulnerable to",
    "zh": "容易受到……影响",
    "type": "vocab",
    "ex": "Both humans and algorithms are vulnerable to different kinds of error.",
    "src": "#37"
  },
  {
    "w": "accountability",
    "zh": "问责；对结果承担责任",
    "type": "academic",
    "ex": "Automation does not remove the need for human accountability.",
    "src": "#37"
  },
  {
    "w": "high-stakes",
    "zh": "高风险、后果重大的",
    "type": "vocab",
    "ex": "High-stakes decisions deserve more careful review.",
    "src": "#37"
  },
  {
    "w": "assumption",
    "zh": "假设；前提",
    "type": "vocab",
    "ex": "The conclusion changes if the underlying assumption is wrong.",
    "src": "#37"
  },
  {
    "w": "fluency",
    "zh": "流畅性；此处指表达顺畅给人的可信感",
    "type": "academic",
    "ex": "Linguistic fluency should not be confused with factual reliability.",
    "src": "#37"
  },
  {
    "w": "scarce capability",
    "zh": "稀缺能力",
    "type": "vocab",
    "ex": "As routine production becomes automated, judgment may become a scarcer capability.",
    "src": "#37"
  },
  {
    "w": "Goodhart's Law",
    "zh": "古德哈特定律",
    "type": "proper",
    "ex": "Goodhart's Law explains why optimizing a proxy can damage the real objective.",
    "src": "#37"
  },
  {
    "w": "decision friction",
    "zh": "决策摩擦",
    "type": "academic",
    "ex": "A small amount of decision friction can improve judgment in consequential situations.",
    "src": "#37"
  }
]);


// Imported Article #38
words.push(...[
  {
    "w": "threshold",
    "zh": "门槛；达到某项优惠或条件所需的界线",
    "type": "vocab",
    "ex": "The retailer offers free delivery once customers reach a $50 threshold.",
    "src": "#38"
  },
  {
    "w": "mental accounting",
    "zh": "心理账户；人们把金钱按用途或来源分开看待的倾向",
    "type": "academic",
    "ex": "Mental accounting can make a shipping fee feel different from an equal increase in product price.",
    "src": "#38"
  },
  {
    "w": "interchangeable",
    "zh": "可互换的",
    "type": "vocab",
    "ex": "Economically, dollars are interchangeable, but people do not always treat them that way.",
    "src": "#38"
  },
  {
    "w": "surcharge",
    "zh": "附加费",
    "type": "vocab",
    "ex": "Customers often react strongly to a surcharge shown at the end of checkout.",
    "src": "#38"
  },
  {
    "w": "salient",
    "zh": "显眼的；在心理上特别突出的",
    "type": "academic",
    "ex": "A separate shipping fee becomes highly salient at checkout.",
    "src": "#38"
  },
  {
    "w": "transaction friction",
    "zh": "交易摩擦；增加完成交易难度或心理成本的障碍",
    "type": "academic",
    "ex": "Shipping charges create transaction friction that may reduce purchases.",
    "src": "#38"
  },
  {
    "w": "reference point",
    "zh": "参照点；人们判断得失时使用的基准",
    "type": "academic",
    "ex": "The free-shipping threshold becomes a new reference point for the shopper.",
    "src": "#38"
  },
  {
    "w": "loss aversion",
    "zh": "损失厌恶；损失带来的痛苦通常强于同等收益的快乐",
    "type": "academic",
    "ex": "Loss aversion can make missing free shipping feel unusually painful.",
    "src": "#38"
  },
  {
    "w": "attainable",
    "zh": "可达到的",
    "type": "vocab",
    "ex": "The target must feel attainable if it is going to influence behavior.",
    "src": "#38"
  },
  {
    "w": "average order value",
    "zh": "平均订单金额；平均客单价",
    "type": "academic",
    "ex": "Free-shipping thresholds are often designed to raise average order value.",
    "src": "#38"
  },
  {
    "w": "margin",
    "zh": "利润空间；毛利",
    "type": "vocab",
    "ex": "Offering free delivery too easily can reduce the retailer's margin.",
    "src": "#38"
  },
  {
    "w": "counterfactual",
    "zh": "反事实；用于比较“如果没有发生某件事会怎样”",
    "type": "academic",
    "ex": "A causal claim requires a credible counterfactual.",
    "src": "#38"
  },
  {
    "w": "causal effect",
    "zh": "因果效应",
    "type": "academic",
    "ex": "An experiment can help estimate the causal effect of a shipping policy.",
    "src": "#38"
  },
  {
    "w": "filler product",
    "zh": "为了凑单而购买的填充商品",
    "type": "vocab",
    "ex": "A shopper may add a filler product simply to reach the threshold.",
    "src": "#38"
  },
  {
    "w": "opportunity cost",
    "zh": "机会成本；选择一个方案而放弃的最佳替代方案价值",
    "type": "academic",
    "ex": "Consumers often ignore the opportunity cost of unnecessary purchases.",
    "src": "#38"
  },
  {
    "w": "framing",
    "zh": "框架效应；同一信息因呈现方式不同而改变判断",
    "type": "academic",
    "ex": "Price framing can change preferences even when total cost is unchanged.",
    "src": "#38"
  },
  {
    "w": "qualify for",
    "zh": "达到条件以获得……",
    "type": "vocab",
    "ex": "Customers may buy extra items to qualify for a reward.",
    "src": "#38"
  },
  {
    "w": "Richard Thaler",
    "zh": "理查德·塞勒；行为经济学家，心理账户等研究的重要代表人物",
    "type": "proper",
    "ex": "Richard Thaler helped popularize the idea of mental accounting in behavioral economics.",
    "src": "#38"
  }
]);


// Imported Article #39
words.push(...[
  {
    "w": "nominal",
    "zh": "名义的；未扣除通胀等因素的",
    "type": "academic",
    "ex": "My nominal salary increased, but prices rose as well.",
    "src": "#39"
  },
  {
    "w": "real income",
    "zh": "实际收入；按购买力调整后的收入",
    "type": "academic",
    "ex": "Real income matters more than the headline salary when measuring living standards.",
    "src": "#39"
  },
  {
    "w": "purchasing power",
    "zh": "购买力；一笔钱能够购买商品和服务的能力",
    "type": "academic",
    "ex": "Inflation reduces the purchasing power of money.",
    "src": "#39"
  },
  {
    "w": "compensate for",
    "zh": "补偿；抵消",
    "type": "vocab",
    "ex": "Part of the pay rise merely compensates for higher prices.",
    "src": "#39"
  },
  {
    "w": "lifestyle inflation",
    "zh": "生活方式通胀；收入提高后支出随之升级",
    "type": "academic",
    "ex": "Lifestyle inflation can absorb a large share of a pay rise.",
    "src": "#39"
  },
  {
    "w": "baseline expectation",
    "zh": "基准预期；逐渐被视为正常水平的标准",
    "type": "academic",
    "ex": "A luxury can eventually become a baseline expectation.",
    "src": "#39"
  },
  {
    "w": "reference point",
    "zh": "参照点；用于判断得失的比较基准",
    "type": "academic",
    "ex": "People often judge a raise against a changing reference point.",
    "src": "#39"
  },
  {
    "w": "financial resilience",
    "zh": "财务韧性；承受收入下降或意外支出的能力",
    "type": "vocab",
    "ex": "Emergency savings can improve financial resilience.",
    "src": "#39"
  },
  {
    "w": "balance sheet",
    "zh": "资产负债表；也可泛指个人资产与负债状况",
    "type": "academic",
    "ex": "Two people with the same income can have very different personal balance sheets.",
    "src": "#39"
  },
  {
    "w": "recurring obligation",
    "zh": "持续性财务义务；需要反复支付的固定支出",
    "type": "vocab",
    "ex": "A larger rent payment becomes a recurring obligation.",
    "src": "#39"
  },
  {
    "w": "gross salary",
    "zh": "税前工资",
    "type": "academic",
    "ex": "The company announced an increase in gross salary.",
    "src": "#39"
  },
  {
    "w": "after-tax income",
    "zh": "税后收入",
    "type": "academic",
    "ex": "Households make most spending decisions based on after-tax income.",
    "src": "#39"
  },
  {
    "w": "relative income",
    "zh": "相对收入；与他人相比的收入水平",
    "type": "academic",
    "ex": "Relative income can influence how satisfied people feel with their earnings.",
    "src": "#39"
  },
  {
    "w": "retention",
    "zh": "员工留任；企业留住员工的能力",
    "type": "vocab",
    "ex": "Higher compensation can improve employee retention.",
    "src": "#39"
  },
  {
    "w": "allocate",
    "zh": "分配；配置",
    "type": "vocab",
    "ex": "She decided to allocate part of her raise to investments.",
    "src": "#39"
  },
  {
    "w": "net worth",
    "zh": "净资产；资产减去负债后的价值",
    "type": "academic",
    "ex": "A higher salary does not guarantee faster growth in net worth.",
    "src": "#39"
  },
  {
    "w": "fixed commitment",
    "zh": "固定承诺或固定支出",
    "type": "vocab",
    "ex": "Large fixed commitments reduce financial flexibility.",
    "src": "#39"
  },
  {
    "w": "stock vs flow",
    "zh": "存量与流量；区分某一时点的累积量与一段时期内的变化量",
    "type": "academic",
    "ex": "Stock vs flow helps explain why a high salary is not the same as high wealth.",
    "src": "#39"
  }
]);


// Imported Article #40
words.push(...[
  {
    "w": "benchmarking",
    "zh": "标杆分析；把自身表现或流程与优秀同行进行比较",
    "type": "academic",
    "ex": "Benchmarking can help a company identify inefficient processes.",
    "src": "#40"
  },
  {
    "w": "converge",
    "zh": "趋同；逐渐变得相似",
    "type": "vocab",
    "ex": "Competing products often converge as firms copy successful features.",
    "src": "#40"
  },
  {
    "w": "customer-acquisition cost",
    "zh": "获客成本；获得一个新客户所需的平均成本",
    "type": "academic",
    "ex": "The company reduced its customer-acquisition cost through referrals.",
    "src": "#40"
  },
  {
    "w": "isolated cause",
    "zh": "孤立原因；脱离其他条件单独被视为原因的因素",
    "type": "academic",
    "ex": "The membership program was not an isolated cause of customer loyalty.",
    "src": "#40"
  },
  {
    "w": "asymmetry",
    "zh": "不对称；两种情况的成本、风险或效果并不相等",
    "type": "academic",
    "ex": "There is an asymmetry between the reputational risks of conventional and unconventional mistakes.",
    "src": "#40"
  },
  {
    "w": "legitimacy",
    "zh": "正当性；被群体认为合理、可信或符合规范的状态",
    "type": "academic",
    "ex": "A practice can gain legitimacy simply because respected firms adopt it.",
    "src": "#40"
  },
  {
    "w": "herding",
    "zh": "羊群行为；在不确定性下跟随他人选择的行为",
    "type": "academic",
    "ex": "Herding can cause investors and companies to make similar decisions.",
    "src": "#40"
  },
  {
    "w": "institutional isomorphism",
    "zh": "制度同形；组织在共同压力下逐渐变得相似的现象",
    "type": "academic",
    "ex": "Institutional isomorphism helps explain why organizations in one industry often resemble each other.",
    "src": "#40"
  },
  {
    "w": "strategic convergence",
    "zh": "战略趋同；竞争者的战略逐渐相似",
    "type": "academic",
    "ex": "Strategic convergence can make genuine differentiation more difficult.",
    "src": "#40"
  },
  {
    "w": "differentiation",
    "zh": "差异化；使产品或企业区别于竞争者",
    "type": "academic",
    "ex": "Strong differentiation gives customers a reason to choose one brand over another.",
    "src": "#40"
  },
  {
    "w": "baseline expectation",
    "zh": "基准预期；消费者逐渐视为理所当然的最低标准",
    "type": "academic",
    "ex": "Fast delivery has become a baseline expectation in many markets.",
    "src": "#40"
  },
  {
    "w": "durable advantage",
    "zh": "持久优势；不容易被竞争者迅速复制或消除的优势",
    "type": "vocab",
    "ex": "A popular feature does not always create a durable advantage.",
    "src": "#40"
  },
  {
    "w": "strategic treadmill",
    "zh": "战略跑步机；不断投入却只能维持相对位置的竞争状态",
    "type": "academic",
    "ex": "Feature competition can put firms on a strategic treadmill.",
    "src": "#40"
  },
  {
    "w": "trade-off",
    "zh": "权衡；获得某种优势时必须牺牲另一种东西",
    "type": "academic",
    "ex": "Every business model involves trade-offs between cost, quality, and scope.",
    "src": "#40"
  },
  {
    "w": "transferable",
    "zh": "可迁移的；能在不同环境中有效应用的",
    "type": "vocab",
    "ex": "Managers must decide whether a competitor's practice is genuinely transferable.",
    "src": "#40"
  },
  {
    "w": "context-dependent",
    "zh": "依赖具体情境的",
    "type": "academic",
    "ex": "Some competitive advantages are highly context-dependent.",
    "src": "#40"
  },
  {
    "w": "allocate",
    "zh": "分配；配置有限资源",
    "type": "vocab",
    "ex": "A company must allocate capital to the opportunities it values most.",
    "src": "#40"
  },
  {
    "w": "reverse causality",
    "zh": "反向因果；看似原因的变量实际上可能是结果",
    "type": "academic",
    "ex": "Reverse causality may explain why profitable firms are more likely to adopt expensive technology.",
    "src": "#40"
  }
]);


// Imported Article #41
words.push(...[
  {
    "w": "choice overload",
    "zh": "选择过载；选项过多或过于复杂而增加决策困难的现象",
    "type": "academic",
    "ex": "Choice overload can make a simple purchase surprisingly stressful.",
    "src": "#41"
  },
  {
    "w": "cognitive load",
    "zh": "认知负荷；处理信息时占用的心理资源",
    "type": "academic",
    "ex": "Too many product features can create unnecessary cognitive load.",
    "src": "#41"
  },
  {
    "w": "working memory",
    "zh": "工作记忆；短时间内保存并处理信息的认知系统",
    "type": "academic",
    "ex": "Working memory cannot hold every detail of dozens of alternatives at once.",
    "src": "#41"
  },
  {
    "w": "opportunity cost",
    "zh": "机会成本；选择某方案而放弃的最佳替代方案的价值",
    "type": "academic",
    "ex": "The opportunity cost of attending the concert is the best alternative use of that evening.",
    "src": "#41"
  },
  {
    "w": "comparison set",
    "zh": "比较集合；用于评价当前选择的一组选项",
    "type": "academic",
    "ex": "A larger comparison set can make an otherwise good choice feel less satisfying.",
    "src": "#41"
  },
  {
    "w": "counterfactual",
    "zh": "反事实；关于事情本可以如何不同的想象",
    "type": "academic",
    "ex": "After the purchase, she kept imagining a counterfactual in which she chose the cheaper model.",
    "src": "#41"
  },
  {
    "w": "regret",
    "zh": "后悔；对未选择另一结果产生的负面感受",
    "type": "vocab",
    "ex": "Visible alternatives can increase regret after a decision.",
    "src": "#41"
  },
  {
    "w": "search friction",
    "zh": "搜索摩擦；寻找可选方案所需的时间和成本",
    "type": "academic",
    "ex": "Online marketplaces have dramatically reduced search friction.",
    "src": "#41"
  },
  {
    "w": "comparison friction",
    "zh": "比较摩擦；在多个方案之间评估和权衡的成本",
    "type": "academic",
    "ex": "Filters can reduce comparison friction by narrowing the relevant options.",
    "src": "#41"
  },
  {
    "w": "maximize",
    "zh": "最大化；试图获得可能的最佳结果",
    "type": "vocab",
    "ex": "Some consumers try to maximize every important purchase.",
    "src": "#41"
  },
  {
    "w": "satisfice",
    "zh": "满意化；找到达到要求的方案后停止继续寻找",
    "type": "academic",
    "ex": "It can be rational to satisfice when further comparison is costly.",
    "src": "#41"
  },
  {
    "w": "search space",
    "zh": "搜索空间；所有可能被考察的方案集合",
    "type": "academic",
    "ex": "Clear criteria can shrink the search space.",
    "src": "#41"
  },
  {
    "w": "value of information",
    "zh": "信息价值；新增信息对改善决策的预期价值",
    "type": "academic",
    "ex": "The value of information falls when another review is unlikely to change your choice.",
    "src": "#41"
  },
  {
    "w": "diminishing returns",
    "zh": "边际收益递减；继续增加投入时新增收益逐渐减少",
    "type": "academic",
    "ex": "Reading more reviews often produces diminishing returns.",
    "src": "#41"
  },
  {
    "w": "choice architecture",
    "zh": "选择架构；组织和呈现选项以影响决策的方式",
    "type": "academic",
    "ex": "Good choice architecture can simplify decisions without removing freedom.",
    "src": "#41"
  },
  {
    "w": "assortment",
    "zh": "商品组合；商家提供的一系列不同产品",
    "type": "vocab",
    "ex": "A very large assortment can attract customers but also slow decisions.",
    "src": "#41"
  },
  {
    "w": "social proof",
    "zh": "社会认同；依据他人的选择或评价判断某事是否值得",
    "type": "academic",
    "ex": "Best-seller labels provide social proof when shoppers are uncertain.",
    "src": "#41"
  },
  {
    "w": "criterion",
    "zh": "标准；作出判断时使用的条件",
    "type": "vocab",
    "ex": "Price should be only one criterion when choosing a laptop.",
    "src": "#41"
  }
]);


// Imported Article #42
words.push(...[
  {
    "w": "effort justification",
    "zh": "努力合理化；因为为某结果付出很多而提高对其价值的评价",
    "type": "academic",
    "ex": "Effort justification can make a difficult achievement feel more valuable.",
    "src": "#42"
  },
  {
    "w": "cognitive dissonance",
    "zh": "认知失调；信念、行为或结果不一致时产生的心理不适",
    "type": "academic",
    "ex": "Cognitive dissonance can encourage people to reinterpret a disappointing outcome.",
    "src": "#42"
  },
  {
    "w": "sunk cost",
    "zh": "沉没成本；已经发生且无法收回的成本",
    "type": "academic",
    "ex": "The ticket price is a sunk cost once the film has started.",
    "src": "#42"
  },
  {
    "w": "sunk cost effect",
    "zh": "沉没成本效应；因过去投入而影响未来决策的倾向",
    "type": "academic",
    "ex": "The sunk cost effect can keep people in projects that no longer make sense.",
    "src": "#42"
  },
  {
    "w": "persistence",
    "zh": "坚持；持续做某事",
    "type": "vocab",
    "ex": "Past investment can increase persistence even when prospects worsen.",
    "src": "#42"
  },
  {
    "w": "selective",
    "zh": "有选择性的；筛选严格的",
    "type": "vocab",
    "ex": "A long admissions process may make a program appear highly selective.",
    "src": "#42"
  },
  {
    "w": "capacity restriction",
    "zh": "产能或容量限制；人为或客观限制可提供数量",
    "type": "academic",
    "ex": "Capacity restrictions can create queues even when demand is stable.",
    "src": "#42"
  },
  {
    "w": "attribution",
    "zh": "归因；对某个结果原因的解释",
    "type": "academic",
    "ex": "Customer reactions depend partly on their attribution of the delay.",
    "src": "#42"
  },
  {
    "w": "functional friction",
    "zh": "功能性摩擦；只增加操作难度而不创造有意义价值的障碍",
    "type": "academic",
    "ex": "A confusing checkout page creates functional friction.",
    "src": "#42"
  },
  {
    "w": "meaningful friction",
    "zh": "有意义的摩擦；能够传递投入、稀缺或身份等意义的难度",
    "type": "academic",
    "ex": "Some training programs use meaningful friction to signal commitment.",
    "src": "#42"
  },
  {
    "w": "productive effort",
    "zh": "生产性努力；真正促进技能或结果的付出",
    "type": "academic",
    "ex": "Challenging practice can create productive effort.",
    "src": "#42"
  },
  {
    "w": "unrecoverable",
    "zh": "无法收回的",
    "type": "vocab",
    "ex": "Past time is unrecoverable, but the skills it created may still matter.",
    "src": "#42"
  },
  {
    "w": "forward-looking",
    "zh": "前瞻性的；依据未来成本与收益进行判断的",
    "type": "academic",
    "ex": "A forward-looking decision focuses on what happens from today onward.",
    "src": "#42"
  },
  {
    "w": "status signal",
    "zh": "地位信号；用于显示身份、稀缺性或社会位置的特征",
    "type": "academic",
    "ex": "An exclusive waiting list can become a status signal.",
    "src": "#42"
  },
  {
    "w": "artificial scarcity",
    "zh": "人为稀缺；通过限制供应刻意制造的稀缺状态",
    "type": "academic",
    "ex": "Artificial scarcity can increase demand if consumers believe the product is exclusive.",
    "src": "#42"
  },
  {
    "w": "credibility",
    "zh": "可信度",
    "type": "vocab",
    "ex": "A scarcity signal loses credibility when customers think it is manipulated.",
    "src": "#42"
  },
  {
    "w": "expected value",
    "zh": "期望价值；考虑不同结果及其概率后的预期收益",
    "type": "academic",
    "ex": "The better choice depends on the expected value of continuing versus switching.",
    "src": "#42"
  },
  {
    "w": "commitment",
    "zh": "投入；承诺",
    "type": "vocab",
    "ex": "Visible effort can signal commitment to a group or goal.",
    "src": "#42"
  }
]);


// Imported Article #43
words.push(...[
  {
    "w": "switching cost",
    "zh": "转换成本；从一个产品、服务或系统迁移到另一个所需承担的成本",
    "type": "academic",
    "ex": "A better product may still fail if customers face high switching costs.",
    "src": "#43"
  },
  {
    "w": "lock-in",
    "zh": "锁定效应；因转换成本等原因而持续留在现有系统",
    "type": "academic",
    "ex": "Years of stored data can create customer lock-in.",
    "src": "#43"
  },
  {
    "w": "path dependence",
    "zh": "路径依赖；早期事件和选择会改变之后可行结果的现象",
    "type": "academic",
    "ex": "Technology markets often display path dependence.",
    "src": "#43"
  },
  {
    "w": "network effect",
    "zh": "网络效应；用户越多，产品对单个用户的价值越高",
    "type": "academic",
    "ex": "Messaging apps benefit from strong network effects.",
    "src": "#43"
  },
  {
    "w": "installed base",
    "zh": "已安装用户基础；已经采用某项产品或技术的用户群",
    "type": "academic",
    "ex": "A large installed base can attract developers and partners.",
    "src": "#43"
  },
  {
    "w": "complementary goods",
    "zh": "互补品；与另一产品共同使用并提高其价值的商品",
    "type": "academic",
    "ex": "Games are complementary goods for a game console.",
    "src": "#43"
  },
  {
    "w": "coordination problem",
    "zh": "协调问题；个体需要配合行动才能实现更优结果的情形",
    "type": "academic",
    "ex": "A new platform faces a coordination problem when nobody wants to join first.",
    "src": "#43"
  },
  {
    "w": "critical mass",
    "zh": "临界规模；使网络或系统能够自我维持增长的最低规模",
    "type": "academic",
    "ex": "The platform offered discounts until it reached critical mass.",
    "src": "#43"
  },
  {
    "w": "subsidy",
    "zh": "补贴；为降低参与成本而提供的经济支持",
    "type": "vocab",
    "ex": "The company used a subsidy to attract early users.",
    "src": "#43"
  },
  {
    "w": "integration",
    "zh": "整合；不同系统之间的连接与协同",
    "type": "vocab",
    "ex": "Deep software integration can make switching expensive.",
    "src": "#43"
  },
  {
    "w": "equilibrium",
    "zh": "均衡；在既定条件下参与者缺乏单独改变行为动机的稳定状态",
    "type": "academic",
    "ex": "The market may settle into an equilibrium that is difficult to change.",
    "src": "#43"
  },
  {
    "w": "transition friction",
    "zh": "转型摩擦；从当前状态迁移到新状态过程中产生的阻力和成本",
    "type": "academic",
    "ex": "Transition friction can delay adoption of a superior technology.",
    "src": "#43"
  },
  {
    "w": "ecosystem",
    "zh": "生态系统；围绕核心产品形成的服务、工具和参与者网络",
    "type": "vocab",
    "ex": "A strong ecosystem can be more valuable than a single product feature.",
    "src": "#43"
  },
  {
    "w": "reinforce",
    "zh": "强化；使某种趋势或优势进一步增强",
    "type": "vocab",
    "ex": "More users can reinforce a platform's market position.",
    "src": "#43"
  },
  {
    "w": "compatible",
    "zh": "兼容的；能够与其他系统共同工作的",
    "type": "vocab",
    "ex": "Customers prefer accessories that are compatible with devices they already own.",
    "src": "#43"
  },
  {
    "w": "distribution",
    "zh": "分销；产品到达消费者的渠道和体系",
    "type": "vocab",
    "ex": "Strong distribution helped the product reach customers early.",
    "src": "#43"
  },
  {
    "w": "durable advantage",
    "zh": "持久竞争优势；难以被竞争者快速复制或消除的优势",
    "type": "academic",
    "ex": "Customer integration can create a durable advantage.",
    "src": "#43"
  },
  {
    "w": "historical accident",
    "zh": "历史偶然；早期偶发事件对长期结果产生持续影响",
    "type": "academic",
    "ex": "A historical accident can sometimes shape which standard becomes dominant.",
    "src": "#43"
  }
]);


// Imported Article #44
words.push(...[
  {
    "w": "social proof",
    "zh": "社会认同；在不确定时把他人的行为当作判断依据",
    "type": "academic",
    "ex": "A long queue can provide social proof that a restaurant is worth trying.",
    "src": "#44"
  },
  {
    "w": "information cascade",
    "zh": "信息级联；后来者忽略部分私人信息并跟随前人选择的过程",
    "type": "academic",
    "ex": "An information cascade can make one option look overwhelmingly popular.",
    "src": "#44"
  },
  {
    "w": "private information",
    "zh": "私人信息；个人掌握但他人未必知道的信息",
    "type": "academic",
    "ex": "Each investor may have private information about the asset.",
    "src": "#44"
  },
  {
    "w": "independent signal",
    "zh": "独立信号；不主要由其他观察结果复制而来的信息",
    "type": "academic",
    "ex": "Several independent signals provide stronger evidence than repeated copies of one source.",
    "src": "#44"
  },
  {
    "w": "correlated",
    "zh": "相关的；彼此并非独立变化的",
    "type": "academic",
    "ex": "Online opinions may be correlated because users influence one another.",
    "src": "#44"
  },
  {
    "w": "normative conformity",
    "zh": "规范性从众；为获得接纳或避免社会成本而服从群体",
    "type": "academic",
    "ex": "Normative conformity can keep employees silent in meetings.",
    "src": "#44"
  },
  {
    "w": "informational influence",
    "zh": "信息性影响；因相信他人掌握更好信息而跟随",
    "type": "academic",
    "ex": "Informational influence is strongest when the correct answer is uncertain.",
    "src": "#44"
  },
  {
    "w": "consensus",
    "zh": "共识；多数人共同接受的意见",
    "type": "vocab",
    "ex": "A visible consensus can be persuasive even when its origins are unclear.",
    "src": "#44"
  },
  {
    "w": "amplify",
    "zh": "放大；增强某种差异或信号",
    "type": "vocab",
    "ex": "Recommendation systems can amplify small differences in early popularity.",
    "src": "#44"
  },
  {
    "w": "exposure",
    "zh": "曝光；接触某内容或产品的机会",
    "type": "vocab",
    "ex": "More exposure usually creates more opportunities for engagement.",
    "src": "#44"
  },
  {
    "w": "premature",
    "zh": "过早的；在适当时机之前发生的",
    "type": "vocab",
    "ex": "Premature discussion can reduce the independence of individual judgments.",
    "src": "#44"
  },
  {
    "w": "reputational cost",
    "zh": "声誉成本；某种行为对个人社会评价造成的损失",
    "type": "academic",
    "ex": "Disagreeing with senior colleagues may carry a reputational cost.",
    "src": "#44"
  },
  {
    "w": "herding",
    "zh": "羊群行为；跟随群体行动的现象",
    "type": "academic",
    "ex": "Herding can occur when people assume the crowd knows more than they do.",
    "src": "#44"
  },
  {
    "w": "aggregate",
    "zh": "汇总；把多个个体信息合并起来",
    "type": "vocab",
    "ex": "Markets can aggregate information from many participants.",
    "src": "#44"
  },
  {
    "w": "fragile",
    "zh": "脆弱的；容易因条件变化而瓦解的",
    "type": "vocab",
    "ex": "A consensus based mainly on imitation may be surprisingly fragile.",
    "src": "#44"
  },
  {
    "w": "exploratory",
    "zh": "探索性的；用于尝试不同可能性的",
    "type": "vocab",
    "ex": "A team needs some exploratory projects rather than copying every competitor.",
    "src": "#44"
  },
  {
    "w": "signal quality",
    "zh": "信号质量；一个观察结果反映真实情况的可靠程度",
    "type": "academic",
    "ex": "The number of reviews matters less when signal quality is poor.",
    "src": "#44"
  },
  {
    "w": "collective behavior",
    "zh": "集体行为；群体成员相互影响后形成的整体行动模式",
    "type": "academic",
    "ex": "Social media can rapidly reshape collective behavior.",
    "src": "#44"
  }
]);


// Imported Article #45
words.push(...[
  {
    "w": "confirmation bias",
    "zh": "确认偏误；倾向于寻找、解释和记住支持既有信念的信息",
    "type": "academic",
    "ex": "Confirmation bias can make supportive evidence feel more convincing than contradictory evidence.",
    "src": "#45"
  },
  {
    "w": "prior belief",
    "zh": "先验信念；在获得新证据之前已有的判断或预期",
    "type": "academic",
    "ex": "A prior belief should be a starting point rather than a barrier to updating.",
    "src": "#45"
  },
  {
    "w": "belief updating",
    "zh": "信念更新；根据新证据调整原有判断",
    "type": "academic",
    "ex": "Good decision-making requires belief updating when the evidence changes.",
    "src": "#45"
  },
  {
    "w": "selective attention",
    "zh": "选择性注意；更容易注意某些信息而忽略其他信息",
    "type": "academic",
    "ex": "Selective attention can make confirming examples easier to notice.",
    "src": "#45"
  },
  {
    "w": "search selection",
    "zh": "搜索选择；搜索方式决定哪些证据有机会进入判断过程",
    "type": "academic",
    "ex": "Search selection can shape the evidence before evaluation begins.",
    "src": "#45"
  },
  {
    "w": "ambiguous",
    "zh": "模棱两可的；可以有多种解释的",
    "type": "vocab",
    "ex": "People may interpret ambiguous results in ways that support their expectations.",
    "src": "#45"
  },
  {
    "w": "motivated reasoning",
    "zh": "动机性推理；希望得到某种结论而影响证据处理的过程",
    "type": "academic",
    "ex": "Motivated reasoning can become stronger when reputation is at stake.",
    "src": "#45"
  },
  {
    "w": "falsification",
    "zh": "证伪；寻找能够推翻某个假设的证据",
    "type": "academic",
    "ex": "Falsification asks what evidence would show that a claim is wrong.",
    "src": "#45"
  },
  {
    "w": "calibration",
    "zh": "校准；使信心程度与实际证据可靠性相匹配",
    "type": "academic",
    "ex": "Good calibration means being confident only when the evidence justifies it.",
    "src": "#45"
  },
  {
    "w": "contrarian",
    "zh": "逆向的；故意采取与主流相反立场的",
    "type": "vocab",
    "ex": "Being contrarian is not automatically the same as being independent.",
    "src": "#45"
  },
  {
    "w": "pre-mortem",
    "zh": "事前验尸法；预先假设计划失败并分析可能原因",
    "type": "academic",
    "ex": "A pre-mortem can reveal risks before a team becomes too committed.",
    "src": "#45"
  },
  {
    "w": "decision threshold",
    "zh": "决策阈值；预先设定触发某项行动的证据或表现标准",
    "type": "academic",
    "ex": "The investor defined a decision threshold before buying the asset.",
    "src": "#45"
  },
  {
    "w": "move the goalposts",
    "zh": "移动门槛；结果出现后改变原先的评价标准",
    "type": "vocab",
    "ex": "Teams may move the goalposts to avoid admitting that an experiment failed.",
    "src": "#45"
  },
  {
    "w": "disconfirming evidence",
    "zh": "反证；与现有信念不一致或可能推翻它的证据",
    "type": "academic",
    "ex": "Strong analysis actively searches for disconfirming evidence.",
    "src": "#45"
  },
  {
    "w": "self-protection",
    "zh": "自我保护；避免心理、声誉或身份受到威胁",
    "type": "vocab",
    "ex": "Evidence evaluation can become self-protection when identity is involved.",
    "src": "#45"
  },
  {
    "w": "information architecture",
    "zh": "信息架构；信息被搜索、筛选、组织和呈现的方式",
    "type": "academic",
    "ex": "Information architecture influences which facts people encounter first.",
    "src": "#45"
  },
  {
    "w": "personalization",
    "zh": "个性化；根据用户行为调整内容或服务",
    "type": "vocab",
    "ex": "Personalization can reduce noise but also narrow the information people see.",
    "src": "#45"
  },
  {
    "w": "credible challenge",
    "zh": "可信挑战；有足够证据基础、值得认真回应的反对意见",
    "type": "academic",
    "ex": "A strong argument should survive credible challenges.",
    "src": "#45"
  }
]);


// Imported Article #46
words.push(...[
  {
    "w": "default",
    "zh": "默认选项；当个人不采取行动时自动生效的选择",
    "type": "academic",
    "ex": "The default determines what happens when the user takes no action.",
    "src": "#46"
  },
  {
    "w": "default effect",
    "zh": "默认效应；默认选项显著影响最终选择的现象",
    "type": "academic",
    "ex": "The default effect can increase participation even when people remain free to opt out.",
    "src": "#46"
  },
  {
    "w": "status quo bias",
    "zh": "现状偏误；仅因为某状态已经存在而倾向于维持它",
    "type": "academic",
    "ex": "Status quo bias can make switching feel less attractive than staying put.",
    "src": "#46"
  },
  {
    "w": "inertia",
    "zh": "惯性；在没有强烈推动力时维持原有状态的倾向",
    "type": "academic",
    "ex": "Inertia helps explain why many users never change standard settings.",
    "src": "#46"
  },
  {
    "w": "opt out",
    "zh": "选择退出；主动离开自动加入的安排",
    "type": "vocab",
    "ex": "Employees can opt out of the savings plan at any time.",
    "src": "#46"
  },
  {
    "w": "opt in",
    "zh": "主动选择加入",
    "type": "vocab",
    "ex": "Under an opt-in system, workers must actively enroll.",
    "src": "#46"
  },
  {
    "w": "path of least resistance",
    "zh": "阻力最小的路径；最省力的行动方式",
    "type": "vocab",
    "ex": "People often follow the path of least resistance when the stakes seem low.",
    "src": "#46"
  },
  {
    "w": "anticipated regret",
    "zh": "预期后悔；预先担心某项主动决定将来导致后悔",
    "type": "academic",
    "ex": "Anticipated regret can make people reluctant to change an investment.",
    "src": "#46"
  },
  {
    "w": "switching cost",
    "zh": "转换成本；从一个方案转向另一个方案所需的金钱、时间或精力",
    "type": "academic",
    "ex": "High switching costs can keep customers with a service they no longer prefer.",
    "src": "#46"
  },
  {
    "w": "choice architecture",
    "zh": "选择架构；选项被组织、排序和呈现的方式",
    "type": "academic",
    "ex": "Choice architecture influences behavior without necessarily removing alternatives.",
    "src": "#46"
  },
  {
    "w": "formal freedom",
    "zh": "形式自由；某个选择在规则或技术上是否可用",
    "type": "academic",
    "ex": "Formal freedom exists if customers are technically allowed to cancel.",
    "src": "#46"
  },
  {
    "w": "effective freedom",
    "zh": "有效自由；实际行使某项选择需要承担多少成本",
    "type": "academic",
    "ex": "Effective freedom depends partly on how difficult it is to exercise an option.",
    "src": "#46"
  },
  {
    "w": "automatic renewal",
    "zh": "自动续费",
    "type": "vocab",
    "ex": "Automatic renewal can turn temporary inattention into another paid month.",
    "src": "#46"
  },
  {
    "w": "alignment",
    "zh": "目标一致性；不同参与者的利益或目标是否一致",
    "type": "academic",
    "ex": "A good default requires alignment between the designer and the user.",
    "src": "#46"
  },
  {
    "w": "anchor",
    "zh": "锚点；影响后续判断的初始数值或参照",
    "type": "academic",
    "ex": "A default contribution rate can become an anchor for future saving decisions.",
    "src": "#46"
  },
  {
    "w": "retention rate",
    "zh": "留存率；一段时间后仍继续使用服务的用户比例",
    "type": "academic",
    "ex": "A high retention rate does not always prove strong customer satisfaction.",
    "src": "#46"
  },
  {
    "w": "asymmetry",
    "zh": "不对称；两个方向的成本或条件并不相等",
    "type": "academic",
    "ex": "There is a clear asymmetry when joining takes one click but leaving takes ten minutes.",
    "src": "#46"
  },
  {
    "w": "selective attention",
    "zh": "选择性注意；把有限注意力集中在少数重要事项上",
    "type": "academic",
    "ex": "Selective attention is useful because not every default deserves equal scrutiny.",
    "src": "#46"
  }
]);


// Imported Article #47
words.push(...[
  {
    "w": "rebound effect",
    "zh": "反弹效应；效率提升后因使用量增加而抵消部分预期节省的现象",
    "type": "academic",
    "ex": "The rebound effect can reduce the amount of time an efficiency tool actually frees.",
    "src": "#47"
  },
  {
    "w": "Jevons paradox",
    "zh": "杰文斯悖论；效率提升可能因需求扩大而导致资源总使用量反而上升",
    "type": "academic",
    "ex": "Jevons paradox shows why efficiency and total consumption do not always move in opposite directions.",
    "src": "#47"
  },
  {
    "w": "efficiency gain",
    "zh": "效率增益；完成同一任务所需资源下降",
    "type": "academic",
    "ex": "The software produced a large efficiency gain in routine reporting.",
    "src": "#47"
  },
  {
    "w": "first-order effect",
    "zh": "一阶效应；变化直接产生的最初影响",
    "type": "academic",
    "ex": "The first-order effect of automation is that each draft takes less time.",
    "src": "#47"
  },
  {
    "w": "second-order effect",
    "zh": "二阶效应；行为和系统调整后进一步产生的影响",
    "type": "academic",
    "ex": "Higher expectations can be a second-order effect of faster technology.",
    "src": "#47"
  },
  {
    "w": "bottleneck",
    "zh": "瓶颈；限制整个系统速度或产出的环节",
    "type": "vocab",
    "ex": "Reviewing became the bottleneck after content generation became cheap.",
    "src": "#47"
  },
  {
    "w": "baseline expectation",
    "zh": "基准预期；逐渐被视为正常最低水平的标准",
    "type": "academic",
    "ex": "Fast replies can quickly become a baseline expectation.",
    "src": "#47"
  },
  {
    "w": "slack",
    "zh": "余量；未被立即占用、可用于应对变化的资源或能力",
    "type": "academic",
    "ex": "A little slack makes an organization more resilient to unexpected problems.",
    "src": "#47"
  },
  {
    "w": "utilization",
    "zh": "利用率；资源被使用的程度",
    "type": "academic",
    "ex": "Very high utilization can create long queues when demand suddenly rises.",
    "src": "#47"
  },
  {
    "w": "filtering",
    "zh": "筛选；从大量信息中挑出相关或有价值内容",
    "type": "vocab",
    "ex": "Cheap content generation increases the importance of filtering.",
    "src": "#47"
  },
  {
    "w": "coordination cost",
    "zh": "协调成本；使多人、多任务或多部门保持一致所需的时间和资源",
    "type": "academic",
    "ex": "More projects can create substantial coordination costs.",
    "src": "#47"
  },
  {
    "w": "output volume",
    "zh": "产出量；一定时期内生成的产品、内容或工作成果数量",
    "type": "academic",
    "ex": "Output volume is a poor measure if most documents are never used.",
    "src": "#47"
  },
  {
    "w": "productive",
    "zh": "富有成效的；能有效创造有价值结果的",
    "type": "vocab",
    "ex": "Removing an unnecessary task can be more productive than completing it faster.",
    "src": "#47"
  },
  {
    "w": "capacity",
    "zh": "能力；系统能够处理的工作量",
    "type": "vocab",
    "ex": "Automation increased the team's capacity to answer routine questions.",
    "src": "#47"
  },
  {
    "w": "allocation",
    "zh": "配置；把有限资源分配到不同用途",
    "type": "academic",
    "ex": "The allocation of saved time determines whether workers gain more leisure.",
    "src": "#47"
  },
  {
    "w": "marginal cost",
    "zh": "边际成本；额外生产一个单位所增加的成本",
    "type": "academic",
    "ex": "AI can reduce the marginal cost of producing another draft.",
    "src": "#47"
  },
  {
    "w": "scale",
    "zh": "规模；活动或系统运作的数量级",
    "type": "academic",
    "ex": "An efficiency improvement can change the scale at which an activity is performed.",
    "src": "#47"
  },
  {
    "w": "William Stanley Jevons",
    "zh": "威廉·斯坦利·杰文斯；19世纪英国经济学家，提出与煤炭效率相关的杰文斯悖论",
    "type": "proper",
    "ex": "William Stanley Jevons argued that greater coal efficiency could encourage wider coal use.",
    "src": "#47"
  }
]);


// Imported Article #48
words.push(...[
  {
    "w": "salience",
    "zh": "显著性；某件事在注意力中有多突出、容易被察觉",
    "type": "academic",
    "ex": "A large one-time payment usually has greater salience than a small recurring charge.",
    "src": "#48"
  },
  {
    "w": "mental accounting",
    "zh": "心理账户；把金钱按用途或来源划分成不同心理类别的倾向",
    "type": "academic",
    "ex": "Mental accounting can make a small treat feel separate from the rest of a budget.",
    "src": "#48"
  },
  {
    "w": "cumulative",
    "zh": "累积的；随着时间不断叠加的",
    "type": "vocab",
    "ex": "The cumulative cost of a small daily purchase can be surprisingly high.",
    "src": "#48"
  },
  {
    "w": "unit price",
    "zh": "单位价格；单个商品或单次交易的价格",
    "type": "academic",
    "ex": "A low unit price can make a purchase feel financially unimportant.",
    "src": "#48"
  },
  {
    "w": "frequency",
    "zh": "频率；某行为在一定时期内重复的次数",
    "type": "academic",
    "ex": "Frequency matters as much as price when spending repeats.",
    "src": "#48"
  },
  {
    "w": "automatic renewal",
    "zh": "自动续费",
    "type": "vocab",
    "ex": "Automatic renewal allows a subscription to continue without a new decision.",
    "src": "#48"
  },
  {
    "w": "pain of paying",
    "zh": "支付痛感；付款时感受到的心理不适",
    "type": "academic",
    "ex": "Contactless payments can reduce the immediate pain of paying.",
    "src": "#48"
  },
  {
    "w": "payment friction",
    "zh": "支付摩擦；完成付款所需的步骤、时间或心理阻力",
    "type": "academic",
    "ex": "One-click checkout dramatically reduces payment friction.",
    "src": "#48"
  },
  {
    "w": "framing",
    "zh": "框架效应；同一信息因呈现方式不同而影响判断",
    "type": "academic",
    "ex": "Pricing a service per day is a form of framing.",
    "src": "#48"
  },
  {
    "w": "reference point",
    "zh": "参照点；评价价格或结果时用来比较的基准",
    "type": "academic",
    "ex": "A yearly price may create a different reference point from a monthly price.",
    "src": "#48"
  },
  {
    "w": "cost per use",
    "zh": "单次使用成本；总价格除以实际使用次数",
    "type": "academic",
    "ex": "Cost per use can make an expensive but frequently used item look economical.",
    "src": "#48"
  },
  {
    "w": "sticker price",
    "zh": "标价；商品表面显示的购买价格",
    "type": "vocab",
    "ex": "Sticker price alone does not tell us whether a product offers good value.",
    "src": "#48"
  },
  {
    "w": "opportunity cost",
    "zh": "机会成本；选择一个方案时放弃的最佳替代方案的价值",
    "type": "academic",
    "ex": "The opportunity cost of repeated spending may be less money available for travel.",
    "src": "#48"
  },
  {
    "w": "time horizon",
    "zh": "时间跨度；分析决策时所考虑的未来期间",
    "type": "academic",
    "ex": "A longer time horizon makes recurring costs easier to see.",
    "src": "#48"
  },
  {
    "w": "monitoring cost",
    "zh": "监控成本；持续检查和管理某件事所需的注意力、时间或资源",
    "type": "academic",
    "ex": "Tracking every tiny purchase can create an unnecessary monitoring cost.",
    "src": "#48"
  },
  {
    "w": "recurring payment",
    "zh": "周期性付款；按固定周期重复发生的支付",
    "type": "vocab",
    "ex": "Several small recurring payments can quietly take a large share of income.",
    "src": "#48"
  },
  {
    "w": "subscription revenue",
    "zh": "订阅收入；企业通过周期性订阅获得的稳定收入",
    "type": "academic",
    "ex": "Subscription revenue gives businesses a more predictable cash flow.",
    "src": "#48"
  },
  {
    "w": "unit of analysis",
    "zh": "分析单位；进行判断时所选择的观察尺度或基本对象",
    "type": "academic",
    "ex": "Changing the unit of analysis from one purchase to one year can change the conclusion.",
    "src": "#48"
  }
]);
