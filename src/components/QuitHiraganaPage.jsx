import React from "react";
import Card from "./Card";
import { basicHiraganaQuestions, shuffleQuestions } from "../hiragana";

const QuitHiraganaPage = ({
  setShowHiraganaQuizPage,
  setShowHiraganaEndPage,
  setShowQuitHiraganaPage,
}) => {
  const QuitHiraganaQuiz = () => {
    setShowQuitHiraganaPage(false);
    setShowHiraganaEndPage(true);
    shuffleQuestions(basicHiraganaQuestions);
  };

  const ReturnToHiraganaQuiz = () => {
    setShowQuitHiraganaPage(false);
    setShowHiraganaQuizPage(true);
  };

  return (
    <Card>
    
        <div className="Header"></div>
        <div className="TopContainer">
          <div className="SpeechBubble">wanna quit?</div>
          <img className="CatHead" src="images/cat-main.png" alt="cat" />
        </div>
        <div className="BottomContainer">
          <button onClick={QuitHiraganaQuiz} className="Buttons">
            yeah!
          </button>
          <button onClick={ReturnToHiraganaQuiz} className="Buttons">
            nah!
          </button>
        </div>
        <div className="Footer"></div>
    </Card>
  );
};

export default QuitHiraganaPage;
