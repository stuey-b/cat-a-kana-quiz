const basicHiraganaQuestions = [
    {
      questionText: "あ",
      answerOptions: [
        { id: 0, text: "ha", isCorrect: false },
        { id: 1, text: "he", isCorrect: false },
        { id: 2, text: "a", isCorrect: true },
        { id: 3, text: "shi", isCorrect: false },
      ],
    },
    {
      questionText: "い",
      answerOptions: [
        { id: 0, text: "i", isCorrect: true },
        { id: 1, text: "wa", isCorrect: false },
        { id: 2, text: "su", isCorrect: false },
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
        { id: 0, text: "sa", isCorrect: false },
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
    // {
    //   questionText: "か",
    //   answerOptions: [
    //     { id: 0, text: "", isCorrect: true },
    //     { id: 1, text: "", isCorrect: false },
    //     { id: 2, text: "", isCorrect: false },
    //     { id: 3, text: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "き",
    //   answerOptions: [
    //     { id: 0, text: "", isCorrect: false },
    //     { id: 1, text: "", isCorrect: false },
    //     { id: 2, text: "", isCorrect: false },
    //     { id: 3, text: "", isCorrect: true },
    //   ],
    // },
    // {
    //   questionText: "く",
    //   answerOptions: [
    //     { id: 0, text: "", isCorrect: false },
    //     { id: 1, text: "", isCorrect: true },
    //     { id: 2, text: "", isCorrect: false },
    //     { id: 3, text: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "け",
    //   answerOptions: [
    //     { id: 0, text: "", isCorrect: false },
    //     { id: 1, text: "", isCorrect: true },
    //     { id: 2, text: "", isCorrect: false },
    //     { id: 3, text: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "こ",
    //   answerOptions: [
    //     { id: 0, text: "", isCorrect: true },
    //     { id: 1, text: "", isCorrect: false },
    //     { id: 2, text: "", isCorrect: false },
    //     { id: 3, text: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "さ",
    //   answerOptions: [
    //     { id: 0, text: "", isCorrect: false },
    //     { id: 1, text: "", isCorrect: false },
    //     { id: 2, text: "", isCorrect: false },
    //     { id: 3, text: "", isCorrect: true },
    //   ],
    // },
    // {
    //   questionText: "し",
    //   answerOptions: [
    //     { id: 0, text: "", isCorrect: false },
    //     { id: 1, text: "", isCorrect: true },
    //     { id: 2, text: "", isCorrect: false },
    //     { id: 3, text: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "す",
    //   answerOptions: [
    //     { id: 0, text: "", isCorrect: false },
    //     { id: 1, text: "", isCorrect: true },
    //     { id: 2, text: "", isCorrect: false },
    //     { id: 3, text: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "せ",
    //   answerOptions: [
    //     { id: 0, text: "", isCorrect: true },
    //     { id: 1, text: "", isCorrect: false },
    //     { id: 2, text: "", isCorrect: false },
    //     { id: 3, text: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "そ",
    //   answerOptions: [
    //     { id: 0, text: "", isCorrect: false },
    //     { id: 1, text: "", isCorrect: false },
    //     { id: 2, text: "", isCorrect: false },
    //     { id: 3, text: "", isCorrect: true },
    //   ],
    // },
    // {
    //   questionText: "た",
    //   answerOptions: [
    //     { id: 0, text: "", isCorrect: true },
    //     { id: 1, text: "", isCorrect: false },
    //     { id: 2, text: "", isCorrect: false },
    //     { id: 3, text: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "ち",
    //   answerOptions: [
    //     { id: 0, text: "", isCorrect: false },
    //     { id: 1, text: "", isCorrect: false },
    //     { id: 2, text: "", isCorrect: true },
    //     { id: 3, text: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "つ",
    //   answerOptions: [
    //     { id: 0, text: "", isCorrect: false },
    //     { id: 1, text: "", isCorrect: true },
    //     { id: 2, text: "", isCorrect: false },
    //     { id: 3, text: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "て",
    //   answerOptions: [
    //     { id: 0, text: "", isCorrect: false },
    //     { id: 1, text: "", isCorrect: false },
    //     { id: 2, text: "", isCorrect: false },
    //     { id: 3, text: "", isCorrect: true },
    //   ],
    // },
    // {
    //   questionText: "と",
    //   answerOptions: [
    //     { id: 0, text: "ra", isCorrect: true },
    //     { id: 1, text: "he", isCorrect: false },
    //     { id: 2, text: "so", isCorrect: false },
    //     { id: 3, text: "shi", isCorrect: true },
    //   ],
    // },
    // {
    //   questionText: "な",
    //   answerOptions: [
    //     { id: 0, text: "", isCorrect: true },
    //     { id: 1, text: "", isCorrect: false },
    //     { id: 2, text: "", isCorrect: false },
    //     { id: 3, text: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "に",
    //   answerOptions: [
    //     { id: 0, text: "", isCorrect: false },
    //     { id: 1, text: "", isCorrect: true },
    //     { id: 2, text: "", isCorrect: false },
    //     { id: 3, text: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "ぬ",
    //   answerOptions: [
    //     { id: 0, text: "", isCorrect: false },
    //     { id: 1, text: "", isCorrect: false },
    //     { id: 2, text: "", isCorrect: true },
    //     { id: 3, text: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "ね",
    //   answerOptions: [
    //     { id: 0, text: "", isCorrect: false },
    //     { id: 1, text: "", isCorrect: true },
    //     { id: 2, text: "", isCorrect: false },
    //     { id: 3, text: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "の",
    //   answerOptions: [
    //     { id: 0, text: "", isCorrect: true },
    //     { id: 1, text: "", isCorrect: false },
    //     { id: 2, text: "", isCorrect: false },
    //     { id: 3, text: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "は",
    //   answerOptions: [
    //     { id: 0, text: "", isCorrect: true },
    //     { id: 1, text: "", isCorrect: false },
    //     { id: 2, text: "", isCorrect: false },
    //     { id: 3, text: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "ひ",
    //   answerOptions: [
    //     { id: 0, text: "", isCorrect: false },
    //     { id: 1, text: "", isCorrect: false },
    //     { id: 2, text: "", isCorrect: false },
    //     { id: 3, text: "", isCorrect: true },
    //   ],
    // },
    // {
    //   questionText: "ふ",
    //   answerOptions: [
    //     { id: 0, text: "", isCorrect: false },
    //     { id: 1, text: "", isCorrect: false },
    //     { id: 2, text: "", isCorrect: true },
    //     { id: 3, text: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "へ",
    //   answerOptions: [
    //     { id: 0, text: "", isCorrect: false },
    //     { id: 1, text: "", isCorrect: false },
    //     { id: 2, text: "", isCorrect: true },
    //     { id: 3, text: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "ほ",
    //   answerOptions: [
    //     { id: 0, text: "", isCorrect: false },
    //     { id: 1, text: "", isCorrect: true },
    //     { id: 2, text: "", isCorrect: false },
    //     { id: 3, text: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "ま",
    //   answerOptions: [
    //     { id: 0, text: "", isCorrect: false },
    //     { id: 1, text: "", isCorrect: false },
    //     { id: 2, text: "", isCorrect: true },
    //     { id: 3, text: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "み",
    //   answerOptions: [
    //     { id: 0, text: "", isCorrect: false },
    //     { id: 1, text: "", isCorrect: false },
    //     { id: 2, text: "", isCorrect: false },
    //     { id: 3, text: "", isCorrect: true },
    //   ],
    // },
    // {
    //   questionText: "む",
    //   answerOptions: [
    //     { id: 0, text: "", isCorrect: true },
    //     { id: 1, text: "", isCorrect: false },
    //     { id: 2, text: "", isCorrect: false },
    //     { id: 3, text: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "め",
    //   answerOptions: [
    //     { id: 0, text: "", isCorrect: false },
    //     { id: 1, text: "", isCorrect: false },
    //     { id: 2, text: "", isCorrect: false },
    //     { id: 3, text: "", isCorrect: true },
    //   ],
    // },
    // {
    //   questionText: "も",
    //   answerOptions: [
    //     { id: 0, text: "", isCorrect: false },
    //     { id: 1, text: "", isCorrect: true },
    //     { id: 2, text: "", isCorrect: false },
    //     { id: 3, text: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "や",
    //   answerOptions: [
    //     { id: 0, text: "", isCorrect: false },
    //     { id: 1, text: "", isCorrect: false },
    //     { id: 2, text: "", isCorrect: true },
    //     { id: 3, text: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "ゆ",
    //   answerOptions: [
    //     { id: 0, text: "", isCorrect: false },
    //     { id: 1, text: "", isCorrect: false },
    //     { id: 2, text: "", isCorrect: true },
    //     { id: 3, text: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "よ",
    //   answerOptions: [
    //     { id: 0, text: "", isCorrect: true },
    //     { id: 1, text: "", isCorrect: false },
    //     { id: 2, text: "", isCorrect: false },
    //     { id: 3, text: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "ら",
    //   answerOptions: [
    //     { id: 0, text: "", isCorrect: true },
    //     { id: 1, text: "", isCorrect: false },
    //     { id: 2, text: "", isCorrect: false },
    //     { id: 3, text: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "り",
    //   answerOptions: [
    //     { id: 0, text: "", isCorrect: false },
    //     { id: 1, text: "", isCorrect: false },
    //     { id: 2, text: "", isCorrect: false },
    //     { id: 3, text: "", isCorrect: true },
    //   ],
    // },
    // {
    //   questionText: "る",
    //   answerOptions: [
    //     { id: 0, text: "", isCorrect: false },
    //     { id: 1, text: "", isCorrect: false },
    //     { id: 2, text: "", isCorrect: true },
    //     { id: 3, text: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "れ",
    //   answerOptions: [
    //     { id: 0, text: "", isCorrect: false },
    //     { id: 1, text: "", isCorrect: false },
    //     { id: 2, text: "", isCorrect: false },
    //     { id: 3, text: "", isCorrect: true },
    //   ],
    // },
    // {
    //   questionText: "ろ",
    //   answerOptions: [
    //     { id: 0, text: "", isCorrect: false },
    //     { id: 1, text: "", isCorrect: true },
    //     { id: 2, text: "", isCorrect: false },
    //     { id: 3, text: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "わ",
    //   answerOptions: [
    //     { id: 0, text: "", isCorrect: true },
    //     { id: 1, text: "", isCorrect: false },
    //     { id: 2, text: "", isCorrect: false },
    //     { id: 3, text: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "を",
    //   answerOptions: [
    //     { id: 0, text: "", isCorrect: false },
    //     { id: 1, text: "", isCorrect: true },
    //     { id: 2, text: "", isCorrect: false },
    //     { id: 3, text: "", isCorrect: false },
    //   ],
    // },
    // {
    //   questionText: "ん",
    //   answerOptions: [
    //     { id: 0, text: "", isCorrect: true },
    //     { id: 1, text: "", isCorrect: false },
    //     { id: 2, text: "", isCorrect: false },
    //     { id: 3, text: "", isCorrect: false },
    //   ],
    // },
  ];

  export default basicHiraganaQuestions;