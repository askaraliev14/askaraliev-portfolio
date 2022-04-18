import * as React from 'react';
import TopBar from "./TopBar";
import {Fragment} from "react";
import DrawerBar from "./DrawerBar";
import {Container} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@emotion/react";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});

const Header = () => {
    return (
        <Fragment>
            <ThemeProvider theme={darkTheme}>
                <Container sx={{
                    position: "fixed",
                    top: 0,
                    width: "100%",
                    display: "flex",
                }}>

                    <TopBar/>
                    <DrawerBar/>
                </Container>
            </ThemeProvider>
        </Fragment>
    );
}

export default Header;