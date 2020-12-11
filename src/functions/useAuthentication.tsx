import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import { useHistory } from "react-router-dom";
export function useAuthentication() {
  const history = useHistory();

  const [userId, setUserId] = useState<number | string>();
  const db = firebase.firestore();
  const ref = db.collection("User");
  //自分のユニークなIDを取得する
  useEffect(() => {
    ref.onSnapshot((usersDocs) => {
      usersDocs.forEach((usersFilds) => {
        setUserId(usersFilds.id);
      });
    });
  }, []);
  //すでにログインしているユーザーを識別する
  const checkAuthentication = () => {
    firebase.auth().onAuthStateChanged(async (usr: firebase.User | null) => {
      if (usr) {
        history.push(`/home`);
      }
    });
  };
  //アカウント識別のためIDを格納する
  const updateUserID = (id: string | number) => {
    if (id) {
      const doUserString = id.toString();
      ref.doc(doUserString).update({ userID: id });
    }
  };

  return [{ checkAuthentication, userId, ref, updateUserID }] as const;
}
