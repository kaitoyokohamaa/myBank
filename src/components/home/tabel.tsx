import React, { FC, useState, useEffect } from "react";
import { EditableFields } from "./editableFields";
import { moneyField } from "./index";
import Pegination from "components/pagination";

export const Tabel: FC<firebase.firestore.DocumentData> = ({ budget }) => {
  const numEachPage = 4;
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(numEachPage);
  const [maxNum, setMaxNum] = useState<number>(0);
  useEffect(() => {
    if (budget) {
      setMaxNum(budget.length);
    }
  }, [budget]);

  const handleChange = (value: number) => {
    setMinValue((value - 1) * numEachPage);
    setMaxValue(value * numEachPage);
  };

  return (
    <div>
      <>
        <table className="border-collapse rounded-t-sm  table-auto w-10/12">
          <tbody>
            <tr className="w-full font-light text-white rounded-t-sm  bg-blue-5 whitespace-no-wrap border border-b-0">
              <th className="px-4 py-4">日付</th>
              <th className="px-4 py-4">内容</th>
              <th className="px-4 py-4">金額</th>
              <th className="px-4 py-4">_φ(･_･</th>
              <th className="px-4 py-4">削除</th>
            </tr>
          </tbody>
          <tbody className="border-collapse border border-blue-5">
            {budget &&
              budget.slice(minValue, maxValue).map((t: moneyField) => {
                const CurrentMonth = t.day.toDate().getMonth() + 1;
                const CurrentDay = t.day.toDate().getDate();
                const Curentdate: string = `${CurrentMonth}月${CurrentDay}日`;

                return (
                  <tr
                    className="w-full font-light text-gray-700 bg-white-100 whitespace-no-wrap border border-b-0"
                    key={t.id}
                  >
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
        <Pegination
          onChange={handleChange}
          numEachPage={numEachPage}
          maxNum={maxNum}
        />
      </>
    </div>
  );
};
