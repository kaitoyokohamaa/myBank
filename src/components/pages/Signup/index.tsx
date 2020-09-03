import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Input, FormControl, FormLabel } from '@chakra-ui/core'
import firebase from '../../../firebase'
const Index: React.FC = () => {
    const history = useHistory();

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = "hoge";
        const password = "hoge";
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then((res) => {
                history.push("/")
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            });
    };
    return (
        <div>
            <form onSubmit={submit} >
                <FormControl isRequired>
                    <FormLabel htmlFor="fname">email</FormLabel>
                    <Input id="fname" placeholder="メールアドレス" />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel htmlFor="fname">password</FormLabel>
                    <Input id="fname" placeholder="パスワード" />
                </FormControl>
                <button>登録</button>
            </form>
        </div>
    );
};

export default Index;
