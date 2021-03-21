import React from "react";
import { useHistory } from "react-router-dom";

import firebase from "firebase/app";
import { useAuthentication } from "functions/useAuthentication";
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
      <div className="flex">
        <div className="mt-20">
          <h1>ログインする</h1>
          <button onClick={submitHanfler}>googleログイン</button>
        </div>
        <div>
          <img src="Img/undraw_mobile_login_ikmv.png" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Index;
