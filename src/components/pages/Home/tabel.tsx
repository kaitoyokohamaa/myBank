import React, { FC } from "react";

import { moneyField } from "./index";
import styles from "./tabel.module.css";

export const Tabel: FC<firebase.firestore.DocumentData> = ({ budget }) => {
  return (
    <div>
      <>
        <table className={styles.styledTable}>
          <tr className={styles.styledTr}>
            <th>日付</th>
            <th>内容</th>
            <th>金額</th>
          </tr>
          {budget?.map((t: moneyField) => {
            const CurrentMonth = t.day.toDate().getMonth() + 1;
            const CurrentDay = t.day.toDate().getDay() + 13;
            return (
              <tr className={styles.styledTable}>
                <td>
                  {CurrentMonth}月{CurrentDay}日
                </td>
                <td>{t.description}</td>
                <td>{t.money}</td>
              </tr>
            );
          })}
        </table>
      </>
    </div>
  );
};
