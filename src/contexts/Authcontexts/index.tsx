import React, { useEffect, useState, FC, Dispatch, Reducer } from "react";

import { app } from "../../firebase"
import * as H from 'history'
interface Actions {
    type: string;
    value: any;
}

interface SidebarProps {
    show: boolean;
    content: JSX.Element | null;
}

interface SidebarProviderProps {
    reducer: Reducer<SidebarProps, Actions>;
    initState: SidebarProps;
}

interface InitContextProps {
    state: SidebarProps;
    dispatch: Dispatch<Actions>;
}
// contextの作成
export const AuthContext = React.createContext({} as InitContextProps);

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