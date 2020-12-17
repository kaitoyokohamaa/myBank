import React, { useState, FC, useEffect } from "react";
import { v1 as uuidv1 } from "uuid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./form.module.css";
import firebase from "../../../firebase";
import { moneyField } from "./index";
import Modal from "@material-ui/core/Modal";
import { useFunctions } from "../../../functions/useFunctions";
export const Form: FC = ({}) => {
  const [text, setText] = useState<string>("");
  const [type, setType] = useState<string>("exp");
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
      <button className={styles.styledBtn} type="button" onClick={handleOpen}>
        Add Money
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={styles.modalFormArea}>
          <h1 className={styles.modalFormH1}>Let's Add Money</h1>
          <div>
            <span className={styles.coment}>Day</span>
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
              event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
            ) => {
              const moneyStore: number = Number(event.target.value);
              setMoney(moneyStore);
            }}
          />

          <button className={styles.styledBtn} onClick={submitHandler}>
            Save
          </button>
        </div>
      </Modal>
    </div>
  );
};
