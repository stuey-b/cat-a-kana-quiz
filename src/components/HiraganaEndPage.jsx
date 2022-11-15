import React from "react";
import { basicHiraganaQuestions } from "../hiragana";
import Card from "./Card";

const HiraganaEndPage = ({
  setShowStartPage,
  setShowHiraganaQuizPage,
  setShowHiraganaEndPage,
  setCurrentQuestion,
  setScore,
  score,
}) => {
  const ReturnHome = () => {
    setShowHiraganaEndPage(false);
    setShowStartPage(true);
    setScore(0);
    setCurrentQuestion(0);
  };

  const RestartHiraganaQuiz = () => {
    setShowHiraganaEndPage(false);
    setShowHiraganaQuizPage(true);
    setScore(0);
    setCurrentQuestion(0);
  };

  const ScorePercentage = Math.round(
    (score / basicHiraganaQuestions.length) * 100
  );

  return (
    <Card>
      <main className="MainContainer">
      <div className="HeaderFooter">
        <button onClick={RestartHiraganaQuiz}>Retry</button>
        <button onClick={ReturnHome}>Home</button>
      </div>
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

          <img
            className="CatHead"
            src={
              score === 46
                ? "images/cat-100.png"
                : score >= 40
                ? "images/cat-40.png"
                : score >= 30
                ? "images/cat-30.png"
                : score >= 20
                ? "images/cat-20.png"
                : score >= 10
                ? "images/cat-10.png"
                : score >= 1
                ? "images/cat-1.png"
                : "images/cat-0.png"
            }
            alt="cats"
          />
        </div>
        <div className="BottomContainer">
          <p className="FinalScore">
            Final Score: {score}/{basicHiraganaQuestions.length}
          </p>
          <p className="FinalScore">{ScorePercentage}% Correct</p>
        </div>
        <div className="HeaderFooter"></div>
      </main>

    </Card>
  );
};

export default HiraganaEndPage;
