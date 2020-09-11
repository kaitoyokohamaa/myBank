import React, { useEffect, useState } from 'react'
import firebase from "firebase/app";
import Form from "./form";
type moneyField = {
  money: number;
  description: string;
  type: string;
  createdAt: firebase.firestore.FieldValue;
};
const Index: React.FC = () => {
  const [budget, setBudget] = useState<firebase.firestore.DocumentData>()
  const [storeCost, setStoreCost] = useState<firebase.firestore.DocumentData[]>()
  const [totalCost, setTotalCost] = useState<number>()
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
            let storeBudget: firebase.firestore.DocumentData[] = []
            let storeCost: number[] = []
            querySnapshot.forEach((docs) => {
              const showBudget = docs.data();
              storeBudget.push(showBudget)
              if (showBudget.type === "inc") {
                storeCost.push(showBudget.money)
                setStoreCost(storeBudget)
              }
            })
            //配列arrayのbegin番目からend番目の値を加算する

            const sumBetween = (arr: number[]) => {
              // 合計を格納する変数
              let sum = 0;
              // beginからendまで
              for (var i = 0, len = arr.length; i < len; ++i) {
                sum += arr[i];
              };
              // 結果を返却
              return sum;
            }
            const allMoney = sumBetween(storeCost)
            setTotalCost(allMoney)

            setBudget(storeBudget)
            console.log(storeCost)
          })
      }
    });
  }, [setBudget]);

  return (
    <React.Fragment>
      <React.Fragment>
        <div>
          <React.Fragment>
            <h2>今月の支出は{totalCost}円です</h2>
          </React.Fragment>
          <div>
            <h2>Income</h2>
            <span>
              +40000
           </span>
          </div>
          <div>
            <h2>Expenses</h2>
            <span>-20000</span>
          </div>
          <div>
            <Form
              sendMoney={(text: string, money: number) => {
                const sendMoney: moneyField = {
                  money: money,
                  description: text,
                  type: "inc",
                  createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                };
                firebase.firestore()
                  .collection("budget")
                  .add(sendMoney);
              }}
            />
          </div>
        </div>
      </React.Fragment>
      {budget !== undefined ? budget?.map((item: moneyField, index: number) => {
        return (
          <div key={index}>
            <p>{item.money}</p>
            <p >{item.description}</p>
          </div>
        )
      }) : <p>まだ何も登録されてませんわ</p>
      }
    </React.Fragment >
  )
}
export default Index;
