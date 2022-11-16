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
              ? "are you a god?"
              : score >= 40
              ? "whoa dude!"
              : score >= 30
              ? "good work bro!"
              : score >= 20
              ? "nice try!"
              : score >= 10
              ? "don't give up!"
              : score >= 1
              ? "you should study.."
              : "oof. 0%.."}
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
          <div className="FinalScoreContainer">
            <p className="FinalScore">
              Final Score: {score}/{basicHiraganaQuestions.length}
            </p>
            <p className="FinalScore">{ScorePercentage}% Correct</p>
          </div>
        </div>
        <div className="HeaderFooter"></div>
      </main>
    </Card>
  );
};

export default HiraganaEndPage;
