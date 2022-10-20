import React from "react";
import Card from "./Card";

const QuizPage = () => {
  return (
    <Card>
     <div className="flex justify-around items-center h-16">
        <button>Retry</button>
        <button>Quit</button>
        
      </div>
      <div className="bg-pink-200 h-1/2 p-8 flex flex-col justify-between items-center font-bold text-8xl rounded-3xl">
        <div className="bg-white w-5/6 h-1/2 mx-auto rounded-3xl flex justify-center items-center">
          <h2 className="">る</h2>
        </div>

        <img
          className="drop-shadow-2xl h-1/2 py-4"
          src="images/cat1.png"
          alt="cat1"
        />
      </div>
      <div className="flex flex-col justify-center items-center space-y-6">
        <button className="Buttons">A</button>
        <button className="Buttons">Shi</button>
        <button className="Buttons">Ru</button>
        <button className="Buttons">He</button>
      </div>
     
    </Card>
  );
};

export default QuizPage;
