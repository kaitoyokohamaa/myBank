import React, { useEffect, Fragment, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Typography } from "antd";
import firebase from "firebase/app";
import { useAuthentication } from "hooks/useAuthentication";
import { Meta } from "components/meta";
const Index: React.FC = () => {
  const { Title } = Typography;

  const title = "ログイン";
  const url = `https://ogp-kaitoyokohamaa.vercel.app/${title}.png`;
  const router = useRouter();
  const [useAuthenticationContents] = useAuthentication();

  useEffect(() => {
    useAuthenticationContents.checkAuthentication();
  }, []);

  const submitHanfler = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const usersInfo = {
          userID: [result.user?.uid],
          name: result.additionalUserInfo?.profile?.["name"],
        };
        firebase
          .firestore()
          .collection("User")
          .doc(result.user?.uid)
          .get()
          .then((doc) => {
            if (!doc.exists) {
              useAuthenticationContents.ref
                .doc(result.user?.uid)
                .set(usersInfo);
            } else {
              router.push(`/home`);
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Fragment>
      <Meta title={title} image={encodeURI(url)} />

      <div className="bg-blue-5 text-white h-screen">
        <div className="grid grid-cols-8 gap-8">
          <div className="mt-80 m-auto col-span-4">
            <Title>
              <span className="text-white">
                ログインして家計簿を記録しよう！
              </span>
            </Title>
            <div className="pt-10 m-auto">
              <button
                className="border-white transition delay-200 py-2 rounded-xl px-10 border-2 hover:bg-white hover:text-blue-5"
                onClick={submitHanfler}
              >
                googleログイン
              </button>

              <button className="border-white transition delay-200 py-2 rounded-xl px-10 border-2 hover:bg-white hover:text-blue-5 ml-4">
                <Link href={`/guest`}>
                  <span>ゲストでログイン</span>
                </Link>
              </button>
            </div>
          </div>
          <div className="col-span-4">
            <img className=" h-screen" src="img/undraw_mobile_login_ikmv.png" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Index;
