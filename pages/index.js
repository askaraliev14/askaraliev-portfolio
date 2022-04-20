import * as React from 'react';
import MainPage from "../src/components/MainPage/MainPage";
import AppLayout from "../src/components/AppLayout/AppLayout";
import {TextLoop} from "react-text-loop-next";


const Home = () => {
    return (
        <AppLayout>
            <MainPage/>
        </AppLayout>
    )
};

export default Home;


