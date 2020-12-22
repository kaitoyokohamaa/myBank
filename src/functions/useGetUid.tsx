import React, { useState, useEffect } from "react";
import firebase from "../firebase";

export function useGetUid() {
  const [currentUserId, setCurrentUserId] = useState<number | string>();

  useEffect(() => {
    return firebase
      .auth()
      .onAuthStateChanged(async (usr: firebase.User | null) => {
        if (!usr) {
        } else {
          const myUid = usr.uid;
          setCurrentUserId(myUid);
        }
      });
  }, []);

  return [
    {
      currentUserId,
    },
  ] as const;
}
