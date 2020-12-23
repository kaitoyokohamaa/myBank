import React, { FC } from "react";

import { moneyField } from "./index";
import TabelContentsDay from "./tabelContentsDay";
import TabelContentsDescription from "./tabelContentsDescription";
import TabelContentsMoney from "./tabelContentsMoney";
import TabelContentsCategory from "./tabelContentsCategory";
import TabelContentsDelte from "./tabelContentsDelete";
export const EditableFields: FC<moneyField> = ({
  day,
  description,
  money,
  category,
  id,
}) => {
  return (
    <>
      <TabelContentsDay day={day} id={id} />
      <TabelContentsDescription description={description} id={id} />
      <TabelContentsMoney money={money} id={id} />
      <TabelContentsCategory
        category={category ? category : "未記入"}
        id={id}
      />
      <TabelContentsDelte id={id} />
    </>
  );
};
