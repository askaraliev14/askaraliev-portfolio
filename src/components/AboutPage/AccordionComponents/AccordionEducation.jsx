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
            <Typography sx={{fontSize: 14}} color="error" gutterBottom>
                2018-2022
            </Typography>
            <Typography variant="h5" component="div" color="#ffb74d">
                Степень бакалавра
            </Typography>
            <Typography sx={{mb: 1.5}} color="text.secondary">
                Ташкентский университет информационных технологий
            </Typography>
            <Typography variant="body2">
                В настоящее время я учусь на последнем курсе Ташкентского университета информационных технологий по
                специальности «КИф». В предыдущие годы я сосредоточился на изучении языка программирования Javascript,
                так как это хорошая отправная точка для получения навыков ООП и программирования в целом. С тех пор я
                получил базовые навыки Frontend под руководством опытного веб-разработчика. В настоящее время я прохожу
                онлайн-курсы React Core на портале обучения ИТ-разработчиков Udemy
            </Typography>
        </CardContent>
    </React.Fragment>
);

export default function AccordionEducation() {
    return (
        <Box sx={{margin: 2}}>
            <Card variant="outlined" sx={{borderColor: "#ffb74d"}}>{card}</Card>
        </Box>
    );
}

