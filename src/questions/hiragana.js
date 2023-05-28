
const shuffleQuestions = (basicHiraganaQuestions) => {
  for (let i = basicHiraganaQuestions.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    [basicHiraganaQuestions[i], basicHiraganaQuestions[random]] = [
      basicHiraganaQuestions[random],
      basicHiraganaQuestions[i],
    ];
  }
};

const basicHiraganaQuestions = [
  {
    questionText: "あ",
    answerOptions: [
      { id: 0, text: "ra", isCorrect: false },
      { id: 1, text: "mo", isCorrect: false },
      { id: 2, text: "a", isCorrect: true },
      { id: 3, text: "te", isCorrect: false },
    ],
  },
  {
    questionText: "い",
    answerOptions: [
      { id: 0, text: "i", isCorrect: true },
      { id: 1, text: "wa", isCorrect: false },
      { id: 2, text: "shi", isCorrect: false },
      { id: 3, text: "ru", isCorrect: false },
    ],
  },
  {
    questionText: "う",
    answerOptions: [
      { id: 0, text: "u", isCorrect: true },
      { id: 1, text: "tsu", isCorrect: false },
      { id: 2, text: "e", isCorrect: false },
      { id: 3, text: "ho", isCorrect: false },
    ],
  },
  {
    questionText: "え",
    answerOptions: [
      { id: 0, text: "se", isCorrect: false },
      { id: 1, text: "ho", isCorrect: false },
      { id: 2, text: "e", isCorrect: true },
      { id: 3, text: "chi", isCorrect: false },
    ],
  },
  {
    questionText: "お",
    answerOptions: [
      { id: 0, text: "yo", isCorrect: false },
      { id: 1, text: "ne", isCorrect: false },
      { id: 2, text: "ku", isCorrect: false },
      { id: 3, text: "o", isCorrect: true },
    ],
  },
  {
    questionText: "か",
    answerOptions: [
      { id: 0, text: "ka", isCorrect: true },
      { id: 1, text: "a", isCorrect: false },
      { id: 2, text: "mo", isCorrect: false },
      { id: 3, text: "ne", isCorrect: false },
    ],
  },
  {
    questionText: "き",
    answerOptions: [
      { id: 0, text: "ri", isCorrect: false },
      { id: 1, text: "to", isCorrect: false },
      { id: 2, text: "a", isCorrect: false },
      { id: 3, text: "ki", isCorrect: true },
    ],
  },
  {
    questionText: "く",
    answerOptions: [
      { id: 0, text: "n", isCorrect: false },
      { id: 1, text: "ku", isCorrect: true },
      { id: 2, text: "ta", isCorrect: false },
      { id: 3, text: "tsu", isCorrect: false },
    ],
  },
  {
    questionText: "け",
    answerOptions: [
      { id: 0, text: "i", isCorrect: false },
      { id: 1, text: "ke", isCorrect: true },
      { id: 2, text: "mu", isCorrect: false },
      { id: 3, text: "he", isCorrect: false },
    ],
  },
  {
    questionText: "こ",
    answerOptions: [
      { id: 0, text: "ko", isCorrect: true },
      { id: 1, text: "hi", isCorrect: false },
      { id: 2, text: "ra", isCorrect: false },
      { id: 3, text: "so", isCorrect: false },
    ],
  },
  {
    questionText: "さ",
    answerOptions: [
      { id: 0, text: "yo", isCorrect: false },
      { id: 1, text: "ta", isCorrect: false },
      { id: 2, text: "su", isCorrect: false },
      { id: 3, text: "sa", isCorrect: true },
    ],
  },
  {
    questionText: "し",
    answerOptions: [
      { id: 0, text: "e", isCorrect: false },
      { id: 1, text: "shi", isCorrect: true },
      { id: 2, text: "ya", isCorrect: false },
      { id: 3, text: "chi", isCorrect: false },
    ],
  },
  {
    questionText: "す",
    answerOptions: [
      { id: 0, text: "ne", isCorrect: false },
      { id: 1, text: "su", isCorrect: true },
      { id: 2, text: "wa", isCorrect: false },
      { id: 3, text: "mu", isCorrect: false },
    ],
  },
  {
    questionText: "せ",
    answerOptions: [
      { id: 0, text: "se", isCorrect: true },
      { id: 1, text: "to", isCorrect: false },
      { id: 2, text: "me", isCorrect: false },
      { id: 3, text: "ra", isCorrect: false },
    ],
  },
  {
    questionText: "そ",
    answerOptions: [
      { id: 0, text: "o", isCorrect: false },
      { id: 1, text: "tsu", isCorrect: false },
      { id: 2, text: "ki", isCorrect: false },
      { id: 3, text: "so", isCorrect: true },
    ],
  },
  {
    questionText: "た",
    answerOptions: [
      { id: 0, text: "ta", isCorrect: true },
      { id: 1, text: "ne", isCorrect: false },
      { id: 2, text: "na", isCorrect: false },
      { id: 3, text: "ho", isCorrect: false },
    ],
  },
  {
    questionText: "ち",
    answerOptions: [
      { id: 0, text: "ni", isCorrect: false },
      { id: 1, text: "e", isCorrect: false },
      { id: 2, text: "chi", isCorrect: true },
      { id: 3, text: "ru", isCorrect: false },
    ],
  },
  {
    questionText: "つ",
    answerOptions: [
      { id: 0, text: "shi", isCorrect: false },
      { id: 1, text: "tsu", isCorrect: true },
      { id: 2, text: "ya", isCorrect: false },
      { id: 3, text: "fu", isCorrect: false },
    ],
  },
  {
    questionText: "て",
    answerOptions: [
      { id: 0, text: "chi", isCorrect: false },
      { id: 1, text: "re", isCorrect: false },
      { id: 2, text: "hi", isCorrect: false },
      { id: 3, text: "te", isCorrect: true },
    ],
  },
  {
    questionText: "と",
    answerOptions: [
      { id: 0, text: "to", isCorrect: true },
      { id: 1, text: "he", isCorrect: false },
      { id: 2, text: "so", isCorrect: false },
      { id: 3, text: "shi", isCorrect: true },
    ],
  },
  {
    questionText: "な",
    answerOptions: [
      { id: 0, text: "na", isCorrect: true },
      { id: 1, text: "te", isCorrect: false },
      { id: 2, text: "ka", isCorrect: false },
      { id: 3, text: "fu", isCorrect: false },
    ],
  },
  {
    questionText: "に",
    answerOptions: [
      { id: 0, text: "tsu", isCorrect: false },
      { id: 1, text: "ni", isCorrect: true },
      { id: 2, text: "no", isCorrect: false },
      { id: 3, text: "ri", isCorrect: false },
    ],
  },
  {
    questionText: "ぬ",
    answerOptions: [
      { id: 0, text: "ku", isCorrect: false },
      { id: 1, text: "re", isCorrect: false },
      { id: 2, text: "nu", isCorrect: true },
      { id: 3, text: "i", isCorrect: false },
    ],
  },
  {
    questionText: "ね",
    answerOptions: [
      { id: 0, text: "to", isCorrect: false },
      { id: 1, text: "ne", isCorrect: true },
      { id: 2, text: "yu", isCorrect: false },
      { id: 3, text: "ke", isCorrect: false },
    ],
  },
  {
    questionText: "の",
    answerOptions: [
      { id: 0, text: "no", isCorrect: true },
      { id: 1, text: "n", isCorrect: false },
      { id: 2, text: "ru", isCorrect: false },
      { id: 3, text: "wo", isCorrect: false },
    ],
  },
  {
    questionText: "は",
    answerOptions: [
      { id: 0, text: "ha", isCorrect: true },
      { id: 1, text: "yo", isCorrect: false },
      { id: 2, text: "se", isCorrect: false },
      { id: 3, text: "a", isCorrect: false },
    ],
  },
  {
    questionText: "ひ",
    answerOptions: [
      { id: 0, text: "ki", isCorrect: false },
      { id: 1, text: "to", isCorrect: false },
      { id: 2, text: "a", isCorrect: false },
      { id: 3, text: "hi", isCorrect: true },
    ],
  },
  {
    questionText: "ふ",
    answerOptions: [
      { id: 0, text: "yu", isCorrect: false },
      { id: 1, text: "shi", isCorrect: false },
      { id: 2, text: "fu", isCorrect: true },
      { id: 3, text: "te", isCorrect: false },
    ],
  },
  {
    questionText: "へ",
    answerOptions: [
      { id: 0, text: "re", isCorrect: false },
      { id: 1, text: "mi", isCorrect: false },
      { id: 2, text: "he", isCorrect: true },
      { id: 3, text: "ro", isCorrect: false },
    ],
  },
  {
    questionText: "ほ",
    answerOptions: [
      { id: 0, text: "hi", isCorrect: false },
      { id: 1, text: "ho", isCorrect: true },
      { id: 2, text: "u", isCorrect: false },
      { id: 3, text: "mo", isCorrect: false },
    ],
  },
  {
    questionText: "ま",
    answerOptions: [
      { id: 0, text: "ra", isCorrect: false },
      { id: 1, text: "o", isCorrect: false },
      { id: 2, text: "ma", isCorrect: true },
      { id: 3, text: "mu", isCorrect: false },
    ],
  },
  {
    questionText: "み",
    answerOptions: [
      { id: 0, text: "shi", isCorrect: false },
      { id: 1, text: "ku", isCorrect: false },
      { id: 2, text: "ke", isCorrect: false },
      { id: 3, text: "mi", isCorrect: true },
    ],
  },
  {
    questionText: "む",
    answerOptions: [
      { id: 0, text: "mu", isCorrect: true },
      { id: 1, text: "ke", isCorrect: false },
      { id: 2, text: "i", isCorrect: false },
      { id: 3, text: "u", isCorrect: false },
    ],
  },
  {
    questionText: "め",
    answerOptions: [
      { id: 0, text: "mu", isCorrect: false },
      { id: 1, text: "e", isCorrect: false },
      { id: 2, text: "shi", isCorrect: false },
      { id: 3, text: "me", isCorrect: true },
    ],
  },
  {
    questionText: "も",
    answerOptions: [
      { id: 0, text: "tsu", isCorrect: false },
      { id: 1, text: "mo", isCorrect: true },
      { id: 2, text: "ra", isCorrect: false },
      { id: 3, text: "yo", isCorrect: false },
    ],
  },
  {
    questionText: "や",
    answerOptions: [
      { id: 0, text: "ha", isCorrect: false },
      { id: 1, text: "so", isCorrect: false },
      { id: 2, text: "ya", isCorrect: true },
      { id: 3, text: "ri", isCorrect: false },
    ],
  },
  {
    questionText: "ゆ",
    answerOptions: [
      { id: 0, text: "u", isCorrect: false },
      { id: 1, text: "yo", isCorrect: false },
      { id: 2, text: "yu", isCorrect: true },
      { id: 3, text: "ko", isCorrect: false },
    ],
  },
  {
    questionText: "よ",
    answerOptions: [
      { id: 0, text: "yo", isCorrect: true },
      { id: 1, text: "ke", isCorrect: false },
      { id: 2, text: "so", isCorrect: false },
      { id: 3, text: "ki", isCorrect: false },
    ],
  },
  {
    questionText: "ら",
    answerOptions: [
      { id: 0, text: "ra", isCorrect: true },
      { id: 1, text: "i", isCorrect: false },
      { id: 2, text: "so", isCorrect: false },
      { id: 3, text: "na", isCorrect: false },
    ],
  },
  {
    questionText: "り",
    answerOptions: [
      { id: 0, text: "i", isCorrect: false },
      { id: 1, text: "ya", isCorrect: false },
      { id: 2, text: "to", isCorrect: false },
      { id: 3, text: "ri", isCorrect: true },
    ],
  },
  {
    questionText: "る",
    answerOptions: [
      { id: 0, text: "su", isCorrect: false },
      { id: 1, text: "te", isCorrect: false },
      { id: 2, text: "ru", isCorrect: true },
      { id: 3, text: "to", isCorrect: false },
    ],
  },
  {
    questionText: "れ",
    answerOptions: [
      { id: 0, text: "no", isCorrect: false },
      { id: 1, text: "he", isCorrect: false },
      { id: 2, text: "chi", isCorrect: false },
      { id: 3, text: "re", isCorrect: true },
    ],
  },
  {
    questionText: "ろ",
    answerOptions: [
      { id: 0, text: "na", isCorrect: false },
      { id: 1, text: "ro", isCorrect: true },
      { id: 2, text: "ta", isCorrect: false },
      { id: 3, text: "ho", isCorrect: false },
    ],
  },
  {
    questionText: "わ",
    answerOptions: [
      { id: 0, text: "wa", isCorrect: true },
      { id: 1, text: "ro", isCorrect: false },
      { id: 2, text: "shi", isCorrect: false },
      { id: 3, text: "a", isCorrect: false },
    ],
  },
  {
    questionText: "を",
    answerOptions: [
      { id: 0, text: "hi", isCorrect: false },
      { id: 1, text: "wo", isCorrect: true },
      { id: 2, text: "ra", isCorrect: false },
      { id: 3, text: "ko", isCorrect: false },
    ],
  },
  {
    questionText: "ん",
    answerOptions: [
      { id: 0, text: "n", isCorrect: true },
      { id: 1, text: "ha", isCorrect: false },
      { id: 2, text: "se", isCorrect: false },
      { id: 3, text: "no", isCorrect: false },
    ],
  },
];

export { basicHiraganaQuestions, shuffleQuestions };
