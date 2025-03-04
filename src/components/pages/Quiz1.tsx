import React from 'react';
import {Box} from "@mui/material";
import QuizHeader from "../molecules/QuizHeader";
import ColorGrid from "../molecules/ColorGrid";

function Quiz1() {
    return (
        <Box>
            <QuizHeader
                dialogPopupContent={
                    "🌈"
                }
            />
            <ColorGrid/>
        </Box>
    );
}

export default Quiz1;