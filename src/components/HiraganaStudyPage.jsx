import React from "react";
import Card from "./Card";
import { basicHiraganaQuestions, shuffleQuestions } from "../hiragana";

const HiraganaStudyPage = ({
  setShowStartPage,
  setShowHiraganaQuizPage,
  setShowHiraganaStudyPage,
}) => {
  const ReturnHome = () => {
    setShowHiraganaStudyPage(false);
    setShowStartPage(true);
  };

  const HiraganaQuiz = () => {
    setShowHiraganaStudyPage(false);
    setShowHiraganaQuizPage(true);
    shuffleQuestions(basicHiraganaQuestions);
  };

  return (
    <Card>
      <div className="Header">
        <button onClick={ReturnHome}>Home</button>
        <button onClick={HiraganaQuiz}>Quiz</button>
      </div>
      <main className="HiraganaMainContainer">
        <div className="KanaTitle">hiragana</div>
        <div className="KanaGridContainer">
          <div className="KanaGridItem">
            <p className="Romaji">a</p>
            <p className="Kana">あ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">i</p>
            <p className="Kana">い</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">u</p>
            <p className="Kana">う</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">e</p>
            <p className="Kana">え</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">o</p>
            <p className="Kana">お</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">ka</p>
            <p className="Kana">か</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">ki</p>
            <p className="Kana">き</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">ku</p>
            <p className="Kana">く</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">ke</p>
            <p className="Kana">け</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">ko</p>
            <p className="Kana">こ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">sa</p>
            <p className="Kana">さ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">shi</p>
            <p className="Kana">し</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">su</p>
            <p className="Kana">す</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">se</p>
            <p className="Kana">せ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">so</p>
            <p className="Kana">そ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">ta</p>
            <p className="Kana">た</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">chi</p>
            <p className="Kana">ち</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">tsu</p>
            <p className="Kana">つ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">te</p>
            <p className="Kana">て</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">to</p>
            <p className="Kana">と</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">na</p>
            <p className="Kana">な</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">ni</p>
            <p className="Kana">に</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">nu</p>
            <p className="Kana">ぬ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">ne</p>
            <p className="Kana">ね</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">no</p>
            <p className="Kana">の</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">ha</p>
            <p className="Kana">は</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">hi</p>
            <p className="Kana">ひ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">fu</p>
            <p className="Kana">ふ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">he</p>
            <p className="Kana">へ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">ho</p>
            <p className="Kana">ほ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">ma</p>
            <p className="Kana">ま</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">mi</p>
            <p className="Kana">み</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">mu</p>
            <p className="Kana">む</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">me</p>
            <p className="Kana">め</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">mo</p>
            <p className="Kana">も</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">ra</p>
            <p className="Kana">ら</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">ri</p>
            <p className="Kana">り</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">ru</p>
            <p className="Kana">る</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">re</p>
            <p className="Kana">れ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">ro</p>
            <p className="Kana">ろ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">ya</p>
            <p className="Kana">や</p>
          </div>
          <div className="KanaGridItem col-start-3">
            <p className="Romaji">yu</p>
            <p className="Kana">ゆ</p>
          </div>
          <div className="KanaGridItem col-start-5">
            <p className="Romaji">yo</p>
            <p className="Kana">よ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">wa</p>
            <p className="Kana">わ</p>
          </div>
          <div className="KanaGridItem col-start-3">
            <p className="Romaji">wo</p>
            <p className="Kana">を</p>
          </div>
          <div className="KanaGridItem col-start-5">
            <p className="Romaji">n</p>
            <p className="Kana">ん</p>
          </div>
        </div>
      </main>
      <div className="Footer"></div>
    </Card>
  );
};

export default HiraganaStudyPage;
