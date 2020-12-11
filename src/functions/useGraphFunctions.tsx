import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import { useFunctions } from "./useFunctions";
import { moneyField } from "../components/pages/Home";
export function useGraphFunctions() {
  const [useGraph] = useFunctions();
  const [expence, setExpence] = useState<moneyField[]>();
  const [months, setMonths] = useState<any[]>();
  const [january, setJanuary] = useState<number>();
  const [february, setFebruary] = useState<number>();
  const [march, setMarch] = useState<number>();
  const [april, setApril] = useState<number>();
  const [may, setMay] = useState<number>();
  const [june, setJune] = useState<number>();
  const [july, setJuly] = useState<number>();
  const [august, setAugust] = useState<number>();
  const [september, setSeptember] = useState<number>();
  const [october, setOctober] = useState<number>();
  const [november, setNovember] = useState<number>();
  const [december, setDecember] = useState<number>();
  let expenceArray: moneyField[] = [];
  let expenceMonths: any[] = [];
  let januaryList: number[] = [];
  let februaryList: number[] = [];
  let marchList: number[] = [];
  let aprilList: number[] = [];
  let mayList: number[] = [];
  let juneList: number[] = [];
  let julyList: number[] = [];
  let augustList: number[] = [];
  let septemberList: number[] = [];
  let octoberList: number[] = [];
  let novemberList: number[] = [];
  let decemberList: number[] = [];
  useEffect(() => {
    if (useGraph.budget) {
      useGraph.budget.map((Field: moneyField) => {
        Field.type === "exp" && expenceArray.push(Field);
      });

      setExpence(expenceArray);
      console.log(expence);
      expence?.map((Field: moneyField) =>
        expenceMonths.push({
          selectedMonth: Field.day.toDate().getMonth() + 1,
          Field,
        })
      );

      setMonths(expenceMonths);
    }
  }, [useGraph.budget, useGraph.totalBudget, useGraph.expence]);

  useEffect(() => {
    if (months) {
      months?.map(
        (e) => e.selectedMonth === 1 && januaryList.push(e.Field.money)
      );
      months?.map(
        (e) => e.selectedMonth === 2 && februaryList.push(e.Field.money)
      );
      months?.map(
        (e) => e.selectedMonth === 3 && marchList.push(e.Field.money)
      );
      months?.map(
        (e) => e.selectedMonth === 4 && aprilList.push(e.Field.money)
      );
      months?.map((e) => e.selectedMonth === 5 && mayList.push(e.Field.money));
      months?.map((e) => e.selectedMonth === 6 && juneList.push(e.Field.money));
      months?.map((e) => e.selectedMonth === 7 && julyList.push(e.Field.money));
      months?.map(
        (e) => e.selectedMonth === 8 && augustList.push(e.Field.money)
      );
      months?.map(
        (e) => e.selectedMonth === 9 && septemberList.push(e.Field.money)
      );
      months?.map(
        (e) => e.selectedMonth === 10 && octoberList.push(e.Field.money)
      );
      months?.map(
        (e) => e.selectedMonth === 11 && novemberList.push(e.Field.money)
      );
      months?.map(
        (e) => e.selectedMonth === 12 && decemberList.push(e.Field.money)
      );
    }

    const reducer = (sum: number, currentValue: number) => sum + currentValue;
    if (januaryList.length) {
      setJanuary(januaryList.reduce(reducer));
    }
    if (februaryList.length) {
      setFebruary(februaryList.reduce(reducer));
    }
    if (marchList.length) {
      setMarch(marchList.reduce(reducer));
    }
    if (aprilList.length) {
      setApril(aprilList.reduce(reducer));
    }
    if (mayList.length) {
      setMay(mayList.reduce(reducer));
    }
    if (juneList.length) {
      setJune(juneList.reduce(reducer));
    }
    if (julyList.length) {
      setJuly(julyList.reduce(reducer));
    }
    if (augustList.length) {
      setAugust(augustList.reduce(reducer));
    }
    if (septemberList.length) {
      setSeptember(septemberList.reduce(reducer));
    }
    if (octoberList.length) {
      setOctober(octoberList.reduce(reducer));
    }
    if (novemberList.length) {
      setNovember(novemberList.reduce(reducer));
    }
    if (decemberList.length) {
      setDecember(decemberList.reduce(reducer));
    }
  });
  return [
    {
      january,
      february,
      march,
      april,
      may,
      june,
      july,
      august,
      september,
      october,
      november,
      december,
    },
  ] as const;
}
