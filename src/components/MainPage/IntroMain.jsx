import {TextLoop} from "react-text-loop-next";
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {useEffect, useState} from "react";

const Item = styled(Paper)(({theme}) => ({
    position: "fixed",
    top: "250px",
    background: "transparent",
    // backgroundColor: "transparent",
    padding: theme.spacing(1),
    textAlign: 'center',
    color: "#ffb74d",
    fontSize: "30px"
}));

const loopArr = [
    "React Developer",
    "NextJS",
    "JS Developer",
];

const Typewriter = styled("div")(({theme}) => ({

        position: "fixed",
        top: "250px",
        background: "transparent",
        // backgroundColor: "transparent",
        padding: theme.spacing(1),
        textAlign: 'center',
        color: "#ffb74d",
        fontSize: "30px",
        "h1": {
            border: 5,
            borderColor: "#ffb74d",
        },

        "h2": {
            color: "#ffb74d",
            // fontFamily: "monospace",
            overflow: "hidden",
            border: 5,
            borderColor: "#ffb74d",
            whiteSpace: "nowrap",
            // letterSpacing: "0.15em",
            animation: `typing 3.5s steps(30, end), blink-caret 0.5s step-end infinite`
        },
        // "@keyframes typing": {
        //     "from": {
        //         width: 0
        //     },
        //     "to": {
        //         width: "100%"
        //     }
        // },
        // "@keyframes blink-caret": {
        //     "from": {},
        //     "to": {
        //         borderColor: "transparent"
        //     },
        //     "50%": {
        //         borderColor: "orange"
        //     }
        // }

    }))
;

const IntroMain = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalDelayMilliseconds = loopArr[index].length * 900;
        const interval = setInterval(() => {
            setIndex((prevIndex) => {
                // reset index if current index is greater than array size
                return prevIndex + 1 < loopArr.length ? prevIndex + 1 : 0;
            });
        }, intervalDelayMilliseconds);

        return () => clearInterval(interval);
    });

    return (
        <Box sx={{maxWidth: 400}}>
            <Typewriter>
                <h1>Hi, I’m Fazliddin</h1>
                <h2 key={loopArr[index]}>{loopArr[index]}</h2>
            </Typewriter>
        </Box>
    )
};

export default IntroMain;

// <h1>Hi, I’m Fazliddin</h1>
// <TextLoop>
//     <span> React Developer</span>
//     <span> NextJS </span>
//     <span> JS Developer</span>
// </TextLoop>{" "}