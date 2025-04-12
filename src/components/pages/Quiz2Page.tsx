import React, {useState} from 'react';
import {Box, Button} from "@mui/material";
import QuizHeader from "../molecules/QuizHeader";
import {useNavigate} from "react-router-dom";
import "./Quiz2Page.css";

function Quiz2() {
    const [inputValue, setInputValue] = useState<number>(0);
    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);
        if (!isNaN(value)) {
            setInputValue(value);
        }
    };

    const isCorrect = inputValue === 21;

    return (
        <Box className="quiz2-page">
            <QuizHeader dialogPopupContent={"🌈"}/>

            <Box
                sx={{
                    marginBottom: "40px",
                }}
            >
                <input
                    type="number"
                    min="0"
                    max="25"
                    step="1"
                    value={inputValue}
                    onChange={handleChange}
                    onKeyDown={(e) => e.preventDefault()} // Tastatur-Eingabe blockieren
                    style={{
                        fontSize: "28px",
                        padding: "14px 24px",
                        borderRadius: "10px",
                        border: "2px solid #00E5FF",
                        backgroundColor: "black",
                        color: "#00E5FF",
                        textAlign: "center",
                        appearance: "none",
                        WebkitAppearance: "none",
                        MozAppearance: "textfield",
                        boxShadow: "0 0 12px #00E5FF",
                        outline: "none",
                        marginTop: "22%",
                    }}
                />
            </Box>

            <Button
                onClick={() => {
                    if (isCorrect) navigate("/3");
                }}
                className="submit-button"
                sx={{
                    position: "absolute",
                    bottom: "20px",
                    right: "20px",
                    backgroundColor: "#00E5FF",
                    color: "black",
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: "18px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    padding: "12px 24px",
                    borderRadius: "50px",
                    boxShadow: "0px 4px 8px rgba(0, 229, 255, 0.6)",
                    border: "2px solid #00E5FF", // Neon-Linie für Tron
                    "&:hover": {
                        backgroundColor: "#00B8D4",
                        boxShadow: "0 0 12px rgba(0, 229, 255, 0.8)",
                    },
                    transition: "background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
                    "&:active": {
                        transform: "scale(0.95)", // Leichter Klick-Effekt
                    }
                }}
            >
                Submit
            </Button>
        </Box>
    );
}

export default Quiz2;
