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
