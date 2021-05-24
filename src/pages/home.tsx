import React, { FC, Fragment } from "react";
import { Form } from "components/home/form";
import { Sideber } from "components/sidebar";
import { Tabel } from "components/home/tabel";
import { useFunctions } from "hooks/useFunctions";
import Graph from "components/graph";
import firebase from "firebase/app";
import { Typography } from "antd";
import "firebase/firestore";

import { Meta } from "components/meta";
export interface moneyField {
  money: number;
  description: string;
  type: string;
  createdAt: firebase.firestore.FieldValue;
  day: any;
  id: string;
  category: string;
}

const Home: FC = () => {
  const [functionsHome] = useFunctions();
  const { Title } = Typography;
  const title = "ホーム";

  const url = `https://ogp-kaitoyokohamaa.vercel.app/${title}.png`;
  return (
    <Fragment>
      <Meta title={title} image={encodeURI(url)} />
      <div className="grid grid-cols-10 gap-2 h-screen">
        <div className="col-span-2">
          <Sideber />
        </div>
        <div className="col-span-8 ml-20 mt-32">
          <Title>
            <span className="text-center">HOME</span>
          </Title>
          <Graph />
          <div className="ml-10 mt-10">
            <Form />
            <Tabel budget={functionsHome.budget} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
