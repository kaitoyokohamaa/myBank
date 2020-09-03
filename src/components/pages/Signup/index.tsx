import React from "react";
import { useHistory } from "react-router-dom";
import { Input, FormControl, FormLabel } from '@chakra-ui/core'
import firebase from '../../../firebase'
import { Button } from '@chakra-ui/core'
import styles from "./signup.module.css"
const Index: React.FC = () => {
    const history = useHistory();


    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = "hoge";
        const password = "hoge";
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then((res) => {
                history.push("/home")
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            });
    };
    return (
        <div className={styles.formWrap}>
            <h1>新規登録</h1>
            <form onSubmit={submit} >
                <FormControl isRequired className={styles.form}>
                    <FormLabel htmlFor="fname">email</FormLabel>
                    <Input id="fname" placeholder="メールアドレス" />
                </FormControl>
                <FormControl isRequired className={styles.form}>
                    <FormLabel htmlFor="fname">password</FormLabel>
                    <Input id="fname" placeholder="パスワード" />
                </FormControl>
                <Button variantColor='green' className={styles.register}>
                    登録
                </Button>
            </form>
        </div>
    );
};

export default Index;
