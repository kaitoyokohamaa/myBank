import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./calendar.module.css"
const CalendarForm: React.FC = () => {
    const [date, setDate] = useState(new Date());
    const dateChange = (date: Date) => {
        const detailDate = date
        setDate(detailDate)
    }
    return (
        <div>
            <span className={styles.coment}>日付</span>
            <DatePicker
                onChange={dateChange}
                className={styles.calendar}
            />
        </div>
    )
}

export default CalendarForm