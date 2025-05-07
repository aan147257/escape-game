import { Box } from "@mui/material";
import CountdownTimer from "../atoms/CountdownTimer";
import LanguageDropdown from "./LanguageDropdown";

function QuizHeader() {

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
            <CountdownTimer/>
            <LanguageDropdown/>

        </Box>
    );
}

export default QuizHeader;
