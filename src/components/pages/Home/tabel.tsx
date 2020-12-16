import React, { FC } from "react";
import { EditableFields } from "./editableFields";
import { moneyField } from "./index";
import styles from "./tabel.module.css";

export const Tabel: FC<firebase.firestore.DocumentData> = ({ budget }) => {
  return (
    <div>
      <>
        <h1>Recent spending</h1>
        <table className={styles.styledTable}>
          <tbody>
            <tr className={styles.styledTr}>
              <th>date</th>
              <th>Contents</th>
              <th>Amount of money</th>
              <th>category</th>
            </tr>
          </tbody>
          <tbody>
            {budget?.map((t: moneyField) => {
              const CurrentMonth = t.day.toDate().getMonth() + 1;
              const CurrentDay = t.day.toDate().getDay() + 13;
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
                  />
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    </div>
  );
};
