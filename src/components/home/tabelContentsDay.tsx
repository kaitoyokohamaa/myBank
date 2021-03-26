import React, { useState, useEffect } from "react";
import { EditOutlined } from "@ant-design/icons";

import { useGetUid } from "hooks/useGetUid";
import firebase from "firebase/app";
import "firebase/firestore";
import DatePicker from "react-datepicker";
import { TableButton } from "components/Button";
export default function TabelContentsArea(props: { day: string; id: string }) {
  const [isEditing, setIsEditing] = useState<boolean>(true);
  const [isHover, setIsHover] = useState<boolean>(false);
  const [getBankID, setGetBankID] = useState<string>();
  const [changedDay, setChangedDay] = useState<Date>();
  const [getUserFiledsID, setGetUserFiledsID] = useState<string>();
  const [functions] = useGetUid();
  const currentUserId = functions.currentUserId;
  const ref = firebase.firestore().collection("User");

  const dateChange = (date: Date) => {
    const detailDate = date;
    setChangedDay(detailDate);
  };

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
    ref
      .doc(getBankID)
      .collection("bank")
      .doc(getUserFiledsID)
      .update({ day: changedDay });
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
        {props.day}
        {isHover && <EditOutlined onClick={() => setIsEditing(false)} />}
      </th>
    </>
  ) : (
    <th className="w-full p-4 flex">
      <DatePicker
        className="w-20 mr-1 rounded-lg border-2 border-blue-5 outline-none focus:border-blue-5"
        required
        onChange={dateChange}
      />
      <TableButton onClick={handleClick} />
    </th>
  );
}
