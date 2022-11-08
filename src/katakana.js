
const shuffleQuestions = (basicKatakanaQuestions) => {
  for (let i = basicKatakanaQuestions.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    [basicKatakanaQuestions[i], basicKatakanaQuestions[random]] = [
      basicKatakanaQuestions[random],
      basicKatakanaQuestions[i],
    ];
  }
};

const basicKatakanaQuestions = [
  {
    questionText: "ア",
    answerOptions: [
      { id: 0, text: "ha", isCorrect: false },
      { id: 1, text: "stu", isCorrect: false },
      { id: 2, text: "a", isCorrect: true },
      { id: 3, text: "shi", isCorrect: false },
    ],
  },
  {
    questionText: "イ",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: true },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "ウ",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "エ",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "オ",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "カ",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "キ",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "ク",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "ケ",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "コ",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "サ",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "シ",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "ス",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "セ",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "ソ",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "タ",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "チ",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "ツ",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "テ",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "ト",
    answerOptions: [
      { id: 0, text: "ra", isCorrect: false },
      { id: 1, text: "he", isCorrect: false },
      { id: 2, text: "so", isCorrect: false },
      { id: 3, text: "shi", isCorrect: true },
    ],
  },
  {
    questionText: "ナ",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "ニ",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "ヌ",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "ネ",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "ノ",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "ハ",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "ヒ",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "フ",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "ヘ",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "ホ",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "マ",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "ミ",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "ム",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "メ",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "モ",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "ラ",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "リ",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "ル",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "レ",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "ロ",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "ヤ",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "ユ",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "ヨ",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "ワ",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "ヲ",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
  {
    questionText: "ン",
    answerOptions: [
      { id: 0, text: "", isCorrect: false },
      { id: 1, text: "", isCorrect: false },
      { id: 2, text: "", isCorrect: false },
      { id: 3, text: "", isCorrect: false },
    ],
  },
];

export { basicKatakanaQuestions, shuffleQuestions };
