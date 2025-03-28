import {Box, TextField, Button} from "@mui/material";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import QuizHeader from "../molecules/QuizHeader";
import "./Quiz4Page.css";

function Quiz4Page() {
    const [inputs, setInputs] = useState(["", "", "", "", ""]);
    const navigate = useNavigate();

    const handleChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        // Erlaubt nur Buchstaben (A-Z, a-z) und ignoriert alles andere
        if (/^[A-Za-z]*$/.test(value)) {
            const newInputs = [...inputs];
            newInputs[index] = value;
            setInputs(newInputs);
        }
    };

    const isCorrect = inputs[0] === "C" && inputs[1] === "Ca" && inputs[2] === "Cl" && inputs[3] === "N" && inputs[4] === "O";


    return (
        <Box
            className="quiz4-page"
        >
            <QuizHeader dialogPopupContent={"🌈"}/>
                <h1 className="title">
                    Placez les éléments dans l'ordre correct:
                </h1>

                {/* Eingabefelder nebeneinander */}
                <Box sx={{display: "flex", justifyContent: "center", gap: "20px", marginBottom: "30px"}}>
                    {inputs.map((input, index) => (
                        <TextField
                            key={index}
                            value={input}
                            onChange={handleChange(index)}
                            variant="outlined"
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
                                width: "100px",
                                padding: "12px",
                                marginBottom: "30px",
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
                    ))}
                </Box>

                {/* Submit-Button */}
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

export default Quiz4Page;
