import React, { FC } from "react";

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
  id,
}) => {
  return (
    <>
      <TabelContentsDay day={day} id={id} />
      <TabelContentsDescription description={description} id={id} />
      <TabelContentsMoney money={money} id={id} />
      <TabelContentsCategory category={"極楽"} id={id} />
    </>
  );
};
