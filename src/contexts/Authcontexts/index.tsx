import React, { useEffect, useState, FC, Dispatch, Reducer } from "react";

import { app } from "../../firebase"
import * as H from 'history'
export interface AccountContextValue {
    login: (email: string, password: string, history: H.History) => Promise<void> | undefined,
    signup: (email: string, password: string, history: H.History) => Promise<void> | undefined
}
// contextの作成
export const AuthContext = React.createContext<AccountContextValue>({ login: () => void 0, signup: () => void 0 });

export const AuthProvider: FC = ({ children }) => {
    // const [currentUser, setCurrentUser] = useState(null);

    // ユーザーをログインさせる関数
    const login = async (email: string, password: string, history: H.History) => {
        try {
            await app.auth().signInWithEmailAndPassword(email, password);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    };

    // 新しいユーザーを作成しログインさせる関数
    const signup = async (email: string, password: string, history: H.History) => {
        try {
            await app.auth().createUserWithEmailAndPassword(email, password);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    };
    // 後ほど対応
    // useEffect(() => {
    //     app.auth().onAuthStateChanged(setCurrentUser);
    // }, []);

    return (
        // Contextを使用して認証に必要な情報をコンポーネントツリーに流し込む。
        <AuthContext.Provider
            value={{
                login: login,
                signup: signup,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};