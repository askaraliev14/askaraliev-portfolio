import {TextLoop} from "react-text-loop-next";
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({theme}) => ({
    position: "fixed",
    top: "250px",
    background: "transparent",
    // backgroundColor: "transparent",
    padding: theme.spacing(1),
    textAlign: 'center',
    color: "#ffb74d",
    fontSize: "30px"
}));

const IntroMain = () => {
    return(
        <Box sx={{ maxWidth: 400 }}>
            <Item>
                <h1>Hi, I’m Fazliddin</h1>
                <TextLoop>
                    <span> React Developer</span>
                    <span> NextJS </span>
                    <span> JS Developer</span>
                </TextLoop>{" "}
            </Item>
        </Box>
    )
};

export default IntroMain;
