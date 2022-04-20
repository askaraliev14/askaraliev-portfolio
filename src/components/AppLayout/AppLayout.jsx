import Head from "next/head";
import React, {Fragment} from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {ThemeProvider} from "@emotion/react";
import {createTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";

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
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(5)',
                    gap: 0,
                    gridTemplateRows: 'auto',
                    gridTemplateAreas: `"header header header header header"
                                        "main main main main main"
                                        "footer footer footer footer footer"`,
                }}
            >
                <Box sx={{gridArea: 'header'}}><Header/></Box>
                <Box sx={{gridArea: 'main', background: "black", height: "90vh"}}>{children}</Box>
                <Box sx={{gridArea: 'footer'}}><Footer/></Box>
            </Box>
        </ThemeProvider>
    </Fragment>;
};

export default AppLayout;