import React, { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import firebase from "firebase/app";
export default function index() {
  // const [budget, setBudget] = useState("")
  useEffect(() => {
    return firebase.auth().onAuthStateChanged((usr: firebase.User | null) => {
      if (!usr) {
        alert("新規登録をしてください");
      } else {
        const sampleBudget = await firebase
          .firestore()
          .collection("budget")
          .doc("ZMXc0Q992PhPIiUvZnAD")
          .get();

        const showBudget = sampleBudget.data();

        console.log(showBudget)
      }
    });
  });

  return (
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
        <select>
          <option value="inc" selected>+</option>
          <option value="exp" >-</option>
        </select>
        <TextField type="text" placeholder="Add description" />
        <TextField type="number" placeholder="value" />
        <Button variant="contained"
          color="primary" >登録</Button>
      </div>
    </div>

  )
}
