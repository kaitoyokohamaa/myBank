import React, { useState, useEffect } from "react";
import firebase from "../firebase";

export function useFunctions() {
  const [budget, setBudget] = useState<firebase.firestore.DocumentData>();
  const [income, setIncome] = useState<number>();
  const [expence, setExpence] = useState<number>();
  const [totalBudget, setTotalBudget] = useState<number>();
  const [currentUserId, setCurrentUserId] = useState<number | string>();
  const [bankID, setbankID] = useState<string>();
  const d = new Date();
  const month = d.getMonth() + 1;
  const ref = firebase.firestore().collection("User");

  const reducer = (sum: number, currentValue: number) => sum + currentValue;
  // 自分のユーザー登録をしているDocsの取得
  useEffect(() => {
    return firebase
      .auth()
      .onAuthStateChanged(async (usr: firebase.User | null) => {
        if (!usr) {
        } else {
          const myUid = usr.uid;
          setCurrentUserId(usr.uid);
          ref
            .where("userID", "array-contains", myUid)
            .onSnapshot((querySnapshot: firebase.firestore.QuerySnapshot) => {
              querySnapshot.forEach((bankFields) => {
                setbankID(bankFields.id);
              });
            });
        }
      });
  }, []);

  useEffect(() => {
    return firebase
      .auth()
      .onAuthStateChanged(async (usr: firebase.User | null) => {
        if (!usr) {
          alert("新規登録がされてません");
        } else {
          const myUid = usr.uid;
          setCurrentUserId(myUid);

          if (bankID) {
            ref
              .doc(bankID)
              .collection("bank")
              .orderBy("createdAt", "desc")
              .onSnapshot((querySnapshot: firebase.firestore.DocumentData) => {
                let storeBudget: firebase.firestore.DocumentData[] = [];
                let storeIncome: number[] = [];
                let storeExpence: number[] = [];
                querySnapshot.forEach(
                  (docs: firebase.firestore.DocumentData) => {
                    const showBudget = docs.data();
                    storeBudget.push(showBudget);

                    //収入の中身を足す
                    if (
                      showBudget.type === "inc" &&
                      showBudget.day.toDate().getMonth() + 1 === month
                    ) {
                      const incomeMoney: number = showBudget.money;
                      storeIncome.push(incomeMoney);
                      const sumMoney = storeIncome.reduce(reducer);
                      //足された収入の中身をstateで管理
                      setIncome(sumMoney);
                    }
                    //支出の中身を足す
                    else if (
                      showBudget.type === "exp" &&
                      showBudget.day.toDate().getMonth() + 1 === month
                    ) {
                      const expenceMoney: number = showBudget.money;
                      storeExpence.push(expenceMoney);
                      const decMoney = storeExpence.reduce(reducer);
                      //足された支出の中身をstateで管理
                      setExpence(decMoney);
                    }
                  }
                );

                setBudget(storeBudget);
              });
          }
        }
      });
  }, [bankID]);
  // 収入と支出を足す
  useEffect(() => {
    if (income && expence) {
      setTotalBudget(income - expence);
    }
  }, [income, expence]);

  return [
    {
      totalBudget,
      income,
      expence,
      budget,
      setBudget,
      setExpence,
      currentUserId,
    },
  ] as const;
}
