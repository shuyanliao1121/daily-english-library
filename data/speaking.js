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


// Imported Article #38
speakingCards.push(...[
  {
    "src": "#38",
    "cat": "Consumer Psychology",
    "framework": "Incentive → New reference point → Target substitution → Extra spending",
    "q": "Why do discounts and rewards sometimes make people spend more rather than save money?",
    "answer": "I think the main reason is that a reward can change what people are trying to achieve. At first, a shopper may simply want to buy one useful product, but once a discount or free-shipping threshold appears, reaching that target can become a goal in itself. This is especially powerful when the reward feels almost within reach, because people dislike the feeling of missing a benefit they could have obtained. As a result, they may spend more to save a smaller amount. So I would say promotions do not just reduce prices; they can also reshape the decision by changing the reference point people use.",
    "expr": [
      "A reward can change what people are trying to achieve.",
      "Reaching the target can become a goal in itself.",
      "Promotions can reshape the decision by changing the reference point."
    ]
  },
  {
    "src": "#38",
    "cat": "Consumer Psychology",
    "framework": "Limited attention → Framing → Perceived value → Better comparison",
    "q": "Do you think consumers are easily influenced by the way prices are presented?",
    "answer": "Yes, to some extent, because people usually make shopping decisions with limited time and attention. For example, many consumers may prefer a product advertised with free shipping even when another seller offers a lower total price but charges separately for delivery. The word 'free' is very noticeable, while the total cost requires a little more calculation. I don't think this means consumers are irrational in every situation; using shortcuts is often necessary. However, when the purchase is expensive or the promotion encourages extra spending, it is useful to ignore the label and compare the final outcomes instead.",
    "expr": [
      "People usually make decisions with limited time and attention.",
      "The label is more noticeable than the total cost.",
      "It is useful to ignore the label and compare the final outcomes instead."
    ]
  }
]);


// Imported Article #39
speakingCards.push(...[
  {
    "src": "#39",
    "cat": "Finance & Economics",
    "framework": "Higher income → Lifestyle adaptation → Recurring costs → Limited wealth accumulation",
    "q": "Why do some people fail to save more even after their income increases?",
    "answer": "I think one major reason is that spending often adapts to income. When people start earning more, some upgrades are reasonable, but they can gradually become part of the normal lifestyle. A nicer apartment, more convenient transport or several small subscriptions may not seem expensive individually, yet together they can absorb most of the extra income. I also think recurring costs matter more than people expect because they continue every month. So a higher salary does not automatically translate into greater financial security; what matters is how much of the additional cash flow is eventually converted into savings, investments or lower debt.",
    "expr": [
      "Spending often adapts to income.",
      "Small upgrades can gradually become part of the normal lifestyle.",
      "A higher salary does not automatically translate into greater financial security."
    ]
  },
  {
    "src": "#39",
    "cat": "Finance & Economics",
    "framework": "Income flow → Assets and liabilities → Flexibility → Broader financial position",
    "q": "Is salary the best way to judge whether someone is financially successful?",
    "answer": "Not really. Salary is important because it determines how much money is coming in, but it only describes a flow of income. It tells us very little about a person's savings, debt, investments or fixed expenses. Someone with a high salary may still have little financial flexibility if most of that income is already committed, while someone earning less may have built substantial assets over time. I would therefore look at the broader financial position rather than one headline number. Income matters, but wealth and resilience show how many choices a person can actually afford to make.",
    "expr": [
      "It only describes a flow of income.",
      "I would look at the broader financial position rather than one headline number.",
      "Wealth and resilience show how many choices a person can actually afford to make."
    ]
  }
]);


