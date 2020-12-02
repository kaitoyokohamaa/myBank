import React, { useState, useEffect } from "react";
import firebase from "../firebase";
export function useFunctions() {
  const [budget, setBudget] = useState<firebase.firestore.DocumentData>();
  const [income, setIncome] = useState<number>();
  const [expence, setExpence] = useState<number>();
  const [totalBudget, setTotalBudget] = useState<number>();
  useEffect(() => {
    return firebase
      .auth()
      .onAuthStateChanged(async (usr: firebase.User | null) => {
        if (!usr) {
          alert("新規登録をしてください");
        } else {
          firebase
            .firestore()
            .collection("budget")
            .orderBy("createdAt", "desc")
            .onSnapshot((querySnapshot: firebase.firestore.QuerySnapshot) => {
              let storeBudget: firebase.firestore.DocumentData[] = [];
              let storeIncome: number[] = [];
              let storeExpence: number[] = [];
              querySnapshot.forEach(
                async (docs: firebase.firestore.DocumentData) => {
                  const showBudget = docs.data();
                  storeBudget.push(showBudget);
                  //収入の中身を足す
                  if (showBudget.type === "inc") {
                    const incomeMoney: number = await showBudget.money;
                    storeIncome.push(incomeMoney);
                    const reducer = (sum: number, currentValue: number) =>
                      sum + currentValue;
                    const sumMoney = storeIncome.reduce(reducer);
                    //足された収入の中身をstateで管理
                    setIncome(sumMoney);
                  }
                  //支出の中身を足す
                  else if (showBudget.type === "exp") {
                    const expenceMoney: number = showBudget.money;
                    storeExpence.push(expenceMoney);
                    const reducer = (sum: number, currentValue: number) =>
                      sum + currentValue;
                    const decMoney = storeExpence.reduce(reducer);
                    //足された支出の中身をstateで管理
                    setExpence(decMoney);
                  }
                }
              );

              setBudget(storeBudget);
            });
        }
      });
  }, [setExpence, setIncome]);
  // 収入と支出を足す
  useEffect(() => {
    if (income && expence) {
      setTotalBudget(income - expence);
    }
  }, [income, expence]);

  return [
    { totalBudget, income, expence, budget, setBudget, setExpence },
  ] as const;
}
