import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import {Fragment} from "react";
import Header from "../src/components/Header/Header";

const Home = () => {
    return (
        <Fragment>
            <CssBaseline/>
            <Container fixed>
                <Header/>
            </Container>
        </Fragment>
    )
};

export default Home;


