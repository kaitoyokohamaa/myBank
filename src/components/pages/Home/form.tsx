import React, { useState, FC, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@chakra-ui/core";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./calendar.module.css";
import firebase from "../../../firebase";
import { moneyField } from "./index";

import { useFunctions } from "../../../functions/useFunctions";
const Form: FC = () => {
  const [text, setText] = useState<string>("");
  const [type, setType] = useState<string>("inc");
  const [money, setMoney] = useState<number>(0);
  const [date, setDate] = useState(new Date());
  const [getBankID, setGetBankID] = useState<string>();

  const [functionContents] = useFunctions();
  const currentUserId = functionContents.currentUserId;
  const ref = firebase.firestore().collection("User");
  useEffect(() => {
    console.log(currentUserId);
    ref.onSnapshot((usersDocs) => {
      usersDocs.forEach((contens) => {
        if (contens.data().userID[0].includes(currentUserId)) {
          const bankID = contens.id;
          setGetBankID(bankID);
        }
      });
    });
  }, [currentUserId]);

  const dateChange = (date: Date) => {
    const detailDate = date;
    setDate(detailDate);
  };

  const submitHandler = () => {
    if (text.trim() !== "") {
      const sendMoney: moneyField = {
        money,
        description: text,
        type,
        createdAt: firebase.firestore.Timestamp.now(),
        day: date,
      };
      if (getBankID) {
        ref.doc(getBankID).collection("bank").add(sendMoney);
        setText("");
        setMoney(0);
      }
    } else {
      alert("本文が入力されてません");
    }
  };

  const month = date.getMonth() + 1;
  const currentDay = date.getDate();
  return (
    <div>
      <div>
        <span className={styles.coment}>日付</span>
        <DatePicker onChange={dateChange} className={styles.calendar} />
        {month}月{currentDay}日
      </div>
      <select
        value={type}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
          setType(event.target.value);
        }}
      >
        <option value="exp">-</option>
        <option value="inc">+</option>
      </select>
      <TextField
        type="text"
        placeholder="Add description"
        value={text}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
          setText(event.target.value);
        }}
      />
      <TextField
        type="number"
        placeholder="200"
        value={money}
        onChange={(
          event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => {
          const moneyStore: number = Number(event.target.value);
          setMoney(moneyStore);
        }}
      />

      <Button onClick={submitHandler} color="primary">
        登録
      </Button>
    </div>
  );
};
export default Form;
