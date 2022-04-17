import Head from "next/head";
import React, {Fragment, useCallback, useState} from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {ThemeProvider} from "@emotion/react";
import {createTheme} from "@mui/material/styles";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});

const AppLayout = ({children, title = "Askaraliev"}) => {
    return <Fragment>
        <ThemeProvider theme={darkTheme}>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <Header/>
            {children}
            <Footer/>
        </ThemeProvider>
    </Fragment>;
};

export default AppLayout;