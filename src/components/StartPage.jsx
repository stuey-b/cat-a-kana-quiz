import React from "react";
import Card from "./Card";

const StartPage = () => {
  return (
    <>
      <Card>
      <header className="HeaderFooter"></header>
      <main className="MainContainer">
      <div className="TopContainer">
          <div className="SpeechBubble">Cat-a-Kana</div>
          <img
            className="Cat1"
            src="images/cat1.png"
            alt="cat1"
          />
        </div>
        <div className="BottomContainer">
          <button className="Buttons">Hiragana Quiz</button>
          <button className="Buttons">Hiragana Study</button>
          <button className="Buttons">Katakana Quiz</button>
          <button className="Buttons">Katakana Study</button>
        </div>
      </main>

      
        <footer className="HeaderFooter">by Stuey</footer>
      </Card>
    </>
  );
};

export default StartPage;
