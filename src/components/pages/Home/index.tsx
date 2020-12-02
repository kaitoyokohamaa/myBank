import React, { FC } from "react";

import Form from "./form";
import CountUp from "react-countup";
import styles from "./home.module.css";
import Header from "../../organisms/Header";
import Tab from "./tabs";
import { useFunctions } from "../../../functions/useFunctions";

export type moneyField = {
  money: number;
  description: string;
  type: string;
  createdAt: firebase.firestore.FieldValue;
  day: any;
};

const Index: FC = () => {
  const now = new Date();
  const thisMonth = now.getMonth() + 1;
  const [functionsHome] = useFunctions();

  return (
    <React.Fragment>
      <Header />

      <div className={styles.home}>
        <div className={styles.homeHeader}>
          <h2 className={styles.total}>
            {thisMonth}月の残高は
            {functionsHome.totalBudget && (
              <CountUp
                start={0}
                end={functionsHome.totalBudget}
                duration={2.5}
                separator=","
              />
            )}
            円です
          </h2>

          <div className={styles.body}>
            <div className={styles.totalIncome}>
              <h2>Income</h2>+
              <span className={styles.income}>
                {functionsHome.income && (
                  <CountUp
                    start={0}
                    end={functionsHome.income}
                    duration={2.5}
                    separator=","
                  />
                )}
              </span>
            </div>
            <div className={styles.Expenses}>
              <h2>Expenses</h2>-
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
            </div>
          </div>
          <div>
            <Form />
          </div>
        </div>
        {/* 画面半分の収入/支出のタブを作成 */}
        <Tab budget={functionsHome.budget} />
      </div>
    </React.Fragment>
  );
};
export default Index;
