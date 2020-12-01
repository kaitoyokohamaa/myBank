import React, { useState, useEffect } from "react";
import {
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import { useFunctions } from "../../../functions/useFunctions";
import { moneyField } from "../Home";
export default function Graph() {
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
  useEffect(() => {
    if (useGraph.budget) {
      useGraph.budget.map((Field: moneyField) => {
        Field.type === "exp" && expenceArray.push(Field);
      });
      if (expenceArray.length) {
        setExpence(expenceArray);
      }
      expence?.map((Field: moneyField) =>
        expenceMonths.push({
          selectedMonth: Field.day.toDate().getMonth() + 1,
          Field: Field,
        })
      );
      if (expenceMonths.length) {
        setMonths(expenceMonths);
      }
      months?.map((e) => e.selectedMonth === 1 && setJanuary(e.Field.money));
      months?.map((e) => e.selectedMonth === 2 && setFebruary(e.Field.money));
      months?.map((e) => e.selectedMonth === 3 && setMarch(e.Field.money));
      months?.map((e) => e.selectedMonth === 4 && setApril(e.Field.money));
      months?.map((e) => e.selectedMonth === 5 && setMay(e.Field.money));
      months?.map((e) => e.selectedMonth === 6 && setJune(e.Field.money));
      months?.map((e) => e.selectedMonth === 7 && setJuly(e.Field.money));
      months?.map((e) => e.selectedMonth === 8 && setAugust(e.Field.money));
      months?.map((e) => e.selectedMonth === 9 && setSeptember(e.Field.money));
      months?.map((e) => e.selectedMonth === 10 && setOctober(e.Field.money));
      months?.map(
        (e) =>
          e.selectedMonth === 11 &&
          e.Field.day.toDate().getMonth() + 1 === e.selectedMonth &&
          setNovember(e.Field.money)
      );
      months?.map((e) => e.selectedMonth === 12 && setDecember(e.Field.money));
    }
  }, [useGraph.totalBudget]);
  console.log(november);
  const dataGraph = [
    { month: "1月", 支出: january },
    { month: "2月", 支出: february },
    { month: "3月", 支出: march },
    { month: "4月", 支出: april },
    { month: "5月", 支出: may },
    { month: "6月", 支出: june },
    { month: "7月", 支出: july },
    { month: "8月", 支出: august },
    { month: "9月", 支出: september },
    { month: "10月", 支出: october },
    { month: "11月", 支出: november },
    { month: "12月", 支出: december },
  ];
  return (
    <div>
      <Header />
      <ComposedChart
        width={800}
        height={280}
        data={dataGraph}
        margin={{ top: 20, right: 60, bottom: 0, left: 0 }}
      >
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="gray" />
        <Bar //棒グラフ
          dataKey="支出"
          barSize={20}
          stroke="gray"
          fillOpacity={1}
          fill="pink"
        />
      </ComposedChart>
      <Footer />
    </div>
  );
}
