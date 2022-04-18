import ContentCanvas from "./Particles";
import {Container, CssBaseline, Grid} from "@mui/material";
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';
import {Fragment} from "react";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: "#ffb74d",
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Content = () => {
    return (
        <Fragment>
            <CssBaseline/>
            <Container sx={{
                // maxWidth: "45rem",
                width: "100%",
                height: "100%",
                margin: "auto",
                // marginTop: "-10rem",
                position: "relative",
                backgroundColor: "#383838",
                color: "white",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 1px 18px 10px rgba(0, 0, 0, 0.25)"
            }}>
                <h1>BODY</h1>
                {/*<Grid container spacing={2}>*/}
                {/*    <Grid item xs={6} md={4}>*/}
                {/*        <Item>xs=6 md=4</Item>*/}
                {/*    </Grid>*/}
                {/*    <Grid item xs={6} md={8}>*/}
                {/*        <Item>xs=6 md=8</Item>*/}
                {/*    </Grid>*/}
                {/*</Grid>*/}
            </Container>
        </Fragment>

    )
};

export default Content;