// Imported Article #40
speakingCards.push(...[
  {
    "src": "#40",
    "cat": "Business",
    "framework": "Learning benefit → Causality check → Context → Differentiation",
    "q": "Do you think companies should copy successful ideas from their competitors?",
    "answer": "Yes, but I think they should copy very selectively. Learning from competitors can save time because a company does not need to rediscover every good practice from zero. However, the visible feature may not be the real reason a competitor is successful. A strategy can depend on its customer base, brand, technology or cost structure, so the same idea may produce a very different result elsewhere. I would therefore ask what makes the strategy work before copying it. Companies should learn from competitors without allowing benchmarking to replace independent judgment.",
    "expr": [
      "The visible feature may not be the real reason for success.",
      "The same idea may produce a very different result elsewhere.",
      "Companies should learn from competitors without allowing benchmarking to replace independent judgment."
    ]
  },
  {
    "src": "#40",
    "cat": "Business",
    "framework": "Successful innovation → Imitation → New baseline → Scarcer differentiation",
    "q": "Why is it difficult for businesses to remain different from their competitors?",
    "answer": "I think successful ideas naturally attract imitation. If one company introduces a feature that customers clearly value, competitors have a strong incentive to offer something similar rather than risk falling behind. The interesting part is that once everyone adopts the feature, it stops being a major advantage and becomes a baseline expectation. This means companies are constantly searching for a new source of differentiation. In that sense, competition creates a moving target: today's innovation can become tomorrow's minimum requirement.",
    "expr": [
      "Successful ideas naturally attract imitation.",
      "It stops being a major advantage and becomes a baseline expectation.",
      "Today's innovation can become tomorrow's minimum requirement."
    ]
  }
]);


// Imported Article #41
speakingCards.push(...[
  {
    "src": "#41",
    "cat": "Psychology",
    "framework": "Freedom → Comparison cost → Opportunity cost → Satisfaction",
    "q": "Do you think having more choices always makes consumers happier?",
    "answer": "No, I don't think more choice always leads to greater satisfaction. Having several alternatives is useful because people have different needs, but after a certain point the comparison itself becomes costly. If I have to evaluate dozens of similar products, I may spend a lot of time worrying about small differences. More importantly, a large choice set makes the options I reject more visible, so even after making a good decision I can imagine that another one might have been better. I think choice is most helpful when people have enough alternatives to match their preferences but also have a clear way to narrow them down.",
    "expr": [
      "More choice does not always lead to greater satisfaction.",
      "After a certain point, the comparison itself becomes costly.",
      "Choice is most helpful when people have a clear way to narrow the options down."
    ]
  },
  {
    "src": "#41",
    "cat": "Psychology",
    "framework": "Lower search friction → More information → Higher evaluation cost → Greater reliance on filters",
    "q": "How has technology changed the way people make decisions?",
    "answer": "Technology has made it much easier to discover alternatives, which is generally a good thing, but it has also changed where the difficulty lies. In the past, people might struggle to find enough information, whereas today the problem is often deciding what deserves attention. We can compare hundreds of hotels, jobs or products in minutes, but processing all that information is impossible. As a result, people rely more on ratings, rankings, algorithms and recommendations. So technology has reduced the friction of finding options, but in many cases it has increased the importance of filtering them well.",
    "expr": [
      "Technology has changed where the difficulty lies.",
      "The problem is often deciding what deserves attention.",
      "Technology has reduced the friction of finding options."
    ]
  }
]);


// Imported Article #42
speakingCards.push(...[
  {
    "src": "#42",
    "cat": "Behavioral Economics",
    "framework": "Past investment → Sunk cost → Fear of waste → Continued commitment",
    "q": "Why do people sometimes continue doing something even when it is no longer enjoyable or useful?",
    "answer": "I think people often become emotionally attached to what they have already invested. If someone has spent years on a course, a project or even a hobby, stopping can feel like admitting that all that effort was wasted. The problem is that past costs cannot usually be recovered by continuing. I think a better approach is to separate what is already gone from what the investment has actually created, such as skills or useful relationships. Then the person can ask whether continuing still makes sense from today onward rather than simply protecting the past.",
    "expr": [
      "Stopping can feel like admitting that all that effort was wasted.",
      "Past costs cannot usually be recovered by continuing.",
      "It makes more sense to ask whether continuing is worthwhile from today onward."
    ]
  },
  {
    "src": "#42",
    "cat": "Behavioral Economics",
    "framework": "Friction → Scarcity signal → Interpretation → Higher or lower perceived value",
    "q": "Can making a product difficult to obtain make people want it more?",
    "answer": "Yes, in some situations. If a product is difficult to obtain because demand is genuinely high or supply is limited, the difficulty can act as a signal that other people value it. Waiting can also create anticipation, so customers may become more emotionally invested before they receive the product. However, the effect depends heavily on how people interpret the obstacle. If the delay feels artificial or badly managed, it can reduce trust instead. So difficulty can increase perceived value, but only when the friction tells a convincing story.",
    "expr": [
      "The difficulty can act as a signal that other people value it.",
      "The effect depends heavily on how people interpret the obstacle.",
      "Friction can increase perceived value when it tells a convincing story."
    ]
  }
]);


