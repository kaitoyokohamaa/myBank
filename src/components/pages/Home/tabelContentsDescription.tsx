import React, { useState, useEffect } from "react";
import EditIcon from "@material-ui/icons/Edit";
import styles from "./tabel.module.css";
import { useFunctions } from "../../../functions/useFunctions";
import firebase from "../../../firebase";
export default function TabelContentsArea(props: {
  description: string;
  id: string;
}) {
  const [isEditing, setIsEditing] = useState<boolean>(true);
  const [isHover, setIsHover] = useState<boolean>(false);
  const [getBankID, setGetBankID] = useState<string>();
  const [changedDescription, setChangedDescription] = useState<string>(
    props.description
  );
  const [functions] = useFunctions();
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
  const handleClick = () => {
    ref
      .doc(getBankID)
      .collection("bank")
      .onSnapshot((userDocs: firebase.firestore.DocumentData) => {
        userDocs.forEach((userContents: firebase.firestore.DocumentData) => {
          if (userContents.data().id === props.id) {
            ref
              .doc(getBankID)
              .collection("bank")
              .doc(userContents.id)
              .update({ description: changedDescription });
          }
          setTimeout(() => {
            setIsEditing(true);
          }, 1000);
        });
      });
  };
  return isEditing ? (
    <>
      <th
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {props.description}

        {isHover && (
          <EditIcon
            style={{
              fontSize: "12px",
              paddingLeft: "10px",
            }}
            type="edit"
            onClick={() => setIsEditing(false)}
          />
        )}
      </th>
    </>
  ) : (
    <th>
      <input
        autoFocus
        onChange={(e) => setChangedDescription(e.target.value)}
        value={changedDescription}
        className={styles.styledInput}
      />
      <button className={styles.styledButton} onClick={handleClick}>
        保存
      </button>
    </th>
  );
}
