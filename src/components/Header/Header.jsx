import * as React from 'react';
import TopBar from "./TopBar";
import DrawerBar from "./DrawerBar";
import {Container} from "@mui/material";
import {Fragment} from "react";


const Header = () => {
    return (
        <Fragment>
            <TopBar/>
            <DrawerBar/>
        </Fragment>
    )
};

export default Header;