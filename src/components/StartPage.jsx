import React from "react";
import Card from "./Card";
import { basicHiraganaQuestions, shuffleQuestions } from "../hiragana";

const StartPage = ({
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
  const StartHiraganaQuiz = () => {
    setShowStartPage(false);
    setShowHiraganaQuizPage(true);
    shuffleQuestions(basicHiraganaQuestions);
  };

  const StartHiraganaStudy = () => {
    setShowStartPage(false);
    setShowHiraganaStudyPage(true);
  };

  // const StartKatakanaQuiz = () => {
  //   setShowStartPage(false);
  //   setShowKatakanaQuizPage(true);
  // };

  // const StartKatakanaStudy = () => {
  //   setShowStartPage(false);
  //   setShowKatakanaStudyPage(true);
  // };

  return (
    <>
      <Card>
        <header className="HeaderFooter"></header>
        <main className="MainContainer">
          <div className="TopContainer">
            <div className="SpeechBubble">Cat-a-Kana</div>
            <img className="Cat1" src="images/cat1.png" alt="cat1" />
          </div>
          <div className="BottomContainer">
            <button onClick={StartHiraganaQuiz} className="Buttons">
              Hiragana Quiz
            </button>
            <button onClick={StartHiraganaStudy} className="Buttons">
              Hiragana Study
            </button>
            {/* <button onClick={StartKatakanaQuiz} className="Buttons">
              Katakana Quiz
            </button>
            <button onClick={StartKatakanaStudy} className="Buttons">
              Katakana Study
            </button> */}
          </div>
        </main>
        <footer className="HeaderFooter">by Stuey</footer>
      </Card>
    </>
  );
};

export default StartPage;
