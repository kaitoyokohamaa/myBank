import React, { useState } from 'react'
import Calendar from 'react-calendar';
const Carendar: React.FC = () => {
    const [date, setDate] = useState(new Date());
    //こちらのライブラリーはTypeScript非対応のため泣く泣くany...
    const onChange = (date: any) => {
        const detailDate = date
        setDate(detailDate)
    }
    return (
        <div>
            <Calendar
                onChange={onChange}
                value={date}
            />
        </div>
    )
}

export default Carendar