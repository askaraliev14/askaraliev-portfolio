import ContentCanvas from "./ContentCanvas";
import {Container, CssBaseline, Grid} from "@mui/material";
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';
import {Fragment} from "react";
import Box from "@mui/material/Box";
import {drawerWidth} from "../../data/data";
import MuiAppBar from "@mui/material/AppBar";
import { TextLoop } from "react-text-loop-next";

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

// const ContentContainer = styled(Container)(({theme}) => ({
//     // maxWidth: "100%!important",
//     // height: "100vh",
//     background: "black",
//     boxSizing: "border-box"
// }));



const MainPage = () => {
    return (
        <Fragment>
            {/*<ContentContainer>*/}
                <ContentCanvas/>
                <Box sx={{
                    marginLeft: "240px",
                    height: "100%",
                    display: "flex",
                }}>
                    <Item>
                        <h1>Hi, I’m Fazliddin</h1>
                            <TextLoop>
                                <span> React Developer</span>
                                <span> NextJS </span>
                                <span> JS Developer</span>
                            </TextLoop>{" "}
                    </Item>
                </Box>

            {/*</ContentContainer>*/}
        </Fragment>

    )
};

export default MainPage;