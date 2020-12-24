import React, { FC } from "react";

import { Form } from "./form";
import CountUp from "react-countup";
import styles from "./home.module.css";
import Header from "../../organisms/Header";
import { Tabel } from "./tabel";
import { useFunctions } from "../../../functions/useFunctions";
import Graph from "../Graph";
import firebase from "../../../firebase";
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
          <div className={styles.body}>
            <div className={styles.Expenses}>
              <h1>Expenses</h1>
              <p>
                My expence is ¥
                <span className={styles.expence}>
                  {functionsHome.expence && (
                    <CountUp
                      start={0}
                      end={functionsHome.expence}
                      duration={2.5}
                      separator=","
                    />
                  )}
                </span>
              </p>
              <div className={styles.formArea}>
                <Form />
              </div>
            </div>
          </div>
          <div>
            <Graph />
          </div>
        </div>
        {/* 画面半分の収入/支出のテーブルを作成 */}
        <Tabel budget={functionsHome.budget} />
      </div>
    </React.Fragment>
  );
};
