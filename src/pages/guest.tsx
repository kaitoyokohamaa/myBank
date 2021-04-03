import React, { Fragment } from "react";
import firebase from "lib/firebase";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { Typography } from "antd";

import { Meta } from "components/meta";
type Inputs = {
  email: string;
  password: string;
};

export default function Guest() {
  const { register, handleSubmit, errors } = useForm<Inputs>();
  const { Title } = Typography;
  const router = useRouter();
  const onSubmit = (data: Inputs) => {
    const email = data.email;
    const password = data.password;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        router.push(`/home`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const title = "ゲストログイン";
  const url = `https://ogp-kaitoyokohamaa.vercel.app/${title}.png`;
  return (
    <Fragment>
      <Meta title={title} image={encodeURI(url)} />
      <div className="bg-blue-5  h-screen">
        <div className="grid grid-cols-8 gap-8">
          <div className="mt-70 m-auto col-span-4">
            <Title>
              <span className="text-white">{title}</span>
            </Title>
            <p>このまま送信してください</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="block">
                <label>email</label>
                <input
                  className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  name="email"
                  type="email"
                  value="testuser@test.com"
                  ref={register({ required: true })}
                />

                {errors.email && (
                  <span className="text-red-500">こちらの項目は必須です</span>
                )}
              </div>
              <div>
                <label>password</label>
                <input
                  name="password"
                  type="password"
                  value="TESTTEST______99999"
                  className="  w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  ref={register({ required: true })}
                />

                {errors.password && (
                  <span className="text-red-500">こちらの項目は必須です</span>
                )}
              </div>
              <input
                className="block mt-10 w-full max-w-xs mx-auto pointer bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                type="submit"
              />
            </form>
          </div>
          <div className="col-span-4">
            <img className=" h-screen" src="img/undraw_mobile_login_ikmv.png" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
