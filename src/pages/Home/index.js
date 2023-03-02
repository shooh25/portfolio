import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import Button from "../../components/Button";

import CatchCopy from "../../image/CatchCopy.svg";
import Grid1 from "../../image/materials/walk-grid.png";
import Grid2 from "../../image/materials/movie-grid.png";
import Grid3 from "../../image/materials/justice-grid.png";
import Grid4 from "../../image/materials/sakuji-grid.png";
import Name from "../../image/sho-okubo.svg";
import Twitter from "../../image/t_white.svg";
import Mail from "../../image/m_white.svg";
import Redesigner from "../../image/r_white.svg";

const Home = () => {
  return (
    <>
      <section id="top" className={styles.firstView}>
        <div className={styles.body}>
          <img src={CatchCopy} alt="PORTFOLIO" />
          <div className={styles.desc}>
            <p className="text03">Web site created using <span>React.JS</span></p>
          </div>
        </div>
      </section>

      <section id="works" className={styles.works}>
        <div className={styles.body}>
          <ul className={styles.grid}>
            <li className={styles.item}>
              <Link to="/work1" className={styles.link}>
                <img src={Grid1} alt="" />
                <div className={styles.cover}></div>
                <div className={styles.contents}>
                  <span>UIデザイン</span>
                  <h2>ShareWalk</h2>
                  <p>
                    歩いたコースと写真を仲間と
                    <br />
                    共有できるウォーキングアプリ
                  </p>
                </div>
              </Link>
            </li>
            <li className={styles.item}>
              <Link to="/work2">
                <img src={Grid2} alt="" />
                <div className={styles.cover}></div>
                <div className={styles.contents}>
                  <span>UIデザイン</span>
                  <h2>CinemaON</h2>
                  <p>
                    離れた人ともリモートで一緒に
                    <br />
                    映画が観れるアプリ
                  </p>
                </div>
              </Link>
            </li>
            <li className={styles.item}>
              <Link to="/work3">
                <img src={Grid3} alt="" />
                <div className={styles.cover}></div>
                <div className={styles.contents}>
                  <span>WEBデザイン</span>
                  <h2>ホームページデザイン</h2>
                  <p>
                    税理士事務所のホームページ
                    <br />
                    デザイン(架空のサイト)
                  </p>
                </div>
              </Link>
            </li>
            <li className={styles.item}>
              <Link to="/work4">
                <img src={Grid4} alt="" />
                <div className={styles.cover}></div>
                <div className={styles.contents}>
                  <span>グラフィックデザイン</span>
                  <h2>作字</h2>
                  <p>作字(文字デザイン)</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.vision}>
        <div className={styles.body}>
          <div className={styles.contents}>
            <h4 className="text01">
              少しでも「幸せ」
              <br />
              を与えることのできる
              <br />
              デザインを。
            </h4>
            <p className="text03">
              モノづくりを通して、人々の生活を少しだけでも豊かにしたい、
              <br />
              日々の生活の「幸福度」を上げるお手伝いをしたい。
              <br />
              そんな思いで日々制作活動を行っています。
              <br />
              そして、これらの「モノ」を作り上げるにはデザインの力が必要不可欠です。
              <br />
              私はそんなデザインの力を信じ、人々に「幸せ」を与えることの出来る
              <br />
              デザインを生み出し続けたいと考えています。
            </p>
          </div>
        </div>
      </section>

      <section id="profile" className={styles.profile}>
        <div className={styles.body}>
          <div className={styles.contents}>
            <div className={styles.myName}>
              <img src={Name} alt="sho okubo 大久保 昭" />
            </div>
            <div className={styles.career}>
              <p>
                立命館大学 情報理工学部
                <br />
                先端社会デザインコース 25卒
              </p>
              <ul className={styles.externalLink}>
                <li>
                  <a className={styles.roundIcon} href="https://twitter.com/shoh_25">
                    <img src={Twitter} alt="Twitter" />
                  </a>
                </li>
                <li>
                  <a className={styles.roundIcon} href="mailto:koan6210@outlook.jp">
                    <img src={Mail} alt="" />
                  </a>
                </li>
                <li>
                  <a
                    className={styles.roundIcon}
                    href="https://student.redesigner.jp/students/3a05f4ba1f69c2318a9861f4c331b2d7"
                  >
                    <img src={Redesigner} alt="ReDesigner for Student" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.body}>
          <div className={styles.contents}>
            <div className={styles.item}>
              <h2 className="text02">Strength</h2>
              <p className="text03">
                子供のころから絵を書くのが好きで、高校生の時にプログラミングと出会った時からデザインとエンジニアリングの両方に魅力を感じていました。その思いは今も変わらず、日々楽しみながら両方のスキル向上に努めています。
              </p>
            </div>
            <div className={styles.item}>
              <h2 className="text02">Skill</h2>
              <p className="text03">
                Figma, XD, HTML, CSS, Python, JavaScript, Git, Affinity Designer
              </p>
            </div>
          </div>
          <div className={styles.buttonArea}>
            <Button />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
