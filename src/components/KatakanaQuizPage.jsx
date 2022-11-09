import React from "react";
import Card from "./Card";
import { basicKatakanaQuestions } from "../katakana";

const KatakanaQuizPage = ({
  setCurrentQuestion,
  setScore,
  score,
  currentQuestion,
  setShowKatakanaQuizPage,
  setShowRestartKatakanaPage,
  setShowQuitKatakanaPage,
  setShowKatakanaEndPage,
}) => {
  const RestartKatakanaQuiz = () => {
    setShowKatakanaQuizPage(false);
    setShowRestartKatakanaPage(true);
  };

  const QuitKatakanaQuiz = () => {
    setShowKatakanaQuizPage(false);
    setShowQuitKatakanaPage(true);
  };

  const handleClick = (isCorrect) => {
    if (currentQuestion + 1 < basicKatakanaQuestions.length) {
      if (isCorrect) {
        setScore(score + 1);
      }
      setCurrentQuestion(currentQuestion + 1);
    } else {
      if (isCorrect) {
        setScore(score + 1);
      }
      setShowKatakanaQuizPage(false);
      setShowKatakanaEndPage(true);
    }
  };
  return (
    <Card>
      <div className="HeaderFooter">
        <button onClick={RestartKatakanaQuiz}>Restart</button>
        <button onClick={QuitKatakanaQuiz}>Quit</button>
      </div>
      <main className="MainContainer">
        <div className="TopContainer">
          <div className="SpeechBubble">
            <h2 className="">
              {basicKatakanaQuestions[currentQuestion].questionText}
            </h2>
          </div>

          <img className="Cat1" src="images/cat1.png" alt="cat1" />
        </div>
        <div className="BottomContainer">
          {basicKatakanaQuestions[currentQuestion].answerOptions.map(
            (answer) => (
              <button
                key={answer.id}
                onClick={() => handleClick(answer.isCorrect)}
                className="Buttons"
              >
                {answer.text}
              </button>
            )
          )}
        </div>
      </main>

      <div className="HeaderFooter">
        <p>Score: {score}</p>
        <p>
          Question: {currentQuestion + 1}/{basicKatakanaQuestions.length}
        </p>
      </div>
    </Card>
  );
};

export default KatakanaQuizPage;
