import React from "react";
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
import { useGraphFunctions } from "../../../functions/useGraphFunctions";
export default function Graph() {
  const [getExpenceMonth] = useGraphFunctions();
  const dataGraph = [
    { month: "1月", 支出: getExpenceMonth.january },
    { month: "2月", 支出: getExpenceMonth.february },
    { month: "3月", 支出: getExpenceMonth.march },
    { month: "4月", 支出: getExpenceMonth.april },
    { month: "5月", 支出: getExpenceMonth.may },
    { month: "6月", 支出: getExpenceMonth.june },
    { month: "7月", 支出: getExpenceMonth.july },
    { month: "8月", 支出: getExpenceMonth.august },
    { month: "9月", 支出: getExpenceMonth.september },
    { month: "10月", 支出: getExpenceMonth.october },
    { month: "11月", 支出: getExpenceMonth.november },
    { month: "12月", 支出: getExpenceMonth.december },
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
    </div>
  );
}
