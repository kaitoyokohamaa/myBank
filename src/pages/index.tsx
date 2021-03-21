import React from "react";
import { useRouter } from "next/router";
import { Typography } from "antd";
import firebase from "firebase/app";
import { useAuthentication } from "hooks/useAuthentication";
import { Button } from "antd";
const Index: React.FC = () => {
  const { Title } = Typography;
  const router = useRouter();
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
        // to do https://zenn.dev/d_suke/articles/0fc7670b2da750f6dd87 pregetch
        router.push(`/home`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <React.Fragment>
      <div className="grid grid-cols-8 gap-8">
        <div className="mt-80 m-auto col-span-3">
          <Title level={2}>ログインして家計簿を記録しよう！</Title>
          <div className="pt-10 m-auto">
            <Button type="primary" onClick={submitHanfler}>
              googleログイン
            </Button>
          </div>
        </div>
        <div className="col-span-5 mt-28">
          <img src="Img/undraw_mobile_login_ikmv.png" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Index;
