import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { Button } from '@chakra-ui/core'
export interface TagFormProps {
    sendMoney: (text: string, money: number, type: string) => void;
}
const Form: React.FC<TagFormProps> = ({ sendMoney }) => {
    const [text, setText] = useState<string>("");
    const [type, setType] = useState<string>("inc");
    const [money, setMoney] = useState<number>();
    const submitMoney = (text: string, money: number, type: string) => {
        if (text.trim() !== "") {
            sendMoney(text, money, type);
            setText("");
            setMoney(0);
        } else {
            alert("本文が入力されてません");
        }
    };

    return (
        <div>
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
                onClick={() => money ? submitMoney(text, money, type) : null}
                color="primary" >登録</Button>
        </div>
    )
}
export default Form;