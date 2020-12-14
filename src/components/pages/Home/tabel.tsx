import React, { FC } from "react";

import { moneyField } from "./index";
import styles from "./tabel.module.css";

export const Tabel: FC<firebase.firestore.DocumentData> = ({ budget }) => {
  return (
    <div>
      <>
        <h1>Recent spending</h1>
        <table className={styles.styledTable}>
          <tr className={styles.styledTr}>
            <th>date</th>
            <th>Contents</th>
            <th>Amount of money</th>
            <th>category</th>
          </tr>
          <tbody>
            {budget?.map((t: moneyField) => {
              const CurrentMonth = t.day.toDate().getMonth() + 1;
              const CurrentDay = t.day.toDate().getDay() + 13;
              return (
                <tr key={t.description} className={styles.styledTable}>
                  <td>
                    {CurrentMonth}月{CurrentDay}日
                  </td>
                  <td>{t.description}</td>
                  <td>{t.money}</td>
                  <td>極楽</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    </div>
  );
};