// Imported Article #43
speakingCards.push(...[
  {
    "src": "#43",
    "cat": "Business",
    "framework": "Existing system → Switching cost → Temporary disruption → Decision to stay",
    "q": "Why do people sometimes keep using a product even when a better alternative exists?",
    "answer": "I think the main reason is that people compare more than product quality. If I already have years of files, habits, subscriptions or contacts inside one system, moving to another one can take a lot of time and effort. The new product therefore has to be better by enough to justify the transition, not just slightly better on paper. In some cases staying is actually rational because the existing system already works well. So I would say a superior alternative does not automatically create a strong reason to switch; the cost of moving matters as well.",
    "expr": [
      "People compare more than product quality.",
      "The new product has to be better by enough to justify the transition.",
      "A superior alternative does not automatically create a strong reason to switch."
    ]
  },
  {
    "src": "#43",
    "cat": "Business",
    "framework": "Quality → Early adoption → Network effects → Market position",
    "q": "Do you think the most popular products are usually the best products?",
    "answer": "Not necessarily. Quality obviously matters, but popularity can also reflect timing, distribution and network effects. Once a product has many users, it may become more useful simply because other people and businesses already support it. That can attract even more users and make it difficult for a new competitor to enter, even if the competitor has some better features. I think market share tells us something important, but it does not tell us the whole causal story. We still need to ask how the product became popular and what keeps its position strong.",
    "expr": [
      "Popularity can reflect more than product quality.",
      "Market share does not tell us the whole causal story.",
      "We still need to ask what keeps its position strong."
    ]
  }
]);


// Imported Article #44
speakingCards.push(...[
  {
    "src": "#44",
    "cat": "Society & Culture",
    "framework": "Uncertainty → Social proof → Lower information cost → Possible imitation",
    "q": "Why are people often influenced by what other people choose?",
    "answer": "I think other people's choices are useful when we do not have enough information ourselves. For example, if I am in an unfamiliar city, a busy restaurant may seem safer than an empty one because I assume local customers know something I don't. Following others can therefore save time and reduce uncertainty. However, I would not treat popularity as perfect evidence, because people may simply be copying one another. So the crowd is most useful when its members are making reasonably independent judgments rather than reacting to the same trend.",
    "expr": [
      "Following others can save time and reduce uncertainty.",
      "I would not treat popularity as perfect evidence.",
      "The crowd is most useful when its members are making reasonably independent judgments."
    ]
  },
  {
    "src": "#44",
    "cat": "Society & Culture",
    "framework": "Visible metrics → Social proof → Algorithmic amplification → Stronger conformity",
    "q": "Can social media make people more likely to follow trends?",
    "answer": "Yes, definitely, because social media makes popularity extremely visible. Users can immediately see view counts, likes, rankings and comments, so they receive social information before they have formed an independent opinion. Algorithms can strengthen this effect by giving already popular content more exposure, which then produces even more engagement. I think this can be useful for discovering interesting content, but it also means that a large number does not always represent a large amount of independent evidence. Sometimes popularity is partly the result of earlier popularity.",
    "expr": [
      "Social media makes popularity extremely visible.",
      "A large number does not always represent a large amount of independent evidence.",
      "Sometimes popularity is partly the result of earlier popularity."
    ]
  }
]);


