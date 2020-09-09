import React from 'react'
import { Field } from 'formik';
import styles from "./Filed.module.css"
type propsFiled = {
    children: string,
    className: string
}
export default function index(props: propsFiled) {
    const { children, className } = props
    return (
        <div>
            <Field name={children} type={children} className={className} />
        </div>
    )
}
