import React from "react";
import { useHistory } from "react-router-dom";
import { Input, FormControl, FormLabel } from '@chakra-ui/core'
import firebase from '../../../firebase'
import { Button } from '@chakra-ui/core'
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
                <Button variantColor='green' >
                    Success
                </Button>
            </form>
        </div>
    );
};

export default Index;
