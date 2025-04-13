import { Box } from "@mui/material";
import CountdownTimer from "../atoms/CountdownTimer";

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

        </Box>
    );
}

export default QuizHeader;
