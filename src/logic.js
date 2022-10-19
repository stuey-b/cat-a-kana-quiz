  // const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [score, setScore] = useState(0);
  // const [displayFinalResult, setFinalResult] = useState(false);

  // // randomise the order of the questions
  // const shuffle = (basicHiraganaQuestions) => {
  //   basicHiraganaQuestions.sort(() => 0.5 - Math.random()).slice(0);
  // };
  // shuffle(basicHiraganaQuestions);

  // //check is the div that was clicked is the correct answer and adds 1 to score
  // const optionClicked = (isCorrect) => {
  //   if (isCorrect) {
  //     setScore(score + 1);
  //   }
  //   //stops the game going past the final question
  //   if (currentQuestion + 1 < basicHiraganaQuestions.length) {
  //     setCurrentQuestion(currentQuestion + 1);
  //   } else {
  //     setFinalResult(true);
  //   }
  // };

  // const restartGame = () => {
  //   setScore(0);
  //   setCurrentQuestion(0);
  //   setFinalResult(false);
  // };