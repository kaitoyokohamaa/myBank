import React from "react";
import Link from "next/link";
import Logo from "../../Logo";

import * as firebase from "firebase/app";

export default function Index() {
  const logOut = () => {
    alert("ログアウトします");
    firebase.auth().signOut();
  };

  return (
    <div>
      <header>
        <Link href={`/home`}>
          <Logo />
        </Link>

        <div>
          <li>
            <Link href={`/home`}>ホーム</Link>
          </li>
          <li>
            <Link href={`Income`}>予算</Link>
          </li>
          <li>
            <Link href={`Income`}>
              <span onClick={logOut}>ログアウト</span>
            </Link>
          </li>
        </div>
      </header>
    </div>
  );
}
