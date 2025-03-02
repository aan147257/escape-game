import React from "react";
import { IconButton } from "@mui/material";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";

interface LightBulbProps {
    openCluePopup: () => void;
}

function LightBulb({ openCluePopup }: Readonly<LightBulbProps>) {
    return (
        <IconButton
            sx={{ color: "#0bfbfa" }}
            onClick={openCluePopup}
        >
            <EmojiObjectsOutlinedIcon sx={{ fontSize: "3rem" }} />
        </IconButton>
    );
}

export default LightBulb;
