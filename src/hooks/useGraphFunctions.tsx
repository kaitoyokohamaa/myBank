import React, { useState, useEffect } from "react";

import { useFunctions } from "./useFunctions";
import { moneyField } from "components/home";
export function useGraphFunctions() {
  const [useGraph] = useFunctions();
  const [monthyData, setMonthyData] = useState<number[]>([
    ...Array(12).map(() => 0),
  ]);
  const [expence, setExpence] = useState<moneyField[]>();
  const [months, setMonths] = useState<any[]>();

  let expenceArray: moneyField[] = [];
  let expenceMonths: any[] = [];

  useEffect(() => {
    // expenceの中身を配列の中に保管する
    if (useGraph.budget) {
      useGraph.budget.map((Field: moneyField) => {
        Field.type === "exp" && expenceArray.push(Field);
      });
      setExpence(expenceArray);
    }
  }, [useGraph.budget]);

  useEffect(() => {
    //その月の支出を追加する。
    if (expence) {
      expence.map((Field: moneyField) =>
        expenceMonths.push({
          selectedMonth: Field.day.toDate().getMonth() + 1,
          Field,
        })
      );
    }
    setMonths(expenceMonths);
  }, [expence]);

  useEffect(() => {
    if (months?.length) {
    }

    const reducer = (sum: number, currentValue: number) => sum + currentValue;
  }, [months]);
  return [{}] as const;
}
