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
          Field: Field,
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
    if (decemberList.length) {
      setDecember(decemberList.reduce(reducer));
    }
  });

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
