import React, { useState, useEffect } from "react";
import { EditOutlined } from "@ant-design/icons";
import styles from "./tabel.module.css";
import { useGetUid } from "../../../functions/useGetUid";
import firebase from "../../../firebase";
export default function TabelContentsArea(props: {
  money: number;
  id: string;
}) {
  const [isEditing, setIsEditing] = useState<boolean>(true);
  const [isHover, setIsHover] = useState<boolean>(false);
  const [getBankID, setGetBankID] = useState<string>();
  const [changedMoney, setChangedMoney] = useState<number>(props.money);
  const [getUserFiledsID, setGetUserFiledsID] = useState<string>();
  const [functions] = useGetUid();
  const currentUserId = functions.currentUserId;
  const ref = firebase.firestore().collection("User");
  useEffect(() => {
    let useBankID: string;
    ref.onSnapshot((usersDocs) => {
      usersDocs.forEach((contens) => {
        if (contens.data().userID[0].includes(currentUserId)) {
          const bankID = contens.id;
          useBankID = contens.id;
          setGetBankID(bankID);
        }
      });
    });
  }, [currentUserId]);

  // 自分がアップデートしたい箇所IDを取得する
  useEffect(() => {
    if (getBankID) {
      ref
        .doc(getBankID)
        .collection("bank")
        .onSnapshot(async (userDocs: firebase.firestore.DocumentData) => {
          await userDocs.forEach(
            (userContents: firebase.firestore.DocumentData) => {
              if (userContents.data().id === props.id) {
                setGetUserFiledsID(userContents.id);
              }
            }
          );
        });
    }
  }, [getBankID]);

  const handleClick = () => {
    ref
      .doc(getBankID)
      .collection("bank")
      .doc(getUserFiledsID)
      .update({ money: changedMoney });

    setTimeout(() => {
      setIsEditing(true);
    }, 1000);
  };

  return isEditing ? (
    <>
      <th
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {props.money}

        {isHover && <EditOutlined onClick={() => setIsEditing(false)} />}
      </th>
    </>
  ) : (
    <th>
      <input
        autoFocus
        type="number"
        onChange={(e) => setChangedMoney(Number(e.target.value))}
        value={changedMoney}
        className={styles.styledInput}
      />
      <button className={styles.styledButton} onClick={handleClick}>
        保存
      </button>
    </th>
  );
}
