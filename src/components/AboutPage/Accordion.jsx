import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import {useTheme} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AccordionSkills from "./AccordionComponents/AccordionSkills";
import {FaLanguage, FaUniversity} from "react-icons/fa";
import {GrCertificate} from "react-icons/gr";
import {GiBlackBook, GiSkills} from "react-icons/gi";
import AccordionEducation from "./AccordionComponents/AccordionEducation";
import AccordionLanguage from "./AccordionComponents/AccordionLanguage";
import AccordionCertificates from "./AccordionComponents/AccordionCertificates";
import AccordionInterest from "./AccordionComponents/AccordionInterest";
import {BsPersonFill} from "react-icons/bs";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{height: "100%", background: "black"}}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};


function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function Accordion() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <Box sx={{width: "100%", background: "transparent"}}>
            <AppBar position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab icon={<GiSkills/>} label="Навыки" {...a11yProps(0)} />
                    <Tab icon={<FaUniversity/>} label="Образование"  {...a11yProps(1)} />
                    <Tab icon={<FaLanguage/>} label="Языки" {...a11yProps(2)} />
                    <Tab icon={<BsPersonFill/>} label="О себе" {...a11yProps(3)} />
                    <Tab icon={<GrCertificate/>} sx={{
                        "svg": {
                            fill: "currentColor"
                            // color: "white"
                        }
                    }} label="Сертификаты" {...a11yProps(4)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <AccordionSkills/>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <AccordionEducation/>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <AccordionLanguage/>
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                    <AccordionInterest/>
                </TabPanel>
                <TabPanel value={value} index={4} dir={theme.direction}>
                    <AccordionCertificates/>
                </TabPanel>
            </SwipeableViews>
        </Box>
    );
}
