import React, { useState, FC } from "react";

import { moneyField } from "./index";
import TabelContentsDay from "./tabelContentsDay";
import TabelContentsDescription from "./tabelContentsDescription";
import TabelContentsMoney from "./tabelContentsMoney";
import TabelContentsCategory from "./tabelContentsCategory";
export const EditableFields: FC<moneyField> = ({
  day,
  description,
  money,
  createdAt,
}) => {
  return (
    <>
      <TabelContentsDay day={day} createdAt={createdAt} />
      <TabelContentsDescription
        description={description}
        createdAt={createdAt}
      />
      <TabelContentsMoney money={money} createdAt={createdAt} />
      <TabelContentsCategory category={"極楽"} createdAt={createdAt} />
    </>
  );
};
