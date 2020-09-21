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
    // リリース後に対応
    // const date = props.day
    // const month = date.getMonth() + 1
    // const currentDay = date.getDate()
    return (
        <React.Fragment>
            <Card className="cardWidth">
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        {props.item}
                    </Typography>
                    <Typography color="textPrimary" variant="body2" component="h2">
                        {props.money}
                    </Typography>
                    <Typography color="textSecondary" variant="body2" component="span">

                    </Typography>
                </CardContent>
            </Card>
        </React.Fragment >
    )
}
