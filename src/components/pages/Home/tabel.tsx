import React, { FC, useState, useEffect } from "react";
import { EditableFields } from "./editableFields";
import { moneyField } from "./index";
import Pegination from "../../molecules/pagination";
import styles from "./tabel.module.css";

export const Tabel: FC<firebase.firestore.DocumentData> = ({ budget }) => {
  const numEachPage = 4;
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(numEachPage);

  const handleChange = (value: number) => {
    setMinValue((value - 1) * numEachPage);
    setMaxValue(value * numEachPage);
  };
  // 重複しないようにするため
  const filterdBudgets = Array.from(new Set(budget));

  return (
    <div>
      <>
        <table className={styles.styledTable}>
          <tbody>
            <tr className={styles.styledTr}>
              <th>日付</th>
              <th>内容</th>
              <th>金額</th>
              <th>_φ(･_･</th>
              <th>削除</th>
            </tr>
          </tbody>
          <tbody>
            {budget &&
              budget.length > 0 &&
              budget.slice(minValue, maxValue).map((t: moneyField) => {
                const CurrentMonth = t.day.toDate().getMonth() + 1;
                const CurrentDay = t.day.toDate().getDate();
                const Curentdate: string = `${CurrentMonth}月${CurrentDay}日`;
                return (
                  <tr key={t.description} className={styles.styledTable}>
                    <EditableFields
                      day={Curentdate}
                      id={t.id || "0"}
                      description={t.description}
                      money={t.money}
                      createdAt={t.createdAt}
                      type={t.type}
                      category={t.category}
                    />
                  </tr>
                );
              })}
          </tbody>
        </table>
        <Pegination onChange={handleChange} numEachPage={numEachPage} />
      </>
    </div>
  );
};
