import React from 'react';
import {Box} from "@mui/material";
import QuizHeader from "../molecules/QuizHeader";

function Quiz1() {
    return (
        <Box>
            <QuizHeader
                dialogPopupContent={
                    "Hier Kommt der Text für die Hinweise rein! Dieser Beispiel befindet sich im Quiz1.txt Page."
                }
            />
        </Box>
    );
}

export default Quiz1;