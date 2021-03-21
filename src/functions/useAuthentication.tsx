import React from "react";
import firebase from "../config/firebase";
import { useHistory } from "react-router-dom";

export function useAuthentication() {
  const history = useHistory();

  const db = firebase.firestore();
  const ref = db.collection("User");

  //すでにログインしているユーザーを識別する
  const checkAuthentication = () => {
    firebase.auth().onAuthStateChanged(async (usr: firebase.User | null) => {
      if (usr) {
        history.push(`/home`);
      }
    });
  };

  return [{ checkAuthentication, ref }] as const;
}
