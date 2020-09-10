import React from 'react'
import { Formik, Form, Field } from 'formik';
import { FormControl, FormLabel } from '@chakra-ui/core';

import styles from "./Filed.module.css"
type propsFiled = {
    name: string, placeholder: string, type: string
}
export default function index(props: propsFiled) {
    const { name, placeholder, type } = props
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            onSubmit={fields => {
                console.log(fields)
            }}
        >
            {({ }) => (
                <Form className={styles.formWrap}>
                    <FormControl className={styles.form}>
                        <FormLabel htmlFor={name}>{name}</FormLabel>
                        <Field name={name} type={type} className={styles.formimput} />
                    </FormControl>
                </Form>
            )
            }
        </ Formik>
    )
}
