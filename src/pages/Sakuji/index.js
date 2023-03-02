import React from "react";
import styles from "./style.module.css";
import Button from "../../components/Button";
import { TwitterTweetEmbed } from 'react-twitter-embed'

import Mock from "../../image/materials/sakuji/mock.png";

const Sakuji = () => {
  return (
    <>
      <section className={`${styles.firstView} ${"firstView"}`}>
        <div className="body">
          <div className="contents">
            <h1 className="text01">
              作字
              <br />
              (文字デザイン)
            </h1>
            <p className="text03">
              デザインスキル向上を目指すため、長期休み中に「作字」の制作を毎日行っていました。１つの言葉を決め、それから連想されるイメージをグラフィックに落とし込んで表現しました。完成した作品はTwitterにて発信しました。
            </p>
          </div>
          <img src={Mock} alt="" />
        </div>
      </section>

      <section className={`${styles.overView} ${"overView"}`}>
        <div className="body">
          <div className="item">
            <h2 className="text02">Design</h2>
            <p className="text03">グラフィックデザイン</p>
          </div>
          <div className="border"></div>
          <div className="item">
            <h2 className="text02">Category</h2>
            <p className="text03">個人制作</p>
          </div>
          <div className="border"></div>
          <div className="item">
            <h2 className="text02">Program</h2>
            <p className="text03">Affinity Designer</p>
          </div>
          <div className="border"></div>
          <div className="item">
            <h2 className="text02">Period</h2>
            <p className="text03">4ヶ月, 2021/1 ~ 2021/4</p>
          </div>
        </div>
      </section>

      <section className='gallery'>
        <div className={styles.body}>
          <h3 className="text04">ギャラリー</h3>
          <ul>
            <li>
              <TwitterTweetEmbed className='tweet' tweetId={"1386276885135433730"} />
            </li>
            <li>
              <TwitterTweetEmbed className='tweet' tweetId={"1378325211121000450"} />
            </li>
            <li>
              <TwitterTweetEmbed className='tweet' tweetId={"1372868702727663618"} />
            </li>
            <li>
              <TwitterTweetEmbed className='tweet' tweetId={"1365292878679875593"} />
            </li>
            <li>
              <TwitterTweetEmbed className='tweet' tweetId={"1360549515434938372"} />
            </li>
            <li>
              <TwitterTweetEmbed className='tweet' tweetId={"1352563030383443968"} />
            </li>
            <li>
              <TwitterTweetEmbed className='tweet' tweetId={"1351478221573820423"} />
            </li>
            <li>
              <TwitterTweetEmbed className='tweet' tweetId={"1350348650908581888"} />
            </li>
            <li>
              <TwitterTweetEmbed className='tweet' tweetId={"1349666366924627972"} />
            </li>
          </ul>
        </div>
      </section>

      <section className="buttonArea">
        <Button />
      </section>
    </>
  );
};

export default Sakuji;
