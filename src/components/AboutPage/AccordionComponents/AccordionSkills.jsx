import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Grid, LinearProgress, linearProgressClasses} from "@mui/material";
import styled from "@emotion/styled";
import {FaBootstrap, FaGitAlt, FaHtml5, FaReact, FaSass} from "react-icons/fa";
import {DiAptana, DiJavascript1} from "react-icons/di";
import {SiMaterialui, SiNextdotjs, SiRedux, SiTypescript} from "react-icons/si";
import {FiDatabase} from "react-icons/fi";

const SkillBar = (props) => {
    return (
        <>
            <Typography variant="body2" color="text.secondary" sx={{
                marginTop: 2,

                display: "flex",
                color: "white",
                "span": {
                    marginRight: "5px",
                    color: "#ffb74d",
                    fontSize: 20
                }
            }}>
                <span>{props.icon}</span>
                {props.name}
            </Typography>
            <Box sx={{display: 'flex', alignItems: 'center', }}>
                <Box sx={{width: '100%', mr: 1}}>
                    <LinearProgress variant="determinate" color={"warning"} {...props} sx={(theme) => ({
                        height: 10,
                        borderRadius: 5,
                        [`&.${linearProgressClasses.colorPrimary}`]: {
                            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
                        },
                    })}/>
                </Box>
                {/* <Box sx={{ minWidth: 35 }}> */}
                <Typography variant="body2" color="text.secondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
                {/* </Box> */}
            </Box>
        </>

    );
}

const SkillBox = styled("div")(({theme}) => ({
    width: "50%",
    // border: "2px solid",
    borderColor: "white",
    margin: "20px",
    display: "flex",
    flexDirection: "column"
}));
export default function AccordionSkills() {

    return (
        <Box
            sx={{
                display: "flex",
                '& > legend': {m: 2,},
                color: "white",
                background: "transparent"
            }}
        >
            <SkillBox>
                <SkillBar value={95} name={"HTML/CSS"} icon={<FaHtml5/>}/>
                <SkillBar value={80} name={"Bootstrap5"} icon={<FaBootstrap/>}/>
                <SkillBar value={90} name={"SASS"} icon={<FaSass/>}/>
                <SkillBar value={75} name={"MaterialUI"} icon={<SiMaterialui/>}/>
                <SkillBar value={75} name={"GIT"} icon={<FaGitAlt/>}/>
                <SkillBar value={70} name={"Javascript"} icon={<DiJavascript1/>}/>
            </SkillBox>
            <SkillBox>
                <SkillBar value={40} name={"Typescript"} icon={<SiTypescript/>}/>
                <SkillBar value={60} name={"MySQL/MongoDB"} icon={<FiDatabase/>}/>
                <SkillBar value={75} name={"React"} icon={<FaReact/>}/>
                <SkillBar value={60} name={"Redux/RTK"} icon={<SiRedux/>}/>
                <SkillBar value={65} name={"NextJS"} icon={<SiNextdotjs/>}/>
                <SkillBar value={65} name={"Rest API"} icon={<DiAptana/>}/>
            </SkillBox>

        </Box>
    );
}
