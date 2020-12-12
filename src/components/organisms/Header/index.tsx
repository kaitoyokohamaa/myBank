import React from "react";
import Logo from "../../atoms/Logo";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import * as firebase from "firebase/app";

export default function Index() {
  const logOut = () => {
    alert("ログアウトします");
    firebase.auth().signOut();
  };

  return (
    <div>
      <header className={styles.header}>
        <Logo />
        <div className={styles.linkWrap}>
          <li>
            <Link className={styles.link} to={`/home`}>
              HOME
            </Link>
          </li>
          {/* <li>
            <Link className={styles.link} to="/graph">
              グラフ
            </Link>
          </li> */}
          <li>
            <Link className={styles.link} to="/" onClick={logOut}>
              {" "}
              LOGOUT
            </Link>
          </li>
        </div>
      </header>
    </div>
  );
}
