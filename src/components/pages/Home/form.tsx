import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
export interface TagFormProps {
    sendMoney: (text: string, money: number) => void;
}
const Form: React.FC = ({ sendMoney }) => {
    const [text, setText] = useState("");
    const [money, setMoney] = useState("");
    const submitMoney = (text: string) => {
        if (text.trim() !== "") {
            sendMoney(text, money);
            setText("");
        } else {
            alert("入力しなさい);
        }
    };
    return (
        <div>
            <select>
                <option value="inc" >+</option>
                <option value="exp" >-</option>
            </select>
            <TextField type="text" placeholder="Add description" onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                setText(event.target.value);
            }} />
            <TextField type="number" placeholder="value" onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                setMoney(event.target.value);
            }} />
            <Button variant="contained"
                onClick={() => submitMoney(text)}
                color="primary" >登録</Button>
        </div>
    )
}
export default Form;