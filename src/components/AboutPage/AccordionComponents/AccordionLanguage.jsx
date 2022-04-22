import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CardLang = (props) => {
    return (
        <React.Fragment>
            <Card variant="outlined" sx={{borderColor: "#ffb74d", marginTop: 2}}>
                <CardContent>
                    <Typography sx={{fontSize: 14}} color="error" gutterBottom>
                        {props.lvl}
                    </Typography>
                    <Typography variant="h5" component="div" color="#ffb74d">
                        {props.lang}
                    </Typography>
                </CardContent>
            </Card>
        </React.Fragment>
    )
}

export default function AccordionLanguage() {
    return (
        <Box sx={{margin: 2}}>
            <CardLang lvl="C1 - Advanced" lang="English" />
            <CardLang lvl="Native" lang="Russian" />
            <CardLang lvl="Native" lang="Uzbek"  />
        </Box>
    );
}

