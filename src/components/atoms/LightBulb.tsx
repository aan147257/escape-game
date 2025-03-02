import React from 'react';
import {IconButton} from "@mui/material";
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';

function LightBulb() {
    return (
        <IconButton
            sx={{
                color: "#0bfbfa",
            }}
        >
            <EmojiObjectsOutlinedIcon sx={{ fontSize: "3rem" }} />
        </IconButton>

    );
}

export default LightBulb;