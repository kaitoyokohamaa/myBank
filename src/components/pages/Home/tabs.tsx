import React from "react";
import Card from "./card";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import { moneyField } from "./index";
import styles from "./tabs.module.css";

export default function tab(props: firebase.firestore.DocumentData) {
  let expeneMoneyFields: moneyField[] = [];
  let incomeMoneyFields: moneyField[] = [];
  props.budget?.map((item: moneyField) => {
    item.type === "inc"
      ? incomeMoneyFields.push(item)
      : expeneMoneyFields.push(item);
  });
  return (
    <div className={styles.card}>
      <Tabs>
        <TabList className={styles.List}>
          <Tab className={styles.tab}>収入</Tab>
          <Tab className={styles.tab}>支出</Tab>
        </TabList>
        <TabPanel>
          {incomeMoneyFields.map((item, index) => (
            <Card
              key={index}
              className="incColor"
              item={item.description}
              money={item.money}
              day={item.day}
            />
          ))}
        </TabPanel>
        <TabPanel>
          {expeneMoneyFields.map((item, index) => (
            <Card
              key={index}
              className="incColor"
              item={item.description}
              money={item.money}
              day={item.day}
            />
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
}
