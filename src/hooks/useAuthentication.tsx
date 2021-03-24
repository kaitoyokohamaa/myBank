import React from "react";
import { useRouter } from "next/router";
import firebase from "lib/firebase";

export function useAuthentication() {
  const router = useRouter();

  console.log(firebase);
  const db = firebase.firestore();
  const ref = db.collection("User");

  //すでにログインしているユーザーを識別する
  const checkAuthentication = () => {
    firebase.auth().onAuthStateChanged(async (usr: firebase.User | null) => {
      if (usr) {
        router.push(`/home`);
      }
    });
  };

  return [{ checkAuthentication, ref }] as const;
}
