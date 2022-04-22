import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import Box from "@mui/material/Box";

export default function AccordionCertificates() {
    return (
        <Box sx={{display: "flex", justifyContent: "space-evenly"}}>
            <Card variant="outlined" sx={{borderColor: "#ffb74d", width: "50%", margin: 2, mt: 5}}>
                <CardMedia
                    component="img"
                    height="140"
                    image="/assets/images/about/ielts.png"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="#ffb74d">
                        IELTS
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{
                        fontSize: 16,
                        "span": {
                            color: "red"
                        }
                    }}>
                        Test Date: <span>19/03/2022</span>
                        <br/>
                        Test Number: <span>21UZ024557ASKF004</span>
                        <br/>
                        Overall: <span>7.0</span>
                    </Typography>
                </CardContent>
            </Card>
            <Card variant="outlined" sx={{borderColor: "#ffb74d", width: "50%", margin: 2, mt: 5}}>
                <CardMedia
                    component="img"
                    height="140"
                    image="/assets/images/about/proweb.png"
                    alt="green iguana"
                />
                <CardContent sx={{width: "140"}}>
                    <Typography gutterBottom variant="h5" component="div" color="#ffb74d">
                        ProWeb
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{
                        fontSize: 16,
                        "span": {
                            color: "red"
                        }
                    }}>
                        Received: <span>07/2021</span>
                    </Typography>
                </CardContent>
            </Card>
        </Box>

    )
        ;
}
