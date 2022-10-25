import React from "react";
import Card from "./Card";

const EndPage = () => {
  return (
    <Card>
      <div className="HeaderFooter">
        <button>Retry</button>
        <button>Home</button>
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
          <p className="">Final Score: 40/46</p>
          <p className="">85%</p>
        </div>
      </div>

      <div className="HeaderFooter"></div>
    </Card>
  );
};

export default EndPage;
