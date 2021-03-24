import React from "react";
import Link from "next/link";

import firebase from "firebase/app";
import { Home } from "heroicons-react";

import { Logout } from "heroicons-react";
export const Sideber = () => {
  const logOut = () => {
    alert("ログアウトします");
    firebase.auth().signOut();
  };

  return (
    <div className="mb-10 pt-10 bg-blue-5 h-full rounded-r-3xl">
      <header>
        <div className="list-none mt-24">
          <div className="flex  transition  delay-50 rounded-full py-4 pl-10 text-white hover:bg-white hover:bg-opacity-20 hover:rounded-full mx-10 ">
            <Home />
            <Link href={`/home`}>
              <li className="text-white cursor-pointer text-base pl-2">
                ホーム
              </li>
            </Link>
          </div>

          <div className="flex  transition delay-50 rounded-full py-4 pl-10 text-white hover:bg-white hover:bg-opacity-20 hover:rounded-full mx-10 ">
            <Logout />
            <Link href={`/`}>
              <li className=" cursor-pointer text-base pl-2" onClick={logOut}>
                ログアウト
              </li>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};
