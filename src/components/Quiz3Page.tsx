import {Box, TextField, Button} from "@mui/material";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./Quiz3Page.css";

function Quiz3Page() {
    const [temperature, setTemperature] = useState("");
    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (/^\d*[.,]?\d*$/.test(value)) { // Erlaubt Zahlen + optional einen Punkt und Koma
            setTemperature(value);
        }
    };

    const isCorrect = temperature === "24.5" || temperature === "24,5"; // Hier Temperatur anpassen

    return (
        <Box className="quiz3-page">
            {/* Zeitkomponente oben links */}
            <Box className="time-component">
                <p>7:25 verbleibend</p>
            </Box>

            <h1 className="title">
                Wie warm ist es im Raum?
            </h1>

            <TextField
                       variant="outlined"
                       value={temperature}
                       onChange={handleChange}
                       sx={{
                           backgroundColor: "rgba(255, 255, 255, 0.1)",
                           border: "2px solid #00E5FF",
                           borderRadius: "8px",
                           input: {
                               textAlign: "center",
                               color: "#FFFFFF",
                               fontSize: "28px",
                               fontFamily: "'Orbitron', sans-serif",
                           },
                           width: "240px",
                           padding: "12px",
                           marginBottom: "30px",
                           "& .MuiOutlinedInput-notchedOutline": {
                               border: "none",
                           },
                           "&:hover .MuiOutlinedInput-notchedOutline": {
                               border: "2px solid #00E5FF", // Neon-Blau bei Hover
                           },
                           "& .MuiInputBase-input": {
                               textShadow: "0 0 8px rgba(0, 229, 255, 0.8)", // Glühender Texteffekt
                           },
                       }}
            />

            <Button
                onClick={() => navigate("./Quiz1Page")}
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
                    border: "2px solid #00E5FF", // Neon-Linie für Tron
                    "&:hover": {
                        backgroundColor: isCorrect ? "#00B8D4" : "#444",
                        boxShadow: isCorrect ? "0 0 12px rgba(0, 229, 255, 0.8)" : "none",
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

export default Quiz3Page;
