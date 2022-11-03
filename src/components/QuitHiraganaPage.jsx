import React from "react";
import Card from "./Card";
import { basicHiraganaQuestions, shuffleQuestions } from "../hiragana";

const QuitHiraganaPage = ({
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
  const QuitHiraganaQuiz = () => {
    setShowQuitHiraganaPage(false);
    setShowHiraganaEndPage(true);
    shuffleQuestions(basicHiraganaQuestions);
    
  };

  const ReturnToHiraganaQuiz = () => {
    setShowQuitHiraganaPage(false);
    setShowHiraganaQuizPage(true)
  };

  return (
    <Card>
      <div className="HeaderFooter"></div>
      <main className="MainContainer">
        <div className="EndPageTop">
          <div className="SpeechBubble">Are you sure you want to quit?</div>
          <img className="Cat1" src="images/cat1.png" alt="cat1" />
        </div>
        <div className="BottomContainer">
          <button onClick={QuitHiraganaQuiz} className="Buttons">Yes!</button>
          <button onClick={ReturnToHiraganaQuiz} className="Buttons">No!</button>
        </div>
      </main>

      <div className="HeaderFooter"></div>
    </Card>
  );
};

export default QuitHiraganaPage;
