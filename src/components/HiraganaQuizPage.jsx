import React from "react";
import Card from "./Card";
import {basicHiraganaQuestions, shuffleQuestions} from "../hiragana";

const HiraganaQuizPage = ({
  setShowStartPage,
  setShowHiraganaQuizPage,
  setShowHiraganaStudyPage,
  setShowHiraganaEndPage,
  setShowRestartHiraganaPage,
  setShowQuitHiraganaPage,
  setShowLoadingPage,
  setCurrentQuestion,
  setScore,
  score,
  currentQuestion,
  setShuffleQuestion,
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
      <div className="HeaderFooter">
        <button onClick={RestartHiraganaQuiz}>Restart</button>
        <button onClick={QuitHiraganaQuiz}>Quit</button>
      </div>
      <main className="MainContainer">
        <div className="TopContainer">
          <div className="SpeechBubble">
            <h2 className="">
              {basicHiraganaQuestions[currentQuestion].questionText}
            </h2>
          </div>

          <img className="Cat1" src="images/cat1.png" alt="cat1" />
        </div>
        <div className="BottomContainer">
          {basicHiraganaQuestions[currentQuestion].answerOptions.map(
            (answer, index) => (
              <button
                key={index}
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
          Question: {currentQuestion + 1}/{basicHiraganaQuestions.length}
        </p>
      </div>
    </Card>
  );
};

export default HiraganaQuizPage;
