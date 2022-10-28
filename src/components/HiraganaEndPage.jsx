import React from "react";
import Card from "./Card";

const HiraganaEndPage = ({
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

const ReturnHome = () => {
  setShowHiraganaEndPage(false);
  setShowStartPage(true);
}

const RestartHiraganaQuiz = () => {
  setShowHiraganaEndPage(false);
  setShowHiraganaQuizPage(true)
  setScore(0);
  setCurrentQuestion(0);
}

  return (
    <Card>
      <div className="HeaderFooter">
        <button onClick={RestartHiraganaQuiz}>Retry</button>
        <button onClick={ReturnHome}>Home</button>
      </div>
      <div className="MainContainer">
        <div className="EndPageTop">
          <div className="SpeechBubble">
            Wow!
            <br />
            AMAZING!
          </div>
          <img className="Cat1" src="images/cat1.png" alt="cat1" />
        </div>
        <div className="BottomContainer">
          <p className="">Final Score: {score}/46</p>
          <p className="">85%</p>
        </div>
      </div>

      <div className="HeaderFooter"></div>
    </Card>
  );
};

export default HiraganaEndPage;
