import React from "react";
import Card from "./Card";
import { basicHiraganaQuestions, shuffleQuestions } from "../questions/hiragana";
import { basicKatakanaQuestions } from "../questions/katakana";
// import logo from "../../public/images/cat-main.png"

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
    shuffleQuestions(basicKatakanaQuestions);
  };

  const StartKatakanaStudy = () => {
    setShowStartPage(false);
    setShowKatakanaStudyPage(true);
  };

  return (

    <Card>
    {/* <div className="Header"></div> */}
      <div className="TopContainer">
        <div className="SpeechBubble">cat-a-kana</div>
        <img className="CatHead" src="images/cat-main.png" alt="cat" />
      </div>
      <div className="BottomContainer">
        <button onClick={StartHiraganaQuiz} className="Buttons">
          hiragana quiz
        </button>
        <button onClick={StartHiraganaStudy} className="Buttons">
          hiragana study
        </button>
        <button onClick={StartKatakanaQuiz} className="Buttons">
          katakana quiz
        </button>
        <button onClick={StartKatakanaStudy} className="Buttons">
          katakana study
        </button>
      </div>
      {/* <div className="Footer"></div> */}
    </Card>

  );
};

export default StartPage;
