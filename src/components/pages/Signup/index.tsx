import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Input from "../../atoms/Input";
import * as firebase from "firebase/app";
const Index: React.FC = () => {
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
                valid: authForm[controlName].validation,
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

        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then((res: any) => {
                history.push("/")
            })
            .catch((err: any) => {
                console.log(err)
            });
    };
    return (
        <div>
            <form onSubmit={submit} >
                {form}
                <button></button>
            </form>
        </div>
    );
};

export default Index;
