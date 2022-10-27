const katakanaArray = [
  'ア', 'イ', 'ウ', 'エ', 'オ', 
  'カ', 'キ', 'ク', 'ケ', 'コ', 
  'サ', 'シ', 'ス', 'セ', 'ソ', 
  'タ', 'チ', 'ツ', 'テ', 'ト', 
  'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 
  'ハ', 'ヒ', 'フ', 'ヘ', 'ホ', 
  'マ', 'ミ', 'ム', 'メ', 'モ', 
  'ヤ',      'ユ',      'ヨ', 
  'ラ', 'リ', 'ル', 'レ', 'ロ', 
  'ワ', 'ヰ',      'ヱ', 'ヲ', 
                      'ン',
  'ガ', 'ギ', 'グ', 'ゲ', 'ゴ', 
  'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ', 
  'ダ', 'ヂ', 'ヅ', 'デ', 'ド', 
  'バ', 'ビ', 'ブ', 'ベ', 'ボ', 
  'パ', 'ピ', 'プ', 'ペ', 'ポ', 

  'ァ', 'ィ', 'ゥ', 'ェ', 'ォ', 
  'ー'
]



const basicKatakanaQuestions = [
    {
      questionText: "あ",
      answerOptions: [
        { id: 0, text: "ha", isCorrect: false },
        { id: 1, text: "stu", isCorrect: false },
        { id: 2, text: "a", isCorrect: true },
        { id: 3, text: "shi", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "し",
      answerOptions: [
        { id: 0, text: "ra", isCorrect: false },
        { id: 1, text: "he", isCorrect: false },
        { id: 2, text: "so", isCorrect: false },
        { id: 3, text: "shi", isCorrect: true },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
    {
      questionText: "",
      answerOptions: [
        { id: 0, text: "", isCorrect: false },
        { id: 1, text: "", isCorrect: false },
        { id: 2, text: "", isCorrect: false },
        { id: 3, text: "", isCorrect: false },
      ],
    },
  ];

  export default basicKatakanaQuestions;