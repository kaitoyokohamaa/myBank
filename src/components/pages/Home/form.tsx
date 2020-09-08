import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
export default function form() {
    return (
        <div>
            <select>
                <option value="inc" selected>+</option>
                <option value="exp" >-</option>
            </select>
            <TextField type="text" placeholder="Add description" />
            <TextField type="number" placeholder="value" />
            <Button variant="contained"
                color="primary" >登録</Button>
        </div>
    )
}
