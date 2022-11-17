import React from "react";
import Card from "./Card";
import { basicHiraganaQuestions, shuffleQuestions } from "../hiragana";

const RestartHiraganaPage = ({
  setShowHiraganaQuizPage,
  setShowRestartHiraganaPage,
  setCurrentQuestion,
  setScore,

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
      <div className="Header"></div>
        <div className="TopContainer">
          <div className="SpeechBubble">wanna restart?</div>
          <img className="CatHead" src="images/cat-10.png" alt="cat" />
        </div>
        <div className="BottomContainer">
          <button onClick={RestartQuiz} className="Buttons">
            Heck Yes!
          </button>
          <button onClick={ContinueQuiz} className="Buttons">
            Um..No!
          </button>
        </div>
      <div className="Footer"></div>
    </Card>
  );
};

export default RestartHiraganaPage;
