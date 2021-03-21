import React, { FC } from "react";

import { Form } from "./form";

import styles from "./home.module.css";
import Header from "../../organisms/Header";
import { Tabel } from "./tabel";
import { useFunctions } from "../../functions/useFunctions";
import Graph from "../Graph";
import firebase from "../../config/firebase";
export interface moneyField {
  money: number;
  description: string;
  type: string;
  createdAt: firebase.firestore.FieldValue;
  day: any;
  id: string;
  category: string;
}

export const Home: FC = () => {
  const [functionsHome] = useFunctions();

  return (
    <React.Fragment>
      <Header />
      <div className={styles.home}>
        <div className={styles.homeHeader}>
          <div>
            <Graph />
          </div>
        </div>
        {/* 画面半分の収入/支出のテーブルを作成 */}
        <div className={styles.formArea}>
          <Form />
        </div>
        <Tabel budget={functionsHome.budget} />
      </div>
    </React.Fragment>
  );
};
