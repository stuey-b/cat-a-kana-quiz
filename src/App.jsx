import React from "react";
import QuizPage from "./components/QuizPage";
// import { useState } from "react";
import StartPage from "./components/StartPage";
// import basicHiraganaQuestions from "./hiraganaQuestions";

function App() {
  return (
    <>
    <div className="bg-emerald-100 h-screen w-screen">
    {/* <StartPage /> */}
    <QuizPage/>
    </div>
    
    </>
  );
}

export default App;
