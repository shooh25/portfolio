import React from "react";
import styles from "./style.module.css";
import Button from "../../components/Button";

import Mock from "../../image/materials/justice1.png";
import LeftImage from "../../image/materials/justice2.png";
import RightImage from "../../image/materials/justice3.png";

const Justice = () => {
  return (
    <>
      <section className={`${styles.firstView} ${"firstView"}`}>
        <div className="body">
          <div className="contents">
            <h1 className="text01">
              税理士事務所の
              <br />
              ホームページデザイン
              <br />
              (架空のサイト)
            </h1>
            <p className="text03">
              大学1年の時に、仕事の受注のためにコンペに出した作品です。頂いた簡単なワイヤーフレームをもとにトップページのデザインを制作しました。
            </p>
          </div>
          <img src={Mock} alt="" />
        </div>
      </section>

      <section className={`${styles.overView} ${"overView"}`}>
        <div className="body">
          <div className="item">
            <h2 className="text02">Design</h2>
            <p className="text03">WEBデザイン</p>
          </div>
          <div className="border"></div>
          <div className="item">
            <h2 className="text02">Category</h2>
            <p className="text03">個人制作</p>
          </div>
          <div className="border"></div>
          <div className="item">
            <h2 className="text02">Program</h2>
            <p className="text03">Adobe XD</p>
          </div>
          <div className="border"></div>
          <div className="item">
            <h2 className="text02">Period</h2>
            <p className="text03">1週間, 2021/12</p>
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <div className={styles.body}>
          <div className={styles.contents}>
            <h2 className="text04">デザイン</h2>
            <p className="text03">
              訪れた人に誠実さと同時に親近感をもってもらえるようなデザインにしました。ファーストビューのキャッチコピーには明朝体のフォントを用いて誠実さを表現し、その他の文章などはゴシック体を用いて明るい印象を与えるとともに、視認性に優れたデザインを実現しました。
            </p>
          </div>
          <div className={styles.imageArea}>
            <img src={LeftImage} alt="" />
            <img src={RightImage} alt="" />
          </div>
        </div>
      </section>

      <section className="buttonArea">
        <Button />
      </section>
    </>
  );
};

export default Justice;
