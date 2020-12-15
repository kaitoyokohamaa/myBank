import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import styles from "./tabel.module.css";
export default function TabelContentsArea(props: {
  description: string;
  createdAt: firebase.firestore.FieldValue;
}) {
  const [isEditing, setIsEditing] = useState<boolean>(true);
  const [isHover, setIsHover] = useState<boolean>(false);
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
              fontSize: "14px",
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
      <input className={styles.styledInput} />
      <button
        className={styles.styledButton}
        onClick={() => setIsEditing(true)}
      >
        保存
      </button>
    </th>
  );
}
