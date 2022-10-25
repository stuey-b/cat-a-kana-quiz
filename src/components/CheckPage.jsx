import React from "react";
import Card from "./Card";

const CheckPage = () => {
  return (
    <Card>
      <div className="HeaderFooter"></div>
      <main className="MainContainer">
        <div className="EndPageTop">
          <div className="SpeechBubble">Are you sure you want to quit?</div>
          <img className="Cat1" src="images/cat1.png" alt="cat1" />
        </div>
        <div className="BottomContainer">
          <button className="Buttons">Yes!</button>
          <button className="Buttons">No!</button>
        </div>
      </main>

      <div className="HeaderFooter"></div>
    </Card>
  );
};

export default CheckPage;