// Imported Article #45
speakingCards.push(...[
  {
    "src": "#45",
    "cat": "Psychology",
    "framework": "Prior belief → Selective interpretation → Identity or commitment → Weak updating",
    "q": "Why is it sometimes difficult for people to change their opinions even when they receive new information?",
    "answer": "I think one reason is that people do not process every piece of information in a completely neutral way. Once we already believe something, evidence that supports it is easier to notice and accept, while contradictory evidence may receive much more criticism. This becomes even stronger when the opinion is connected to identity, reputation or a decision we have already invested in. So changing an opinion is not always just an intellectual process; it can also feel like admitting that an earlier judgment was wrong. I think a useful habit is to decide in advance what kind of evidence would genuinely make us reconsider our view.",
    "expr": [
      "People do not process every piece of information in a completely neutral way.",
      "Changing an opinion is not always just an intellectual process.",
      "It is useful to decide in advance what kind of evidence would make us reconsider our view."
    ]
  },
  {
    "src": "#45",
    "cat": "Psychology",
    "framework": "More access → Selective search → Personalization → Quality of exposure",
    "q": "Do you think the internet helps people become better informed?",
    "answer": "It can, because the internet gives people access to an enormous range of information that would have been difficult to find in the past. However, access and exposure are not the same thing. People may search mainly for information that agrees with them, and recommendation systems can keep showing similar material because that is what they usually click. As a result, having more information available does not automatically mean encountering a wider range of evidence. I think the internet is most useful when people actively compare credible sources and make room for information that could challenge their first impression.",
    "expr": [
      "Access and exposure are not the same thing.",
      "Having more information available does not automatically mean encountering a wider range of evidence.",
      "People should make room for information that could challenge their first impression."
    ]
  }
]);


// Imported Article #46
speakingCards.push(...[
  {
    "src": "#46",
    "cat": "Behavioral Economics",
    "framework": "Limited attention → Friction → Inertia → Possible recommendation signal",
    "q": "Why do people often keep default settings instead of changing them?",
    "answer": "I think the main reason is that changing a setting requires some effort, while keeping the default requires almost none. People have limited attention, so they naturally focus on decisions that feel more urgent. In addition, a default can look like a recommendation because users may assume that the organization chose it for a good reason. This does not mean people are always irrational; sometimes the default is perfectly suitable. However, when the decision has long-term consequences, I think it is worth checking whether the easiest option is also the option that actually fits our goals.",
    "expr": [
      "Keeping the default requires almost no effort.",
      "A default can look like a recommendation.",
      "The easiest option is not always the option that best fits our goals."
    ]
  },
  {
    "src": "#46",
    "cat": "Behavioral Economics",
    "framework": "Convenience → Consumer consent → Friction asymmetry → Fair design",
    "q": "Should companies be allowed to automatically renew customers' subscriptions?",
    "answer": "Yes, but I think automatic renewal should be designed very carefully. It can be convenient for customers who genuinely want an uninterrupted service, so banning it completely would remove some value. The problem appears when companies make renewal effortless but cancellation deliberately difficult. In that case, the business may be earning money from inattention rather than satisfaction. I would prefer a system with clear reminders, transparent prices and a simple cancellation process. Formal choice is not enough if exercising that choice involves unnecessary friction.",
    "expr": [
      "The business may be earning money from inattention rather than satisfaction.",
      "Formal choice is not enough if exercising that choice involves unnecessary friction.",
      "Convenience should not depend on making the alternative artificially difficult."
    ]
  }
]);


