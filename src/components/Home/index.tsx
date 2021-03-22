import React, { FC } from "react";

import { Form } from "./form";

import { Sideber } from "components/sidebar";
import { Tabel } from "./tabel";
import { useFunctions } from "hooks/useFunctions";
import Graph from "components/Graph";
import firebase from "firebase/app";
import "firebase/firestore";
export interface moneyField {
  money: number;
  description: string;
  type: string;
  createdAt: firebase.firestore.FieldValue;
  day: any;
  id: string;
  category: string;
}

export const Homes: FC = () => {
  const [functionsHome] = useFunctions();

  return (
    <React.Fragment>
      <Sideber />
      <div>
        <div>
          <div>
            <Graph />
          </div>
        </div>
        {/* 画面半分の収入/支出のテーブルを作成 */}
        <div>
          <Form />
        </div>
        <Tabel budget={functionsHome.budget} />
      </div>
    </React.Fragment>
  );
};
