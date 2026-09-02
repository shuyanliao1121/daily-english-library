const speakingCards = [
  {
    "src": "#36",
    "cat": "Psychology",
    "framework": "Convenience → Lower friction → More frequent action → Qualification",
    "q": "Do you think technology has made people more impulsive consumers?",
    "answer": "I think it has made impulsive consumption easier, although I wouldn't say technology automatically makes people less rational. The main difference is that many small barriers have disappeared. Those barriers were inconvenient, but they also created a moment to reconsider the purchase. So when companies reduce friction, they may unintentionally reduce reflection as well. At the same time, convenience is obviously useful for routine purchases, so I don't think the solution is to make everything difficult again. A better approach would be to make ordinary transactions easy while adding small decision points before unusually expensive or risky purchases.",
    "expr": [
      "The main difference is that many small barriers have disappeared.",
      "When we reduce friction, we may unintentionally reduce reflection as well."
    ]
  },
  {
    "src": "#36",
    "cat": "Business",
    "framework": "Individual responsibility → Business incentives → Balanced responsibility",
    "q": "Should companies be responsible for preventing consumers from making bad decisions?",
    "answer": "I think responsibility should be shared rather than placed entirely on either side. Consumers obviously have to make their own decisions. However, businesses also control the environment in which those decisions are made: they decide which option is the default, how visible the price is and how easy it is to cancel a service. I wouldn't expect companies to protect people from every poor decision, but I do think they should avoid deliberately exploiting predictable biases. A fair system gives consumers freedom while making important costs and consequences sufficiently visible.",
    "expr": [
      "Responsibility should be shared rather than placed entirely on either side.",
      "A fair system gives people freedom while making the consequences visible."
    ]
  },
  {
    "src": "#26",
    "cat": "Technology",
    "framework": "Abundance → Scarcity → New bottleneck",
    "q": "Will AI make human skills less valuable in the workplace?",
    "answer": "Not necessarily. AI can make some capabilities much cheaper and more widely available, but that often shifts value toward whatever remains scarce. If producing a basic report or piece of code becomes easy, skills such as defining the right problem, checking the output, applying domain knowledge and taking responsibility may become more important. So technological progress does not simply remove human value; it can change where the bottleneck is.",
    "expr": [
      "When one capability becomes abundant, value often moves toward what remains scarce."
    ]
  },
  {
    "src": "#27",
    "cat": "Technology",
    "framework": "Scarcity → Incentive → Product design",
    "q": "Why do technology companies compete so aggressively for our attention?",
    "answer": "Because attention is limited even when information is almost unlimited. Platforms can create more content, but users still have only a fixed number of hours in a day. If attention can be converted into advertising revenue, subscriptions or data, companies have a strong incentive to design products that keep people engaged. The important point is that product design reflects incentives: when attention is valuable, businesses will naturally compete to capture more of it.",
    "expr": [
      "Product design often reflects the incentives behind the business model."
    ]
  },
  {
    "src": "#28",
    "cat": "Psychology",
    "framework": "Friction → Salience → Behavior",
    "q": "Does making payment easier always benefit consumers?",
    "answer": "It improves convenience, but easier is not automatically better for every decision. Payment friction can be annoying, yet it also makes the cost of a purchase more visible. When digital payments or delayed payments reduce that friction, consumers may spend with less psychological resistance. Good design should therefore remove unnecessary friction while keeping important costs visible enough for people to notice what they are deciding.",
    "expr": [
      "Good design should make routine decisions easy while making important decisions visible."
    ]
  },
  {
    "src": "#29",
    "cat": "Finance",
    "framework": "Asset stock → Perceived wealth → Spending flow",
    "q": "Why might people spend more when the stock market rises?",
    "answer": "Rising asset prices can make households feel wealthier, which may increase their willingness to spend even if their salary has not changed. This is often described as a wealth effect. However, it is important to distinguish a stock from a flow: a higher portfolio value is an increase in wealth, not necessarily an equal increase in spendable cash. That distinction matters because paper gains can disappear and different households own very different amounts of financial assets.",
    "expr": [
      "An increase in wealth is not necessarily an equal increase in spendable cash."
    ]
  },
  {
    "src": "#32",
    "cat": "Economics",
    "framework": "Individual response → Scale → Feedback",
    "q": "Can saving more money ever be bad for the economy?",
    "answer": "For an individual household, saving more during uncertain times can be completely rational. The problem appears when many households do the same thing at once. If consumption falls sharply, businesses receive less revenue and may reduce investment or employment, which can weaken incomes and encourage even more saving. This is the paradox of thrift: what is sensible at the individual level can produce a different result once it is scaled across the whole economy.",
    "expr": [
      "What is rational for an individual may not produce the same result at the collective level."
    ]
  },
  {
    "src": "#33",
    "cat": "Business",
    "framework": "Price → Signal → Exclusivity",
    "q": "Why can higher prices sometimes make luxury products more desirable?",
    "answer": "In ordinary markets, a higher price usually reduces demand, but luxury products can work differently because price may carry information. An expensive item can signal scarcity, exclusivity or social status, so lowering the price too far may actually weaken part of its symbolic value. This does not mean consumers ignore quality, but it shows that price can function not only as a cost but also as a signal.",
    "expr": [
      "Price can function not only as a cost but also as a signal."
    ]
  },
  {
    "src": "#34",
    "cat": "Economics",
    "framework": "Expectation → Behavior → Outcome → Feedback",
    "q": "Can predictions actually change the future they predict?",
    "answer": "Yes, when people change their behavior because they believe a prediction. For example, if consumers expect a shortage, they may buy more immediately, and that extra demand can help create the shortage they feared. Financial markets can work similarly when expectations influence buying and selling. Predictions therefore do not need to determine reality directly in order to influence it; expectations can become part of the causal process.",
    "expr": [
      "Expectations do not have to determine reality in order to influence it."
    ]
  },
  {
    "src": "#12",
    "cat": "Psychology",
    "framework": "External metric → Adaptation → Well-being",
    "q": "Why does professional success not always make people happier?",
    "answer": "Professional success can improve people's lives, especially when it provides financial security and a sense of achievement. However, people adapt quickly to higher salaries, promotions and status, and they may then compare themselves with an even more successful group. This means the target can keep moving. I think the deeper issue is that external achievement and well-being overlap, but they are not identical. A sustainable idea of success also needs to consider autonomy, relationships, meaning and whether achievement actually supports the life a person wants.",
    "expr": [
      "External achievement and well-being overlap, but they are not identical."
    ]
  },
  {
    "src": "#13",
    "cat": "Business",
    "framework": "Function → Trust → Identity",
    "q": "Why are people willing to pay more for branded products?",
    "answer": "A brand can create value beyond the physical product. It may reduce uncertainty because consumers expect a familiar company to provide consistent quality, but brands can also carry social and personal meaning. People sometimes choose products that reflect the identity they want to express. So paying more for a brand is not automatically irrational, although consumers can certainly overpay. The useful distinction is between the functional value of an object and the additional symbolic or informational value created by the brand.",
    "expr": [
      "A brand can create value beyond the physical product."
    ]
  },
  {
    "src": "#14",
    "cat": "Psychology",
    "framework": "More information → Bias → Judgment",
    "q": "Do online reviews always help consumers make better decisions?",
    "answer": "They help, but they do not automatically produce better judgment. Reviews can reduce information asymmetry by showing experiences that sellers cannot easily communicate themselves. At the same time, reviewers are not a random sample, ratings can influence later ratings, and consumers may focus too heavily on a single number. I therefore see reviews as evidence rather than a final answer. More information is useful only if we also understand how that information was produced.",
    "expr": [
      "More information is useful only if we understand how it was produced."
    ]
  },
  {
    "src": "#15",
    "cat": "Economics",
    "framework": "Price → Hidden cost → Externality",
    "q": "Why can very cheap products be more expensive for society than they appear?",
    "answer": "The price paid by the consumer may represent only part of the true cost. If production creates pollution, poor labor conditions or large amounts of waste, some costs are effectively shifted to workers, communities or the future. Economists describe this as an externality. This does not mean every cheap product is harmful, but it shows why market price and social cost should not automatically be treated as the same thing.",
    "expr": [
      "Market price and social cost should not automatically be treated as the same thing."
    ]
  },
  {
    "src": "#16",
    "cat": "Psychology",
    "framework": "Friction ↓ → Salience ↓ → Spending",
    "q": "Why can Buy Now, Pay Later encourage people to spend more?",
    "answer": "BNPL changes how a purchase feels by dividing one large payment into several smaller ones. That can be genuinely useful for cash-flow management, but it also reduces the psychological friction of paying. Consumers may focus on whether they can afford the first installment rather than whether the total purchase fits their budget. In other words, making payment easier can change behavior even when the underlying price has not changed.",
    "expr": [
      "Making payment easier can change behavior even when the underlying price has not changed."
    ]
  },
  {
    "src": "#17",
    "cat": "Psychology",
    "framework": "Wanting → Purchase → Liking",
    "q": "Why can buying something feel exciting even though spending money is a loss?",
    "answer": "The two feelings can exist at the same time. Paying involves giving up money, which can create a sense of loss, but shopping also includes anticipation, choice and the feeling of obtaining something desirable. Psychology also distinguishes wanting from liking: the motivation to pursue a reward can be extremely strong even if the pleasure after receiving it is relatively short-lived. So a transaction can simultaneously feel like losing money and gaining a small reward.",
    "expr": [
      "A transaction can simultaneously feel like losing money and gaining a reward."
    ]
  },
  {
    "src": "#18",
    "cat": "Psychology",
    "framework": "Loss → Reference point → Future value",
    "q": "Why do people find it so difficult to accept losses?",
    "answer": "People tend to experience losses more strongly than equivalent gains, so accepting a loss can feel like admitting that an earlier decision was wrong. This becomes especially problematic when sunk costs are involved. Once time or money cannot be recovered, the rational question is not how much has already been invested, but which option offers the greatest future value from this point onward. Past decisions explain the current situation; they should not automatically determine the next decision.",
    "expr": [
      "Past decisions explain the current situation; they should not automatically determine the next decision."
    ]
  },
  {
    "src": "#19",
    "cat": "Psychology",
    "framework": "Anticipation → Event → Memory",
    "q": "Can waiting for something actually make people happier?",
    "answer": "Yes, because enjoyment does not begin only when an event happens. Planning a trip, imagining a purchase or looking forward to a celebration can create positive emotions for days or even months beforehand. In that sense, happiness has a timeline. The risk is that anticipation can create unrealistic expectations, so reality may feel disappointing. The goal is probably to enjoy looking forward to something without requiring the real experience to match an idealized version perfectly.",
    "expr": [
      "Enjoyment does not begin only when an event happens."
    ]
  },
  {
    "src": "#20",
    "cat": "Psychology",
    "framework": "Discomfort → Reflection → Value",
    "q": "Is boredom always a negative experience?",
    "answer": "No. Boredom is uncomfortable, but discomfort can sometimes perform a useful function. When every empty moment is filled with notifications or entertainment, people have fewer opportunities for mind-wandering, reflection and spontaneous thought. I would not argue that boredom is always beneficial, but eliminating it completely may also remove some useful mental space. The broader lesson is that removing discomfort is not always the same as removing something useless.",
    "expr": [
      "Removing discomfort is not always the same as removing something useless."
    ]
  },
  {
    "src": "#21",
    "cat": "Psychology",
    "framework": "Popularity → Social proof → More popularity",
    "q": "Why do popular products often become even more popular?",
    "answer": "When people are uncertain, they often use other people's choices as information. A crowded restaurant or a highly downloaded app can therefore appear safer or better simply because many others have already chosen it. This creates social proof, and the new customers then make the product look even more popular. Popularity can therefore become a cause of future popularity, not merely a result of underlying quality.",
    "expr": [
      "Popularity can become a cause of future popularity."
    ]
  },
  {
    "src": "#22",
    "cat": "Finance",
    "framework": "Income ↑ → Standard ↑ → Freedom ?",
    "q": "Why do some people not feel richer even after their income increases?",
    "answer": "One reason is lifestyle inflation. As income rises, people often upgrade housing, travel, restaurants or other regular expenses, so much of the additional money becomes part of a new normal. Their reference group may also change, which can make a higher income feel ordinary. As a result, earning more does not necessarily create the same increase in financial freedom. What matters is not only how much income rises, but how much of that increase remains available for future choices.",
    "expr": [
      "What matters is not only how much income rises, but how much remains available for future choices."
    ]
  },
  {
    "src": "#23",
    "cat": "Psychology",
    "framework": "Options ↑ → Cognitive cost ↑ → Satisfaction ↓",
    "q": "Why can having too many choices make people less satisfied?",
    "answer": "More choice increases freedom at first, but every additional option also creates another comparison. When the number becomes very large, people may spend more time searching, worry more about missing a better alternative and regret their final choice more easily. So optimization itself has a cost. A good decision environment should provide meaningful options without requiring people to compare everything that is theoretically available.",
    "expr": [
      "Optimization itself has a cost."
    ]
  },
  {
    "src": "#24",
    "cat": "Psychology",
    "framework": "Price → Zero → Emotional response",
    "q": "Why does the word 'free' have such a strong effect on consumers?",
    "answer": "Zero is psychologically different from an ordinary discount because there is no visible monetary loss. That can make a free option feel almost riskless and encourage people to choose it without comparing alternatives carefully. However, a zero price does not mean zero cost. People may still pay with time, attention, personal data or additional purchases. The useful question is therefore not only what the price is, but where the cost has moved.",
    "expr": [
      "A zero price does not mean zero cost; the cost may have moved somewhere else."
    ]
  },
  {
    "src": "#25",
    "cat": "Business",
    "framework": "Default → Inertia → Recurring payment",
    "q": "Why do people keep paying for subscriptions they rarely use?",
    "answer": "Subscriptions often continue by default, so cancelling requires an active decision while continuing requires no action at all. Because each monthly payment may be small, people also have little incentive to review every service regularly. This combination of defaults, low salience and inertia can keep payments going long after the original motivation has disappeared. It shows that defaults are not neutral: they can shape behavior simply by determining what happens when people do nothing.",
    "expr": [
      "Defaults are not neutral; they shape what happens when people do nothing."
    ]
  },
  {
    "src": "#2",
    "cat": "Finance",
    "framework": "Cost → Diversification → Discipline",
    "q": "Why have index funds become so popular among ordinary investors?",
    "answer": "I think their popularity comes from a combination of simplicity, low costs and diversification. Instead of trying to identify a few winning companies, investors can own a broad part of the market through one fund. This also reduces the pressure to make frequent decisions, which matters because people can easily become emotional when markets rise or fall. So the attraction is not that index funds guarantee high returns, but that they make a disciplined long-term strategy easier to follow.",
    "expr": [
      "The attraction is not that X guarantees Y, but that it makes Z easier to follow.",
      "A simple strategy can be valuable because it reduces the number of decisions people have to get right."
    ]
  },
  {
    "src": "#3",
    "cat": "Business",
    "framework": "Function → Signal → Identity",
    "q": "Why are some consumers willing to pay extremely high prices for luxury products?",
    "answer": "Because the value of a luxury product is not purely functional. People may also be paying for craftsmanship, scarcity, brand history and the social meaning attached to the product. In some cases, a high price can even strengthen its appeal because it makes the item more exclusive and allows it to function as a status signal. So price is not always just a cost to the consumer; it can also become part of what the consumer is buying.",
    "expr": [
      "The value of X is not purely functional.",
      "Price is not always just a cost; it can also become part of what the consumer is buying."
    ]
  },
  {
    "src": "#4",
    "cat": "Technology",
    "framework": "Abundance → Scarcity → Incentive",
    "q": "Why has human attention become so valuable to technology companies?",
    "answer": "The main reason is that information has become abundant while human attention is still limited. People only have a certain number of hours in a day, so platforms compete to capture as much of that limited resource as possible. If more attention leads to more advertising revenue or more user activity, companies have a strong incentive to design products that keep people engaged. In other words, technological abundance can make the remaining scarce resource even more valuable.",
    "expr": [
      "Information has become abundant while human attention is still limited.",
      "Technological abundance can make the remaining scarce resource even more valuable."
    ]
  },
  {
    "src": "#5",
    "cat": "Finance",
    "framework": "Belief → Herding → Price → Feedback",
    "q": "Why can intelligent people still get caught in financial bubbles?",
    "answer": "Being intelligent does not make people immune to social pressure or uncertainty. During a bubble, rising prices can look like evidence that optimistic investors were right, while seeing other people make money creates a fear of missing out. That can encourage even cautious people to join the market, which pushes prices higher and appears to confirm the original optimism. The problem is therefore not simply individual irrationality; it is also the feedback loop created by many people reacting to one another.",
    "expr": [
      "Being intelligent does not make people immune to X.",
      "The problem is not simply individual behavior; it is also the feedback loop created by people reacting to one another."
    ]
  },
  {
    "src": "#6",
    "cat": "Technology",
    "framework": "Automation → Autonomy → Oversight",
    "q": "How might AI agents change the way people work in the future?",
    "answer": "AI agents could move automation from individual tasks toward entire workflows. Instead of only answering a question, an agent may be able to plan several steps, use different tools and complete part of a project with limited supervision. That could make workers more productive, but it also changes the skills humans need. Defining goals, checking results and deciding when not to trust an automated system may become more important as the technology becomes more autonomous.",
    "expr": [
      "Automation may move from individual tasks toward entire workflows.",
      "As technology becomes more autonomous, human judgment can become more important rather than less."
    ]
  },
  {
    "src": "#7",
    "cat": "Economics",
    "framework": "Institutions → Human Capital → Productivity → Growth",
    "q": "Why do some countries become much richer than others over time?",
    "answer": "There is rarely a single explanation. Natural resources can help, but long-term prosperity also depends on institutions, education, infrastructure, innovation, trade and social trust. These factors interact: better institutions can encourage investment, education can raise productivity, and higher productivity can create more resources for further development. I would therefore see economic development as a system of reinforcing factors rather than the result of one simple policy.",
    "expr": [
      "There is rarely a single explanation.",
      "It is better understood as a system of reinforcing factors rather than the result of one simple cause."
    ]
  },
  {
    "src": "#8",
    "cat": "Business",
    "framework": "Autonomy → Incentives → Risk → Well-being",
    "q": "Does turning a hobby into a career necessarily make people happier?",
    "answer": "Not necessarily. Earning money from something you enjoy can provide autonomy and a strong sense of purpose, but it can also change your relationship with the activity. Once income depends on views, algorithms or constant output, a hobby can start to feel like an obligation. So greater freedom can come with greater uncertainty and pressure. Whether it improves well-being depends partly on how much control a person can keep over their time and creative choices.",
    "expr": [
      "Greater freedom can come with greater uncertainty and pressure.",
      "Once income depends on X, an enjoyable activity can start to feel like an obligation."
    ]
  },
  {
    "src": "#9",
    "cat": "Business",
    "framework": "Users → Value → More Users → Feedback",
    "q": "Why are companies with strong network effects so difficult to compete with?",
    "answer": "A network effect means that a product becomes more useful as more people use it. That creates a self-reinforcing advantage: a large user base attracts more users, which can make the service even more valuable. New competitors therefore face a difficult problem because they may need a large network before their product becomes equally attractive. However, network effects are not permanent protection; they can weaken if users can switch easily or if a new technology changes what people value.",
    "expr": [
      "A large user base can create a self-reinforcing advantage.",
      "Network effects are powerful, but they are not permanent protection."
    ]
  },
  {
    "src": "#10",
    "cat": "Psychology",
    "framework": "Choice → Opportunity Cost → Time Allocation",
    "q": "Why might time be considered a more valuable resource than money?",
    "answer": "Money is scarce, but it can often be earned again, whereas time is fundamentally irreversible. Every hour spent on one activity cannot be used for another, which means even enjoyable choices have an opportunity cost. Higher income can help people save time by paying for convenience, but it cannot create unlimited hours. That is why I think wealth should sometimes be measured not only by how much money people have, but also by how much control they have over their time.",
    "expr": [
      "Every choice carries an opportunity cost.",
      "Wealth can be measured not only by money, but also by control over one's time."
    ]
  },
  {
    "src": "#11",
    "cat": "Business",
    "framework": "Convenience → Default → Recurring Spending",
    "q": "Why has the subscription business model become so common?",
    "answer": "Subscriptions are attractive because they can benefit both companies and consumers in different ways. Consumers get convenient access without paying a large amount upfront, while companies receive more predictable recurring revenue. The downside is that automatic renewal reduces the need to make a fresh purchasing decision, so people may keep paying for services they barely use. In that sense, convenience can remove useful friction as well as unnecessary friction.",
    "expr": [
      "Automatic renewal reduces the need to make a fresh purchasing decision.",
      "Convenience can remove useful friction as well as unnecessary friction."
    ]
  },
  {
    "src": "#30",
    "cat": "Finance",
    "framework": "Expectation → Surprise → Price reaction",
    "q": "Why can stock prices fall even when a company reports good results?",
    "answer": "I think the key point is that financial markets react to surprises rather than information in isolation. Investors usually form expectations before earnings are announced, so a strong result may already be reflected in the share price. If the actual figures are good but still weaker than expected, investors may become disappointed and sell the stock. In other words, what matters is not simply whether the news is positive, but whether it is better or worse than what the market has already priced in.",
    "expr": [
      "Markets react to surprises rather than information in isolation.",
      "What matters is not simply whether X, but whether Y."
    ]
  },
  {
    "src": "#31",
    "cat": "Finance",
    "framework": "Observation → Cause → Signal → Effect",
    "q": "Do lower interest rates always have a positive effect on the stock market?",
    "answer": "Not necessarily. Lower interest rates can support stock prices because borrowing becomes cheaper and future corporate earnings may be valued more highly. However, the same rate cut can send a very different signal if it happens because the economy is weakening rapidly. In that case, investors may focus more on the underlying cause than on the lower rate itself. So I would say the effect depends on context: the same policy action can have different implications depending on why it happened.",
    "expr": [
      "The same event can have different implications depending on its underlying cause.",
      "The effect depends on context rather than the event in isolation."
    ]
  },
  {
    "src": "#35",
    "cat": "Psychology",
    "framework": "Goal → Proxy → Incentive → Gaming",
    "q": "Why do people often confuse being busy with being productive?",
    "answer": "One reason is that busyness is much easier to observe than real productivity. The value of good work can be difficult to measure, while meetings, messages and long working hours are highly visible. Once these visible activities become a proxy for performance, people have an incentive to optimize the proxy rather than the real goal. This is why someone can appear extremely busy without producing much useful output. The problem is not activity itself, but confusing a visible measure with the outcome we actually care about.",
    "expr": [
      "The problem is not X itself, but confusing X with Y.",
      "What gets measured influences what people optimize for."
    ]
  }
];


