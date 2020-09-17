import React, { useState, useEffect } from 'react'
import { ComposedChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Bar } from "recharts"
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer"
import firebase from "firebase/app";

export default function Graph() {
    const [expence, setExpence] = useState<number>()
    // const [january, setJanuary] = useState<number>()
    // const [february, setFebruary] = useState<number>()
    // const [march, setMarch] = useState<number>()
    // const [april, setApril] = useState<number>()
    // const [may, setMay] = useState<number>()
    // const [june, setJune] = useState<number>()
    // const [july, setJuly] = useState<number>()
    // const [august, setAugust] = useState<number>()
    const [september, setSeptember] = useState<number>()
    const [october, setOctober] = useState<number>()
    // const [november, setNovember] = useState<number>()
    // const [december, setDecember] = useState<number>()
    const Month = new Date();
    const findMonth: number[] = []
    findMonth.push(Month.getMonth() + 1)
    useEffect(() => {
        return firebase.auth().onAuthStateChanged(async (usr: firebase.User | null) => {
            if (!usr) {
                alert("新規登録をしてください");
            } else {
                firebase
                    .firestore()
                    .collection("budget")
                    .orderBy("createdAt", "desc")
                    .get()
                    .then((querySnapshot: firebase.firestore.QuerySnapshot) => {
                        let storeExpence: number[] = []
                        querySnapshot.forEach((docs) => {
                            const showBudget = docs.data();
                            if (showBudget.type === "exp" && findMonth.includes(9)) {
                                const expenceMoney: number = showBudget.money
                                storeExpence.push(expenceMoney)
                                const decBetween = (arr: number[]) => {
                                    let sum = 0;
                                    for (var i = 0, len = arr.length; i < len; ++i) {
                                        sum += arr[i];
                                    };
                                    return sum;
                                }
                                const decMoney = decBetween(storeExpence)
                                setSeptember(decMoney)
                            } else if (showBudget.type === "exp" && findMonth.includes(10)) {
                                const expenceMoney: number = showBudget.money
                                storeExpence.push(expenceMoney)
                                const decBetween = (arr: number[]) => {
                                    let sum = 0;
                                    for (var i = 0, len = arr.length; i < len; ++i) {
                                        sum += arr[i];
                                    };
                                    return sum;
                                }
                                const decMoney = decBetween(storeExpence)
                                setOctober(decMoney)
                            }
                        })
                    })
            }
        });
    }, [setExpence]);


    const dataGraph = [
        { month: '1月', "支出": 0, '残金': 0 },
        { month: '2月', '支出': 0, '残金': 0 },
        { month: '3月', '支出': 0, '残金': 0 },
        { month: '4月', '支出': 0, '残金': 0 },
        { month: '5月', '支出': 0, '残金': 0 },
        { month: '6月', '支出': 0, '残金': 0 },
        { month: '7月', '支出': 0, '残金': 0 },
        { month: '8月', '支出': 0, '残金': 0 },
        { month: '9月', '支出': september },
        { month: '10月', '支出': october, },
        { month: '11月', '支出': 0, '残金': 0 },
        { month: '12月', '支出': 0, '残金': 0 }
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

