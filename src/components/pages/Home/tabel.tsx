import React, { FC } from "react";

import { moneyField } from "./index";
import styles from "./tabel.module.css";

export const Tabel: FC<firebase.firestore.DocumentData> = ({ budget }) => {
  return (
    <div>
      <>
        <h1>最近の支出</h1>
        <table className={styles.styledTable}>
          <tr className={styles.styledTr}>
            <th>日付</th>
            <th>内容</th>
            <th>金額</th>
            <th>カテゴリ</th>
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