// Imported Article #47
speakingCards.push(...[
  {
    "src": "#47",
    "cat": "Technology & AI",
    "framework": "Efficiency → More capacity → Higher demand and expectations → Actual time outcome",
    "q": "Do you think technology always gives people more free time?",
    "answer": "Not necessarily. Technology can make individual tasks much faster, but that does not mean the saved time automatically becomes leisure. Once a task is cheaper and easier, people often do more of it, and employers or customers may also raise their expectations. For example, if AI makes reports much faster to produce, a company may simply request more reports. So I think the key question is not only how much time a tool saves per task, but what happens to the amount of work afterwards. Efficiency can create free time, but only if some of the new capacity is deliberately left unused.",
    "expr": [
      "Saved time does not automatically become leisure.",
      "The key question is what happens to the amount of work afterwards.",
      "Efficiency can create free time, but only if some of the new capacity is deliberately left unused."
    ]
  },
  {
    "src": "#47",
    "cat": "Technology & AI",
    "framework": "Lower production cost → Higher baseline → New bottleneck → Value of judgment",
    "q": "How might AI change what employers expect from workers?",
    "answer": "I think AI may raise the baseline for how quickly routine work is expected to be completed. If drafting, summarizing and basic analysis become much cheaper, employers may reasonably expect workers to produce more in the same amount of time. However, this could also make human judgment more important, because generating ten options is not useful unless someone can identify which one is actually good. In that sense, automation may move the bottleneck rather than remove it. The valuable skill may shift from producing the first answer to evaluating alternatives and deciding what deserves attention.",
    "expr": [
      "AI may raise the baseline for how quickly routine work is expected to be completed.",
      "Automation may move the bottleneck rather than remove it.",
      "The valuable skill may shift from producing the first answer to evaluating alternatives."
    ]
  }
]);


// Imported Article #48
speakingCards.push(...[
  {
    "src": "#48",
    "cat": "Consumer Psychology",
    "framework": "Low salience → Repetition → Weak tracking → Cumulative cost",
    "q": "Why do people sometimes spend more money on small purchases than they realize?",
    "answer": "I think small purchases are easy to underestimate because each individual payment feels insignificant. People usually notice a large purchase immediately, but spending a few dollars does not create the same sense of financial loss. The problem is that these decisions can repeat very frequently, so a small unit price can turn into a meaningful annual cost. I do not think the solution is to avoid every small pleasure. It is more useful to zoom out occasionally and look at the pattern rather than judging every purchase in isolation.",
    "expr": [
      "A small unit price can turn into a meaningful annual cost.",
      "The solution is not to avoid every small pleasure.",
      "It is useful to look at the pattern rather than judging every purchase in isolation."
    ]
  },
  {
    "src": "#48",
    "cat": "Consumer Psychology",
    "framework": "Convenience → Lower payment friction → Lower salience → Need for monitoring",
    "q": "Do modern payment methods make people more likely to spend money?",
    "answer": "In some situations, yes. Digital wallets and one-click payments remove a lot of unnecessary friction, which is convenient, but that also means there is less time to notice the act of spending. When payment becomes almost invisible, people may focus more on the product and less on the money leaving their account. However, I would not say convenient payments are inherently harmful. The real issue is whether people have another way to monitor their overall spending. Removing friction from payment increases the value of good feedback and budgeting tools.",
    "expr": [
      "There is less time to notice the act of spending.",
      "Convenient payments are not inherently harmful.",
      "Removing friction from payment increases the value of good feedback."
    ]
  }
]);


// Imported Article #49
speakingCards.push(...[
  {
    "src": "#49",
    "cat": "Finance & Economics",
    "framework": "Reward → Targeted behavior → Metric improvement → Possible quality or risk trade-off",
    "q": "Do you think giving employees bonuses always improves their performance?",
    "answer": "No, I think bonuses can be useful, but the result depends heavily on what is being rewarded. If employees receive money for a clear and meaningful outcome, the incentive may increase effort. However, if the company rewards a narrow metric, people may focus on improving that number even when it does not fully represent good performance. For example, rewarding sales volume alone could encourage unnecessary discounts or poor-quality sales. So I think the important question is not whether an incentive is strong, but whether the rewarded behavior is well aligned with the real objective.",
    "expr": [
      "The result depends heavily on what is being rewarded.",
      "People may focus on improving the number rather than the underlying objective.",
      "The rewarded behavior should be well aligned with the real objective."
    ]
  },
  {
    "src": "#49",
    "cat": "Finance & Economics",
    "framework": "Complex work → Imperfect measurement → Hidden effort → Multiple indicators",
    "q": "Why can it be difficult for companies to measure employee performance fairly?",
    "answer": "I think the main difficulty is that valuable work is often more complicated than a single number can show. Some results are easy to measure, such as sales or response time, but qualities like judgment, teamwork and creativity are much harder to quantify. Managers also cannot observe every action an employee takes, so there is always some information asymmetry. In my view, companies usually need a combination of quantitative measures and human judgment. No metric is perfect, so the goal should be to understand what each measure captures and what it leaves out.",
    "expr": [
      "Valuable work is often more complicated than a single number can show.",
      "There is always some information asymmetry.",
      "We need to understand what a measure captures and what it leaves out."
    ]
  }
]);


