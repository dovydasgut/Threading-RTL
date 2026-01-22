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
      "text": "سؤال جدي: وين الناس تلقى زوج محترم هالأيام؟ تطبيقات التعارف حظ، الهوايات صارت مثل مقابلات العمل، والصديقات يقولون 'بيجي لما ما تتوقعين'. أنا أتوقع الحين.",
      "hashtag": "#زواج",
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
      "text": "يا شباب المهندسين، أبي نصيحة حقيقية. متخرج هندسة ميكانيكية الفصل الجاي إن شاء الله. كل الناس تقول 'أرامكو ولا بلاش' بس أعرف الوضع تغير. وين الفرص الحقيقية بالرياض الحين؟ مو أبي إجابات واسطة، أبي أعرف وش الشركات اللي توظف خريجين جدد وتعاملهم زين. نيوم؟ سابك؟ المشاريع العملاقة الجديدة؟ وش الوضع الحقيقي؟",
      "hashtag": "#هندسة",
      "votes": 89
    },
    {
      "id": 3,
      "userType": "OJ",
      "userNumber": null,
      "channel": "@food",
      "distance": "close",
      "duration": "3h",
      "timestamp": 1705308000000,
      "text": "يا أهل الرياض عشاق القهوة، ابي مساعدتكم! توني منتقل للرياض وأدور على أفضل كوفي شوبات القهوة المختصة. مو ستاربكس ولا تيم هورتنز. ابي الأماكن المخفية اللي قهوتها تجنن وجوها حلو، ويفضل مكان أقدر أشتغل فيه. وش أفضل كافيهاتكم؟ عطوني توصياتكم!",
      "hashtag": "#قهوة",
      "votes": 234
    }
  ],
  "repliesByPostId": {
    "1": [
      {
        "id": 1,
        "userNumber": 1,
        "text": "وقفي تدورين على زوج وابدي دوري على إنسان محترم. المسمى يجي بعدين.",
        "distance": "close",
        "duration": "5 min",
        "timestamp": 1705320060000,
        "votes": 18,
        "parentId": null
      },
      {
        "id": 2,
        "userNumber": 2,
        "text": "@1 كلام حلو بس كيف يفيد عملياً؟",
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
        "text": "@2 أبي أمثلة واضحة. وين بالضبط تلقين هالإنسان المحترم؟",
        "distance": "close",
        "duration": "3 min",
        "timestamp": 1705320180000,
        "votes": 14,
        "parentId": 1
      },
      {
        "id": 4,
        "userNumber": 3,
        "text": "@3 العمل التطوعي، النوادي الرياضية، المجتمعات المهنية. أماكن الناس تحضرها بانتظام.",
        "distance": "close",
        "duration": "2 min",
        "timestamp": 1705320240000,
        "votes": 5,
        "parentId": 1
      },
      {
        "id": 5,
        "userNumber": 4,
        "text": "@4 لسا حاسته كلام عام بصراحة.",
        "distance": "close",
        "duration": "1 min",
        "timestamp": 1705320300000,
        "votes": 8,
        "parentId": 1
      },
      {
        "id": 6,
        "userNumber": 5,
        "text": "@4 سويت تطوع سنة كاملة وما قابلت ولا رجال أعزب.",
        "distance": "far",
        "duration": "50s",
        "timestamp": 1705320360000,
        "votes": 4,
        "parentId": 1
      },
      {
        "id": 7,
        "userNumber": 6,
        "text": "@1 حاسته نصيحة الناس تكررها بدون ما تجربها.",
        "distance": "far",
        "duration": "30s",
        "timestamp": 1705320420000,
        "votes": 12,
        "parentId": 1
      },
      {
        "id": 8,
        "userNumber": 7,
        "text": "بصراحة؟ أصدقاء الأصدقاء. إذا ما أحد يضمنه، هذي معلومة بحد ذاتها.",
        "distance": "close",
        "duration": "4 min",
        "timestamp": 1705320130000,
        "votes": 22,
        "parentId": null
      },
      {
        "id": 9,
        "userNumber": 8,
        "text": "@7 هذا الكلام. السمعة أهم مما الناس تعترف.",
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
        "text": "@7 هذي أول إجابة تحس إنها قابلة للتطبيق.",
        "distance": "close",
        "duration": "2 min",
        "timestamp": 1705320250000,
        "votes": 19,
        "parentId": 8
      },
      {
        "id": 11,
        "userNumber": 9,
        "text": "رأي جريء: إذا دايم تقابلين الرجال الغلط، يمكن تختارين الصفات الغلط.",
        "distance": "far",
        "duration": "6 min",
        "timestamp": 1705320050000,
        "votes": -1,
        "parentId": null
      },
      {
        "id": 12,
        "userNumber": 10,
        "text": "@9 كلام مزعج بس يمكن صحيح.",
        "distance": "close",
        "duration": "4 min",
        "timestamp": 1705320170000,
        "votes": 7,
        "parentId": 11
      },
      {
        "id": 13,
        "userNumber": 11,
        "text": "@9 أو يمكن سوق الزواج صعب هالأيام بشكل عام.",
        "distance": "far",
        "duration": "3 min",
        "timestamp": 1705320230000,
        "votes": 5,
        "parentId": 11
      },
      {
        "id": 14,
        "userNumber": 12,
        "text": "@9 هذا يحس لوم على الأفراد بدل المشكلة الكبيرة.",
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
        "text": "@9 عطني مثال على صفة. وش اللي لازم الناس توقف تختاره؟",
        "distance": "close",
        "duration": "1 min",
        "timestamp": 1705320350000,
        "votes": 16,
        "parentId": 11
      },
      {
        "id": 16,
        "userNumber": 13,
        "text": "@15 الكاريزما بدل الالتزام. الإمكانيات بدل الأفعال. الكلام بدل الأنماط.",
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
        "text": "يا خوي نيوم توظف بجنون الحين. ولد عمي توه داخل كمهندس مبتدئ. الراتب جنوني والله، بس لازم تنتقل لمنطقة تبوك.",
        "distance": "close",
        "duration": "11 min",
        "timestamp": 1705319460000,
        "votes": 145,
        "parentId": null
      },
      {
        "id": 102,
        "userNumber": 2,
        "text": "@1 كم الراتب البداية لو ما يضايقك؟",
        "distance": "close",
        "duration": "10 min",
        "timestamp": 1705319520000,
        "votes": 12,
        "parentId": 101
      },
      {
        "id": 103,
        "userNumber": 1,
        "text": "@2 حوالي ١٨-٢٢ ألف ريال للخريجين الجدد حسب معدلك والمقابلة. زائد بدل سكن.",
        "distance": "close",
        "duration": "9 min",
        "timestamp": 1705319580000,
        "votes": 38,
        "parentId": 101
      },
      {
        "id": 104,
        "userNumber": 3,
        "text": "@1 هذا أحسن من عرض أرامكو الحين سبحان الله",
        "distance": "close",
        "duration": "8 min",
        "timestamp": 1705319640000,
        "votes": 22,
        "parentId": 101
      },
      {
        "id": 2101,
        "userNumber": 81,
        "text": "@3 لحظة، أرامكو لسا عندها مميزات أفضل. التأمين الصحي وبدل تعليم الأطفال والباقة كاملة.",
        "distance": "far",
        "duration": "7 min",
        "timestamp": 1705319700000,
        "votes": 31,
        "parentId": 101
      },
      {
        "id": 2102,
        "userNumber": 82,
        "text": "@81 المميزات ما تهم وأنت عمرك ٢٤ وأعزب. الكاش هو الملك بهالعمر.",
        "distance": "close",
        "duration": "6 min",
        "timestamp": 1705319760000,
        "votes": 45,
        "parentId": 101
      },
      {
        "id": 2103,
        "userNumber": 83,
        "text": "@82 تفكير قصير المدى. لازم تخطط للمستقبل بعد.",
        "distance": "far",
        "duration": "5 min",
        "timestamp": 1705319820000,
        "votes": 18,
        "parentId": 101
      },
      {
        "id": 2104,
        "userNumber": 1,
        "text": "@83 صح بس نيوم بعد عندها مميزات زينة. السكن في تبوك مغطى بالكامل وشقق حديثة.",
        "distance": "close",
        "duration": "5 min",
        "timestamp": 1705319880000,
        "votes": 27,
        "parentId": 101
      },
      {
        "id": 2105,
        "userNumber": 84,
        "text": "@1 وش وضع الحياة الاجتماعية في تبوك؟ فيه شي يسوى هناك؟",
        "distance": "close",
        "duration": "4 min",
        "timestamp": 1705319940000,
        "votes": 33,
        "parentId": 101
      },
      {
        "id": 2106,
        "userNumber": 1,
        "text": "@84 بصراحة لسا تتطور. بس ولد عمي يقول ينظمون فعاليات ورحلات للموظفين. وطيارات الرياض رخيصة.",
        "distance": "close",
        "duration": "4 min",
        "timestamp": 1705320000000,
        "votes": 22,
        "parentId": 101
      },
      {
        "id": 2107,
        "userNumber": 85,
        "text": "@84 تبوك حلوة يا أخي. جبال وشواطئ قريبة. أحسن من الظهران برأيي.",
        "distance": "far",
        "duration": "3 min",
        "timestamp": 1705320060000,
        "votes": 29,
        "parentId": 101
      },
      {
        "id": 2108,
        "userNumber": 86,
        "text": "@85 شواطئ؟ في تبوك؟ يا خوي أنت تفكر بمكان ثاني.",
        "distance": "close",
        "duration": "3 min",
        "timestamp": 1705320120000,
        "votes": 41,
        "parentId": 101
      },
      {
        "id": 2109,
        "userNumber": 85,
        "text": "@86 نيوم على ساحل البحر الأحمر يا ذكي. مو مدينة تبوك نفسها.",
        "distance": "far",
        "duration": "2 min",
        "timestamp": 1705320180000,
        "votes": 56,
        "parentId": 101
      },
      {
        "id": 2110,
        "userNumber": 86,
        "text": "@85 آها صح ذا لاين وكذا. غلطتي.",
        "distance": "close",
        "duration": "2 min",
        "timestamp": 1705320240000,
        "votes": 23,
        "parentId": 101
      },
      {
        "id": 2111,
        "userType": "OJ",
        "userNumber": null,
        "text": "@1 كم المنافسة على التوظيف في نيوم؟ واسطة ولا كفاءة؟",
        "distance": "close",
        "duration": "2 min",
        "timestamp": 1705320300000,
        "votes": 47,
        "parentId": 101
      },
      {
        "id": 2112,
        "userNumber": 1,
        "text": "@OJ ولد عمي قال كفاءة. مقابلات تقنية ودراسات حالة والشغلة كاملة. ما فيه واسطة.",
        "distance": "close",
        "duration": "1 min",
        "timestamp": 1705320360000,
        "votes": 52,
        "parentId": 101
      },
      {
        "id": 2113,
        "userNumber": 87,
        "text": "@OJ أنا بعد قابلت عندهم. عملية احترافية جداً. يجيبون استشاريين أجانب يقيمون المرشحين.",
        "distance": "far",
        "duration": "1 min",
        "timestamp": 1705320420000,
        "votes": 38,
        "parentId": 101
      },
      {
        "id": 2114,
        "userNumber": 88,
        "text": "@87 استشاريين أجانب؟ يعني ما يثقون بالمحليين يوظفون؟ معتادين.",
        "distance": "far",
        "duration": "1 min",
        "timestamp": 1705320480000,
        "votes": 15,
        "parentId": 101
      },
      {
        "id": 2115,
        "userNumber": 89,
        "text": "@88 الموضوع جلب خبرة عالمية يا خوي. لا تسيس كل شي.",
        "distance": "close",
        "duration": "30s",
        "timestamp": 1705320540000,
        "votes": 44,
        "parentId": 101
      },
      {
        "id": 2116,
        "userNumber": 90,
        "text": "@1 وش الأقسام اللي توظف أكثر؟ التصميم؟ البناء؟ التشغيل؟",
        "distance": "close",
        "duration": "30s",
        "timestamp": 1705320600000,
        "votes": 21,
        "parentId": 101
      },
      {
        "id": 2117,
        "userNumber": 1,
        "text": "@90 كلهم بصراحة. بس البناء وإدارة المشاريع الأكبر الحين. مرحلة التطوير في ذروتها.",
        "distance": "close",
        "duration": "20s",
        "timestamp": 1705320660000,
        "votes": 33,
        "parentId": 101
      },
      {
        "id": 105,
        "userNumber": 4,
        "text": "وين تدرس يا أخي؟ هذا يفرق وايد لأي شركات بتطالع سيرتك.",
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
        "text": "@4 جامعة البترول. هندسة ميكانيكية مع تخصص فرعي في الطاقة المتجددة.",
        "distance": "close",
        "duration": "9 min",
        "timestamp": 1705319560000,
        "votes": 28,
        "parentId": 105
      },
      {
        "id": 107,
        "userNumber": 5,
        "text": "@OJ ما شاء الله جامعة البترول قوية. ما راح تواجه مشكلة تلقى فرص.",
        "distance": "close",
        "duration": "8 min",
        "timestamp": 1705319620000,
        "votes": 19,
        "parentId": 105
      },
      {
        "id": 108,
        "userNumber": 6,
        "text": "@5 البترول زينة بس نكون صريحين، هندسة جامعة الملك سعود تتحسن بسرعة. معاملهم الجديدة خيالية.",
        "distance": "far",
        "duration": "7 min",
        "timestamp": 1705319680000,
        "votes": 8,
        "parentId": 105
      },
      {
        "id": 109,
        "userNumber": 7,
        "text": "@6 وش تقول؟ البترول رقم واحد بالمملكة للهندسة من زمان. جامعة الملك سعود ما تقارن بعلاقات الصناعة.",
        "distance": "close",
        "duration": "6 min",
        "timestamp": 1705319740000,
        "votes": 34,
        "parentId": 105
      },
      {
        "id": 110,
        "userNumber": 6,
        "text": "@7 علاقات الصناعة يمكن بس أكاديمياً الملك سعود تتحسن. وما تحتاج تعيش بالظهران.",
        "distance": "far",
        "duration": "5 min",
        "timestamp": 1705319800000,
        "votes": 6,
        "parentId": 105
      },
      {
        "id": 111,
        "userNumber": 8,
        "text": "@7 متفق. خريجين البترول عندهم أولوية في أرامكو وسابك وكل شركة كبيرة. مو موضوع نقاش.",
        "distance": "close",
        "duration": "4 min",
        "timestamp": 1705319860000,
        "votes": 29,
        "parentId": 105
      },
      {
        "id": 112,
        "userNumber": 9,
        "text": "@6 هندسة جامعة الملك عبدالعزيز بجدة بعد ما تاخذ حقها. الموقع مهم لو تبي تشتغل بمشاريع البحر الأحمر.",
        "distance": "far",
        "duration": "3 min",
        "timestamp": 1705319920000,
        "votes": 11,
        "parentId": 105
      },
      {
        "id": 113,
        "userNumber": 10,
        "text": "@9 جامعة الملك عبدالعزيز للهندسة؟ يا أخي كن جدي. البترول ولا بلاش لو تبي احترام بالمجال.",
        "distance": "close",
        "duration": "2 min",
        "timestamp": 1705319980000,
        "votes": 15,
        "parentId": 105
      },
      {
        "id": 114,
        "userNumber": 11,
        "text": "انسوا موضوع الجامعات. السؤال الحقيقي: عندك خبرة تدريب؟ هذا اللي الشركات تهتم فيه الحين أكثر من شهادتك.",
        "distance": "close",
        "duration": "8 min",
        "timestamp": 1705319600000,
        "votes": 152,
        "parentId": null
      },
      {
        "id": 115,
        "userType": "OJ",
        "userNumber": null,
        "text": "@11 سويت صيف في سابك وصيف ثاني في مقاول EPC صغير. الاثنين كانوا تجارب زينة الحمد لله.",
        "distance": "close",
        "duration": "7 min",
        "timestamp": 1705319660000,
        "votes": 41,
        "parentId": 114
      },
      {
        "id": 116,
        "userNumber": 12,
        "text": "@OJ تدريب سابك ذهب. عادة يحولون المتدربين الزينين لدوام كامل. قدمت على برنامج الخريجين عندهم؟",
        "distance": "close",
        "duration": "6 min",
        "timestamp": 1705319720000,
        "votes": 27,
        "parentId": 114
      },
      {
        "id": 2201,
        "userNumber": 91,
        "text": "@11 هذا الكلام الصحيح. اسم الجامعة يفتح الأبواب بس التدريب يقفل الصفقات.",
        "distance": "close",
        "duration": "6 min",
        "timestamp": 1705319780000,
        "votes": 63,
        "parentId": 114
      },
      {
        "id": 2202,
        "userNumber": 92,
        "text": "@91 صح. أعرف خريجين من البترول ما لقوا شغل لأن صفر تدريب. وشباب من PMU مع كووب زين عايشين.",
        "distance": "far",
        "duration": "5 min",
        "timestamp": 1705319840000,
        "votes": 48,
        "parentId": 114
      },
      {
        "id": 2203,
        "userNumber": 93,
        "text": "@92 PMU؟ لا تبالغ هههه. البترول لسا المسيطرة.",
        "distance": "close",
        "duration": "5 min",
        "timestamp": 1705319900000,
        "votes": 31,
        "parentId": 114
      },
      {
        "id": 2204,
        "userNumber": 92,
        "text": "@93 أقول الخبرة أهم من الشعار على شهادتك. الشركات تعلمت هالدرس بالطريقة الصعبة.",
        "distance": "far",
        "duration": "4 min",
        "timestamp": 1705319960000,
        "votes": 55,
        "parentId": 114
      },
      {
        "id": 2205,
        "userNumber": 94,
        "text": "@11 كيف تحصل تدريب زين بدون معارف؟ حلقة مفرغة.",
        "distance": "close",
        "duration": "4 min",
        "timestamp": 1705320020000,
        "votes": 72,
        "parentId": 114
      },
      {
        "id": 2206,
        "userNumber": 11,
        "text": "@94 قدم في كل مكان. أرسل سيرتك في كل مكان. روح معارض التوظيف. راسل مدراء على لينكد إن. شي بيمسك.",
        "distance": "close",
        "duration": "4 min",
        "timestamp": 1705320080000,
        "votes": 89,
        "parentId": 114
      },
      {
        "id": 2207,
        "userNumber": 95,
        "text": "@94 وبعد لا تتجاهل الشركات الصغيرة. مقاولين EPC، مصانع محلية. عندهم استعداد ياخذون موهبة جديدة.",
        "distance": "far",
        "duration": "3 min",
        "timestamp": 1705320140000,
        "votes": 67,
        "parentId": 114
      },
      {
        "id": 2208,
        "userNumber": 96,
        "text": "@95 الشركات الصغيرة تدفع فلوس قليلة. يستاهل بس عشان الخبرة؟",
        "distance": "close",
        "duration": "3 min",
        "timestamp": 1705320200000,
        "votes": 34,
        "parentId": 114
      },
      {
        "id": 2209,
        "userNumber": 95,
        "text": "@96 للتدريب أكيد. أنت هناك تتعلم مو تصير غني. عروض الشركات الكبيرة تجي بعدين.",
        "distance": "far",
        "duration": "3 min",
        "timestamp": 1705320260000,
        "votes": 78,
        "parentId": 114
      },
      {
        "id": 2210,
        "userNumber": 97,
        "text": "@96 أنا سويت أول تدريب بدون راتب في ورشة صغيرة. الحين أنا في سابك براتب ٢٥ ألف. يستاهل كل ريال ما كسبته.",
        "distance": "close",
        "duration": "2 min",
        "timestamp": 1705320320000,
        "votes": 91,
        "parentId": 114
      },
      {
        "id": 2211,
        "userNumber": 98,
        "text": "@97 التدريب بدون راتب المفروض ما يكون موجود. هذا استغلال.",
        "distance": "far",
        "duration": "2 min",
        "timestamp": 1705320380000,
        "votes": 43,
        "parentId": 114
      },
      {
        "id": 2212,
        "userNumber": 97,
        "text": "@98 أوافق بالمبدأ بس الواقع مختلف. أحياناً لازم تسوي اللي لازم تسويه.",
        "distance": "close",
        "duration": "2 min",
        "timestamp": 1705320440000,
        "votes": 56,
        "parentId": 114
      },
      {
        "id": 2213,
        "userType": "OJ",
        "userNumber": null,
        "text": "@11 وش رأيك بالتدريب عن بعد؟ بعض الشركات بدأت تقدمه وقت كورونا. هل له قيمة؟",
        "distance": "close",
        "duration": "2 min",
        "timestamp": 1705320500000,
        "votes": 28,
        "parentId": 114
      },
      {
        "id": 2214,
        "userNumber": 11,
        "text": "@OJ أحسن من لا شي بس الحضوري دايماً أفضل. للهندسة تحتاج خبرة عملية.",
        "distance": "close",
        "duration": "1 min",
        "timestamp": 1705320560000,
        "votes": 45,
        "parentId": 114
      },
      {
        "id": 2215,
        "userNumber": 99,
        "text": "@OJ التدريب عن بعد زين لوظائف البرمجة بس ميكانيكا؟ لازم تكون بالمصنع أو الموقع.",
        "distance": "far",
        "duration": "1 min",
        "timestamp": 1705320620000,
        "votes": 52,
        "parentId": 114
      },
      {
        "id": 2216,
        "userNumber": 100,
        "text": "@11 وش رأيك الكووب ولا التدريب الصيفي؟ وش الشركات تفضل؟",
        "distance": "close",
        "duration": "1 min",
        "timestamp": 1705320680000,
        "votes": 31,
        "parentId": 114
      },
      {
        "id": 2217,
        "userNumber": 11,
        "text": "@100 الكووب أفضل. ٦ شهور تبين الالتزام وتتعلم شغل حقيقي، مو بس توجيه ووقت شاي.",
        "distance": "close",
        "duration": "1 min",
        "timestamp": 1705320740000,
        "votes": 64,
        "parentId": 114
      },
      {
        "id": 2218,
        "userNumber": 101,
        "text": "@11 المشكلة الكووب يأخر التخرج. بعضنا عنده ضغط من الأهل يخلص بسرعة.",
        "distance": "far",
        "duration": "30s",
        "timestamp": 1705320800000,
        "votes": 47,
        "parentId": 114
      },
      {
        "id": 2219,
        "userNumber": 102,
        "text": "@101 تخرج بسرعة بدون خبرة = بحث وظيفة أطول. تخرج متأخر مع خبرة = توظيف فوري. الحسبة واضحة.",
        "distance": "close",
        "duration": "30s",
        "timestamp": 1705320860000,
        "votes": 83,
        "parentId": 114
      },
      {
        "id": 2220,
        "userNumber": 103,
        "text": "@102 هذا. أنا تخرجت فصل متأخر بسبب الكووب. كان عندي عرض وظيفة قبل التخرج. ما ندمت.",
        "distance": "far",
        "duration": "20s",
        "timestamp": 1705320920000,
        "votes": 71,
        "parentId": 114
      },
      {
        "id": 117,
        "userNumber": 13,
        "text": "شيك على مشروع بوابة الدرعية والقدية. الاثنين يوظفون بقوة لـ ٣-٤ سنوات الجاية. صديقي يشتغل بالقدية ويقول يحتاجون مهندسين ميكانيكا بشدة.",
        "distance": "close",
        "duration": "9 min",
        "timestamp": 1705319540000,
        "votes": 36,
        "parentId": null
      },
      {
        "id": 118,
        "userNumber": 14,
        "text": "@13 القدية تبدو حلوة بس هل هي مستقرة؟ المشاريع العملاقة أحياناً توقف التوظيف فجأة.",
        "distance": "far",
        "duration": "8 min",
        "timestamp": 1705319600000,
        "votes": 18,
        "parentId": 117
      },
      {
        "id": 119,
        "userNumber": 13,
        "text": "@14 مدعومة من صندوق الاستثمارات مباشرة. أثبت ما يكون في هالاقتصاد. توهم بادين سبيد بارك.",
        "distance": "close",
        "duration": "7 min",
        "timestamp": 1705319660000,
        "votes": 24,
        "parentId": 117
      },
      {
        "id": 120,
        "userNumber": 15,
        "text": "رأي مختلف: فكر في قطاع الدفاع. سامي والصناعات العسكرية المحلية تنمو بسرعة والرواتب تنافس شركات النفط الحين.",
        "distance": "far",
        "duration": "7 min",
        "timestamp": 1705319680000,
        "votes": 133,
        "parentId": null
      },
      {
        "id": 121,
        "userNumber": 16,
        "text": "@15 الدفاع فكرة ذكية بالفعل. رؤية ٢٠٣٠ تدفع بقوة للتصنيع المحلي. الأمان الوظيفي يمكن أحسن من المشاريع العملاقة.",
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
        "text": "@15 ما فكرت بالدفاع بصراحة. ياخذون مهندسين ميكانيكا ولا أغلبهم كهرباء؟",
        "distance": "close",
        "duration": "5 min",
        "timestamp": 1705319800000,
        "votes": 16,
        "parentId": 120
      },
      {
        "id": 123,
        "userNumber": 15,
        "text": "@OJ يحتاجون كل الأنواع يا خوي. الميكانيكا فعلياً مطلوبين جداً لبرامج المركبات وخطوط التصنيع. شيك على صفحة الوظائف.",
        "distance": "far",
        "duration": "4 min",
        "timestamp": 1705319860000,
        "votes": 19,
        "parentId": 120
      },
      {
        "id": 2301,
        "userNumber": 104,
        "text": "@15 قطاع الدفاع ما ياخذ حقه. عمي يشتغل في سامي والمميزات جنونية. أحسن من أرامكو ببعض الأشياء.",
        "distance": "close",
        "duration": "4 min",
        "timestamp": 1705319920000,
        "votes": 45,
        "parentId": 120
      },
      {
        "id": 2302,
        "userNumber": 105,
        "text": "@104 وش نوع المميزات؟ فضولي بجد لأن ما أحد يتكلم عن الدفاع وايد.",
        "distance": "close",
        "duration": "3 min",
        "timestamp": 1705319980000,
        "votes": 38,
        "parentId": 120
      },
      {
        "id": 2303,
        "userNumber": 104,
        "text": "@105 بدل سكن، بدل سيارة، نظام مكافآت سنوية، تدريب بالخارج. وبعد التقاعد قوي.",
        "distance": "close",
        "duration": "3 min",
        "timestamp": 1705320040000,
        "votes": 52,
        "parentId": 120
      },
      {
        "id": 2304,
        "userNumber": 106,
        "text": "@104 تدريب بالخارج؟ مثل وين؟ يبدو رهيب.",
        "distance": "far",
        "duration": "3 min",
        "timestamp": 1705320100000,
        "votes": 29,
        "parentId": 120
      },
      {
        "id": 2305,
        "userNumber": 104,
        "text": "@106 يعتمد على البرنامج. بعضهم يروحون بريطانيا، وبعضهم كوريا الجنوبية. شراكات مع مقاولين دفاعيين هناك.",
        "distance": "close",
        "duration": "2 min",
        "timestamp": 1705320160000,
        "votes": 41,
        "parentId": 120
      },
      {
        "id": 2306,
        "userNumber": 107,
        "text": "@15 القلق الوحيد في الدفاع هو التصريح الأمني. ياخذ وقت طويل ويدققون في كل شي.",
        "distance": "far",
        "duration": "2 min",
        "timestamp": 1705320220000,
        "votes": 33,
        "parentId": 120
      },
      {
        "id": 2307,
        "userNumber": 15,
        "text": "@107 صح بس لو ما عندك شي تخبيه تمام. بس ياخذ ٣-٦ شهور للتحقق من الخلفية.",
        "distance": "far",
        "duration": "2 min",
        "timestamp": 1705320280000,
        "votes": 27,
        "parentId": 120
      },
      {
        "id": 2308,
        "userNumber": 108,
        "text": "@107 يشيكون على سوشيال ميديا بعد. واحد انرفض بسبب تغريدات قديمة ظاهرياً.",
        "distance": "close",
        "duration": "2 min",
        "timestamp": 1705320340000,
        "votes": 56,
        "parentId": 120
      },
      {
        "id": 2309,
        "userNumber": 109,
        "text": "@108 الكل نظفوا تاريخ تويتركم قبل تقدمون على أي شي دفاع هههه",
        "distance": "close",
        "duration": "1 min",
        "timestamp": 1705320400000,
        "votes": 78,
        "parentId": 120
      },
      {
        "id": 2310,
        "userNumber": 110,
        "text": "@109 أو بس لا تغرد شي غبي؟ فكرة جديدة أعرف.",
        "distance": "far",
        "duration": "1 min",
        "timestamp": 1705320460000,
        "votes": 92,
        "parentId": 120
      },
      {
        "id": 2311,
        "userNumber": 111,
        "text": "@15 وش وضع التطور المهني في الدفاع؟ تقدر تنتقل للقطاع الخاص بعدين؟",
        "distance": "close",
        "duration": "1 min",
        "timestamp": 1705320520000,
        "votes": 24,
        "parentId": 120
      },
      {
        "id": 2312,
        "userNumber": 15,
        "text": "@111 أكيد. خبرة الدفاع مقدرة في كل مكان. مهارات إدارة مشاريع، وعي أمني، معايير جودة. كلها تنتقل معك.",
        "distance": "close",
        "duration": "1 min",
        "timestamp": 1705320580000,
        "votes": 37,
        "parentId": 120
      },
      {
        "id": 2313,
        "userNumber": 112,
        "text": "@15 وش رأيك ببوينج أو لوكهيد؟ عندهم مكاتب بالسعودية الحين صح؟",
        "distance": "far",
        "duration": "1 min",
        "timestamp": 1705320640000,
        "votes": 31,
        "parentId": 120
      },
      {
        "id": 2314,
        "userNumber": 113,
        "text": "@112 بوينج تواجدها صغير. لوكهيد أكبر. بس أغلبهم يوظفون مهندسين خبرة مو خريجين جدد.",
        "distance": "close",
        "duration": "30s",
        "timestamp": 1705320700000,
        "votes": 28,
        "parentId": 120
      },
      {
        "id": 2315,
        "userNumber": 114,
        "text": "@113 ابدأ في سامي، خذ خبرة، بعدين انتقل للمقاولين الدوليين. هذي الخطة.",
        "distance": "far",
        "duration": "30s",
        "timestamp": 1705320760000,
        "votes": 45,
        "parentId": 120
      },
      {
        "id": 2316,
        "userType": "OJ",
        "userNumber": null,
        "text": "@15 هالثريد أقنعني على الأقل أقدم على سامي. وش الوظائف أدور عليها كمهندس ميكانيكا جديد؟",
        "distance": "close",
        "duration": "30s",
        "timestamp": 1705320820000,
        "votes": 33,
        "parentId": 120
      },
      {
        "id": 2317,
        "userNumber": 15,
        "text": "@OJ دور على مهندس تصنيع، مهندس إنتاج، أو مهندس جودة. كلها نقاط دخول زينة للميكانيكا.",
        "distance": "close",
        "duration": "20s",
        "timestamp": 1705320880000,
        "votes": 41,
        "parentId": 120
      },
      {
        "id": 2318,
        "userNumber": 115,
        "text": "@OJ وبعد شيك على الشركة المتقدمة للإلكترونيات AEC. هم جزء من نفس المنظومة ويوظفون ميكانيكا بعد.",
        "distance": "far",
        "duration": "20s",
        "timestamp": 1705320940000,
        "votes": 29,
        "parentId": 120
      },
      {
        "id": 124,
        "userNumber": 17,
        "text": "وش رأيكم بالاستشارات؟ ماكنزي و BCG عندهم مكاتب ضخمة بالرياض الحين. يحبون المهندسين.",
        "distance": "close",
        "duration": "3 min",
        "timestamp": 1705319920000,
        "votes": 28,
        "parentId": null
      },
      {
        "id": 125,
        "userNumber": 18,
        "text": "@17 الاستشارات ساعات قاتلة بس. ٨٠+ ساعة بالأسبوع عادي. الفلوس تستاهل؟",
        "distance": "far",
        "duration": "2 min",
        "timestamp": 1705319980000,
        "votes": 15,
        "parentId": 124
      },
      {
        "id": 126,
        "userNumber": 17,
        "text": "@18 لـ ٢-٣ سنوات أيه. فرص الخروج جنونية. تقدر تنتقل لأي شركة بعدها.",
        "distance": "close",
        "duration": "1 min",
        "timestamp": 1705320040000,
        "votes": 22,
        "parentId": 124
      },
      {
        "id": 127,
        "userNumber": 19,
        "text": "@17 بس أغلبهم يوظفون من جامعات عالمية. الخريجين المحليين أصعب يدخلون.",
        "distance": "far",
        "duration": "1 min",
        "timestamp": 1705320100000,
        "votes": 11,
        "parentId": 124
      },
      {
        "id": 128,
        "userNumber": 20,
        "text": "الكل نايمين على قطاع الطاقة المتجددة. أكوا باور تتوسع بشكل ضخم.",
        "distance": "close",
        "duration": "2 min",
        "timestamp": 1705320000000,
        "votes": 41,
        "parentId": null
      },
      {
        "id": 129,
        "userNumber": 21,
        "text": "@20 هذا! مشاريع الطاقة الشمسية والهيدروجين هي المستقبل. السعودية تبي تصير مصدرة طاقة خضراء.",
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
        "text": "@20 تخصصي الفرعي طاقة متجددة بالفعل! ممكن يكون مثالي. هل يوظفون خريجين جدد؟",
        "distance": "close",
        "duration": "1 min",
        "timestamp": 1705320120000,
        "votes": 18,
        "parentId": 128
      },
      {
        "id": 131,
        "userNumber": 20,
        "text": "@OJ أيه يا خوي! عندهم برنامج خريجين. قدم بدري بس، المنافسة شرسة.",
        "distance": "close",
        "duration": "30s",
        "timestamp": 1705320180000,
        "votes": 25,
        "parentId": 128
      },
      {
        "id": 132,
        "userNumber": 22,
        "text": "@20 أكوا زينة بس الفرصة الحقيقية في الهيدروجين. الهيدروجين الأخضر بيكون ضخم.",
        "distance": "far",
        "duration": "30s",
        "timestamp": 1705320240000,
        "votes": 17,
        "parentId": 128
      },
      {
        "id": 133,
        "userNumber": 23,
        "text": "سؤال جدي: يستاهل البقاء بالسعودية ولا الخريجين الجدد يطالعون الإمارات/قطر؟",
        "distance": "far",
        "duration": "1 min",
        "timestamp": 1705320080000,
        "votes": 35,
        "parentId": null
      },
      {
        "id": 134,
        "userNumber": 24,
        "text": "@23 سوق الإمارات مشبع. كل واحد وأمه راحوا دبي. السعودية هي مكان النمو.",
        "distance": "close",
        "duration": "30s",
        "timestamp": 1705320140000,
        "votes": 42,
        "parentId": 133
      },
      {
        "id": 135,
        "userNumber": 25,
        "text": "@23 قطر سوق صغير. السعودية فيها فرص أكثر بكثير على المدى البعيد.",
        "distance": "far",
        "duration": "30s",
        "timestamp": 1705320200000,
        "votes": 28,
        "parentId": 133
      },
      {
        "id": 136,
        "userNumber": 26,
        "text": "@24 ما أوافق. الإمارات لسا تدفع أحسن ونمط الحياة أحسن. السعودية تتغير بس ببطء.",
        "distance": "far",
        "duration": "20s",
        "timestamp": 1705320260000,
        "votes": 19,
        "parentId": 133
      },
      {
        "id": 137,
        "userNumber": 27,
        "text": "@26 الإمارات تدفع أحسن؟ يمكن قبل ٥ سنوات. الحين العروض السعودية تنافس خصوصاً مع السكن.",
        "distance": "close",
        "duration": "15s",
        "timestamp": 1705320320000,
        "votes": 31,
        "parentId": 133
      },
      {
        "id": 138,
        "userNumber": 28,
        "text": "أحد اشتغل في البحر الأحمر العالمية؟ سمعت كلام متضارب عن بيئة العمل هناك.",
        "distance": "close",
        "duration": "2 min",
        "timestamp": 1705320160000,
        "votes": 23,
        "parentId": null
      },
      {
        "id": 139,
        "userNumber": 29,
        "text": "@28 صديقي يشتغل هناك. الراتب زين بس الضغط شديد. يتوقعون نتائج بسرعة.",
        "distance": "close",
        "duration": "1 min",
        "timestamp": 1705320220000,
        "votes": 18,
        "parentId": 138
      },
      {
        "id": 140,
        "userNumber": 30,
        "text": "@28 ثقافة ستارت أب بالأساس. مو للكل بس زينة للتطور الوظيفي.",
        "distance": "far",
        "duration": "1 min",
        "timestamp": 1705320280000,
        "votes": 14,
        "parentId": 138
      },
      {
        "id": 141,
        "userNumber": 31,
        "text": "@29 وضح شديد. يعني شديد مثل أرامكو ولا شديد فعلياً؟",
        "distance": "close",
        "duration": "30s",
        "timestamp": 1705320340000,
        "votes": 21,
        "parentId": 138
      },
      {
        "id": 142,
        "userNumber": 29,
        "text": "@31 شديد فعلياً هههه. أرامكو ريلاكس بالمقارنة. بس تتعلم أسرع بكثير.",
        "distance": "close",
        "duration": "20s",
        "timestamp": 1705320400000,
        "votes": 27,
        "parentId": 138
      },
      {
        "id": 143,
        "userNumber": 32,
        "text": "نصيحة: ابني علاقات على لينكد إن. أغلب الوظائف ما تنزل علني. كلها عن المعارف.",
        "distance": "far",
        "duration": "1 min",
        "timestamp": 1705320240000,
        "votes": 56,
        "parentId": null
      },
      {
        "id": 144,
        "userNumber": 33,
        "text": "@32 هذا صحيح. أنا حصلت وظيفتي عن طريق رسالة لينكد إن. ما شفت إعلان وظيفة حتى.",
        "distance": "close",
        "duration": "30s",
        "timestamp": 1705320300000,
        "votes": 38,
        "parentId": 143
      },
      {
        "id": 145,
        "userNumber": 34,
        "text": "@32 كيف تبني علاقات بدون ما تبين محتاج؟",
        "distance": "far",
        "duration": "30s",
        "timestamp": 1705320360000,
        "votes": 22,
        "parentId": 143
      },
      {
        "id": 146,
        "userNumber": 32,
        "text": "@34 أضف ناس. لايك على بوستاتهم. علق بتفكير. لا تطلب وظيفة مباشرة. ابني العلاقة أول.",
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
        "text": "@32 جزاك الله خير. هذي نصيحة مفيدة فعلاً.",
        "distance": "close",
        "duration": "15s",
        "timestamp": 1705320480000,
        "votes": 19,
        "parentId": 143
      },
      {
        "id": 148,
        "userNumber": 35,
        "text": "أحد يعرف عن لوسيد موتورز في جدة؟ يبنون مصنعهم هناك.",
        "distance": "close",
        "duration": "2 min",
        "timestamp": 1705320320000,
        "votes": 32,
        "parentId": null
      },
      {
        "id": 149,
        "userNumber": 36,
        "text": "@35 لوسيد مثيرة بس لسا بدري. يوظفون بس أغلبهم ناس خبرة الحين.",
        "distance": "close",
        "duration": "1 min",
        "timestamp": 1705320380000,
        "votes": 21,
        "parentId": 148
      },
      {
        "id": 150,
        "userNumber": 37,
        "text": "@35 صناعة السيارات الكهربائية بالسعودية بتكون ضخمة. سير واحدة ثانية تستاهل المتابعة.",
        "distance": "far",
        "duration": "1 min",
        "timestamp": 1705320440000,
        "votes": 26,
        "parentId": 148
      },
      {
        "id": 151,
        "userNumber": 38,
        "text": "@37 سير هي شراكة السعودية مع فوكسكون صح؟ بتكون ضخمة.",
        "distance": "close",
        "duration": "30s",
        "timestamp": 1705320500000,
        "votes": 18,
        "parentId": 148
      },
      {
        "id": 152,
        "userNumber": 39,
        "text": "رأي مختلف: لا تلاحق أعلى راتب. لاحق أفضل فرصة تعلم.",
        "distance": "far",
        "duration": "1 min",
        "timestamp": 1705320400000,
        "votes": 67,
        "parentId": null
      },
      {
        "id": 153,
        "userNumber": 40,
        "text": "@39 سهل تقولها وأنت ما عندك قروض وتوقعات من الأهل.",
        "distance": "far",
        "duration": "30s",
        "timestamp": 1705320460000,
        "votes": 43,
        "parentId": 152
      },
      {
        "id": 154,
        "userNumber": 39,
        "text": "@40 نقطة صحيحة. بس على المدى البعيد المهارات تدفع أكثر من فرق كم ألف ريال الحين.",
        "distance": "far",
        "duration": "20s",
        "timestamp": 1705320520000,
        "votes": 35,
        "parentId": 152
      },
      {
        "id": 155,
        "userNumber": 41,
        "text": "@39 الاثنين مهمين. لقى مكان يدفع زين ويخليك تنمو. موجودين.",
        "distance": "close",
        "duration": "15s",
        "timestamp": 1705320580000,
        "votes": 51,
        "parentId": 152
      },
      {
        "id": 156,
        "userNumber": 42,
        "text": "وش الشهادات اللي تفيد؟ PMP؟ Six Sigma؟ ولا الخبرة أهم؟",
        "distance": "close",
        "duration": "1 min",
        "timestamp": 1705320480000,
        "votes": 29,
        "parentId": null
      },
      {
        "id": 157,
        "userNumber": 43,
        "text": "@42 للميكانيكا، خذ رخصة PE لو تقدر. تفتح أبواب دولياً بعد.",
        "distance": "close",
        "duration": "30s",
        "timestamp": 1705320540000,
        "votes": 24,
        "parentId": 156
      },
      {
        "id": 158,
        "userNumber": 44,
        "text": "@42 PMP مبالغ فيها للخريجين الجدد. ركز على المهارات التقنية أول.",
        "distance": "far",
        "duration": "30s",
        "timestamp": 1705320600000,
        "votes": 31,
        "parentId": 156
      },
      {
        "id": 159,
        "userNumber": 45,
        "text": "@44 أوافق. PMP منطقية بعد ٥+ سنوات لما تدير مشاريع.",
        "distance": "close",
        "duration": "20s",
        "timestamp": 1705320660000,
        "votes": 22,
        "parentId": 156
      },
      {
        "id": 160,
        "userNumber": 46,
        "text": "لا تنسون روشن. يبنون مدن كاملة ويحتاجون مهندسين بشدة.",
        "distance": "far",
        "duration": "1 min",
        "timestamp": 1705320560000,
        "votes": 27,
        "parentId": null
      },
      {
        "id": 161,
        "userNumber": 47,
        "text": "@46 روشن زينة بس مشاريعهم أكثر مدنية/بناء صح؟",
        "distance": "close",
        "duration": "30s",
        "timestamp": 1705320620000,
        "votes": 14,
        "parentId": 160
      },
      {
        "id": 162,
        "userNumber": 46,
        "text": "@47 يحتاجون مهندسين HVAC و MEP بعد. الميكانيكا تناسب هناك.",
        "distance": "far",
        "duration": "20s",
        "timestamp": 1705320680000,
        "votes": 19,
        "parentId": 160
      },
      {
        "id": 163,
        "userNumber": 48,
        "text": "صاحب البوست فكر يسوي ماجستير أول؟ بعض الشركات ترعاهم.",
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
        "text": "@48 فكرت فيها بس أبي آخذ خبرة عملية أول. يمكن بعدين إن شاء الله.",
        "distance": "close",
        "duration": "30s",
        "timestamp": 1705320700000,
        "votes": 15,
        "parentId": 163
      },
      {
        "id": 165,
        "userNumber": 49,
        "text": "@48 الماجستير زين بس سنتين خبرة عمل أفضل من شهادة ماجستير لأغلب الشركات هنا.",
        "distance": "far",
        "duration": "20s",
        "timestamp": 1705320760000,
        "votes": 28,
        "parentId": 163
      },
      {
        "id": 166,
        "userNumber": 50,
        "text": "كلام جدي: تعلم برمجة. بايثون على الأقل. كل وظيفة هندسية تحتاجها الحين.",
        "distance": "close",
        "duration": "1 min",
        "timestamp": 1705320720000,
        "votes": 58,
        "parentId": null
      },
      {
        "id": 167,
        "userNumber": 51,
        "text": "@50 هذا. ماتلاب وبايثون لازم. حتى للوظائف الميكانيكية.",
        "distance": "close",
        "duration": "30s",
        "timestamp": 1705320780000,
        "votes": 39,
        "parentId": 166
      },
      {
        "id": 168,
        "userNumber": 52,
        "text": "@50 وبعد تعلم برامج CAD زين. سوليدووركس أو أوتوكاد حسب تخصصك.",
        "distance": "far",
        "duration": "30s",
        "timestamp": 1705320840000,
        "votes": 33,
        "parentId": 166
      },
      {
        "id": 169,
        "userNumber": 53,
        "text": "@52 كاتيا بعد لو تبي تشتغل في طيران أو سيارات.",
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
        "text": "@50 أتعلم بايثون الحمد لله. زين إني أعرف إنها مقدرة.",
        "distance": "close",
        "duration": "15s",
        "timestamp": 1705320960000,
        "votes": 17,
        "parentId": 166
      },
      {
        "id": 171,
        "userNumber": 54,
        "text": "وش رأيكم بالستارت أبس؟ مشهد الستارت أب السعودي ينمو. يمكن تكون خبرة زينة.",
        "distance": "far",
        "duration": "1 min",
        "timestamp": 1705320800000,
        "votes": 24,
        "parentId": null
      },
      {
        "id": 172,
        "userNumber": 55,
        "text": "@54 الستارت أبس خطرة. ما فيه أمان وظيفي وغالباً رواتب قليلة. بس تتعلم وايد.",
        "distance": "close",
        "duration": "30s",
        "timestamp": 1705320860000,
        "votes": 18,
        "parentId": 171
      },
      {
        "id": 173,
        "userNumber": 56,
        "text": "@54 أغلب الستارت أبس السعودية تركز على التقنية. مو كثير للمهندسين الميكانيكيين.",
        "distance": "far",
        "duration": "30s",
        "timestamp": 1705320920000,
        "votes": 12,
        "parentId": 171
      },
      {
        "id": 174,
        "userNumber": 57,
        "text": "@56 فيه بعض ستارت أبس صناعية/تصنيعية. شيك على محفظة واعد.",
        "distance": "close",
        "duration": "20s",
        "timestamp": 1705320980000,
        "votes": 16,
        "parentId": 171
      },
      {
        "id": 175,
        "userNumber": 58,
        "text": "أرامكو لسا الحلم لكثير ناس. أحد يعرف طريقة التوظيف الحالية؟",
        "distance": "close",
        "duration": "1 min",
        "timestamp": 1705320880000,
        "votes": 31,
        "parentId": null
      },
      {
        "id": 176,
        "userNumber": 59,
        "text": "@58 تقديم أونلاين، اختبار تقني، مقابلات متعددة. تاخذ ٤-٦ شهور عادة.",
        "distance": "close",
        "duration": "30s",
        "timestamp": 1705320940000,
        "votes": 26,
        "parentId": 175
      },
      {
        "id": 177,
        "userNumber": 60,
        "text": "@58 برنامج الخريجين عندهم يفتح مرة بالسنة. لا يفوتك الموعد.",
        "distance": "far",
        "duration": "30s",
        "timestamp": 1705321000000,
        "votes": 22,
        "parentId": 175
      },
      {
        "id": 178,
        "userNumber": 61,
        "text": "@60 متى عادة يفتح؟ سبتمبر؟",
        "distance": "close",
        "duration": "20s",
        "timestamp": 1705321060000,
        "votes": 15,
        "parentId": 175
      },
      {
        "id": 179,
        "userNumber": 60,
        "text": "@61 عادة أكتوبر-نوفمبر. شيك على بوابة الوظائف عندهم بانتظام.",
        "distance": "far",
        "duration": "15s",
        "timestamp": 1705321120000,
        "votes": 19,
        "parentId": 175
      },
      {
        "id": 180,
        "userNumber": 62,
        "text": "شي ما أحد ذكره: التوازن بين العمل والحياة. بعض الشركات بتحرقك.",
        "distance": "close",
        "duration": "1 min",
        "timestamp": 1705320960000,
        "votes": 47,
        "parentId": null
      },
      {
        "id": 181,
        "userNumber": 63,
        "text": "@62 أرامكو وسابك أفضل توازن. إيقاع حكومي بالأساس.",
        "distance": "close",
        "duration": "30s",
        "timestamp": 1705321020000,
        "votes": 35,
        "parentId": 180
      },
      {
        "id": 182,
        "userNumber": 64,
        "text": "@62 المشاريع العملاقة العكس. ١٢ ساعة باليوم عادي وقت الضغط.",
        "distance": "far",
        "duration": "30s",
        "timestamp": 1705321080000,
        "votes": 28,
        "parentId": 180
      },
      {
        "id": 183,
        "userNumber": 65,
        "text": "@63 الإيقاع الحكومي يمكن يتغير. يدفعون للكفاءة الحين.",
        "distance": "close",
        "duration": "20s",
        "timestamp": 1705321140000,
        "votes": 21,
        "parentId": 180
      },
      {
        "id": 184,
        "userNumber": 66,
        "text": "ملخص لصاحب البوست: نيوم/القدية للمغامرة، أرامكو/سابك للاستقرار، الدفاع لإمكانيات النمو.",
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
        "text": "@66 جزاك الله خير على الملخص! كل هالثريد كان مفيد جداً.",
        "distance": "close",
        "duration": "30s",
        "timestamp": 1705321100000,
        "votes": 42,
        "parentId": 184
      },
      {
        "id": 186,
        "userNumber": 67,
        "text": "@66 لا تنسى الطاقة المتجددة. أكوا وقطاع الطاقة الخضراء هو المستقبل.",
        "distance": "close",
        "duration": "30s",
        "timestamp": 1705321160000,
        "votes": 31,
        "parentId": 184
      },
      {
        "id": 187,
        "userNumber": 68,
        "text": "@66 وبعد صناعة السيارات الكهربائية. لوسيد/سير بيحتاجون مهندسين كثير قريب.",
        "distance": "far",
        "duration": "20s",
        "timestamp": 1705321220000,
        "votes": 25,
        "parentId": 184
      },
      {
        "id": 188,
        "userNumber": 69,
        "text": "حفظت الثريد. هذا ذهب لأي واحد يتخرج هندسة الحين.",
        "distance": "close",
        "duration": "30s",
        "timestamp": 1705321120000,
        "votes": 56,
        "parentId": null
      },
      {
        "id": 189,
        "userNumber": 70,
        "text": "@69 حرفياً صور كل شي. هالمعلومات عادة تكلف فلوس من مستشاري التوظيف.",
        "distance": "close",
        "duration": "20s",
        "timestamp": 1705321180000,
        "votes": 38,
        "parentId": 188
      },
      {
        "id": 190,
        "userNumber": 71,
        "text": "@69 شاركه مع زملائك بعد. لازم نساعد بعض.",
        "distance": "far",
        "duration": "15s",
        "timestamp": 1705321240000,
        "votes": 44,
        "parentId": 188
      },
      {
        "id": 191,
        "userNumber": 72,
        "text": "نصيحة أخيرة: أي شي تختار، أعطه ١٠٠٪. أول وظيفة تشكل كل مسيرتك المهنية.",
        "distance": "close",
        "duration": "1 min",
        "timestamp": 1705321200000,
        "votes": 73,
        "parentId": null
      },
      {
        "id": 192,
        "userNumber": 73,
        "text": "@72 صح. أول ٢-٣ سنوات هي الأساس. لا تتهاون.",
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
        "text": "@72 إن شاء الله بسوي أفضل ما عندي. شكراً للكل على النصائح!",
        "distance": "close",
        "duration": "20s",
        "timestamp": 1705321320000,
        "votes": 35,
        "parentId": 191
      },
      {
        "id": 194,
        "userNumber": 74,
        "text": "@OJ بالتوفيق يا أخي. ارجع خبرنا وين صرت!",
        "distance": "far",
        "duration": "15s",
        "timestamp": 1705321380000,
        "votes": 48,
        "parentId": 191
      },
      {
        "id": 195,
        "userNumber": 75,
        "text": "أعلق عشان أتابع. أنا بعد أتخرج قريب وهذا بالضبط اللي احتاجه.",
        "distance": "close",
        "duration": "30s",
        "timestamp": 1705321280000,
        "votes": 29,
        "parentId": null
      },
      {
        "id": 196,
        "userNumber": 76,
        "text": "@75 نفس الشي يا خوي. هندسة كهربائية بس النصيحة تنطبق.",
        "distance": "close",
        "duration": "20s",
        "timestamp": 1705321340000,
        "votes": 18,
        "parentId": 195
      },
      {
        "id": 197,
        "userNumber": 77,
        "text": "@75 مهندس مدني هنا. أكتب ملاحظات والله.",
        "distance": "far",
        "duration": "15s",
        "timestamp": 1705321400000,
        "votes": 21,
        "parentId": 195
      },
      {
        "id": 198,
        "userNumber": 78,
        "text": "نقدر نثبت هالثريد؟ المشرفين لازم يسوونه مرجع.",
        "distance": "close",
        "duration": "20s",
        "timestamp": 1705321360000,
        "votes": 62,
        "parentId": null
      },
      {
        "id": 199,
        "userNumber": 79,
        "text": "@78 والله أحسن من أي معرض توظيف رحت له.",
        "distance": "close",
        "duration": "15s",
        "timestamp": 1705321420000,
        "votes": 47,
        "parentId": 198
      },
      {
        "id": 200,
        "userNumber": 80,
        "text": "@78 أوافق. نصيحة حقيقية من ناس حقيقيين أفضل من كلام الشركات أي يوم.",
        "distance": "far",
        "duration": "10s",
        "timestamp": 1705321480000,
        "votes": 55,
        "parentId": 198
      }
    ],
    "3": [
      {
        "id": 1,
        "userNumber": 1,
        "text": "إليكسير بن في حطين بدون منازع الأفضل. قهوتهم الإثيوبية سنقل أوريجن خيالية. ومكان ممتاز للشغل مع واي فاي سريع.",
        "distance": "close",
        "duration": "2h 55min",
        "timestamp": 1705308300000,
        "votes": 187,
        "parentId": null
      },
      {
        "id": 2,
        "userNumber": 2,
        "text": "@1 إليكسير حلو بس دايم زحمة. صعب تلقى كرسي خصوصاً نهاية الأسبوع.",
        "distance": "close",
        "duration": "2h 50min",
        "timestamp": 1705308600000,
        "votes": 45,
        "parentId": 1
      },
      {
        "id": 3,
        "userNumber": 3,
        "text": "@1 الفلات وايت عندهم أفضل وحدة بالرياض والله. صار لي سنتين أروح لهم.",
        "distance": "far",
        "duration": "2h 45min",
        "timestamp": 1705308900000,
        "votes": 38,
        "parentId": 1
      },
      {
        "id": 4,
        "userNumber": 4,
        "text": "@2 روح الصبح بدري حوالي الساعة ٧. فاضي وهادي. أفضل وقت للشغل.",
        "distance": "close",
        "duration": "2h 40min",
        "timestamp": 1705309200000,
        "votes": 52,
        "parentId": 1
      },
      {
        "id": 5,
        "userNumber": 5,
        "text": "@4 الساعة ٧؟ بعضنا عنده دوام يا خوي هههه",
        "distance": "close",
        "duration": "2h 35min",
        "timestamp": 1705309500000,
        "votes": 89,
        "parentId": 1
      },
      {
        "id": 6,
        "userNumber": 1,
        "text": "@5 عشان كذا صباحات أيام الأسبوع تنفع. روح قبل الدوام.",
        "distance": "close",
        "duration": "2h 30min",
        "timestamp": 1705309800000,
        "votes": 23,
        "parentId": 1
      },
      {
        "id": 7,
        "userNumber": 6,
        "text": "@1 وش وضع المواقف؟ منطقة حطين كابوس.",
        "distance": "far",
        "duration": "2h 25min",
        "timestamp": 1705310100000,
        "votes": 34,
        "parentId": 1
      },
      {
        "id": 8,
        "userNumber": 7,
        "text": "@6 فيه مواقف تحت الأرض. مو مجانية بس مريحة.",
        "distance": "close",
        "duration": "2h 20min",
        "timestamp": 1705310400000,
        "votes": 27,
        "parentId": 1
      },
      {
        "id": 9,
        "userNumber": 8,
        "text": "@1 الحلويات عندهم عادية بصراحة. روح بس للقهوة.",
        "distance": "close",
        "duration": "2h 15min",
        "timestamp": 1705310700000,
        "votes": 41,
        "parentId": 1
      },
      {
        "id": 10,
        "userNumber": 9,
        "text": "@8 صح. فطر من مكان ثاني وخذ بس قهوة منهم.",
        "distance": "far",
        "duration": "2h 10min",
        "timestamp": 1705311000000,
        "votes": 19,
        "parentId": 1
      },
      {
        "id": 11,
        "userNumber": 10,
        "text": "@1 كم الأسعار؟ غالي؟",
        "distance": "close",
        "duration": "2h 5min",
        "timestamp": 1705311300000,
        "votes": 15,
        "parentId": 1
      },
      {
        "id": 12,
        "userNumber": 1,
        "text": "@10 حوالي ٢٥-٣٥ ريال للمشروبات المختصة. تستاهل على الجودة.",
        "distance": "close",
        "duration": "2h",
        "timestamp": 1705311600000,
        "votes": 28,
        "parentId": 1
      },
      {
        "id": 13,
        "userNumber": 11,
        "text": "فايف إليفانت في الملقا ما ياخذ حقه. محمصة ألمانية وبور أوفر خيالي. وأهدى من إليكسير.",
        "distance": "close",
        "duration": "2h 45min",
        "timestamp": 1705308900000,
        "votes": 156,
        "parentId": null
      },
      {
        "id": 14,
        "userNumber": 12,
        "text": "@11 فايف إليفانت نار! حبوب الكينيا عندهم رهيبة.",
        "distance": "close",
        "duration": "2h 30min",
        "timestamp": 1705309800000,
        "votes": 42,
        "parentId": 13
      },
      {
        "id": 15,
        "userNumber": 13,
        "text": "@11 بس الموقع شوي مخفي. أخذت وقت طويل ألقاه أول مرة.",
        "distance": "far",
        "duration": "2h 15min",
        "timestamp": 1705310700000,
        "votes": 31,
        "parentId": 13
      },
      {
        "id": 16,
        "userNumber": 14,
        "text": "برو٩٢ إذا تبي قهوة مختصة سعودية. يجيبون حبوب محلية ويحمصونها عندهم. وعندهم فروع كثير.",
        "distance": "close",
        "duration": "2h 35min",
        "timestamp": 1705309500000,
        "votes": 134,
        "parentId": null
      },
      {
        "id": 17,
        "userNumber": 15,
        "text": "@14 فرع التحلية جوه أفضل. الجلسات الخارجية حلوة بالشتاء.",
        "distance": "close",
        "duration": "2h 20min",
        "timestamp": 1705310400000,
        "votes": 47,
        "parentId": 16
      },
      {
        "id": 18,
        "userNumber": 16,
        "text": "كامل ستيب في العليا. ديكور جميل وقهوة زينة وحلو للتصوير.",
        "distance": "far",
        "duration": "2h 25min",
        "timestamp": 1705310100000,
        "votes": 98,
        "parentId": null
      },
      {
        "id": 19,
        "userNumber": 17,
        "text": "@16 غالي على جودته بصراحة. تدفع على الديكور.",
        "distance": "close",
        "duration": "2h 10min",
        "timestamp": 1705311000000,
        "votes": 56,
        "parentId": 18
      },
      {
        "id": 20,
        "userNumber": 18,
        "text": "@17 أحياناً الديكور هو المقصود. مكان حلو للاجتماعات.",
        "distance": "far",
        "duration": "1h 55min",
        "timestamp": 1705311900000,
        "votes": 33,
        "parentId": 18
      },
      {
        "id": 21,
        "userNumber": 19,
        "text": "دكان قهوة في الدرعية إذا تبي التجربة الكاملة. منطقة تاريخية + قهوة ممتازة.",
        "distance": "close",
        "duration": "2h 15min",
        "timestamp": 1705310700000,
        "votes": 112,
        "parentId": null
      },
      {
        "id": 22,
        "userNumber": 20,
        "text": "@19 هذا! دكان مع إطلالة الدرعية شي ثاني.",
        "distance": "close",
        "duration": "2h",
        "timestamp": 1705311600000,
        "votes": 44,
        "parentId": 21
      },
      {
        "id": 23,
        "userNumber": 21,
        "text": "أحد جرب نبت في مركز الملك عبدالله المالي؟ سمعت إنه جديد وزين.",
        "distance": "far",
        "duration": "2h 5min",
        "timestamp": 1705311300000,
        "votes": 67,
        "parentId": null
      },
      {
        "id": 24,
        "userNumber": 22,
        "text": "@21 نبت ممتاز. مكان عصري والإسبريسو ممتاز. بس جوه شوي رسمي.",
        "distance": "close",
        "duration": "1h 50min",
        "timestamp": 1705312200000,
        "votes": 29,
        "parentId": 23
      },
      {
        "id": 25,
        "userNumber": 23,
        "text": "ريشيو كوفي في السليمانية. صغير بس دافي. صاحبه شغوف بالقهوة جداً.",
        "distance": "close",
        "duration": "1h 55min",
        "timestamp": 1705311900000,
        "votes": 89,
        "parentId": null
      },
      {
        "id": 26,
        "userNumber": 24,
        "text": "@23 ريشيو جوهرة مخفية! بس ما فيه واي فاي فمو زين للشغل.",
        "distance": "far",
        "duration": "1h 40min",
        "timestamp": 1705312800000,
        "votes": 36,
        "parentId": 25
      },
      {
        "id": 27,
        "userNumber": 25,
        "text": "أوفردوز كوفي. اسم قوي وقهوة أقوى. مو لأصحاب القلوب الضعيفة.",
        "distance": "close",
        "duration": "1h 45min",
        "timestamp": 1705312500000,
        "votes": 78,
        "parentId": null
      },
      {
        "id": 28,
        "userNumber": 26,
        "text": "@25 الدبل شوت إسبريسو عندهم صحاني ١٢ ساعة هههه",
        "distance": "close",
        "duration": "1h 30min",
        "timestamp": 1705313400000,
        "votes": 91,
        "parentId": 27
      },
      {
        "id": 29,
        "userType": "OJ",
        "userNumber": null,
        "text": "@1 أخيراً جربت إليكسير بن اليوم على توصيتك. كنت صادق، الإثيوبية خيالية! شكراً على الترشيح.",
        "distance": "close",
        "duration": "45min",
        "timestamp": 1705316100000,
        "votes": 67,
        "parentId": 1
      },
      {
        "id": 30,
        "userNumber": 27,
        "text": "ميد كافيه قريب من غرناطة مول. ممتاز للشغل عن بعد. فيه مخارج كهرباء في كل مكان.",
        "distance": "far",
        "duration": "1h 35min",
        "timestamp": 1705313100000,
        "votes": 54,
        "parentId": null
      }
    ]
  },
  // Activities represent subreply notifications - shown between parent replies chronologically
  // Each activity is generated when someone replies to a reply (creates a subreply)
  "activitiesByPostId": {
    "3": []
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
