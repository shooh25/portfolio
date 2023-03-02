import React from "react";
import styles from "./style.module.css";
import Button from "../../components/Button";

import Mock from "../../image/materials/movie1.png";
import Screen from "../../image/materials/movie-screen.png";
import Logo from "../../image/materials/CinemaOn.png";
import Layout from "../../image/materials/layout.png";


const Movie = () => {
  return (
    <>
      <section className={`${styles.firstView} ${"firstView"}`}>
        <div className="body">
          <div className="contents">
            <h1 className="text01">
              離れた人とも
              <br />
              リモートで一緒に
              <br />
              映画が見れるアプリ
            </h1>
            <p className="text03">
              自主制作で「リモート生活を豊かにするサービス」というテーマで制作。離れてた人ともリモートで会話しながら映画を楽しむことができるサービスをデザインしました。
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
            <p className="text03">5日間, 2023/1</p>
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <div className={styles.body}>
          <div className={styles.concept}>
            <div className="info">
              <h3 className="text04">コンセプト・機能</h3>
              <p className="text03">
                リモートで離れた人と映画を観れるアプリは、既存のサービスだとChromeの拡張機能として提供されているアプリしか無いため、
                <br />
                スマートフォンやタブレットでより手軽に映画が観れるアプリというコンセプトで制作しました。
                <br />
                機能としてはZoomと同じように1人のユーザーがホストとなってルームを作成し、
                <br />
                他の人が参加することで一緒に映画を見ることができます。
              </p>
            </div>
          </div>
          <div className={styles.screen}>
            <div className="info">
              <h3 className="text04">画面</h3>
            </div>
            <div className={styles.imageArea}>
              <img src={Screen} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="design">
        <div className="body">
          <div className="left">
            <div className="above">
              <h3 className="text04">デザイン</h3>
              <p className="text03">
                映像を際立たせるために、ダークモードのデザインに統一しました。重たい印象にならないようボタン等は少し丸みを帯びたデザインとし、イラストも一部に使用しました。また機能の面に関してはルームを作成する際に「ステータス」が設定できるなど、映画の鑑賞中に邪魔がされない工夫を機能に盛り込みました。
              </p>
            </div>
            <div className="below">
              <h3 className="text04">ロゴ</h3>
              <div className="grid">
                <div className="imageArea">
                  <img src={Logo} alt="" />
                </div>
                <p className="text03">
                  「CinemaON」
                  <br />
                  オンライン上で、手軽に他の人と映画を楽しめるというコンセプトに基づき名前を決定しました。
                </p>
              </div>
            </div>
          </div>
          <div className="right">
            <img src={Layout} alt="" />
          </div>
        </div>
      </section>

      <section className="buttonArea">
        <Button />
      </section>
    </>
  );
};

export default Movie;
