import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { Button } from '@chakra-ui/core'
export interface TagFormProps {
    sendMoney: (text: string, money: number) => void;
}
const Form: React.FC<TagFormProps> = ({ sendMoney }) => {
    const [text, setText] = useState<string>("");
    const [money, setMoney] = useState<number>();
    const submitMoney = (text: string, money: number) => {
        if (text.trim() !== "") {
            sendMoney(text, money);
            setText("");
            setMoney(0);
        } else {
            alert("本文が入力されてません");
        }
    };

    return (
        <div>
            <select>
                <option value="inc" >+</option>
                <option value="exp" >-</option>
            </select>
            <TextField type="text" placeholder="Add description" value={text} onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                setText(event.target.value);
            }} />
            <TextField type="number" placeholder="200" value={money} onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
                const moneyStore: number = Number(event.target.value)
                setMoney(moneyStore);
            }} />

            <Button
                onClick={() => money ? submitMoney(text, money) : null}
                color="primary" >登録</Button>
        </div>
    )
}
export default Form;