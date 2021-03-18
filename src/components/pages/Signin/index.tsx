import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@chakra-ui/core";
import styles from "./signin.module.css";
import firebase from "firebase/app";
import { useAuthentication } from "../../../functions/useAuthentication";
const Index: React.FC = () => {
  const history = useHistory();
  const [useAuthenticationContents] = useAuthentication();
  const submitHanfler = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const usersInfo = {
          userID: [result.user?.uid],
          name: result.additionalUserInfo?.username,
        };
        useAuthenticationContents.ref.add(usersInfo);
      })
      .then(() => {
        history.push(`/home`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <React.Fragment>
      <Button
        onClick={submitHanfler}
        variantColor="green"
        className={styles.register}
      >
        googleログイン
      </Button>
    </React.Fragment>
  );
};

export default Index;
