import React, { useState, FC, useEffect } from "react";
import { v1 as uuidv1 } from "uuid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./form.module.css";
import firebase from "../../../firebase";
import { moneyField } from "./index";

import { Modal, Button } from "antd";
import { useFunctions } from "../../../functions/useFunctions";
export const IncomeForm: FC = ({}) => {
  const [text, setText] = useState<string>("");
  const [type, setType] = useState<string>("inc");
  const [money, setMoney] = useState<number>(0);
  const [date, setDate] = useState(new Date());
  const [getBankID, setGetBankID] = useState<string>();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [functionContents] = useFunctions();
  const currentUserId = functionContents.currentUserId;
  const ref = firebase.firestore().collection("User");

  useEffect(() => {
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
        id: uuidv1(),
        category: "",
      };
      if (getBankID) {
        ref.doc(getBankID).collection("bank").add(sendMoney);
        setText("");
        setMoney(0);
        setOpen(false);
      }
    } else {
      alert("本文が入力されてません");
    }
  };

  const month = date.getMonth() + 1;
  const currentDay = date.getDate();
  return (
    <div>
      <Button onClick={handleOpen}>収入追加</Button>
      <Modal
        visible={open}
        onCancel={handleClose}
        footer={[
          <Button key="submit" type="default" onClick={submitHandler}>
            投稿する
          </Button>,
        ]}
      >
        <div className={styles.modalFormArea}>
          <div>
            <span className={styles.coment}>Day</span>
            <DatePicker onChange={dateChange} className={styles.calendar} />
            {month}月{currentDay}日
          </div>
          <div className={styles.flex}>
            <div>
              <select
                value={type}
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                  setType(event.target.value);
                }}
              >
                <option value="inc">+</option>
              </select>
            </div>
            <div>
              <input
                className={styles.styledInput}
                type="text"
                placeholder="Add description"
                value={text}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setText(event.target.value);
                }}
              />
              <input
                className={styles.styledInput}
                type="number"
                placeholder="200"
                value={money}
                onChange={(
                  event: React.ChangeEvent<
                    HTMLTextAreaElement | HTMLInputElement
                  >
                ) => {
                  const moneyStore: number = Number(event.target.value);
                  setMoney(moneyStore);
                }}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
