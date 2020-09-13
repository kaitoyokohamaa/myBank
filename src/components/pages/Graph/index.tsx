import React from 'react'
import { ComposedChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Area, Bar } from "recharts"
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer"
import styles from "./graph.module.css"
export default function graph() {
    const dataGraph = [
        { month: '1月', "支出": 800, '残金': 1400 },
        { month: '2月', '支出': 967, '残金': 1506 },
        { month: '3月', '支出': 1098, '残金': 989 },
        { month: '4月', '支出': 1200, '残金': 1228 },
        { month: '5月', '支出': 1108, '残金': 1100 },
        { month: '6月', '支出': 680, '残金': 2700 },
        { month: '7月', '支出': 680, '残金': 1700 },
        { month: '8月', '支出': 680, '残金': 3700 },
        { month: '9月', '支出': 2680, '残金': 3300 },
        { month: '10月', '支出': 680, '残金': 1700 },
        { month: '11月', '支出': 680, '残金': 1700 },
        { month: '12月', '支出': 680, '残金': 1700 }
    ];
    return (
        <div>
            <Header />
            <ComposedChart //グラフ全体のサイズや位置、データを指定。場合によってmarginで上下左右の位置を指定する必要あり。
                width={800}  //グラフ全体の幅を指定
                height={280}  //グラフ全体の高さを指定
                data={dataGraph} //ここにArray型のデータを指定
                margin={{ top: 20, right: 60, bottom: 0, left: 0 }}  //marginを指定
            >
                <XAxis
                    dataKey="month"  //Array型のデータの、X軸に表示したい値のキーを指定
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid //グラフのグリッドを指定
                    stroke="gray" //グリッド線の色を指定
                />
                <Area //面積を表すグラフ
                    type="monotone"  //グラフが曲線を描くように指定。default値は折れ線グラフ
                    dataKey="残金" //Array型のデータの、Y軸に表示したい値のキーを指定
                    stroke="gray" ////グラフの線の色を指定
                    fillOpacity={1}  ////グラフの中身の薄さを指定
                    fill="gray"  //グラフの色を指定
                />
                <Bar //棒グラフ
                    dataKey="支出"　//Array型のデータの、Y軸に表示したい値のキーを指定
                    barSize={20}  //棒の太さを指定
                    stroke="gray" ////レーダーの線の色を指定 
                    fillOpacity={1}  //レーダーの中身の色の薄さを指定
                    fill="pink" ////レーダーの中身の色を指定
                />
            </ComposedChart>
            <Footer />
        </div>
    )
}

