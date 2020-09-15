import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import "./card.css";
type cardField = {
    item: string;
    money: number;
    className: string;
    day: Date
};
export default function card(props: cardField) {

    const date = props.day.toDate()
    return (
        <React.Fragment>
            <Card className="cardWidth">
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        {props.item}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {props.money}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {date.getDate()}
                    </Typography>
                </CardContent>
            </Card>
        </React.Fragment >
    )
}
