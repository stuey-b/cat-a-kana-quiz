import React from "react";
import Card from "./Card";

const QuizPage = () => {
  return (
    <Card>
      <div className="HeaderFooter">
        <button>Retry</button>
        <button>Quit</button>
      </div>
      <main className="MainContainer">
      <div className="TopContainer">
        <div className="SpeechBubble">
          <h2 className="">る</h2>
        </div>

        <img
          className="Cat1"
          src="images/cat1.png"
          alt="cat1"
        />
      </div>
      <div className="BottomContainer">
        <button className="Buttons">A</button>
        <button className="Buttons">Shi</button>
        <button className="Buttons">Ru</button>
        <button className="Buttons">He</button>
      </div>

      </main>
  
      <div
        className="HeaderFooter"
      >
        <p>Score: 0</p>
        <p>Question: 2/46</p>
      </div>
    </Card>
  );
};

export default QuizPage;