// Imported Article #50
speakingCards.push(...[
  {
    "src": "#50",
    "cat": "Technology & AI",
    "framework": "Average accuracy → Type of case → Independent context → Selective verification",
    "q": "Do you think people should always follow AI advice when it is usually more accurate than humans?",
    "answer": "No, I don't think higher average accuracy means people should follow AI advice automatically. A system can be excellent on routine cases but still struggle when the situation is unusual or when important local information is missing. Humans can add value if they understand context that the model has not received, although human intuition can obviously be wrong as well. I think the best approach is selective rather than absolute: use AI heavily where it is reliable, but treat meaningful disagreement as a reason to check what information or assumptions differ.",
    "expr": [
      "Higher average accuracy does not justify automatic trust.",
      "Humans can add value when they understand context the model has not received.",
      "Meaningful disagreement can be a reason to check the underlying assumptions."
    ]
  },
  {
    "src": "#50",
    "cat": "Technology & AI",
    "framework": "Efficiency → Skill preservation → Independent judgment → Feedback and review",
    "q": "How can companies make sure that employees do not become too dependent on AI?",
    "answer": "I think companies need to protect some opportunities for independent judgment. If employees always see the AI answer first, they may gradually stop forming their own view and simply confirm what the system suggests. One practical solution is to ask people to make an initial assessment before seeing the recommendation in important cases, and then investigate large disagreements. Training also matters because human expertise is a stock that can weaken when it is not used. The goal should not be to create unnecessary resistance to AI, but to preserve the skills needed to recognize when the system may be outside its comfort zone.",
    "expr": [
      "Companies need to protect some opportunities for independent judgment.",
      "Human expertise is a stock that can weaken when it is not used.",
      "The goal is to preserve the skills needed to recognize unusual cases."
    ]
  }
]);


// Imported Article #51
speakingCards.push(...[
  {
    "src": "#51",
    "cat": "Consumer Psychology",
    "framework": "Automatic renewal → Low salience → Cancellation friction → Inertia",
    "q": "Why do people sometimes keep paying for services they rarely use?",
    "answer": "I think one reason is that automatic payments change the decision from an active purchase into a passive continuation. If a service renews every month, people do not have to decide again whether they want it, while cancelling usually requires at least some attention and effort. The fee may also be small enough that it never feels urgent. As a result, people can keep paying even when their current usage is low. I think a useful test is to ask whether they would actively buy the same service today if the subscription suddenly disappeared.",
    "expr": [
      "Automatic payments turn an active purchase into a passive continuation.",
      "A small cost may never feel urgent enough to reconsider.",
      "I would ask whether I would actively buy the same service today."
    ]
  },
  {
    "src": "#51",
    "cat": "Consumer Psychology",
    "framework": "Consumer convenience → Fair choice → Retention incentives → Long-term trust",
    "q": "Do you think companies should make subscriptions easier to cancel?",
    "answer": "Yes, I think cancellation should generally be simple and transparent. Companies obviously want to retain customers, but retention is more meaningful when it comes from continuing value rather than unnecessary friction. If leaving is deliberately difficult, a company may improve its short-term numbers while damaging trust in the long run. At the same time, I do not think every renewal needs a complicated confirmation process because that would remove much of the convenience of subscriptions. A clear reminder and an easy cancellation route seem like a reasonable balance.",
    "expr": [
      "Retention is more meaningful when it comes from continuing value.",
      "Short-term numbers can improve while long-term trust is damaged.",
      "A clear reminder and an easy cancellation route seem like a reasonable balance."
    ]
  }
]);


