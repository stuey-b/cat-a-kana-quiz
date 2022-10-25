import React from "react";
import Card from "./Card";

const KatakanaStudy = () => {
  return (
<Card>
      <div className="HeaderFooter">
        <button>Home</button>
        <button>Quiz</button>
      </div>
      <main className="KatakanaMainContainer">
      <div className="KanaTitle">
        Katakana
      </div>
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



      </div>

      </main>
      <div className="HeaderFooter"></div>
    </Card>
  );
};

export default KatakanaStudy;
