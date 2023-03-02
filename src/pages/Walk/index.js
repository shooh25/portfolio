import React from "react";
import styles from "./style.module.css";
import Button from "../../components/Button";

import Mock from "../../image/materials/walk1.png";
import Concept from "../../image/materials/concept.png";
import Screen from "../../image/materials/walk-screen.png";
import Logo from "../../image/materials/ShareWalk.svg";

const Walk = () => {
  return (
    <>
      <section className={`${styles.firstView} ${"firstView"}`}>
        <div className="body">
          <div className="contents">
            <h1 className="text01">
              歩いたコースと写真を
              <br />
              仲間と共有できる
              <br />
              ウォーキングアプリ
            </h1>
            <p className="text03">
              ReDesigner UX Challengeにおける「シニア世代が、ウォーキングを楽しく続けられるサービスを提案しよう！」というテーマに関して、発見した課題を解決するためのサービスを提案。
            </p>
          </div>
          <img src={Mock} alt="" />
        </div>
      </section>

      <section className={`${styles.overView} ${"overView"}`}>
        <div className="body">
          <div className="item">
            <h2 className="text02">Design</h2>
            <p className="text03">UIデザイン</p>
          </div>
          <div className="border"></div>
          <div className="item">
            <h2 className="text02">Category</h2>
            <p className="text03">個人制作</p>
          </div>
          <div className="border"></div>
          <div className="item">
            <h2 className="text02">Program</h2>
            <p className="text03">Figma</p>
          </div>
          <div className="border"></div>
          <div className="item">
            <h2 className="text02">Period</h2>
            <p className="text03">1ヶ月, 2022/12 ~ 2023/1</p>
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <div className={styles.body}>
          <div className={styles.concept}>
            <div className="info">
              <h3 className="text04">コンセプト</h3>
              <p className="text03">
                ペルソナの本質的な課題を分析し課題を解決するためのアイデアを発散させてから、それらを元にコンセプトを固めました。
                <br />
                またコンセプトの設定にはReDesignerのコンセプト設計シートを用い、
                <br />
                サービスを通じてユーザーに与えたい体験や価値を言語化しました。
              </p>
            </div>
            <div className={styles.imageArea}>
              <img src={Concept} alt="" />
            </div>
          </div>
          <div className={styles.screen}>
            <div className="info">
              <h3 className="text04">画面</h3>
              <p className="text03">
                コンセプトを元にアプリに必要な機能を決定し、最初にワイヤーフレームを作成した後、
                <br />
                詳細なデザインを含めたプロトタイプを作成しました。
              </p>
            </div>
            <div className={styles.imageArea}>
              <img src={Screen} alt="" />
            </div>
          </div>
        </div>
      </section>    
      
      <section className='design'>
        <div className='body'>
          <div className='detail'>
            <h3 className="text04">デザイン</h3>
            <h1 className="text01">
              日々使うアプリだからこそ、親しみやすいデザインに
            </h1>
            <p className="text03">
              メインカラーに空をイメージした青色を用い、パーツは角丸を用いて明るい印象で親しみやすいデザインにしました。またウォーキング中はヘッダー色が変化するなど、ユーザーに対して今の状態を視覚的に分かりやすく伝える工夫をしました。
            </p>
          </div>
          <div className='logo'>
            <h3 className="text04">ロゴ</h3>
            <div className={styles.imageArea}>
              <img src={Logo} alt="" />
            </div>
            <p className="text03">
              人とのつながりをマップ上のコースのように表現しました。
            </p>
          </div>
        </div>
      </section>

      <section className="buttonArea">
        <Button />
      </section>
    </>
  );
};

export default Walk;
