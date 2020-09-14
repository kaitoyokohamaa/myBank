import React from 'react'
import styles from "./coment.module.css"

type Props = {
    children?: React.ReactNode,
};
export default function coment(props: Props) {
    const { children } = props
    return (
        <div className={styles.coment}>
            <p>{children}</p>
        </div>
    )
}