// Imported Article #52
speakingCards.push(...[
  {
    "src": "#52",
    "cat": "Behavioral Economics",
    "framework": "Uncertainty → Outcome bias → Process quality → Learning from results",
    "q": "Do you think people judge decisions too much by their results?",
    "answer": "Yes, I think people often treat a good result as proof of a good decision, even when luck played a large role. The problem is that decisions are made before uncertainty is resolved, so we should ask whether the person used the information available at the time sensibly. At the same time, outcomes should not be ignored because repeated failures can reveal weaknesses in our assumptions. I think the fairest approach is to judge the process first and then use the result as new evidence rather than as the entire verdict.",
    "expr": [
      "A good result is not always proof of a good decision.",
      "Decisions are made before uncertainty is resolved.",
      "The result should be treated as new evidence rather than the entire verdict."
    ]
  },
  {
    "src": "#52",
    "cat": "Behavioral Economics",
    "framework": "Initial beliefs → Written record → Outcome → Honest comparison → Better learning",
    "q": "Why is it useful for people to record their reasons before making an important decision?",
    "answer": "I think writing down the reasoning creates a more honest record of what someone actually knew and expected. After an outcome occurs, people naturally remember the past differently and may convince themselves that the result was obvious. A written record makes that harder. It also helps separate an unlucky outcome from a genuine mistake in the decision process. Over time, people can compare their predictions with what actually happened and improve their calibration instead of learning too much from one dramatic success or failure.",
    "expr": [
      "A written record creates a more honest picture of what we knew at the time.",
      "It helps separate an unlucky outcome from a genuine process error.",
      "We should avoid learning too much from one dramatic result."
    ]
  }
]);


// Imported Article #53
speakingCards.push(...[
  {
    "src": "#53",
    "cat": "Finance & Economics",
    "framework": "Uncertain quality → Price as proxy → Supporting evidence → Possible error",
    "q": "Why do some people believe that expensive products are better quality?",
    "answer": "I think price becomes especially influential when people cannot judge quality directly. If two products look similar but one is much more expensive, consumers may assume that the higher price reflects better materials, skilled production or stronger quality control. That inference can sometimes be reasonable, but price is only a proxy, not proof. A company can charge more without improving the product. So I think people should treat price as one signal among several and compare it with reviews, reputation and their own experience.",
    "expr": [
      "Price becomes influential when quality is difficult to judge directly.",
      "Price is a proxy, not proof.",
      "I would treat price as one signal among several."
    ]
  },
  {
    "src": "#53",
    "cat": "Finance & Economics",
    "framework": "Functional quality → Scarcity → Status communication → Different consumer motives",
    "q": "Do you think luxury goods are mainly about quality or social status?",
    "answer": "I think it depends on both the product and the buyer. Some luxury goods genuinely use better materials or more skilled craftsmanship, so part of the price can reflect functional quality. However, exclusivity also matters because owning something expensive can communicate wealth, taste or membership in a particular group. For some consumers that social meaning is part of the value rather than an accidental side effect. I would therefore avoid saying luxury is purely irrational; the important question is what kind of value the buyer is actually purchasing.",
    "expr": [
      "Exclusivity can be part of the value rather than an accidental side effect.",
      "Different consumers may be purchasing different kinds of value.",
      "The important question is what kind of value the buyer is actually purchasing."
    ]
  }
]);


// Imported Article #54
speakingCards.push(...[
  {
    "src": "#54",
    "cat": "Technology & AI",
    "framework": "Task speed → Workflow bottlenecks → Verification → Real output",
    "q": "Do you think AI will make most office workers much more productive?",
    "answer": "I think AI will make many individual tasks much faster, but the effect on overall productivity will depend on the rest of the workflow. Producing a draft may take minutes instead of hours, but someone may still need to check the facts, approve the work and coordinate implementation. In that case, the bottleneck simply moves. So I would measure productivity by useful outcomes rather than by how much content people generate. The biggest gains will probably come when organizations redesign the surrounding process instead of just adding AI to an old workflow.",
    "expr": [
      "The bottleneck may simply move to another stage.",
      "I would measure productivity by useful outcomes rather than output volume.",
      "The biggest gains require changes to the surrounding process."
    ]
  },
  {
    "src": "#54",
    "cat": "Technology & AI",
    "framework": "Abundant generation → Scarce judgment → Verification → Context and responsibility",
    "q": "What human skills may become more important as AI becomes more capable?",
    "answer": "I think judgment will become more valuable because generating a plausible answer is becoming cheaper. People will still need to decide whether an answer is relevant, whether the evidence is reliable and whether an error would have serious consequences. Context also matters because the same AI output may be acceptable for brainstorming but unsafe for a high-stakes decision. So rather than saying human skills will simply disappear, I think their relative value will change: routine production may matter less, while evaluation, questioning and responsibility become more important.",
    "expr": [
      "Generating a plausible answer is becoming cheaper.",
      "The relative value of human skills will change.",
      "Evaluation and judgment become more valuable when production is abundant."
    ]
  }
]);


