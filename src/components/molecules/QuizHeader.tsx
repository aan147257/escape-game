import React, { useState } from "react";
import { Box } from "@mui/material";
import LightBulb from "../atoms/LightBulb";
import CountdownTimer from "../atoms/CountdownTimer";
import ClueDialog from "../atoms/ClueDialog";

interface QuizHeaderProps {
    dialogPopupContent: string;
}

function QuizHeader({ dialogPopupContent }: Readonly<QuizHeaderProps>) {
    const [open, setOpen] = useState(false);

    const handleOpenCluePopup = () => {
        setOpen(true);
    };

    const handleCloseCluePopup = () => {
        setOpen(false);
    };

    return (
        <Box
            sx={{
                width: "100%",
                top: 5,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <CountdownTimer />
            <LightBulb openCluePopup={handleOpenCluePopup} />

            <ClueDialog open={open} handleClose={handleCloseCluePopup} dialogPopupContent={dialogPopupContent} />
        </Box>
    );
}

export default QuizHeader;
