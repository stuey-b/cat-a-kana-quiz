import React from "react";
import Card from "./Card";

const HiraganaQuizPage = ({
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
  const basicHiragana = ["あ", "い", "う", "え", "お"];
  const basicAnswers = ["a", "i", "u", "e", "o"];

  const randomQuestion = basicHiragana.sort(() => 0.5 - Math.random());
  const randomAnswer = basicAnswers.sort(() => 0.5 - Math.random());


  const RestartHiraganaQuiz = () => {
    setShowHiraganaQuizPage(false);
    setShowRestartHiraganaPage(true);
  };

  const QuitHiraganaQuiz = () => {
    setShowHiraganaQuizPage(false);
    setShowQuitHiraganaPage(true);
  };

  

  return (
    <Card>
      <div className="HeaderFooter">
        <button onClick={RestartHiraganaQuiz} >Restart</button>
        <button onClick={QuitHiraganaQuiz}>Quit</button>
      </div>
      <main className="MainContainer">
        <div className="TopContainer">
          <div className="SpeechBubble">
            <h2 className="">{randomQuestion[0]}</h2>
          </div>

          <img className="Cat1" src="images/cat1.png" alt="cat1" />
        </div>
        <div className="BottomContainer">
          <button className="Buttons">{randomAnswer[0]}</button>
          <button className="Buttons">{randomAnswer[1]}</button>
          <button className="Buttons">{randomAnswer[2]}</button>
          <button className="Buttons">{randomAnswer[3]}</button>
        </div>
      </main>

      <div className="HeaderFooter">
        <p>Score: {score}</p>
        <p>Question: {currentQuestion}/46</p>
      </div>
    </Card>
  );
};

export default HiraganaQuizPage;
