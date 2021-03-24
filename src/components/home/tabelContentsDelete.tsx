import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useGetUid } from "hooks/useGetUid";
import firebase from "firebase/app";
import "firebase/firestore";

const { confirm } = Modal;
export default function TabelContentsArea(props: { id: string }) {
  const [getBankID, setGetBankID] = useState<string>();

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
    confirm({
      title: "Do You Want to delete...?",

      onOk() {
        ref.doc(getBankID).collection("bank").doc(getUserFiledsID).delete();
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  return (
    <>
      <th>
        <DeleteOutlined onClick={handleClick} />
      </th>
    </>
  );
}
