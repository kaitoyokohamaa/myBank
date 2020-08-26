import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Input from "../../atoms/Input";
import firebase from "../../../firebase"

const SigninCreation: React.FC = () => {
    const history = useHistory();
    const [authForm, setAuthForm] = useState({
        Email: {
            elementType: "email",
            elementConfig: {
                type: "email",
                placeholder: "メールアドレス",
                label: "メールアドレス",
            },
            value: "",
        },
        Password: {
            elementType: "password",
            elementConfig: {
                type: "password",
                placeholder: "パスワード",
                label: "パスワード",
            },
            value: "",
        },
    });

    const inputChangedHandler = (event: KeyboardEvent, controlName: string) => {
        const updatedControls = {
            ...authForm,
            [controlName]: {
                ...authForm[controlName],
                value: (event.target as HTMLInputElement).value,
                id: controlName,
            },
        };
        setAuthForm(updatedControls);
    };

    const formElementsArray = [];
    for (let key in authForm) {
        formElementsArray.push({
            id: key,
            config: authForm[key],
        });
    }

    let form = formElementsArray.map((formElement) => (
        <React.Fragment key={formElement.id}>
            <Input
                rowkey={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                changed={(event: KeyboardEvent) =>
                    inputChangedHandler(event, formElement.id)
                }
            />
        </React.Fragment>
    ));

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = authForm.Email.value;
        const password = authForm.Password.value;
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
                {form}
                <button>ログイン</button>
            </form>
        </div>
    );
};

export default SigninCreation;
