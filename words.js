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
