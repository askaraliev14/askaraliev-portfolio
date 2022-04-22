import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const card = (
    <React.Fragment>
        <CardContent>
            <Typography variant="h5" component="div" color="#ffb74d">
                О себе
            </Typography>
            <Typography variant="body2">
                Энтузиаст-разработчик, стремящийся внести свой вклад в успех команды благодаря усердной работе, вниманию
                к деталям и отличным организаторским способностям. Четкое понимание Front-end, Back-end и OOP и обучение
                разработке веб-приложений. Мотивирован учиться, расти и преуспевать как в карьере, так и в образовании.
            </Typography>
        </CardContent>
    </React.Fragment>
);

export default function AccordionInterest() {
    return (
        <Box sx={{margin: 2}}>
            <Card variant="outlined" sx={{borderColor: "#ffb74d"}}>{card}</Card>
        </Box>
    );
}

