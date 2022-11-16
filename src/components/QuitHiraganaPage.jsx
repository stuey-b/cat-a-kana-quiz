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
      <main className="MainContainer">
        <div className="HeaderFooter"></div>
        <div className="EndPageTop">
          <div className="SpeechBubble">wanna quit?</div>
          <img className="CatHead" src="images/cat-main.png" alt="cat" />
        </div>
        <div className="BottomContainer">
          <button onClick={QuitHiraganaQuiz} className="Buttons">
            Yes!
          </button>
          <button onClick={ReturnToHiraganaQuiz} className="Buttons">
            No!
          </button>
        </div>
        <div className="HeaderFooter"></div>
      </main>
    </Card>
  );
};

export default QuitHiraganaPage;
