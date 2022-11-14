import React from "react";
import Card from "./Card";
import { basicHiraganaQuestions, shuffleQuestions } from "../hiragana";
import { basicKatakanaQuestions } from "../katakana";

const StartPage = ({
  setShowStartPage,
  setShowHiraganaQuizPage,
  setShowHiraganaStudyPage,
  setShowKatakanaQuizPage,
  setShowKatakanaStudyPage,
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

  const StartKatakanaQuiz = () => {
    setShowStartPage(false);
    setShowKatakanaQuizPage(true);
    shuffleQuestions(basicKatakanaQuestions)
  };

  const StartKatakanaStudy = () => {
    setShowStartPage(false);
    setShowKatakanaStudyPage(true);
  };

  return (
    <>
      <Card>
   
        <main className="MainContainer">
          <div className="TopContainer">
            <div className="SpeechBubble">Cat-a-Kana</div>
            <img className="CatHead" src="images/cat-main.png" alt="cat1"/>
          </div>
          <div className="BottomContainer">
            <button onClick={StartHiraganaQuiz} className="Buttons">
              Hiragana Quiz
            </button>
            <button onClick={StartHiraganaStudy} className="Buttons">
              Hiragana Study
            </button>
            <button onClick={StartKatakanaQuiz} className="Buttons">
              Katakana Quiz
            </button>
            <button onClick={StartKatakanaStudy} className="Buttons">
              Katakana Study
            </button>
          </div>
        </main>
      </Card>
    </>
  );
};

export default StartPage;
