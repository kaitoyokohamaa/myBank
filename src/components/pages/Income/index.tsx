import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";
import Header from "../../organisms/Header";
import Logo from "../../../Img/logo.png";
import styles from "./index.module.css";
import { Progress } from "antd";
import { v1 as uuidv1 } from "uuid";
import firebase from "../../../firebase";
import data from "./data.json";
import { moneyField } from "../Home/index";
import { useFunctions } from "../../../functions/useFunctions";
import debounce from "lodash/debounce";
const cx = require("classnames");

export default function Index() {
  const [text, setText] = useState<string>("");
  const [type, setType] = useState<string>("inc");
  const [money, setMoney] = useState<number>(0);
  const [date, setDate] = useState(new Date());
  const [getBankID, setGetBankID] = useState<string>();
  const [open, setOpen] = useState(false);
  const [attack, setAttack] = useState<boolean>(false);
  const [hp, setHp] = useState<number>(100);
  const [incantation, setIncantation] = useState<string>("");
  const [lv, setLv] = useState<number>(1);
  const [index, setIndex] = useState<number>(0);
  const [comment, setComment] = useState<string>(`${data[index].name}が現れた`);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [functionContents] = useFunctions();
  const currentUserId = functionContents.currentUserId;
  const totalBudget = functionContents.totalBudget;
  const ref = firebase.firestore().collection("User");
  // settimeoutをpromiseチェーンを使って管理
  const wait = (timeout: number) =>
    new Promise((resolve, reject) => setTimeout(resolve, timeout));
  // 敵の切り替え
  useEffect(() => {
    if (hp === 0 && data[index].name === "冴えないサラリーマン") {
      setIndex(index + 1);
      setHp(100);
      setComment("冴えないサラリーマンを倒した");
    } else if (hp === 0 && data[index].name === "バニーガールちゃん") {
      setIndex(index + 1);
      setHp(100);
      setComment("バニーガールちゃんを倒した");
    }
  }, [hp]);
  // 自分のIDを識別する
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
  // ダメージの計算を行う
  useEffect(() => {
    wait(500).then(() => {
      if (attack && incantation !== "") {
        setComment(incantation);
        setIncantation("");
      } else if (attack && incantation === "") {
        setComment("喰らえ!21歳拳パンチ");
      }
    });
    wait(1000)
      .then(() => {
        if (attack && incantation !== "") {
          const attakNum = hp - 10;
          setHp(attakNum);
          setComment(`10のダメージ`);
        } else if (attack && incantation === "") {
          const attakNum = hp - 5;
          setHp(attakNum);
          setComment(`5のダメージ`);
        }
      })
      .then(() => {
        wait(1000).then(() => {
          setAttack(false);
          setComment("どうする？");
        });
      });
  }, [attack]);
  // 収益を追加する
  const submitHandler = debounce(() => {
    if (text.trim() !== "") {
      const sendMoney: moneyField = {
        money,
        description: text,
        type,
        createdAt: firebase.firestore.Timestamp.now(),
        day: date,
        id: uuidv1(),
        category: "",
      };
      if (getBankID) {
        ref.doc(getBankID).collection("bank").add(sendMoney);
        setText("");
        setMoney(0);
        setOpen(false);
        setAttack(true);
      }
    } else {
      alert("本文が入力されてません");
    }
  }, 500);
  // 戦いのコマンドを押したら
  const fightHandler = debounce(() => {
    setAttack(true);
  }, 1000);

  return (
    <div className={styles.Wrapper}>
      <Header />
      <div className={styles.flex}>
        <div className={styles.incomeArea}>
          <div className={styles.status}>
            <ul className={styles.statusTtl}>
              <li className={styles.commendLi}>名前</li>
              <li className={styles.commendLi}>レベル</li>
              <li className={styles.commendLi}>体力(残高)</li>
            </ul>
            <ul className={styles.statusPlayer}>
              <li className={styles.commendLi}>かいかい</li>
              <li className={styles.commendLi}>{lv}</li>
              <li className={styles.commendLi}>
                {totalBudget ? totalBudget : 1}
              </li>
            </ul>
          </div>
          <div className={styles.enemy}>
            <h4 className={styles.name}>{data[index].name}</h4>
            <img
              className={cx(styles.enemyImg, attack && styles.enemyAtaack)}
              src={`/Img/${data[index].img}`}
            />
            <Progress
              style={{
                width: "50%",
              }}
              strokeColor={{
                "0%": "red",
                "100%": "pink",
              }}
              status="active"
              percent={hp}
            />
          </div>
          <div className={styles.flex}>
            <div className={styles.saveMoney}>
              <p className={styles.commendTtl}>かいかい</p>
              <ul className={styles.commend}>
                <li onClick={handleOpen}>▶︎呪文</li>
                <Modal
                  visible={open}
                  onCancel={handleClose}
                  footer={[
                    <Button
                      key="submit"
                      type="default"
                      onClick={() => {
                        setIncantation("エクスプロォォージョンッ！！");
                        submitHandler();
                      }}
                    >
                      エクスプロォォージョンッ！！
                    </Button>,
                    <Button
                      key="submit"
                      type="default"
                      onClick={() => {
                        setIncantation("ファイナルフラッシュ！！");
                        submitHandler();
                      }}
                    >
                      ファイナルフラッシュ！！
                    </Button>,
                    <Button
                      key="submit"
                      type="default"
                      onClick={() => {
                        setIncantation("滅びのバーストストリーム");
                        submitHandler();
                      }}
                    >
                      滅びのバーストストリーム！！
                    </Button>,
                    <Button
                      key="submit"
                      type="default"
                      onClick={() => {
                        setIncantation("秘技マジ卍");
                        submitHandler();
                      }}
                    >
                      秘技マジ卍卍卍アタック！！
                    </Button>,
                  ]}
                >
                  <div className={styles.modalIncomeFormArea}>
                    <div className={styles.flex}>
                      <div>
                        <input
                          className={styles.styledInput}
                          type="text"
                          placeholder="Add description"
                          value={text}
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            setText(event.target.value);
                          }}
                        />
                        <input
                          className={styles.styledInput}
                          type="number"
                          placeholder="200"
                          value={money}
                          onChange={(
                            event: React.ChangeEvent<
                              HTMLTextAreaElement | HTMLInputElement
                            >
                          ) => {
                            const moneyStore: number = Number(
                              event.target.value
                            );
                            setMoney(moneyStore);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </Modal>
                <li className={styles.commendLi} onClick={fightHandler}>
                  戦う
                </li>
                <li className={styles.commendLi} onClick={fightHandler}>
                  一撃
                </li>
                <li
                  className={styles.commendLi}
                  onClick={() => setComment("逃げちゃダメだ")}
                >
                  逃げる
                </li>
              </ul>
            </div>
            <div className={styles.message}>
              <p>{comment}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
