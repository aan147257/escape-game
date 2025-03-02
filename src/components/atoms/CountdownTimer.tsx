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
        <Typography
            variant="h6"
            sx={{
                color: "#0bfbfa",
                textShadow: `
                          0 0 5px #0bfbfa,
                        0 0 10px rgba(11, 251, 250, 0.6),
                        0 0 15px rgba(11, 251, 250, 0.4)
                `
            }}
        >
            {formatTime(secondsLeft)} verbleibend
        </Typography>

    )
}

export default CountdownTimer;