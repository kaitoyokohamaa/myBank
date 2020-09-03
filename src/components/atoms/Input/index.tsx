import React from 'react'
import "./input.css"
export default function Input(props: any) {
    const { size = "medium", ...rest } = props
    return (
        <input className={`Input ${size}`} {...rest} />
    )
}