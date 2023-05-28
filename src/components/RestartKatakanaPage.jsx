import React from "react";
import Card from "./Card";
import { basicKatakanaQuestions, shuffleQuestions } from "../questions/katakana";

const RestartKatakanaPage = ({
  setCurrentQuestion,
  setScore,
  setShowKatakanaQuizPage,
  setShowRestartKatakanaPage,

}) => {
  const RestartQuiz = () => {
    setShowRestartKatakanaPage(false);
    setShowKatakanaQuizPage(true);
    setScore(0);
    setCurrentQuestion(0);
    shuffleQuestions(basicKatakanaQuestions);
  };

  const ContinueQuiz = () => {
    setShowRestartKatakanaPage(false);
    setShowKatakanaQuizPage(true);
  };
  return (
    <Card>
      <div className="Header"></div>

        <div className="TopContainer">
          <div className="SpeechBubble">Restart the Katakana quiz?</div>
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

export default RestartKatakanaPage;
