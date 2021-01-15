import React from "react";
import Logo from "../../atoms/Logo";
import styles from "./header.module.css";
import { NavLink } from "react-router-dom";
import * as firebase from "firebase/app";

export default function Index() {
  const logOut = () => {
    alert("ログアウトします");
    firebase.auth().signOut();
  };

  return (
    <div>
      <header className={styles.header}>
        <NavLink
          className={styles.link}
          activeStyle={{
            color: "#007bff",
            fontWeight: "bold",
          }}
          to={`/home`}
        >
          <Logo />
        </NavLink>

        <div className={styles.linkWrap}>
          <li>
            <NavLink
              className={styles.link}
              activeStyle={{
                color: "#007bff",
                fontWeight: "bold",
              }}
              to={`/home`}
            >
              ホーム
            </NavLink>
          </li>
          <li>
            <NavLink
              className={styles.link}
              activeStyle={{
                color: "#007bff",
                fontWeight: "bold",
              }}
              to="/income"
            >
              予算
            </NavLink>
          </li>
          <li>
            <NavLink
              className={styles.link}
              activeStyle={{
                color: "#007bff",
                fontWeight: "bold",
              }}
              to="/signin"
              onClick={logOut}
            >
              {" "}
              ログアウト
            </NavLink>
          </li>
        </div>
      </header>
    </div>
  );
}
