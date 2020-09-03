import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import firebase from "../../../firebase"

const SigninCreation: React.FC = () => {
    const history = useHistory();


    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = "hoge";
        const password = "hoge";
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((res) => {
                history.push("/home");
                console.log(res)
            })
            .catch((res) => {
                alert("ログインに失敗しました");
                console.log(res)
            });
    };
    return (
        <div>
            <form onSubmit={submit}>
                <input></input>
                <button>ログイン</button>
            </form>
        </div>
    );
};

export default SigninCreation;
