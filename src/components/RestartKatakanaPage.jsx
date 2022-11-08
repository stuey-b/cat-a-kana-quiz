import React from "react";
import Card from "./Card";
import { basicKatakanaQuestions, shuffleQuestions } from "../katakana";

const RestartKatakanaPage = ({
  setCurrentQuestion,
  setScore,
  setShowKatakanaQuizPage,
  setShowKatakanaStudyPage,
  setShowRestartKatakanaPage,
  setShowQuitKatakanaPage,
  setShowKatakanaEndPage,
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
      <div className="HeaderFooter"></div>
      <main className="MainContainer">
        <div className="EndPageTop">
          <div className="SpeechBubble">Restart the Katakana quiz?</div>
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

export default RestartKatakanaPage;
