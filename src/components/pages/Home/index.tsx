import React, { useEffect, useState } from 'react'
import firebase from "firebase/app";
import Form from "./form";
type moneyField = {
  money: number;
  description: String;
  type: String;
  createdAt: firebase.firestore.FieldValue;
};
const Index: React.FC = () => {
  const [budget, setBudget] = useState<firebase.firestore.DocumentData>()
  useEffect(() => {
    return firebase.auth().onAuthStateChanged(async (usr: firebase.User | null) => {
      if (!usr) {
        alert("新規登録をしてください");
      } else {
        firebase
          .firestore()
          .collection("budget")
          .get()
          .then((querySnapshot: firebase.firestore.QuerySnapshot) => {
            let storeBudget: firebase.firestore.DocumentData[] = []
            querySnapshot.forEach((docs) => {
              const showBudget = docs.data();
              storeBudget.push(showBudget)
            })
            setBudget(storeBudget)
          })
      }
    });
  }, [setBudget]);

  return (
    <React.Fragment>
      <React.Fragment>
        <div>
          <React.Fragment>
            <h2>total:40000</h2>
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
            <Form />
          </div>
        </div>
      </React.Fragment>
      {
        budget?.map((item: moneyField, index: number) => {
          return (
            <div key={index}>
              <p>{item.money}</p>
              <p >{item.description}</p>
            </div>
          )
        })
      }
    </React.Fragment >
  )
}
export default Index;
