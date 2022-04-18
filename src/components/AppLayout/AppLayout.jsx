import Head from "next/head";
import React, {Fragment} from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Box from "@mui/material/Box";
import DrawerBar from "../Header/DrawerBar";
import TopBar from "../Header/TopBar";


const AppLayout = ({children, title = "Askaraliev"}) => {
    return <Fragment>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 0.5fr)',
                    gap: 1,
                    gridTemplateRows: 'auto',
                    gridTemplateAreas: `"header header header header"
                                        "sidebar main main main"
                                        "footer footer footer footer"`,
                }}
            >
                <Box sx={{gridArea: 'header'}}><TopBar/></Box>
                <Box sx={{gridArea: 'sidebar', width: "20px"}}><DrawerBar/></Box>
                <Box sx={{gridArea: 'main'}}>{children}</Box>
                <Box sx={{gridArea: 'footer'}}><Footer/></Box>
            </Box>
        {/*<Head>*/}
        {/*    <title>{title}</title>*/}
        {/*    <meta charSet="utf-8"/>*/}
        {/*    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>*/}
        {/*</Head>*/}

        {/*<Header/>*/}

        {/*{children}*/}

        {/*<Footer/>*/}
    </Fragment>;
};

export default AppLayout;