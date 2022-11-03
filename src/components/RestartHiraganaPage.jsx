import React from "react";
import Card from "./Card";
import { basicHiraganaQuestions, shuffleQuestions } from "../hiragana";

const RestartHiraganaPage = ({
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
}) => {
  const RestartQuiz = () => {
    setShowRestartHiraganaPage(false);
    setShowHiraganaQuizPage(true);
    setScore(0);
    setCurrentQuestion(0);
    shuffleQuestions(basicHiraganaQuestions);
  };

  const ContinueQuiz = () => {
    setShowRestartHiraganaPage(false);
    setShowHiraganaQuizPage(true);
  };

  return (
    <Card>
      <div className="HeaderFooter"></div>
      <main className="MainContainer">
        <div className="EndPageTop">
          <div className="SpeechBubble">Are you sure you want to restart?</div>
          <img className="Cat1" src="images/cat1.png" alt="cat1" />
        </div>
        <div className="BottomContainer">
          <button onClick={RestartQuiz} className="Buttons">
            Heck Yes!
          </button>
          <button onClick={ContinueQuiz} className="Buttons">
            Um..No!
          </button>
        </div>
      </main>

      <div className="HeaderFooter"></div>
    </Card>
  );
};

export default RestartHiraganaPage;
