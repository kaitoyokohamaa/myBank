import React from 'react'
import Coment from "../../atoms/Coment"
import styles from "./footer.module.css";

export default function index() {
    return (
        <footer className={styles.foot}>
            <div className={styles.imgArea}>
                <a
                    className={styles.link}
                    href=" https://docs.google.com/forms/u/0/d/e/1FAIpQLSfdMK4UtMRH6L8Fiz7m1xbU4pfaRBxOc3LAn5qkrj3jDYKO4A/formResponse?pli=1"
                >
                    <Coment>
                        誰か僕を雇ってください
                </Coment>
                </a>
            </div>
        </footer >
    )
}
