import React from "react";
import { basicKatakanaQuestions } from "../katakana";
import Card from "./Card";

const KatakanaEndPage = ({
  setShowStartPage,
  setCurrentQuestion,
  setScore,
  score,
  setShowKatakanaQuizPage,
  setShowKatakanaEndPage,
}) => {
  const ReturnHome = () => {
    setShowKatakanaEndPage(false);
    setShowStartPage(true);
    setScore(0);
    setCurrentQuestion(0);
  }
  
  const RestartKatakanaQuiz = () => {
    setShowKatakanaEndPage(false);
    setShowKatakanaQuizPage(true)
    setScore(0);
    setCurrentQuestion(0);
  }
  
  const ScorePercentage = Math.round(score / basicKatakanaQuestions.length * 100)
  
    return (
      <Card>
        <div className="HeaderFooter">
          <button onClick={RestartKatakanaQuiz}>Retry</button>
          <button onClick={ReturnHome}>Home</button>
        </div>
        <div className="MainContainer">
          <div className="EndPageTop">
          <div className="SpeechBubble">
            {score === 46
              ? "You are a kana GOD!!"
              : score >= 40
              ? "You are AMAZING!"
              : score >= 30
              ? "You did pretty well!"
              : score >= 20
              ? "Nice try. Keep practicing!"
              : score >= 10
              ? "Don't give up! You got this."
              : score >= 1
              ? "You might wanna study.."
              : "OOF.You NEED to study pal"}
          </div>
            <img className="Cat1" src="images/cat1.png" alt="cat1" />
          </div>
          <div className="BottomContainer">
            <p className="">Final Score: {score}/{basicKatakanaQuestions.length}</p>
            <p className="">{ScorePercentage}% Correct</p>
          </div>
        </div>
  
        <div className="HeaderFooter"></div>
      </Card>
    );
  };

export default KatakanaEndPage;
