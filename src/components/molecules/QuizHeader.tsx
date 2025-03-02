import React from 'react';
import {Box} from "@mui/material";
import LightBulb from "../atoms/LightBulb";
import CountdownTimer from "../atoms/CountdownTimer";

function QuizHeader() {
    return (
        <Box
            sx={{
                width:'100%',
                top:5,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <CountdownTimer/>
            <LightBulb/>

        </Box>
    );
}

export default QuizHeader;