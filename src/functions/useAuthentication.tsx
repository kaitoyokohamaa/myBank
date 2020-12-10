import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import { useHistory } from "react-router-dom";
export function useAuthentication() {
  const history = useHistory();
  const [idToken, setIdToken] = useState<number | string>();
  const [userId, setUserId] = useState<number | string>();
  const db = firebase.firestore();
  const ref = db.collection("User");

  firebase
    .auth()
    .currentUser?.getIdToken(false)
    .then((idToken: number | string) => {
      setIdToken(idToken);
    });

  const checkAuthentication = () => {
    firebase.auth().onAuthStateChanged(async (usr: firebase.User | null) => {
      if (usr) {
        history.push(`/home/${idToken}`);
      }
    });
  };

  const getUserId = () =>
    ref.onSnapshot((usersDocs) => {
      usersDocs.forEach((usersFilds) => {
        setUserId(usersFilds.id);
      });
    });

  return [{ idToken, checkAuthentication, getUserId, userId }] as const;
}
