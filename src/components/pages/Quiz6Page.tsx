import {Box, TextField, Button} from "@mui/material";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import QuizHeader from "../molecules/QuizHeader";
import "./Quiz6Page.css";

function Quiz6Page() {
    const [inputs, setInputs] = useState<(string | null)[]>([null, null, null, null, null]);
    const navigate = useNavigate();

    const handleChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        if (/^[0-9]*$/.test(value)) {
            const newInputs = [...inputs];
            newInputs[index] = value;
            setInputs(newInputs);
        }
    };

    const isCorrect = inputs[0] === '1' && inputs[1] === '4' && inputs[2] === '7' && inputs[3] === '9' && inputs[4] === '2';


    return (
        <Box
            className="quiz6-page"
        >
            <QuizHeader dialogPopupContent={"🌈"}/>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", paddingLeft: "20px", flexGrow: 1 }}>
            <Box>
                <img src={require('../../assets/phiole-quiz6.png')} alt="Phiole Bild" style={{ maxWidth: "100%", maxHeight: "75vh" }}/>
            </Box>
            <Box sx={{display: "flex", justifyContent: "center", marginBottom: "30px", gap: "20px"}}>
                {inputs.map((input, index) => (
                <TextField
                    onChange={handleChange(index)}
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
                ))}
            </Box>
            </Box>

            <Button
                onClick={() => navigate("/7")}
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

export default Quiz6Page;
