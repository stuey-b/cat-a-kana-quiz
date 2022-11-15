import React from "react";
import Card from "./Card";
import { basicHiraganaQuestions } from "../hiragana";

const HiraganaQuizPage = ({
  setShowHiraganaQuizPage,
  setShowHiraganaEndPage,
  setShowRestartHiraganaPage,
  setShowQuitHiraganaPage,
  setCurrentQuestion,
  setScore,
  score,
  currentQuestion,
}) => {

  const RestartHiraganaQuiz = () => {
    setShowHiraganaQuizPage(false);
    setShowRestartHiraganaPage(true);
  };

  const QuitHiraganaQuiz = () => {
    setShowHiraganaQuizPage(false);
    setShowQuitHiraganaPage(true);
  };

  const handleClick = (isCorrect) => {
    if (currentQuestion + 1 < basicHiraganaQuestions.length) {
      if (isCorrect) {
        setScore(score + 1);
      
      }
      setCurrentQuestion(currentQuestion + 1);
    } else {
      if (isCorrect) {
        setScore(score + 1);
      }
      setShowHiraganaQuizPage(false);
      setShowHiraganaEndPage(true);
    }
  };


  return (
    <Card>
    
      <main className="MainContainer">
      <div className="HeaderFooter">
        <button onClick={RestartHiraganaQuiz}>Restart</button>
        <button onClick={QuitHiraganaQuiz}>Quit</button>
      </div>
        <div className="TopContainer">
          <div className="SpeechBubble">
          {basicHiraganaQuestions[currentQuestion].questionText}
          </div>
          <img className="CatHead" src="images/cat-main.png" alt="cat" />
        </div>
        <div className="BottomContainer">
          {basicHiraganaQuestions[currentQuestion].answerOptions.map(
            (answer) => (
              <button
                key={answer.id}
                onClick={() => handleClick(answer.isCorrect) }
                className="Buttons"

              >
                {answer.text}
              </button>
            )
          )}
        </div>
        <div className="HeaderFooter">
        <p>Score: {score}</p>
        <p>Question: {currentQuestion + 1}/{basicHiraganaQuestions.length}</p>
      </div>
      </main>

      
    </Card>
  );
};

export default HiraganaQuizPage;
