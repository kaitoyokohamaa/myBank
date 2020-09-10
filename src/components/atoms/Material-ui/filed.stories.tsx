import TextField from '@material-ui/core/TextField';
import React from 'react'
export default {
    title: 'Material-ui/filed',
    component: TextField
}

export const Description = () => (
    <TextField type="text" placeholder="Add description" />
)
export const Money = () => (
    <TextField type="number" placeholder="200" />
)