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
      <div className="HeaderFooter"></div>
      <main className="MainContainer">
        <div className="EndPageTop">
          <div className="SpeechBubble">Are you sure buddy?</div>
          <img className="Cat1" src="images/cat1.png" alt="cat1" />
        </div>
        <div className="BottomContainer">
          <button onClick={QuitKatakanaQuiz} className="Buttons">
            Yep!
          </button>
          <button onClick={ReturnToKatakanaQuiz} className="Buttons">
            Nope!
          </button>
        </div>
      </main>

      <div className="HeaderFooter"></div>
    </Card>
  );
};

export default QuitKatakanaPage;
