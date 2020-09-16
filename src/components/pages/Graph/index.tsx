import React, { useState, useEffect } from 'react'
import { ComposedChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Bar } from "recharts"
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer"
import firebase from "firebase/app";

export default function Graph() {
    const [income, setIncome] = useState<number>()
    const [expence, setExpence] = useState<number>()
    const [totalBudget, setTotalBudget] = useState<number>()
    const thisMonth = new Date();
    useEffect(() => {
        return firebase.auth().onAuthStateChanged(async (usr: firebase.User | null) => {
            if (!usr) {
                alert("新規登録をしてください"); alert("新規登録をしてください"); alert("新規登録しないなんて"); alert("あなた馬鹿ですね！！");
            } else {
                firebase
                    .firestore()
                    .collection("budget")
                    .orderBy("createdAt", "desc")
                    .get()
                    .then((querySnapshot: firebase.firestore.QuerySnapshot) => {
                        let storeIncome: number[] = []
                        let storeExpence: number[] = []
                        querySnapshot.forEach((docs) => {
                            const showBudget = docs.data();
                            if (showBudget.type === "inc") {
                                const incomeMoney: number = showBudget.money
                                storeIncome.push(incomeMoney)
                                const sumBetween = (arr: number[]) => {
                                    let sum = 0;
                                    for (var i = 0, len = arr.length; i < len; ++i) {
                                        sum += arr[i];
                                    };
                                    return sum;
                                }
                                const sumMoney = sumBetween(storeIncome)
                                setIncome(sumMoney)
                            } else if (showBudget.type === "exp") {
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
                                setExpence(decMoney)
                            }
                        })
                    })
            }
        });
    }, [setExpence]);
    useEffect(() => {
        if (income && expence) {
            setTotalBudget(income - expence)
            console.log(income, expence)
        }
    }, [income, expence])
    console.log(totalBudget)
    const dataGraph = [
        { month: '1月', "支出": 0, '残金': 0 },
        { month: '2月', '支出': 0, '残金': 0 },
        { month: '3月', '支出': 0, '残金': 0 },
        { month: '4月', '支出': 0, '残金': 0 },
        { month: '5月', '支出': 0, '残金': 0 },
        { month: '6月', '支出': 0, '残金': 0 },
        { month: '7月', '支出': 0, '残金': 0 },
        { month: '8月', '支出': 0, '残金': 0 },
        { month: '9月', '支出': expence, '残金': totalBudget },
        { month: '10月', '支出': 0, '残金': 0 },
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

