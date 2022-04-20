import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import GitHubIcon from '@mui/icons-material/GitHub';
import {FaBootstrap, FaCss3Alt, FaDatabase, FaHtml5, FaReact, FaSass} from 'react-icons/fa';
import {SiJavascript, SiNextdotjs, SiRedux, SiTypescript} from "react-icons/si";


const steps = [
    {
        label: 'HTML/CSS',
        position: "0px"
    },
    {
        label: 'SASS',
        position: "100px"
    },
    {
        label: 'JAVASCRIPT',
        position: "0px"
    },
    {
        label: 'REACT',
        position: "110px"
    },
    {
        label: 'REDUX',
        position: "0px"
    },
    {
        label: 'MySQL, MONGO',
        position: "170px"
    },
    {
        label: 'NEXT JS',
        position: "0px"
    },
    {
        label: 'TYPESCRIPT',
        position: "150px"
    }
];
const CustomStepIcon = (props) => {

    const stepIcons = {
        1: <FaHtml5 color="#ffb74d" size="30"/>,
        2: <FaSass color="#ffb74d" size="30"/>,
        3: <SiJavascript color="#ffb74d" size="30"/>,
        4: <FaReact color="#ffb74d" size="30"/>,
        5: <SiRedux color="#ffb74d" size="30"/>,
        6: <FaDatabase color="#ffb74d" size="30"/>,
        7: <SiNextdotjs color="#ffb74d" size="30"/>,
        8: <SiTypescript color="#ffb74d" size="30"/>,
    };

    return (
        <div>
            {stepIcons[String(props.icon)]}
        </div>
    );
};

const StepperMain = () => {
    return (
        <Box sx={{
            maxWidth: 500, marginRight: "120px",
        }}>
            <Typography variant="h5" component="h2" color="#ffb74d" sx={{
                mt: 3,
                position: "relative",
                right: "50px"
            }}>
                My RoadMap
            </Typography>;
            <Stepper orientation="vertical">
                {steps.map((step) => (
                    <Step key={step.label} active={true}>
                        <StepLabel StepIconComponent={CustomStepIcon} sx={{
                            ".MuiStepLabel-labelContainer": {

                                position: "relative",
                                right: `${step.position}`,
                                ".MuiStepLabel-label": {
                                    fontSize: 15,
                                }
                            }
                        }}>
                            {step.label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>)
};

export default StepperMain;