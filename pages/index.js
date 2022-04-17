import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import {Fragment} from "react";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@emotion/react";
import Content from "../src/components/Main/Content";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});

const Home = () => {
    return (
        <Fragment>
            <ThemeProvider theme={darkTheme}>
                <Header/>
                <Container>
                    <Content/>
                </Container>
                <Footer/>
            </ThemeProvider>

        </Fragment>
    )
};

export default Home;


