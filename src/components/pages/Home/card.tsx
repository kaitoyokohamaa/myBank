import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
type cardField = {
    item: string;
    money: number;
};
export default function card(props: cardField) {
    return (
        <React.Fragment>
            <Card >
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        {props.item}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {props.money}
                    </Typography>
                </CardContent>
            </Card>
        </React.Fragment>
    )
}
