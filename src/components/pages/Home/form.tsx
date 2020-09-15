import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { Button } from '@chakra-ui/core'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./calendar.module.css"
export interface TagFormProps {
    sendMoney: (text: string, money: number, type: string, date: Date) => void;

}
const Form: React.FC<TagFormProps> = ({ sendMoney }) => {
    const [text, setText] = useState<string>("");
    const [type, setType] = useState<string>("inc");
    const [money, setMoney] = useState<number>();
    const [date, setDate] = useState(new Date());
    const dateChange = (date: Date) => {
        const detailDate = date
        setDate(detailDate)
    }
    const submitMoney = (text: string, money: number, type: string, date: Date) => {
        if (text.trim() !== "") {
            sendMoney(text, money, type, date);
            setText("");
            setMoney(0);
        } else {
            alert("本文が入力されてません");
        }
    };
    const month = date.getMonth() + 1
    const currentDay = date.getDate()
    return (
        <div>
            <div>
                <span className={styles.coment}>日付</span>
                <DatePicker
                    onChange={dateChange}
                    className={styles.calendar}
                />
                {month}月{currentDay}日
            </div>
            <select value={type}
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                    setType(event.target.value);
                }}>
                <option value="inc">+</option>
                <option value="exp">-</option>
            </select>
            <TextField type="text" placeholder="Add description" value={text} onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                setText(event.target.value);
            }} />
            <TextField type="number" placeholder="200" value={money} onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
                const moneyStore: number = Number(event.target.value)
                setMoney(moneyStore);
            }} />

            <Button
                onClick={() => money ? submitMoney(text, money, type, date) : null}
                color="primary" >登録</Button>
        </div>
    )
}
export default Form;