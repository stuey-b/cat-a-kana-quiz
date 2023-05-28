
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
      { id: 0, text: "ra", isCorrect: false },
      { id: 1, text: "mo", isCorrect: false },
      { id: 2, text: "a", isCorrect: true },
      { id: 3, text: "te", isCorrect: false },
    ],
  },
  {
    questionText: "イ",
    answerOptions: [
      { id: 0, text: "i", isCorrect: true },
      { id: 1, text: "wa", isCorrect: false },
      { id: 2, text: "shi", isCorrect: false },
      { id: 3, text: "ru", isCorrect: false },
    ],
  },
  {
    questionText: "ウ",
    answerOptions: [
      { id: 0, text: "u", isCorrect: true },
      { id: 1, text: "tsu", isCorrect: false },
      { id: 2, text: "e", isCorrect: false },
      { id: 3, text: "ho", isCorrect: false },
    ],
  },
  {
    questionText: "エ",
    answerOptions: [
      { id: 0, text: "se", isCorrect: false },
      { id: 1, text: "ho", isCorrect: false },
      { id: 2, text: "e", isCorrect: true },
      { id: 3, text: "chi", isCorrect: false },
    ],
  },
  {
    questionText: "オ",
    answerOptions: [
      { id: 0, text: "yo", isCorrect: false },
      { id: 1, text: "ne", isCorrect: false },
      { id: 2, text: "ku", isCorrect: false },
      { id: 3, text: "o", isCorrect: true },
    ],
  },
  {
    questionText: "カ",
    answerOptions: [
      { id: 0, text: "ka", isCorrect: true },
      { id: 1, text: "a", isCorrect: false },
      { id: 2, text: "mo", isCorrect: false },
      { id: 3, text: "ne", isCorrect: false },
    ],
  },
  {
    questionText: "キ",
    answerOptions: [
      { id: 0, text: "ri", isCorrect: false },
      { id: 1, text: "to", isCorrect: false },
      { id: 2, text: "a", isCorrect: false },
      { id: 3, text: "ki", isCorrect: true },
    ],
  },
  {
    questionText: "ク",
    answerOptions: [
      { id: 0, text: "n", isCorrect: false },
      { id: 1, text: "ku", isCorrect: true },
      { id: 2, text: "ta", isCorrect: false },
      { id: 3, text: "tsu", isCorrect: false },
    ],
  },
  {
    questionText: "ケ",
    answerOptions: [
      { id: 0, text: "i", isCorrect: false },
      { id: 1, text: "ke", isCorrect: true },
      { id: 2, text: "mu", isCorrect: false },
      { id: 3, text: "he", isCorrect: false },
    ],
  },
  {
    questionText: "コ",
    answerOptions: [
      { id: 0, text: "ko", isCorrect: true },
      { id: 1, text: "hi", isCorrect: false },
      { id: 2, text: "ra", isCorrect: false },
      { id: 3, text: "so", isCorrect: false },
    ],
  },
  {
    questionText: "サ",
    answerOptions: [
      { id: 0, text: "yo", isCorrect: false },
      { id: 1, text: "ta", isCorrect: false },
      { id: 2, text: "su", isCorrect: false },
      { id: 3, text: "sa", isCorrect: true },
    ],
  },
  {
    questionText: "シ",
    answerOptions: [
      { id: 0, text: "e", isCorrect: false },
      { id: 1, text: "shi", isCorrect: true },
      { id: 2, text: "ya", isCorrect: false },
      { id: 3, text: "chi", isCorrect: false },
    ],
  },
  {
    questionText: "ス",
    answerOptions: [
      { id: 0, text: "ne", isCorrect: false },
      { id: 1, text: "su", isCorrect: true },
      { id: 2, text: "wa", isCorrect: false },
      { id: 3, text: "mu", isCorrect: false },
    ],
  },
  {
    questionText: "セ",
    answerOptions: [
      { id: 0, text: "se", isCorrect: true },
      { id: 1, text: "to", isCorrect: false },
      { id: 2, text: "me", isCorrect: false },
      { id: 3, text: "ra", isCorrect: false },
    ],
  },
  {
    questionText: "ソ",
    answerOptions: [
      { id: 0, text: "o", isCorrect: false },
      { id: 1, text: "tsu", isCorrect: false },
      { id: 2, text: "ki", isCorrect: false },
      { id: 3, text: "so", isCorrect: true },
    ],
  },
  {
    questionText: "タ",
    answerOptions: [
      { id: 0, text: "ta", isCorrect: true },
      { id: 1, text: "ne", isCorrect: false },
      { id: 2, text: "na", isCorrect: false },
      { id: 3, text: "ho", isCorrect: false },
    ],
  },
  {
    questionText: "チ",
    answerOptions: [
      { id: 0, text: "ni", isCorrect: false },
      { id: 1, text: "e", isCorrect: false },
      { id: 2, text: "chi", isCorrect: true },
      { id: 3, text: "ru", isCorrect: false },
    ],
  },
  {
    questionText: "ツ",
    answerOptions: [
      { id: 0, text: "shi", isCorrect: false },
      { id: 1, text: "tsu", isCorrect: true },
      { id: 2, text: "ya", isCorrect: false },
      { id: 3, text: "fu", isCorrect: false },
    ],
  },
  {
    questionText: "テ",
    answerOptions: [
      { id: 0, text: "chi", isCorrect: false },
      { id: 1, text: "re", isCorrect: false },
      { id: 2, text: "hi", isCorrect: false },
      { id: 3, text: "te", isCorrect: true },
    ],
  },
  {
    questionText: "ト",
    answerOptions: [
      { id: 0, text: "to", isCorrect: true },
      { id: 1, text: "he", isCorrect: false },
      { id: 2, text: "so", isCorrect: false },
      { id: 3, text: "shi", isCorrect: true },
    ],
  },
  {
    questionText: "ナ",
    answerOptions: [
      { id: 0, text: "na", isCorrect: true },
      { id: 1, text: "te", isCorrect: false },
      { id: 2, text: "ka", isCorrect: false },
      { id: 3, text: "fu", isCorrect: false },
    ],
  },
  {
    questionText: "ニ",
    answerOptions: [
      { id: 0, text: "tsu", isCorrect: false },
      { id: 1, text: "ni", isCorrect: true },
      { id: 2, text: "no", isCorrect: false },
      { id: 3, text: "ri", isCorrect: false },
    ],
  },
  {
    questionText: "ヌ",
    answerOptions: [
      { id: 0, text: "ku", isCorrect: false },
      { id: 1, text: "re", isCorrect: false },
      { id: 2, text: "nu", isCorrect: true },
      { id: 3, text: "i", isCorrect: false },
    ],
  },
  {
    questionText: "ネ",
    answerOptions: [
      { id: 0, text: "to", isCorrect: false },
      { id: 1, text: "ne", isCorrect: true },
      { id: 2, text: "yu", isCorrect: false },
      { id: 3, text: "ke", isCorrect: false },
    ],
  },
  {
    questionText: "ノ",
    answerOptions: [
      { id: 0, text: "no", isCorrect: true },
      { id: 1, text: "n", isCorrect: false },
      { id: 2, text: "ru", isCorrect: false },
      { id: 3, text: "wo", isCorrect: false },
    ],
  },
  {
    questionText: "ハ",
    answerOptions: [
      { id: 0, text: "ha", isCorrect: true },
      { id: 1, text: "yo", isCorrect: false },
      { id: 2, text: "se", isCorrect: false },
      { id: 3, text: "a", isCorrect: false },
    ],
  },
  {
    questionText: "ヒ",
    answerOptions: [
      { id: 0, text: "ki", isCorrect: false },
      { id: 1, text: "to", isCorrect: false },
      { id: 2, text: "a", isCorrect: false },
      { id: 3, text: "hi", isCorrect: true },
    ],
  },
  {
    questionText: "フ",
    answerOptions: [
      { id: 0, text: "yu", isCorrect: false },
      { id: 1, text: "shi", isCorrect: false },
      { id: 2, text: "fu", isCorrect: true },
      { id: 3, text: "te", isCorrect: false },
    ],
  },
  {
    questionText: "ヘ",
    answerOptions: [
      { id: 0, text: "re", isCorrect: false },
      { id: 1, text: "mi", isCorrect: false },
      { id: 2, text: "he", isCorrect: true },
      { id: 3, text: "ro", isCorrect: false },
    ],
  },
  {
    questionText: "ホ",
    answerOptions: [
      { id: 0, text: "hi", isCorrect: false },
      { id: 1, text: "ho", isCorrect: true },
      { id: 2, text: "u", isCorrect: false },
      { id: 3, text: "mo", isCorrect: false },
    ],
  },
  {
    questionText: "マ",
    answerOptions: [
      { id: 0, text: "ra", isCorrect: false },
      { id: 1, text: "o", isCorrect: false },
      { id: 2, text: "ma", isCorrect: true },
      { id: 3, text: "mu", isCorrect: false },
    ],
  },
  {
    questionText: "ミ",
    answerOptions: [
      { id: 0, text: "shi", isCorrect: false },
      { id: 1, text: "ku", isCorrect: false },
      { id: 2, text: "ke", isCorrect: false },
      { id: 3, text: "mi", isCorrect: true },
    ],
  },
  {
    questionText: "ム",
    answerOptions: [
      { id: 0, text: "mu", isCorrect: true },
      { id: 1, text: "ke", isCorrect: false },
      { id: 2, text: "i", isCorrect: false },
      { id: 3, text: "u", isCorrect: false },
    ],
  },
  {
    questionText: "メ",
    answerOptions: [
      { id: 0, text: "mu", isCorrect: false },
      { id: 1, text: "e", isCorrect: false },
      { id: 2, text: "shi", isCorrect: false },
      { id: 3, text: "me", isCorrect: true },
    ],
  },
  {
    questionText: "モ",
    answerOptions: [
      { id: 0, text: "tsu", isCorrect: false },
      { id: 1, text: "mo", isCorrect: true },
      { id: 2, text: "ra", isCorrect: false },
      { id: 3, text: "yo", isCorrect: false },
    ],
  },
  {
    questionText: "ヤ",
    answerOptions: [
      { id: 0, text: "ha", isCorrect: false },
      { id: 1, text: "so", isCorrect: false },
      { id: 2, text: "ya", isCorrect: true },
      { id: 3, text: "ri", isCorrect: false },
    ],
  },
  {
    questionText: "ユ",
    answerOptions: [
      { id: 0, text: "u", isCorrect: false },
      { id: 1, text: "yo", isCorrect: false },
      { id: 2, text: "yu", isCorrect: true },
      { id: 3, text: "ko", isCorrect: false },
    ],
  },
  {
    questionText: "ヨ",
    answerOptions: [
      { id: 0, text: "yo", isCorrect: true },
      { id: 1, text: "ke", isCorrect: false },
      { id: 2, text: "so", isCorrect: false },
      { id: 3, text: "ki", isCorrect: false },
    ],
  },
  {
    questionText: "ラ",
    answerOptions: [
      { id: 0, text: "ra", isCorrect: true },
      { id: 1, text: "i", isCorrect: false },
      { id: 2, text: "so", isCorrect: false },
      { id: 3, text: "na", isCorrect: false },
    ],
  },
  {
    questionText: "リ",
    answerOptions: [
      { id: 0, text: "i", isCorrect: false },
      { id: 1, text: "ya", isCorrect: false },
      { id: 2, text: "to", isCorrect: false },
      { id: 3, text: "ri", isCorrect: true },
    ],
  },
  {
    questionText: "ル",
    answerOptions: [
      { id: 0, text: "su", isCorrect: false },
      { id: 1, text: "te", isCorrect: false },
      { id: 2, text: "ru", isCorrect: true },
      { id: 3, text: "to", isCorrect: false },
    ],
  },
  {
    questionText: "レ",
    answerOptions: [
      { id: 0, text: "no", isCorrect: false },
      { id: 1, text: "he", isCorrect: false },
      { id: 2, text: "chi", isCorrect: false },
      { id: 3, text: "re", isCorrect: true },
    ],
  },
  {
    questionText: "ロ",
    answerOptions: [
      { id: 0, text: "na", isCorrect: false },
      { id: 1, text: "ro", isCorrect: true },
      { id: 2, text: "ta", isCorrect: false },
      { id: 3, text: "ho", isCorrect: false },
    ],
  },
  {
    questionText: "ワ",
    answerOptions: [
      { id: 0, text: "wa", isCorrect: true },
      { id: 1, text: "ro", isCorrect: false },
      { id: 2, text: "shi", isCorrect: false },
      { id: 3, text: "a", isCorrect: false },
    ],
  },
  {
    questionText: "ヲ",
    answerOptions: [
      { id: 0, text: "hi", isCorrect: false },
      { id: 1, text: "wo", isCorrect: true },
      { id: 2, text: "ra", isCorrect: false },
      { id: 3, text: "ko", isCorrect: false },
    ],
  },
  {
    questionText: "ン",
    answerOptions: [
      { id: 0, text: "n", isCorrect: true },
      { id: 1, text: "ha", isCorrect: false },
      { id: 2, text: "se", isCorrect: false },
      { id: 3, text: "no", isCorrect: false },
    ],
  },
];

export { basicKatakanaQuestions, shuffleQuestions };
