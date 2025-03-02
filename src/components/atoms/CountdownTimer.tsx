import {Typography} from "@mui/material";
import React from "react";
import {useTimer} from "../../TimerContext";


function CountdownTimer() {
    const {  secondsLeft } = useTimer();
    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    };
    return(
        <>
            <Typography variant="h6" sx={{ color: "white" }}>
                {formatTime(secondsLeft)} verbleibend
            </Typography>
        </>

    )
}

export default CountdownTimer;