import React from 'react';
import './UserPage.css';

import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';


const UserPage = ({ dish }) => {


    return (
        <>
            <Card className='card-container' >
                <CardContent>
                    <Typography variant="h4" component="h2">
                        {dish.name}
                    </Typography>
                    <Typography variant='h6' >
                        Protein: {dish.protein} g
                    </Typography>
                    <Typography variant="h6">
                        Carbs: {dish.carbs} g
                    </Typography>
                    <Typography variant="h6">
                        Fat: {dish.fat} g
                    </Typography>
                    <Typography variant="h6">
                        Calories: {dish.calories}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </>
    );
}

export default UserPage
