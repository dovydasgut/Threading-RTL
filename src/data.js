// Mock data for posts and replies
export const mockData = {
  "posts": [
    {
      "id": 1,
      "userType": "OJ",
      "userNumber": null,
      "channel": "@main",
      "distance": "close",
      "duration": "6 min",
      "timestamp": 1705320000000,
      "text": "Serious question: where do people actually find a decent husband these days? Dating apps feel like a lottery, hobbies feel like HR networking, and friends keep saying 'it'll happen when you least expect it'. I expect it now.",
      "hashtag": "#dating",
      "votes": 12
    },
    {
      "id": 2,
      "userType": "OJ",
      "userNumber": null,
      "channel": "@careers",
      "distance": "close",
      "duration": "12 min",
      "timestamp": 1705319400000,
      "text": "Engineering brothers, I need real advice. Graduating mechanical engineering next semester inshallah. Everyone keeps saying 'Aramco or nothing' but I know it's not that simple anymore. Where are the actual opportunities in Riyadh right now? Not looking for wasta answers, I want to know what companies are actually hiring fresh grads and treating them well. NEOM? SABIC? The new giga projects? What's the real situation on the ground?",
      "hashtag": "#engineering",
      "votes": 89
    },
    {
      "id": 3,
      "userType": "OJ",
      "userNumber": null,
      "channel": "@careers",
      "distance": "close",
      "duration": "12 min",
      "timestamp": 1705319400000,
      "text": "Engineering brothers, I need real advice. Graduating mechanical engineering next semester inshallah. Everyone keeps saying 'Aramco or nothing' but I know it's not that simple anymore. Where are the actual opportunities in Riyadh right now? Not looking for wasta answers, I want to know what companies are actually hiring fresh grads and treating them well. NEOM? SABIC? The new giga projects? What's the real situation on the ground?",
      "hashtag": "#engineering",
      "votes": 89
    }
  ],
  "repliesByPostId": {
    "1": [
      {
        "id": 1,
        "userNumber": 1,
        "text": "Stop looking for a husband and start looking for a decent human. The label comes later.",
        "distance": "close",
        "duration": "5 min",
        "timestamp": 1705320060000,
        "votes": 18,
        "parentId": null
      },
      {
        "id": 2,
        "userNumber": 2,
        "text": "@1 This sounds nice but how does that help in practice?",
        "distance": "close",
        "duration": "4 min",
        "timestamp": 1705320120000,
        "votes": 6,
        "parentId": 1
      },
      {
        "id": 3,
        "userType": "OJ",
        "userNumber": null,
        "text": "@2 Concrete examples please. Where exactly do you meet this so-called 'decent human'?",
        "distance": "close",
        "duration": "3 min",
        "timestamp": 1705320180000,
        "votes": 14,
        "parentId": 1
      },
      {
        "id": 4,
        "userNumber": 3,
        "text": "@3 Volunteering, sports clubs, professional communities. Places where people show up consistently.",
        "distance": "close",
        "duration": "2 min",
        "timestamp": 1705320240000,
        "votes": 5,
        "parentId": 1
      },
      {
        "id": 5,
        "userNumber": 4,
        "text": "@4 That still feels very generic tbh.",
        "distance": "close",
        "duration": "1 min",
        "timestamp": 1705320300000,
        "votes": 8,
        "parentId": 1
      },
      {
        "id": 6,
        "userNumber": 5,
        "text": "@4 I did volunteering for a year and met zero single men.",
        "distance": "far",
        "duration": "50s",
        "timestamp": 1705320360000,
        "votes": 4,
        "parentId": 1
      },
      {
        "id": 7,
        "userNumber": 6,
        "text": "@1 Feels like advice people repeat without testing it.",
        "distance": "far",
        "duration": "30s",
        "timestamp": 1705320420000,
        "votes": 12,
        "parentId": 1
      },
      {
        "id": 8,
        "userNumber": 7,
        "text": "Honestly? Friends of friends. If no one can vouch for him, that's already data.",
        "distance": "close",
        "duration": "4 min",
        "timestamp": 1705320130000,
        "votes": 22,
        "parentId": null
      },
      {
        "id": 9,
        "userNumber": 8,
        "text": "@7 This. Social proof matters way more than people admit.",
        "distance": "close",
        "duration": "3 min",
        "timestamp": 1705320190000,
        "votes": 11,
        "parentId": 8
      },
      {
        "id": 10,
        "userType": "OJ",
        "userNumber": null,
        "text": "@7 This is the first answer that sounds actionable.",
        "distance": "close",
        "duration": "2 min",
        "timestamp": 1705320250000,
        "votes": 19,
        "parentId": 8
      },
      {
        "id": 11,
        "userNumber": 9,
        "text": "Hot take: if you keep meeting the wrong men, you're selecting for the wrong traits.",
        "distance": "far",
        "duration": "6 min",
        "timestamp": 1705320050000,
        "votes": -1,
        "parentId": null
      },
      {
        "id": 12,
        "userNumber": 10,
        "text": "@9 Uncomfortable but probably accurate.",
        "distance": "close",
        "duration": "4 min",
        "timestamp": 1705320170000,
        "votes": 7,
        "parentId": 11
      },
      {
        "id": 13,
        "userNumber": 11,
        "text": "@9 Or the dating pool is just objectively rough right now.",
        "distance": "far",
        "duration": "3 min",
        "timestamp": 1705320230000,
        "votes": 5,
        "parentId": 11
      },
      {
        "id": 14,
        "userNumber": 12,
        "text": "@9 This feels like blaming individuals for systemic trash.",
        "distance": "far",
        "duration": "2 min",
        "timestamp": 1705320290000,
        "votes": 9,
        "parentId": 11
      },
      {
        "id": 15,
        "userType": "OJ",
        "userNumber": null,
        "text": "@9 Give an actual trait example then. What should people stop selecting for?",
        "distance": "close",
        "duration": "1 min",
        "timestamp": 1705320350000,
        "votes": 16,
        "parentId": 11
      },
      {
        "id": 16,
        "userNumber": 13,
        "text": "@15 Charisma over reliability. Potential over behavior. Words over patterns.",
        "distance": "close",
        "duration": "30s",
        "timestamp": 1705320410000,
        "votes": 21,
        "parentId": 11
      }
    ],
    "2": [
      {
        "id": 101,
        "userNumber": 1,
        "text": "Bro NEOM is hiring like crazy right now. My cousin just got in as a junior engineer. The pay is insane wallah, but you have to relocate to Tabuk area.",
        "distance": "close",
        "duration": "11 min",
        "timestamp": 1705319460000,
        "votes": 45,
        "parentId": null
      },
      {
        "id": 102,
        "userNumber": 2,
        "text": "@1 What's the starting salary if you don't mind sharing?",
        "distance": "close",
        "duration": "10 min",
        "timestamp": 1705319520000,
        "votes": 12,
        "parentId": 101
      },
      {
        "id": 103,
        "userNumber": 1,
        "text": "@2 Around 18-22k SAR for fresh grads depending on your GPA and interview. Plus housing allowance.",
        "distance": "close",
        "duration": "9 min",
        "timestamp": 1705319580000,
        "votes": 38,
        "parentId": 101
      },
      {
        "id": 104,
        "userNumber": 3,
        "text": "@1 That's actually better than Aramco starting package now subhanallah",
        "distance": "close",
        "duration": "8 min",
        "timestamp": 1705319640000,
        "votes": 22,
        "parentId": 101
      },
      {
        "id": 105,
        "userNumber": 4,
        "text": "Where are you studying akhi? That matters a lot for which companies will even look at your CV.",
        "distance": "close",
        "duration": "10 min",
        "timestamp": 1705319500000,
        "votes": 31,
        "parentId": null
      },
      {
        "id": 106,
        "userType": "OJ",
        "userNumber": null,
        "text": "@4 KFUPM. Mechanical engineering with a minor in renewable energy.",
        "distance": "close",
        "duration": "9 min",
        "timestamp": 1705319560000,
        "votes": 28,
        "parentId": 105
      },
      {
        "id": 107,
        "userNumber": 5,
        "text": "@OJ Mashallah KFUPM is solid. You'll have no problem finding opportunities.",
        "distance": "close",
        "duration": "8 min",
        "timestamp": 1705319620000,
        "votes": 19,
        "parentId": 105
      },
      {
        "id": 108,
        "userNumber": 6,
        "text": "@5 KFUPM is good but let's be honest, KSU engineering is catching up fast. Their new labs are incredible.",
        "distance": "far",
        "duration": "7 min",
        "timestamp": 1705319680000,
        "votes": 8,
        "parentId": 105
      },
      {
        "id": 109,
        "userNumber": 7,
        "text": "@6 Bro what are you talking about? KFUPM has been number 1 in the Kingdom for engineering since forever. KSU doesn't even come close in industry connections.",
        "distance": "close",
        "duration": "6 min",
        "timestamp": 1705319740000,
        "votes": 34,
        "parentId": 105
      },
      {
        "id": 110,
        "userNumber": 6,
        "text": "@7 Industry connections maybe but academically KSU is improving. Plus you don't have to live in Dhahran.",
        "distance": "far",
        "duration": "5 min",
        "timestamp": 1705319800000,
        "votes": 6,
        "parentId": 105
      },
      {
        "id": 111,
        "userNumber": 8,
        "text": "@7 Agreed. KFUPM graduates get priority at Aramco, SABIC, and basically every major company. It's not even a debate.",
        "distance": "close",
        "duration": "4 min",
        "timestamp": 1705319860000,
        "votes": 29,
        "parentId": 105
      },
      {
        "id": 112,
        "userNumber": 9,
        "text": "@6 KAU engineering in Jeddah is also very underrated. Location matters if you want to work in the Red Sea projects.",
        "distance": "far",
        "duration": "3 min",
        "timestamp": 1705319920000,
        "votes": 11,
        "parentId": 105
      },
      {
        "id": 113,
        "userNumber": 10,
        "text": "@9 KAU for engineering? Ya akhi be serious. KFUPM or nothing if you want respect in the field.",
        "distance": "close",
        "duration": "2 min",
        "timestamp": 1705319980000,
        "votes": 15,
        "parentId": 105
      },
      {
        "id": 114,
        "userNumber": 11,
        "text": "Forget the universities argument. The real question is: do you have any internship experience? That's what companies care about now more than your degree.",
        "distance": "close",
        "duration": "8 min",
        "timestamp": 1705319600000,
        "votes": 52,
        "parentId": null
      },
      {
        "id": 115,
        "userType": "OJ",
        "userNumber": null,
        "text": "@11 Did one summer at SABIC and another at a smaller EPC contractor. Both were good experiences alhamdulillah.",
        "distance": "close",
        "duration": "7 min",
        "timestamp": 1705319660000,
        "votes": 41,
        "parentId": 114
      },
      {
        "id": 116,
        "userNumber": 12,
        "text": "@OJ That SABIC internship is gold. They usually convert good interns to full time. Did you apply for their graduate program?",
        "distance": "close",
        "duration": "6 min",
        "timestamp": 1705319720000,
        "votes": 27,
        "parentId": 114
      },
      {
        "id": 117,
        "userNumber": 13,
        "text": "Check out the Diriyah Gate project and Qiddiya. Both are hiring heavily for the next 3-4 years. My friend works at Qiddiya and says they need mechanical engineers badly.",
        "distance": "close",
        "duration": "9 min",
        "timestamp": 1705319540000,
        "votes": 36,
        "parentId": null
      },
      {
        "id": 118,
        "userNumber": 14,
        "text": "@13 Qiddiya seems cool but is it stable? These mega projects sometimes freeze hiring suddenly.",
        "distance": "far",
        "duration": "8 min",
        "timestamp": 1705319600000,
        "votes": 18,
        "parentId": 117
      },
      {
        "id": 119,
        "userNumber": 13,
        "text": "@14 It's backed by PIF directly. As stable as it gets in this economy. They just broke ground on the speed park.",
        "distance": "close",
        "duration": "7 min",
        "timestamp": 1705319660000,
        "votes": 24,
        "parentId": 117
      },
      {
        "id": 120,
        "userNumber": 15,
        "text": "Unpopular opinion: consider the defense sector. SAMI and the local military industries are growing fast and the salaries are competitive with oil companies now.",
        "distance": "far",
        "duration": "7 min",
        "timestamp": 1705319680000,
        "votes": 33,
        "parentId": null
      },
      {
        "id": 121,
        "userNumber": 16,
        "text": "@15 Defense is smart actually. Vision 2030 is pushing hard for local manufacturing. Job security is probably better than giga projects.",
        "distance": "close",
        "duration": "6 min",
        "timestamp": 1705319740000,
        "votes": 21,
        "parentId": 120
      },
      {
        "id": 122,
        "userType": "OJ",
        "userNumber": null,
        "text": "@15 Never thought about defense honestly. Do they take mechanical engineers or is it mostly electrical?",
        "distance": "close",
        "duration": "5 min",
        "timestamp": 1705319800000,
        "votes": 16,
        "parentId": 120
      },
      {
        "id": 123,
        "userNumber": 15,
        "text": "@OJ They need all types bro. Mechanical is actually in high demand for vehicle programs and manufacturing lines. Check their careers page.",
        "distance": "far",
        "duration": "4 min",
        "timestamp": 1705319860000,
        "votes": 19,
        "parentId": 120
      },
      {
        "id": 124,
        "userNumber": 17,
        "text": "What about consulting? McKinsey and BCG have huge offices in Riyadh now. They love engineers.",
        "distance": "close",
        "duration": "3 min",
        "timestamp": 1705319920000,
        "votes": 28,
        "parentId": null
      },
      {
        "id": 125,
        "userNumber": 18,
        "text": "@17 Consulting is brutal hours though. 80+ hours a week is normal. Is the money worth it?",
        "distance": "far",
        "duration": "2 min",
        "timestamp": 1705319980000,
        "votes": 15,
        "parentId": 124
      },
      {
        "id": 126,
        "userNumber": 17,
        "text": "@18 For 2-3 years yes. The exit opportunities are insane. You can jump to any company after.",
        "distance": "close",
        "duration": "1 min",
        "timestamp": 1705320040000,
        "votes": 22,
        "parentId": 124
      },
      {
        "id": 127,
        "userNumber": 19,
        "text": "@17 But they mostly hire from top tier universities abroad. Local grads have a harder time getting in.",
        "distance": "far",
        "duration": "1 min",
        "timestamp": 1705320100000,
        "votes": 11,
        "parentId": 124
      },
      {
        "id": 128,
        "userNumber": 20,
        "text": "Everyone sleeping on the renewable energy sector. ACWA Power is expanding massively.",
        "distance": "close",
        "duration": "2 min",
        "timestamp": 1705320000000,
        "votes": 41,
        "parentId": null
      },
      {
        "id": 129,
        "userNumber": 21,
        "text": "@20 This! Solar and hydrogen projects are the future. Saudi wants to be a green energy exporter.",
        "distance": "close",
        "duration": "1 min",
        "timestamp": 1705320060000,
        "votes": 29,
        "parentId": 128
      },
      {
        "id": 130,
        "userType": "OJ",
        "userNumber": null,
        "text": "@20 My minor is in renewable energy actually! This could be perfect. Do they hire fresh grads?",
        "distance": "close",
        "duration": "1 min",
        "timestamp": 1705320120000,
        "votes": 18,
        "parentId": 128
      },
      {
        "id": 131,
        "userNumber": 20,
        "text": "@OJ Yes bro! They have a graduate program. Apply early though, competition is fierce.",
        "distance": "close",
        "duration": "30s",
        "timestamp": 1705320180000,
        "votes": 25,
        "parentId": 128
      },
      {
        "id": 132,
        "userNumber": 22,
        "text": "@20 ACWA is good but the real opportunity is in hydrogen. Green hydrogen is going to be massive.",
        "distance": "far",
        "duration": "30s",
        "timestamp": 1705320240000,
        "votes": 17,
        "parentId": 128
      },
      {
        "id": 133,
        "userNumber": 23,
        "text": "Serious question: is it worth staying in Saudi or should fresh grads look at UAE/Qatar?",
        "distance": "far",
        "duration": "1 min",
        "timestamp": 1705320080000,
        "votes": 35,
        "parentId": null
      },
      {
        "id": 134,
        "userNumber": 24,
        "text": "@23 UAE market is saturated. Everyone and their mother moved to Dubai. Saudi is where the growth is.",
        "distance": "close",
        "duration": "30s",
        "timestamp": 1705320140000,
        "votes": 42,
        "parentId": 133
      },
      {
        "id": 135,
        "userNumber": 25,
        "text": "@23 Qatar is small market. Saudi has way more opportunities long term.",
        "distance": "far",
        "duration": "30s",
        "timestamp": 1705320200000,
        "votes": 28,
        "parentId": 133
      },
      {
        "id": 136,
        "userNumber": 26,
        "text": "@24 Disagree. UAE still pays better and lifestyle is better. Saudi is changing but slowly.",
        "distance": "far",
        "duration": "20s",
        "timestamp": 1705320260000,
        "votes": 19,
        "parentId": 133
      },
      {
        "id": 137,
        "userNumber": 27,
        "text": "@26 UAE pays better? Maybe 5 years ago. Now Saudi packages are competitive especially with housing.",
        "distance": "close",
        "duration": "15s",
        "timestamp": 1705320320000,
        "votes": 31,
        "parentId": 133
      },
      {
        "id": 138,
        "userNumber": 28,
        "text": "Has anyone worked at Red Sea Global? Heard mixed things about the work culture there.",
        "distance": "close",
        "duration": "2 min",
        "timestamp": 1705320160000,
        "votes": 23,
        "parentId": null
      },
      {
        "id": 139,
        "userNumber": 29,
        "text": "@28 My friend works there. Pay is good but the pressure is intense. They expect results fast.",
        "distance": "close",
        "duration": "1 min",
        "timestamp": 1705320220000,
        "votes": 18,
        "parentId": 138
      },
      {
        "id": 140,
        "userNumber": 30,
        "text": "@28 It's a startup culture basically. Not for everyone but good for career growth.",
        "distance": "far",
        "duration": "1 min",
        "timestamp": 1705320280000,
        "votes": 14,
        "parentId": 138
      },
      {
        "id": 141,
        "userNumber": 31,
        "text": "@29 Define intense. Like Aramco intense or actually intense?",
        "distance": "close",
        "duration": "30s",
        "timestamp": 1705320340000,
        "votes": 21,
        "parentId": 138
      },
      {
        "id": 142,
        "userNumber": 29,
        "text": "@31 Actually intense lol. Aramco is chill in comparison. But you learn a lot faster.",
        "distance": "close",
        "duration": "20s",
        "timestamp": 1705320400000,
        "votes": 27,
        "parentId": 138
      },
      {
        "id": 143,
        "userNumber": 32,
        "text": "Pro tip: network on LinkedIn. Most jobs aren't posted publicly. It's all about connections.",
        "distance": "far",
        "duration": "1 min",
        "timestamp": 1705320240000,
        "votes": 56,
        "parentId": null
      },
      {
        "id": 144,
        "userNumber": 33,
        "text": "@32 This is facts. I got my job through a LinkedIn message. Never even saw a job posting.",
        "distance": "close",
        "duration": "30s",
        "timestamp": 1705320300000,
        "votes": 38,
        "parentId": 143
      },
      {
        "id": 145,
        "userNumber": 34,
        "text": "@32 How do you network without seeming desperate though?",
        "distance": "far",
        "duration": "30s",
        "timestamp": 1705320360000,
        "votes": 22,
        "parentId": 143
      },
      {
        "id": 146,
        "userNumber": 32,
        "text": "@34 Add people. Like their posts. Comment thoughtfully. Don't ask for jobs directly. Build relationships first.",
        "distance": "far",
        "duration": "20s",
        "timestamp": 1705320420000,
        "votes": 45,
        "parentId": 143
      },
      {
        "id": 147,
        "userType": "OJ",
        "userNumber": null,
        "text": "@32 JazakAllah khair. This is genuinely helpful advice.",
        "distance": "close",
        "duration": "15s",
        "timestamp": 1705320480000,
        "votes": 19,
        "parentId": 143
      },
      {
        "id": 148,
        "userNumber": 35,
        "text": "Anyone know about Lucid Motors in Jeddah? They're building their factory there.",
        "distance": "close",
        "duration": "2 min",
        "timestamp": 1705320320000,
        "votes": 32,
        "parentId": null
      },
      {
        "id": 149,
        "userNumber": 36,
        "text": "@35 Lucid is exciting but it's still early. They're hiring but mostly experienced people for now.",
        "distance": "close",
        "duration": "1 min",
        "timestamp": 1705320380000,
        "votes": 21,
        "parentId": 148
      },
      {
        "id": 150,
        "userNumber": 37,
        "text": "@35 EV industry in Saudi is going to be huge. Ceer is another one to watch.",
        "distance": "far",
        "duration": "1 min",
        "timestamp": 1705320440000,
        "votes": 26,
        "parentId": 148
      },
      {
        "id": 151,
        "userNumber": 38,
        "text": "@37 Ceer is the Saudi-Foxconn partnership right? That's going to be massive.",
        "distance": "close",
        "duration": "30s",
        "timestamp": 1705320500000,
        "votes": 18,
        "parentId": 148
      },
      {
        "id": 152,
        "userNumber": 39,
        "text": "Unpopular opinion: don't chase the highest salary. Chase the best learning opportunity.",
        "distance": "far",
        "duration": "1 min",
        "timestamp": 1705320400000,
        "votes": 67,
        "parentId": null
      },
      {
        "id": 153,
        "userNumber": 40,
        "text": "@39 Easy to say when you don't have loans and family expectations.",
        "distance": "far",
        "duration": "30s",
        "timestamp": 1705320460000,
        "votes": 43,
        "parentId": 152
      },
      {
        "id": 154,
        "userNumber": 39,
        "text": "@40 Fair point. But long term the skills pay off more than a few thousand riyals difference now.",
        "distance": "far",
        "duration": "20s",
        "timestamp": 1705320520000,
        "votes": 35,
        "parentId": 152
      },
      {
        "id": 155,
        "userNumber": 41,
        "text": "@39 Both matter. Find a place that pays well AND lets you grow. They exist.",
        "distance": "close",
        "duration": "15s",
        "timestamp": 1705320580000,
        "votes": 51,
        "parentId": 152
      },
      {
        "id": 156,
        "userNumber": 42,
        "text": "What certifications help? PMP? Six Sigma? Or just experience matters more?",
        "distance": "close",
        "duration": "1 min",
        "timestamp": 1705320480000,
        "votes": 29,
        "parentId": null
      },
      {
        "id": 157,
        "userNumber": 43,
        "text": "@42 For mechanical, get your PE license if you can. It opens doors internationally too.",
        "distance": "close",
        "duration": "30s",
        "timestamp": 1705320540000,
        "votes": 24,
        "parentId": 156
      },
      {
        "id": 158,
        "userNumber": 44,
        "text": "@42 PMP is overrated for fresh grads. Focus on technical skills first.",
        "distance": "far",
        "duration": "30s",
        "timestamp": 1705320600000,
        "votes": 31,
        "parentId": 156
      },
      {
        "id": 159,
        "userNumber": 45,
        "text": "@44 Agree. PMP makes sense after 5+ years when you're managing projects.",
        "distance": "close",
        "duration": "20s",
        "timestamp": 1705320660000,
        "votes": 22,
        "parentId": 156
      },
      {
        "id": 160,
        "userNumber": 46,
        "text": "Don't forget about Roshn. They're building entire cities and need engineers badly.",
        "distance": "far",
        "duration": "1 min",
        "timestamp": 1705320560000,
        "votes": 27,
        "parentId": null
      },
      {
        "id": 161,
        "userNumber": 47,
        "text": "@46 Roshn is great but their projects are more civil/construction focused no?",
        "distance": "close",
        "duration": "30s",
        "timestamp": 1705320620000,
        "votes": 14,
        "parentId": 160
      },
      {
        "id": 162,
        "userNumber": 46,
        "text": "@47 They need HVAC and MEP engineers too. Mechanical fits well there.",
        "distance": "far",
        "duration": "20s",
        "timestamp": 1705320680000,
        "votes": 19,
        "parentId": 160
      },
      {
        "id": 163,
        "userNumber": 48,
        "text": "Has the OP considered doing a Masters first? Some companies sponsor them.",
        "distance": "close",
        "duration": "1 min",
        "timestamp": 1705320640000,
        "votes": 18,
        "parentId": null
      },
      {
        "id": 164,
        "userType": "OJ",
        "userNumber": null,
        "text": "@48 Thought about it but want to get work experience first. Maybe later inshallah.",
        "distance": "close",
        "duration": "30s",
        "timestamp": 1705320700000,
        "votes": 15,
        "parentId": 163
      },
      {
        "id": 165,
        "userNumber": 49,
        "text": "@48 Masters is good but 2 years work experience > Masters degree for most employers here.",
        "distance": "far",
        "duration": "20s",
        "timestamp": 1705320760000,
        "votes": 28,
        "parentId": 163
      },
      {
        "id": 166,
        "userNumber": 50,
        "text": "Real talk: learn some programming. Python at minimum. Every engineering role needs it now.",
        "distance": "close",
        "duration": "1 min",
        "timestamp": 1705320720000,
        "votes": 58,
        "parentId": null
      },
      {
        "id": 167,
        "userNumber": 51,
        "text": "@50 This. MATLAB and Python are must-haves. Even for mechanical roles.",
        "distance": "close",
        "duration": "30s",
        "timestamp": 1705320780000,
        "votes": 39,
        "parentId": 166
      },
      {
        "id": 168,
        "userNumber": 52,
        "text": "@50 Also learn some CAD software well. SolidWorks or AutoCAD depending on your focus.",
        "distance": "far",
        "duration": "30s",
        "timestamp": 1705320840000,
        "votes": 33,
        "parentId": 166
      },
      {
        "id": 169,
        "userNumber": 53,
        "text": "@52 CATIA too if you want to work in aerospace or automotive.",
        "distance": "close",
        "duration": "20s",
        "timestamp": 1705320900000,
        "votes": 21,
        "parentId": 166
      },
      {
        "id": 170,
        "userType": "OJ",
        "userNumber": null,
        "text": "@50 Already learning Python alhamdulillah. Good to know it's valued.",
        "distance": "close",
        "duration": "15s",
        "timestamp": 1705320960000,
        "votes": 17,
        "parentId": 166
      },
      {
        "id": 171,
        "userNumber": 54,
        "text": "What about startups? Saudi startup scene is growing. Could be good experience.",
        "distance": "far",
        "duration": "1 min",
        "timestamp": 1705320800000,
        "votes": 24,
        "parentId": null
      },
      {
        "id": 172,
        "userNumber": 55,
        "text": "@54 Startups are risky. No job security and often underpay. But you learn a lot.",
        "distance": "close",
        "duration": "30s",
        "timestamp": 1705320860000,
        "votes": 18,
        "parentId": 171
      },
      {
        "id": 173,
        "userNumber": 56,
        "text": "@54 Most Saudi startups are tech focused though. Not many for mechanical engineers.",
        "distance": "far",
        "duration": "30s",
        "timestamp": 1705320920000,
        "votes": 12,
        "parentId": 171
      },
      {
        "id": 174,
        "userNumber": 57,
        "text": "@56 There are some industrial/manufacturing startups. Check Wa'ed portfolio.",
        "distance": "close",
        "duration": "20s",
        "timestamp": 1705320980000,
        "votes": 16,
        "parentId": 171
      },
      {
        "id": 175,
        "userNumber": 58,
        "text": "Aramco is still the dream for many. Anyone know the current hiring process?",
        "distance": "close",
        "duration": "1 min",
        "timestamp": 1705320880000,
        "votes": 31,
        "parentId": null
      },
      {
        "id": 176,
        "userNumber": 59,
        "text": "@58 Online application, technical test, multiple interviews. Takes 4-6 months usually.",
        "distance": "close",
        "duration": "30s",
        "timestamp": 1705320940000,
        "votes": 26,
        "parentId": 175
      },
      {
        "id": 177,
        "userNumber": 60,
        "text": "@58 Their graduate program opens once a year. Don't miss the deadline.",
        "distance": "far",
        "duration": "30s",
        "timestamp": 1705321000000,
        "votes": 22,
        "parentId": 175
      },
      {
        "id": 178,
        "userNumber": 61,
        "text": "@60 When does it usually open? September?",
        "distance": "close",
        "duration": "20s",
        "timestamp": 1705321060000,
        "votes": 15,
        "parentId": 175
      },
      {
        "id": 179,
        "userNumber": 60,
        "text": "@61 Usually October-November. Check their careers portal regularly.",
        "distance": "far",
        "duration": "15s",
        "timestamp": 1705321120000,
        "votes": 19,
        "parentId": 175
      },
      {
        "id": 180,
        "userNumber": 62,
        "text": "One thing nobody mentioned: work-life balance. Some companies will burn you out.",
        "distance": "close",
        "duration": "1 min",
        "timestamp": 1705320960000,
        "votes": 47,
        "parentId": null
      },
      {
        "id": 181,
        "userNumber": 63,
        "text": "@62 Aramco and SABIC have the best work-life balance. Government pace basically.",
        "distance": "close",
        "duration": "30s",
        "timestamp": 1705321020000,
        "votes": 35,
        "parentId": 180
      },
      {
        "id": 182,
        "userNumber": 64,
        "text": "@62 Giga projects are the opposite. 12 hour days are common during crunch.",
        "distance": "far",
        "duration": "30s",
        "timestamp": 1705321080000,
        "votes": 28,
        "parentId": 180
      },
      {
        "id": 183,
        "userNumber": 65,
        "text": "@63 That government pace might change though. They're pushing efficiency now.",
        "distance": "close",
        "duration": "20s",
        "timestamp": 1705321140000,
        "votes": 21,
        "parentId": 180
      },
      {
        "id": 184,
        "userNumber": 66,
        "text": "Summary for OP: NEOM/Qiddiya for adventure, Aramco/SABIC for stability, defense for growth potential.",
        "distance": "far",
        "duration": "1 min",
        "timestamp": 1705321040000,
        "votes": 89,
        "parentId": null
      },
      {
        "id": 185,
        "userType": "OJ",
        "userNumber": null,
        "text": "@66 JazakAllah khair for the summary! This whole thread has been incredibly helpful.",
        "distance": "close",
        "duration": "30s",
        "timestamp": 1705321100000,
        "votes": 42,
        "parentId": 184
      },
      {
        "id": 186,
        "userNumber": 67,
        "text": "@66 Don't forget renewables. ACWA and green energy sector is the future.",
        "distance": "close",
        "duration": "30s",
        "timestamp": 1705321160000,
        "votes": 31,
        "parentId": 184
      },
      {
        "id": 187,
        "userNumber": 68,
        "text": "@66 And EV industry. Lucid/Ceer will need tons of engineers soon.",
        "distance": "far",
        "duration": "20s",
        "timestamp": 1705321220000,
        "votes": 25,
        "parentId": 184
      },
      {
        "id": 188,
        "userNumber": 69,
        "text": "Thread saved. This is gold for anyone graduating in engineering right now.",
        "distance": "close",
        "duration": "30s",
        "timestamp": 1705321120000,
        "votes": 56,
        "parentId": null
      },
      {
        "id": 189,
        "userNumber": 70,
        "text": "@69 Literally screenshot everything. This info usually costs money from career coaches.",
        "distance": "close",
        "duration": "20s",
        "timestamp": 1705321180000,
        "votes": 38,
        "parentId": 188
      },
      {
        "id": 190,
        "userNumber": 71,
        "text": "@69 Share it with your classmates too. We all need to help each other.",
        "distance": "far",
        "duration": "15s",
        "timestamp": 1705321240000,
        "votes": 44,
        "parentId": 188
      },
      {
        "id": 191,
        "userNumber": 72,
        "text": "Final advice: whatever you choose, give it 100%. First job shapes your whole career.",
        "distance": "close",
        "duration": "1 min",
        "timestamp": 1705321200000,
        "votes": 73,
        "parentId": null
      },
      {
        "id": 192,
        "userNumber": 73,
        "text": "@72 Facts. First 2-3 years are the foundation. Don't coast.",
        "distance": "close",
        "duration": "30s",
        "timestamp": 1705321260000,
        "votes": 41,
        "parentId": 191
      },
      {
        "id": 193,
        "userType": "OJ",
        "userNumber": null,
        "text": "@72 InshaAllah will do my best. Thank you all for the guidance!",
        "distance": "close",
        "duration": "20s",
        "timestamp": 1705321320000,
        "votes": 35,
        "parentId": 191
      },
      {
        "id": 194,
        "userNumber": 74,
        "text": "@OJ Good luck akhi. Come back and update us where you end up!",
        "distance": "far",
        "duration": "15s",
        "timestamp": 1705321380000,
        "votes": 48,
        "parentId": 191
      },
      {
        "id": 195,
        "userNumber": 75,
        "text": "Commenting to follow. Also graduating soon and this is exactly what I needed.",
        "distance": "close",
        "duration": "30s",
        "timestamp": 1705321280000,
        "votes": 29,
        "parentId": null
      },
      {
        "id": 196,
        "userNumber": 76,
        "text": "@75 Same here bro. Electrical engineering but advice still applies.",
        "distance": "close",
        "duration": "20s",
        "timestamp": 1705321340000,
        "votes": 18,
        "parentId": 195
      },
      {
        "id": 197,
        "userNumber": 77,
        "text": "@75 Civil engineer here. Also taking notes wallah.",
        "distance": "far",
        "duration": "15s",
        "timestamp": 1705321400000,
        "votes": 21,
        "parentId": 195
      },
      {
        "id": 198,
        "userNumber": 78,
        "text": "Can we pin this thread? Mods should make this a resource.",
        "distance": "close",
        "duration": "20s",
        "timestamp": 1705321360000,
        "votes": 62,
        "parentId": null
      },
      {
        "id": 199,
        "userNumber": 79,
        "text": "@78 Fr this is better than any career fair I've been to.",
        "distance": "close",
        "duration": "15s",
        "timestamp": 1705321420000,
        "votes": 47,
        "parentId": 198
      },
      {
        "id": 200,
        "userNumber": 80,
        "text": "@78 Agree. Real advice from real people > corporate BS any day.",
        "distance": "far",
        "duration": "10s",
        "timestamp": 1705321480000,
        "votes": 55,
        "parentId": 198
      }
    ],
    "3": [
      {
        "id": 301,
        "userNumber": 13,
        "text": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod temasdasdpor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
        "distance": "close",
        "duration": "1h",
        "timestamp": 1705316000000,
        "votes": 256,
        "parentId": null
      },
      {
        "id": 302,
        "userNumber": 14,
        "text": "@13 Great point! This is exactly what I was thinking.",
        "distance": "close",
        "duration": "55 min",
        "timestamp": 1705316300000,
        "votes": 45,
        "parentId": 301
      },
      {
        "id": 303,
        "userNumber": 15,
        "text": "@13 Can you elaborate more on this?",
        "distance": "far",
        "duration": "50 min",
        "timestamp": 1705316600000,
        "votes": 23,
        "parentId": 301
      },
      {
        "id": 304,
        "userNumber": 11,
        "text": "Another perspective on this topic that I think is worth considering.",
        "distance": "close",
        "duration": "45 min",
        "timestamp": 1705316900000,
        "votes": 178,
        "parentId": null
      },
      {
        "id": 305,
        "userNumber": 12,
        "text": "@11 Interesting take! I hadn't thought about it this way.",
        "distance": "close",
        "duration": "40 min",
        "timestamp": 1705317200000,
        "votes": 67,
        "parentId": 304
      },
      {
        "id": 306,
        "userNumber": 5,
        "text": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod temasdasdpor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
        "distance": "close",
        "duration": "1h",
        "timestamp": 1705317500000,
        "votes": 256,
        "parentId": null
      },
      {
        "id": 307,
        "userNumber": 16,
        "text": "@5 This deserves more attention.",
        "distance": "far",
        "duration": "30 min",
        "timestamp": 1705317800000,
        "votes": 34,
        "parentId": 306
      }
    ]
  },
  // Activities represent subreply notifications - shown between parent replies chronologically
  // Each activity is generated when someone replies to a reply (creates a subreply)
  "activitiesByPostId": {
    "3": [
      {
        "id": "activity-1",
        "type": "reply_activity",
        "timestamp": 1705317100000,
        "authorUserNumber": 12,
        "authorIsOJ": false,
        "targetUserNumber": 11,
        "targetIsOJ": false,
        "targetReplyId": 304,
        "subreplyId": 305,
        "duration": "1h"
      }
    ]
  },
  // Keep backward compatibility
  "post": {
    "id": 1,
    "userType": "OJ",
    "userNumber": null,
    "channel": "@main",
    "distance": "close",
    "duration": "6 min",
    "timestamp": 1705320000000,
    "text": "Serious question: where do people actually find a decent husband these days? Dating apps feel like a lottery, hobbies feel like HR networking, and friends keep saying 'it'll happen when you least expect it'. I expect it now.",
    "hashtag": "#dating",
    "votes": 12
  },
  "replies": [
    {
      "id": 1,
      "userNumber": 1,
      "text": "Stop looking for a husband and start looking for a decent human. The label comes later.",
      "distance": "close",
      "duration": "5 min",
      "timestamp": 1705320060000,
      "votes": 18,
      "parentId": null
    },
    {
      "id": 2,
      "userNumber": 2,
      "text": "@1 This sounds nice but how does that help in practice?",
      "distance": "close",
      "duration": "4 min",
      "timestamp": 1705320120000,
      "votes": 6,
      "parentId": 1
    },
    {
      "id": 3,
      "userType": "OJ",
      "userNumber": null,
      "text": "@2 Concrete examples please. Where exactly do you meet this so-called 'decent human'?",
      "distance": "close",
      "duration": "3 min",
      "timestamp": 1705320180000,
      "votes": 14,
      "parentId": 1
    },
    {
      "id": 4,
      "userNumber": 3,
      "text": "@3 Volunteering, sports clubs, professional communities. Places where people show up consistently.",
      "distance": "close",
      "duration": "2 min",
      "timestamp": 1705320240000,
      "votes": 5,
      "parentId": 1
    },
    {
      "id": 5,
      "userNumber": 4,
      "text": "@4 That still feels very generic tbh.",
      "distance": "close",
      "duration": "1 min",
      "timestamp": 1705320300000,
      "votes": 8,
      "parentId": 1
    },
    {
      "id": 6,
      "userNumber": 5,
      "text": "@4 I did volunteering for a year and met zero single men.",
      "distance": "far",
      "duration": "50s",
      "timestamp": 1705320360000,
      "votes": 4,
      "parentId": 1
    },
    {
      "id": 7,
      "userNumber": 6,
      "text": "@1 Feels like advice people repeat without testing it.",
      "distance": "far",
      "duration": "30s",
      "timestamp": 1705320420000,
      "votes": 12,
      "parentId": 1
    },
    {
      "id": 8,
      "userNumber": 7,
      "text": "Honestly? Friends of friends. If no one can vouch for him, that's already data.",
      "distance": "close",
      "duration": "4 min",
      "timestamp": 1705320130000,
      "votes": 22,
      "parentId": null
    },
    {
      "id": 9,
      "userNumber": 8,
      "text": "@7 This. Social proof matters way more than people admit.",
      "distance": "close",
      "duration": "3 min",
      "timestamp": 1705320190000,
      "votes": 11,
      "parentId": 8
    },
    {
      "id": 10,
      "userType": "OJ",
      "userNumber": null,
      "text": "@7 This is the first answer that sounds actionable.",
      "distance": "close",
      "duration": "2 min",
      "timestamp": 1705320250000,
      "votes": 19,
      "parentId": 8
    },
    {
      "id": 11,
      "userNumber": 9,
      "text": "Hot take: if you keep meeting the wrong men, you're selecting for the wrong traits.",
      "distance": "far",
      "duration": "6 min",
      "timestamp": 1705320050000,
      "votes": -1,
      "parentId": null
    },
    {
      "id": 12,
      "userNumber": 10,
      "text": "@9 Uncomfortable but probably accurate.",
      "distance": "close",
      "duration": "4 min",
      "timestamp": 1705320170000,
      "votes": 7,
      "parentId": 11
    },
    {
      "id": 13,
      "userNumber": 11,
      "text": "@9 Or the dating pool is just objectively rough right now.",
      "distance": "far",
      "duration": "3 min",
      "timestamp": 1705320230000,
      "votes": 5,
      "parentId": 11
    },
    {
      "id": 14,
      "userNumber": 12,
      "text": "@9 This feels like blaming individuals for systemic trash.",
      "distance": "far",
      "duration": "2 min",
      "timestamp": 1705320290000,
      "votes": 9,
      "parentId": 11
    },
    {
      "id": 15,
      "userType": "OJ",
      "userNumber": null,
      "text": "@9 Give an actual trait example then. What should people stop selecting for?",
      "distance": "close",
      "duration": "1 min",
      "timestamp": 1705320350000,
      "votes": 16,
      "parentId": 11
    },
    {
      "id": 16,
      "userNumber": 13,
      "text": "@15 Charisma over reliability. Potential over behavior. Words over patterns.",
      "distance": "close",
      "duration": "30s",
      "timestamp": 1705320410000,
      "votes": 21,
      "parentId": 11
    }
  ]
};

// Random colors for non-OJ users
export const userColors = ['#FA7E0A', '#009D52', '#27A899', '#A867E9', '#E35BB5', '#E84C4C', '#338DF5'];

// OJ color constant
export const OJ_COLOR = '#009d52';
