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
      <div className="HeaderFooter">
        <button onClick={RestartHiraganaQuiz}>Retry</button>
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
          <p className="FinalScore">
            Final Score: {score}/{basicHiraganaQuestions.length}
          </p>
          <p className="FinalScore">{ScorePercentage}% Correct</p>
        </div>
      </div>

      <div className="HeaderFooter"></div>
    </Card>
  );
};

export default HiraganaEndPage;
