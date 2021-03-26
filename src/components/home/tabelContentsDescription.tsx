import React, { useState, useEffect } from "react";
import { EditOutlined } from "@ant-design/icons";

import { useGetUid } from "hooks/useGetUid";
import firebase from "firebase/app";
import { TextInput } from "components/input";
import "firebase/firestore";
import { TableButton } from "components/Button";
export default function TabelContentsArea(props: {
  description: string;
  id: string;
}) {
  const [isEditing, setIsEditing] = useState<boolean>(true);
  const [isHover, setIsHover] = useState<boolean>(false);
  const [getBankID, setGetBankID] = useState<string>();
  const [getUserFiledsID, setGetUserFiledsID] = useState<string>();
  const [changedDescription, setChangedDescription] = useState<string>(
    props.description
  );
  const [functions] = useGetUid();
  const currentUserId = functions.currentUserId;
  const ref = firebase.firestore().collection("User");
  // ユーザー情報が自分かを確認する
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
    // アップデート開始
    ref
      .doc(getBankID)
      .collection("bank")
      .doc(getUserFiledsID)
      .update({ description: changedDescription });
    setIsHover(false);
    // 保存完了
    setTimeout(() => {
      setIsEditing(true);
    }, 1000);
  };

  return isEditing ? (
    <>
      <th
        className="w-40  p-4 "
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {props.description}

        {isHover && <EditOutlined onClick={() => setIsEditing(false)} />}
      </th>
    </>
  ) : (
    <th className="w-full p-4 flex">
      <TextInput
        onChange={(e) => setChangedDescription(e.target.value)}
        value={changedDescription}
      />
      <TableButton onClick={handleClick} />
    </th>
  );
}
