import React, { useState } from "react";
import firebase from "../firebase";
export function useAuthentication() {
  const [idToken, setIdToken] = useState<number | string>();
  firebase
    .auth()
    .currentUser?.getIdToken(false)
    .then((idToken: number | string) => {
      setIdToken(idToken);
    });
  return [{ idToken }] as const;
}
