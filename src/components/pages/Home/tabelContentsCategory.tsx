import React, { useState, useEffect } from "react";
import { EditOutlined } from "@ant-design/icons";
import styles from "./tabel.module.css";
import firebase from "../../../firebase";
import { useGetUid } from "../../../functions/useGetUid";
export default function TabelContentsArea(props: {
  category: string;
  id: string;
}) {
  const [isEditing, setIsEditing] = useState<boolean>(true);
  const [isHover, setIsHover] = useState<boolean>(false);
  const [getBankID, setGetBankID] = useState<string>();
  const [getUserFiledsID, setGetUserFiledsID] = useState<string>();
  const [changedCategory, setChangedCategory] = useState<string>(
    props.category
  );
  const [functions] = useGetUid();
  const currentUserId = functions.currentUserId;
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
      .update({ category: changedCategory });
    setIsHover(false);
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
        {props.category}

        {isHover && <EditOutlined onClick={() => setIsEditing(false)} />}
      </th>
    </>
  ) : (
    <th>
      <input
        required
        autoFocus
        onChange={(e) => setChangedCategory(e.target.value)}
        value={changedCategory}
        className={styles.styledInput}
      />
      <button className={styles.styledButton} onClick={handleClick}>
        保存
      </button>
    </th>
  );
}