// Imported Article #55
speakingCards.push(...[
  {
    "src": "#55",
    "cat": "Behavioral Economics",
    "framework": "Lower entry friction → Experience → New reference point → Loss aversion and default continuation",
    "q": "Why are free trials so effective at persuading people to pay for services later?",
    "answer": "I think free trials work partly because they reduce uncertainty, since people can experience a service before paying for it. But there is also a psychological effect. After using premium features for a few weeks, those features can start to feel normal, so cancelling feels more like losing something than simply deciding not to buy it. If the subscription also renews automatically, continuation requires almost no effort. So the trial changes both the information people have and the reference point from which they evaluate the purchase.",
    "expr": [
      "The trial changes the reference point from which people evaluate the purchase.",
      "Cancelling can feel more like losing something than deciding not to buy it.",
      "Free trials reduce uncertainty before payment."
    ]
  },
  {
    "src": "#55",
    "cat": "Behavioral Economics",
    "framework": "Convenience → Informed consent → Default effects → Trust and regulation",
    "q": "Should companies be allowed to convert free trials into paid subscriptions automatically?",
    "answer": "I think automatic conversion can be reasonable if the terms are extremely clear and cancellation is simple. It is convenient for people who genuinely want to continue, so requiring a new payment process every time could create unnecessary friction. However, companies should not rely on customers forgetting the renewal date. A reminder before the first charge would preserve most of the convenience while making the decision more visible. In my view, a good business model should benefit from customers choosing to stay, not from making inattention profitable.",
    "expr": [
      "A good business model should benefit from customers choosing to stay.",
      "A reminder can preserve convenience while making the decision more visible.",
      "Companies should not make inattention profitable."
    ]
  }
]);


// Imported Article #56
speakingCards.push(...[
  {
    "src": "#56",
    "cat": "Business",
    "framework": "Variety benefit → Search costs → Filtering → Quality of choice",
    "q": "Do you think having more choices always benefits consumers?",
    "answer": "Not necessarily. More choice can be valuable because people have a better chance of finding something that matches their preferences, but that only works if they can evaluate the options. When there are thousands of alternatives, search costs rise and people become more dependent on rankings, reviews and recommendations. So I think the quality of the filtering system matters almost as much as the amount of choice itself. In some cases, a smaller but well-organized set of options may actually produce better decisions than a huge catalogue.",
    "expr": [
      "More choice is useful only if people can evaluate the options.",
      "The quality of filtering matters almost as much as the amount of choice.",
      "A larger catalogue does not automatically produce better decisions."
    ]
  },
  {
    "src": "#56",
    "cat": "Business",
    "framework": "Limited attention → Ranking → Visibility → Demand → Feedback",
    "q": "Why do recommendation algorithms have so much influence on online businesses?",
    "answer": "I think their influence comes from the scarcity of attention. Online platforms may contain millions of products or pieces of content, so users cannot inspect everything themselves. Recommendation systems decide what becomes visible, and visibility can directly affect demand. There is also a feedback effect: items that receive more exposure may collect more clicks, sales and reviews, which can then improve their future ranking. That means algorithms do not simply describe what is popular; they can partly shape popularity as well.",
    "expr": [
      "Their influence comes from the scarcity of attention.",
      "Visibility can directly affect demand.",
      "Algorithms can partly shape popularity rather than merely measure it."
    ]
  }
]);
