import React from "react";
import Card from "./Card";
import { basicKatakanaQuestions, shuffleQuestions } from "../katakana";

const KatakanaStudyPage = ({
  setShowStartPage,
  setShowKatakanaQuizPage,
  setShowKatakanaStudyPage,
}) => {

  const ReturnHome = () => {
    setShowKatakanaStudyPage(false);
    setShowStartPage(true);
  };

  const KatakanaQuiz = () => {
    setShowKatakanaStudyPage(false);
    setShowKatakanaQuizPage(true);
    shuffleQuestions(basicKatakanaQuestions);
  };


  return (
    <Card>
      <div className="Header">
        <button onClick={ReturnHome}>Home</button>
        <button onClick={KatakanaQuiz}>Quiz</button>
      </div>
      <main className="HiraganaMainContainer">
        <div className="KanaTitle">katakana</div>
        <div className="KanaGridContainer">
          <div className="KanaGridItem">
            <p className="Romaji">a</p>
            <p className="Kana">ア</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">i</p>
            <p className="Kana">イ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">u</p>
            <p className="Kana">ウ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">e</p>
            <p className="Kana">エ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">o</p>
            <p className="Kana">オ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">ka</p>
            <p className="Kana">カ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">ki</p>
            <p className="Kana">キ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">ku</p>
            <p className="Kana">ク</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">ke</p>
            <p className="Kana">ケ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">ko</p>
            <p className="Kana">コ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">sa</p>
            <p className="Kana">サ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">shi</p>
            <p className="Kana">シ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">su</p>
            <p className="Kana">ス</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">se</p>
            <p className="Kana">セ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">so</p>
            <p className="Kana">ソ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">ta</p>
            <p className="Kana">タ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">chi</p>
            <p className="Kana">チ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">tsu</p>
            <p className="Kana">ツ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">te</p>
            <p className="Kana">テ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">to</p>
            <p className="Kana">ト</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">na</p>
            <p className="Kana">ナ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">ni</p>
            <p className="Kana">ニ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">nu</p>
            <p className="Kana">ヌ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">ne</p>
            <p className="Kana">ネ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">no</p>
            <p className="Kana">ノ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">ha</p>
            <p className="Kana">ハ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">hi</p>
            <p className="Kana">ヒ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">fu</p>
            <p className="Kana">フ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">he</p>
            <p className="Kana">ヘ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">ho</p>
            <p className="Kana">ホ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">ma</p>
            <p className="Kana">マ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">mi</p>
            <p className="Kana">ミ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">mu</p>
            <p className="Kana">ム</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">me</p>
            <p className="Kana">メ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">mo</p>
            <p className="Kana">モ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">ra</p>
            <p className="Kana">ラ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">ri</p>
            <p className="Kana">リ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">ru</p>
            <p className="Kana">ル</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">re</p>
            <p className="Kana">レ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">ro</p>
            <p className="Kana">ロ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">ya</p>
            <p className="Kana">ヤ</p>
          </div>
          <div className="KanaGridItem col-start-3">
            <p className="Romaji">yu</p>
            <p className="Kana">ユ</p>
          </div>
          <div className="KanaGridItem col-start-5">
            <p className="Romaji">yo</p>
            <p className="Kana">ヨ</p>
          </div>
          <div className="KanaGridItem">
            <p className="Romaji">wa</p>
            <p className="Kana">ワ</p>
          </div>
          <div className="KanaGridItem col-start-3">
            <p className="Romaji">wo</p>
            <p className="Kana">ヲ</p>
          </div>
          <div className="KanaGridItem -order-1 col-start-5">
            <p className="Romaji">n</p>
            <p className="Kana">ン</p>
          </div>
        </div>
      </main>
      <div className="Footer"></div>
    </Card>
  );
};

export default KatakanaStudyPage;
