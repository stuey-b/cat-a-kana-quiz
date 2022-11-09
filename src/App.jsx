import React from "react";
import { useState } from "react";
import StartPage from "./components/StartPage";

import HiraganaQuizPage from "./components/HiraganaQuizPage";
import HiraganaStudyPage from "./components/HiraganaStudyPage";
import HiraganaEndPage from "./components/HiraganaEndPage";
import RestartHiraganaPage from "./components/RestartHiraganaPage";
import QuitHiraganaPage from "./components/QuitHiraganaPage";

import KatakanaQuizPage from "./components/KatakanaQuizPage";
import KatakanaStudyPage from "./components/KatakanaStudyPage";
import KatakanaEndPage from "./components/KatakanaEndPage";
import RestartKatakanaPage from "./components/RestartKatakanaPage";
import QuitKatakanaPage from "./components/QuitKatakanaPage";

function App() {

  const [showStartPage, setShowStartPage] = useState(true);

  const [showHiraganaQuizPage, setShowHiraganaQuizPage] = useState(false);
  const [showHiraganaStudyPage, setShowHiraganaStudyPage] = useState(false);
  const [showHiraganaEndPage, setShowHiraganaEndPage] = useState(false);
  const [showRestartHiraganaPage, setShowRestartHiraganaPage] = useState(false);
  const [showQuitHiraganaPage, setShowQuitHiraganaPage] = useState(false);

  const [showKatakanaQuizPage, setShowKatakanaQuizPage] = useState(false);
  const [showKatakanaStudyPage, setShowKatakanaStudyPage] = useState(false);
  const [showKatakanaEndPage, setShowKatakanaEndPage] = useState(false);
  const [showRestartKatakanaPage, setShowRestartKatakanaPage] = useState(false);
  const [showQuitKatakanaPage, setShowQuitKatakanaPage] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  return (
    <>
      {showStartPage && (
        <StartPage
          setShowStartPage={setShowStartPage}
          setShowHiraganaQuizPage={setShowHiraganaQuizPage}
          setShowHiraganaStudyPage={setShowHiraganaStudyPage}
          setShowHiraganaEndPage={setShowHiraganaEndPage}
          setShowRestartHiraganaPage={setShowRestartHiraganaPage}
          setShowQuitHiraganaPage={setShowQuitHiraganaPage}
          setCurrentQuestion={setCurrentQuestion}
          setScore={setScore}
          score={score}
          currentQuestion={currentQuestion}
          setShowKatakanaStudyPage={setShowKatakanaStudyPage}
          setShowKatakanaQuizPage={setShowKatakanaQuizPage}
          setShowRestartKatakanaPage={setShowRestartKatakanaPage}
          setShowQuitKatakanaPage={setShowQuitKatakanaPage}
          setShowKatakanaEndPage={setShowKatakanaEndPage}
        />
      )}
      {showHiraganaQuizPage && (
        <HiraganaQuizPage
          setShowStartPage={setShowStartPage}
          setShowHiraganaQuizPage={setShowHiraganaQuizPage}
          setShowHiraganaStudyPage={setShowHiraganaStudyPage}
          setShowHiraganaEndPage={setShowHiraganaEndPage}
          setShowRestartHiraganaPage={setShowRestartHiraganaPage}
          setShowQuitHiraganaPage={setShowQuitHiraganaPage}
          setCurrentQuestion={setCurrentQuestion}
          setScore={setScore}
          score={score}
          currentQuestion={currentQuestion}
    
        />
      )}

      {showQuitHiraganaPage && (
        <QuitHiraganaPage
          setShowStartPage={setShowStartPage}
          setShowHiraganaQuizPage={setShowHiraganaQuizPage}
          setShowHiraganaStudyPage={setShowHiraganaStudyPage}
          setShowHiraganaEndPage={setShowHiraganaEndPage}
          setShowRestartHiraganaPage={setShowRestartHiraganaPage}
          setShowQuitHiraganaPage={setShowQuitHiraganaPage}
          setCurrentQuestion={setCurrentQuestion}
          setScore={setScore}
          score={score}
          currentQuestion={currentQuestion}
       
        />
      )}

      {showRestartHiraganaPage && (
        <RestartHiraganaPage
          setShowStartPage={setShowStartPage}
          setShowHiraganaQuizPage={setShowHiraganaQuizPage}
          setShowHiraganaStudyPage={setShowHiraganaStudyPage}
          setShowHiraganaEndPage={setShowHiraganaEndPage}
          setShowRestartHiraganaPage={setShowRestartHiraganaPage}
          setShowQuitHiraganaPage={setShowQuitHiraganaPage}
          setCurrentQuestion={setCurrentQuestion}
          setScore={setScore}
          score={score}
          currentQuestion={currentQuestion}
        />
      )}

      {showHiraganaEndPage && (
        <HiraganaEndPage
          setShowStartPage={setShowStartPage}
          setShowHiraganaQuizPage={setShowHiraganaQuizPage}
          setShowHiraganaStudyPage={setShowHiraganaStudyPage}
          setShowHiraganaEndPage={setShowHiraganaEndPage}
          setShowRestartHiraganaPage={setShowRestartHiraganaPage}
          setShowQuitHiraganaPage={setShowQuitHiraganaPage}
          setCurrentQuestion={setCurrentQuestion}
          setScore={setScore}
          score={score}
          currentQuestion={currentQuestion}
        />
      )}

      {showHiraganaStudyPage && (
        <HiraganaStudyPage
          setShowStartPage={setShowStartPage}
          setShowHiraganaQuizPage={setShowHiraganaQuizPage}
          setShowHiraganaStudyPage={setShowHiraganaStudyPage}
          setShowHiraganaEndPage={setShowHiraganaEndPage}
          setShowRestartHiraganaPage={setShowRestartHiraganaPage}
          setShowQuitHiraganaPage={setShowQuitHiraganaPage}
          setCurrentQuestion={setCurrentQuestion}
          setScore={setScore}
          score={score}
          currentQuestion={currentQuestion}
        />
      )}

      {showKatakanaQuizPage && (
        <KatakanaQuizPage
          setShowStartPage={setShowStartPage}
          setCurrentQuestion={setCurrentQuestion}
          setScore={setScore}
          score={score}
          currentQuestion={currentQuestion}
          setShowKatakanaStudyPage={setShowKatakanaStudyPage}
          setShowKatakanaQuizPage={setShowKatakanaQuizPage}
          setShowRestartKatakanaPage={setShowRestartKatakanaPage}
          setShowQuitKatakanaPage={setShowQuitKatakanaPage}
          setShowKatakanaEndPage={setShowKatakanaEndPage}
        />
      )}
      {showKatakanaStudyPage && (
        <KatakanaStudyPage
          setShowStartPage={setShowStartPage}
          setCurrentQuestion={setCurrentQuestion}
          setScore={setScore}
          score={score}
          currentQuestion={currentQuestion}
          setShowKatakanaStudyPage={setShowKatakanaStudyPage}
          setShowKatakanaQuizPage={setShowKatakanaQuizPage}
          setShowRestartKatakanaPage={setShowRestartKatakanaPage}
          setShowQuitKatakanaPage={setShowQuitKatakanaPage}
          setShowKatakanaEndPage={setShowKatakanaEndPage}
        />
      )}

      {showQuitKatakanaPage && (
        <QuitKatakanaPage
          setShowStartPage={setShowStartPage}
          setCurrentQuestion={setCurrentQuestion}
          setScore={setScore}
          score={score}
          currentQuestion={currentQuestion}
          setShowKatakanaStudyPage={setShowKatakanaStudyPage}
          setShowKatakanaQuizPage={setShowKatakanaQuizPage}
          setShowRestartKatakanaPage={setShowRestartKatakanaPage}
          setShowQuitKatakanaPage={setShowQuitKatakanaPage}
          setShowKatakanaEndPage={setShowKatakanaEndPage}
        />
      )}
      {showRestartKatakanaPage && (
        <RestartKatakanaPage
          setShowStartPage={setShowStartPage}
          setCurrentQuestion={setCurrentQuestion}
          setScore={setScore}
          score={score}
          currentQuestion={currentQuestion}
          setShowKatakanaStudyPage={setShowKatakanaStudyPage}
          setShowKatakanaQuizPage={setShowKatakanaQuizPage}
          setShowRestartKatakanaPage={setShowRestartKatakanaPage}
          setShowQuitKatakanaPage={setShowQuitKatakanaPage}
          setShowKatakanaEndPage={setShowKatakanaEndPage}
        />
      )}

      {showKatakanaEndPage && (
        <KatakanaEndPage
          setShowStartPage={setShowStartPage}
          setCurrentQuestion={setCurrentQuestion}
          setScore={setScore}
          score={score}
          currentQuestion={currentQuestion}
          setShowKatakanaStudyPage={setShowKatakanaStudyPage}
          setShowKatakanaQuizPage={setShowKatakanaQuizPage}
          setShowRestartKatakanaPage={setShowRestartKatakanaPage}
          setShowQuitKatakanaPage={setShowQuitKatakanaPage}
          setShowKatakanaEndPage={setShowKatakanaEndPage}
        />
      )}
    </>
  );
}

export default App;
