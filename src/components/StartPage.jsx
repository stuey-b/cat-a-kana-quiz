import React from "react";
import Card from "./Card";

const StartPage = () => {
  return (
    <>
      <Card>
        <div className="bg-sky-300 flex-col justify-center items-center font-bold text-3xl rounded-b-3xl">
          <img
            className="mx-auto pt-10 drop-shadow-2xl"
            src="/images/speechbubble1.png"
            alt=""
          />
          <h2 className="absolute left-0 right-0 top-28">Cat-a-Kyana!</h2>
          <img
            className="drop-shadow-2xl w-4/6 mx-auto -mt-8"
            src="images/cat1.png"
            alt="cat1"
          />
        </div>
        <div className="flex-col mt-10 space-y-6">
          <div className="Buttons">Hiragana Quiz</div>
          <div className="Buttons">Hiragana Study</div>
          <div className="Buttons">Katakana Quiz</div>
          <div className="Buttons">Katakana Study</div>
        </div>
      </Card>
    </>
  );
};

export default StartPage;
