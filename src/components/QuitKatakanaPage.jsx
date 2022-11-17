import React from "react";
import Card from "./Card";
import { basicKatakanaQuestions, shuffleQuestions } from "../katakana";

const QuitKatakanaPage = ({
  setShowKatakanaQuizPage,
  setShowQuitKatakanaPage,
  setShowKatakanaEndPage,
}) => {
  const QuitKatakanaQuiz = () => {
    setShowQuitKatakanaPage(false);
    setShowKatakanaEndPage(true);
    shuffleQuestions(basicKatakanaQuestions);
  };

  const ReturnToKatakanaQuiz = () => {
    setShowQuitKatakanaPage(false);
    setShowKatakanaQuizPage(true);
  };

  return (
    <Card>
      <div className="Header"></div>
        <div className="TopContainer">
          <div className="SpeechBubble">wanna quit?</div>
          <img className="CatHead" src="images/cat-10.png" alt="cat1" />
        </div>
        <div className="BottomContainer">
          <button onClick={QuitKatakanaQuiz} className="Buttons">
            yep!
          </button>
          <button onClick={ReturnToKatakanaQuiz} className="Buttons">
            nope!
          </button>
        </div>
      <div className="Footer"></div>
    </Card>
  );
};

export default QuitKatakanaPage;
