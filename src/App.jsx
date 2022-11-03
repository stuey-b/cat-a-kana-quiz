import React from "react";
import { useState, useEffect } from "react";
import HiraganaEndPage from "./components/HiraganaEndPage";
import HiraganaStudyPage from "./components/HiraganaStudyPage";
import KatakanaStudyPage from "./components/KatakanaStudyPage";
import HiraganaQuizPage from "./components/HiraganaQuizPage";
import KatakanaQuizPage from "./components/KatakanaQuizPage";
import StartPage from "./components/StartPage";
import RestartHiraganaPage from "./components/RestartHiraganaPage";
import QuitHiraganaPage from "./components/QuitHiraganaPage";
import HashLoader from "react-spinners/ClipLoader";

function App() {
  const [showStartPage, setShowStartPage] = useState(true);

  const [showHiraganaQuizPage, setShowHiraganaQuizPage] = useState(false);
  const [showHiraganaStudyPage, setShowHiraganaStudyPage] = useState(false);
  const [showHiraganaEndPage, setShowHiraganaEndPage] = useState(false);

  const [showRestartHiraganaPage, setShowRestartHiraganaPage] = useState(false);
  const [showQuitHiraganaPage, setShowQuitHiraganaPage] = useState(false);
  
  const [loading, setLoading] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [score, setScore] = useState(0);


  // const [showKatakanaStudyPage, setShowKatakanaStudyPage] = useState(false);
  // const [showKatakanaQuizPage, setShowKatakanaQuizPage] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

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

      {/* {showKatakanaQuizPage && <KatakanaQuizPage />}
      {showKatakanaStudyPage && <KatakanaStudyPage />} */}

    </>
  );
}

export default App;
