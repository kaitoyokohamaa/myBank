import React, { FC, Fragment } from "react";

import { Form } from "../pages/Home/form";

import Header from "components/organisms/Header";
import { Tabel } from "../pages/Home/tabel";
import { useFunctions } from "functions/useFunctions";
import Graph from "../pages/Graph/";
import firebase from "config/firebase";
export interface moneyField {
  money: number;
  description: string;
  type: string;
  createdAt: firebase.firestore.FieldValue;
  day: any;
  id: string;
  category: string;
}

export const Home: FC = () => {
  const [functionsHome] = useFunctions();

  return (
    <Fragment>
      <Header />
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
    </Fragment>
  );
};
