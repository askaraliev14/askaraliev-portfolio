import {Fragment} from "react";
import Box from "@mui/material/Box";
import StepperMain from "./StepperMain";
import IntroMain from "./IntroMain";
import ContentCanvas from "./ContentCanvas";

const MainPage = () => {
    return (
        <Fragment>
            <ContentCanvas/>
                <Box sx={{
                    marginLeft: "240px",
                    height: "100%",
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                    <IntroMain/>
                    <StepperMain/>
                </Box>
        </Fragment>
    )
};

export default MainPage;