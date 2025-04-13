import {useState} from "react";
import {useNavigate} from "react-router-dom";
import QuizContainer from "../molecules/QuizContainer";
import AtomicInput from "../atoms/AtomicInput";
import { Box } from "@mui/material";
import { routeMap } from "../../App";

function Quiz3Page() {
    const [temperature, setTemperature] = useState("");
    const navigate = useNavigate();

    const handleChange = (value: string) => {
        if (/^\d*[.,]?\d*$/.test(value)) { // Erlaubt Zahlen + optional einen Punkt und Koma
            setTemperature(value);
        }
    };

    const isCorrect = temperature === "24.5" || temperature === "24,5"; // Hier Temperatur anpassen

    return (
        <QuizContainer
            titleContent={"Wie warm ist es im Raum?"}
            onClick={() =>navigate(routeMap.quiz4)}
            disabled={!isCorrect}
        >
            <Box sx={{ width: "100%", display: "flex" }}>
                <AtomicInput value={temperature} onChange={handleChange} />
            </Box>

        </QuizContainer>
    );
}

export default Quiz3Page;
