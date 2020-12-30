import React from "react";
import Header from "../../organisms/Header";
import Logo from "../../../Img/logo.png";
import Game from "../../../Img/game.png";
import Girl from "../../../Img/girl.png";
import styles from "./index.module.css";
import { Progress } from "antd";
export default function index() {
  return (
    <div className={styles.Wrapper}>
      <Header />
      <div className={styles.flex}>
        <div className={styles.incomeArea}>
          <div className={styles.status}>
            <ul className={styles.statusTtl}>
              <li className={styles.commendLi}>名前</li>
              <li className={styles.commendLi}>レベル</li>
              <li className={styles.commendLi}>体力</li>
            </ul>
            <ul className={styles.statusPlayer}>
              <li className={styles.commendLi}>かいかい</li>
              <li className={styles.commendLi}>20</li>
              <li className={styles.commendLi}>2000</li>
            </ul>
          </div>
          <div className={styles.enemy}>
            <img className={styles.enemyImg} src={Girl} />
          </div>
          <div className={styles.flex}>
            <div className={styles.saveMoney}>
              <p className={styles.commendTtl}>kaikai</p>
              <ul className={styles.commend}>
                <li className={styles.commendLi}>▶︎追加</li>
                <li className={styles.commendLi}>戦う</li>
                <li className={styles.commendLi}>逃げる</li>
                <li className={styles.commendLi}>防御</li>
              </ul>
            </div>
            <div className={styles.message}>
              <p>バニーガールちゃんが現れた</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
