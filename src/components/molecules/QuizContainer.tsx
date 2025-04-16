import { Box, Typography } from "@mui/material";
import QuizHeader from "../atoms/QuizHeader";
import { ReactNode } from "react";
import AtomicButton from "../atoms/AtomicButton";

interface QuizContainerProps {
    children: ReactNode;
    titleContent?: string;
    onClick?: () => void;
    disabled?: boolean;
}

const QuizContainer = ({ children, titleContent, onClick, disabled }: QuizContainerProps) => {
    return (
        <Box
            sx={{
                background: "linear-gradient(135deg, #111, #222)",
                width: "100vw",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between", // wichtig!
                alignItems: "center",
                padding: "2rem",
                boxSizing: "border-box",
            }}
        >
            <QuizHeader />

            <Box
                sx={{
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    flexGrow: 1,
                    width: "100%",
                    margin: "0 auto",
                    gap: "2rem",
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontSize: "3vw",
                        textTransform: "uppercase",
                        letterSpacing: "3px",
                        fontFamily: "'Orbitron', sans-serif",
                        color: "#00E5FF",
                        textShadow: "0 0 12px rgba(0, 229, 255, 0.8)",
                    }}
                >
                    {titleContent}
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    {children}
                </Box>
            </Box>

            <Box sx={{ mt: "2rem" }}>
                <AtomicButton onClick={onClick} disabled={disabled} content={"Submit"} />
            </Box>
        </Box>
    );
};


export default QuizContainer;