// Imported Article #37
speakingCards.push(...[
  {
    "src": "#37",
    "cat": "Technology & AI",
    "framework": "Capability → Lower friction → Overreliance risk → Human verification",
    "q": "Do you think people will rely too much on AI when making important decisions?",
    "answer": "I think that risk is quite real, especially when AI systems become accurate enough to earn people's trust most of the time. The problem is that once getting an answer becomes almost effortless, checking that answer can start to feel like unnecessary work. In low-stakes situations that may not matter much, but in areas such as finance, healthcare or recruitment, a confident answer can hide uncertain assumptions. At the same time, I don't think the solution is to avoid AI, because human judgment is also inconsistent and biased. A better approach is to use AI for what it does well, such as processing large amounts of information, while keeping meaningful human verification for decisions where the cost of being wrong is high.",
    "expr": [
      "The problem is that once X becomes almost effortless, Y can start to feel like unnecessary work.",
      "The solution is not to avoid X, but to define where human judgment still matters.",
      "The cost of being wrong is high."
    ]
  },
  {
    "src": "#37",
    "cat": "Technology & AI",
    "framework": "Abundance → Scarcity shift → Judgment → Value",
    "q": "What skills may become more valuable as AI becomes more widely used?",
    "answer": "I think judgment will become more valuable, although that word covers several different skills. If AI makes it cheap to generate summaries, forecasts and first drafts, simply producing an answer may no longer be enough to distinguish one worker from another. What matters more is knowing whether the answer addresses the right question, which assumptions need to be checked, and what evidence would change the conclusion. This is similar to what happens in economics when one resource becomes abundant: value tends to move toward whatever remains scarce. So I don't think expertise will disappear. It may shift from remembering or producing information toward evaluating it, combining it with context, and taking responsibility for the final decision.",
    "expr": [
      "Simply producing an answer may no longer be enough to distinguish one person from another.",
      "Value tends to move toward whatever remains scarce.",
      "Expertise may shift from producing information toward evaluating it."
    ]
  }
]);
