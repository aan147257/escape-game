import {Box, TextField, Button} from "@mui/material";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import QuizHeader from "../molecules/QuizHeader";
import "./Quiz7Page.css";

function Quiz7Page() {
    const [classes, setClasses] = useState("");
    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        // Erlaubt nur Zahlen (0-9) und Buchstaben -> ignoriert alles andere
        if (/^[a-zA-Z0-9]*$/.test(value)) {
            setClasses(value);
        }
    };

    const isCorrect = classes.toUpperCase() === "I4C"; // Hier den Namen seiner Klasse anpassen

    return (
        <Box className="quiz7-page">
            <QuizHeader dialogPopupContent={"🎂"}/>
            <h1 className="title">In welcher Klasse war er?</h1>

            <Box sx={{display: "flex", justifyContent: "center", marginBottom: "30px"}}>
                <TextField
                    value={classes}
                    onChange={handleChange}
                    variant="outlined"
                    type="text"
                    inputMode="numeric"
                    sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        border: "2px solid #00E5FF",
                        borderRadius: "8px",
                        textAlign: "center",
                        input: {
                            textAlign: "center",
                            color: "#FFFFFF",
                            fontSize: "28px",
                            fontFamily: "'Orbitron', sans-serif",
                        },
                        width: "120px",
                        padding: "12px",
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            border: "2px solid #00E5FF",
                        },
                        "& .MuiInputBase-input": {
                            textShadow: "0 0 8px rgba(0, 229, 255, 0.8)",
                        },
                    }}
                />
            </Box>

            <Button
                onClick={() => navigate("/8")}
                disabled={!isCorrect}
                className="submit-button"
                sx={{
                    position: "absolute",
                    bottom: "20px",
                    right: "20px",
                    backgroundColor: isCorrect ? "#00E5FF" : "#333",
                    color: isCorrect ? "black" : "lightgray",
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: "18px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    padding: "12px 24px",
                    borderRadius: "50px",
                    boxShadow: "0px 4px 8px rgba(0, 229, 255, 0.6)",
                    border: "2px solid #00E5FF",
                    "&:hover": {
                        backgroundColor: isCorrect ? "#00B8D4" : "#444",
                        boxShadow: isCorrect ? "0 0 12px rgba(0, 229, 255, 0.8)" : "none",
                    },
                    transition: "background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
                    "&:active": {
                        transform: "scale(0.95)",
                    }
                }}
            >
                Submit
            </Button>
        </Box>
    );
}

export default Quiz7Page;