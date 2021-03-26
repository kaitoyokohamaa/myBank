import React, { useState, useEffect } from "react";
import { EditOutlined } from "@ant-design/icons";

import firebase from "lib/firebase";
import { useGetUid } from "hooks/useGetUid";
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
        className="w-60  p-4 "
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
        className="w-20 mr-1 rounded-lg border-2 border-blue-5 outline-none focus:border-blue-5"
        required
        autoFocus
        onChange={(e) => setChangedCategory(e.target.value)}
        value={changedCategory}
      />
      <button
        className="border-blue-5 bg-blue-5  rounded-lg px-2 "
        onClick={handleClick}
      >
        <span className="text-purple-50">保存</span>
      </button>
    </th>
  );
}
