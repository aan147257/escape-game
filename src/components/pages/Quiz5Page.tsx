import {Box, TextField, Button} from "@mui/material";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import QuizHeader from "../molecules/QuizHeader";
import "./Quiz5Page.css";

function Quiz4Page() {
    const [inputs, setInputs] = useState(["", "", ""]);
    const navigate = useNavigate();

    const handleChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        // Erlaubt Buchstaben (A-Z, a-z) (erlaubt auch französische Buchstaben) und ignoriert alles andere
        if (/^[A-Za-zÀ-ÿ\- ]*$/.test(value)) {
            const newInputs = [...inputs];
            newInputs[index] = value;
            setInputs(newInputs);
        }
    };

    const isCorrect = inputs[0].toLowerCase() === "calcium" && inputs[1].toLowerCase() === "oxygène" && inputs[2].toLowerCase() === "carbone";


    return (
        <Box
            className="quiz5-page"
        >
            <QuizHeader dialogPopupContent={"🌈"}/>
            <h1 className="title">
                Placez les éléments dans l'ordre correct:
            </h1>

            {/* Eingabefelder nebeneinander */}
            <Box sx={{display: "flex", justifyContent: "center", gap: "20px", marginBottom: "30px"}}>
                {inputs.map((input, index) => (
                    <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
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
                                width: "250px",
                                padding: "16px",
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
                        {index < inputs.length - 1 && (
                            <Box sx={{color: "#00E5FF", fontSize: "30px", fontWeight: "bold", mx: 2}}>+</Box>
                        )}
                    </Box>
                ))}

            </Box>

            {/* Submit-Button */}
            <Button
                onClick={() => navigate("/6")}
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
