import {useState} from "react";
import {useNavigate} from "react-router-dom";
import AtomicInput from "../atoms/AtomicInput";
import QuizContainer from "../molecules/QuizContainer";
import { routeMap } from "../../App";

function Quiz7Page() {
    const [classes, setClasses] = useState("");
    const navigate = useNavigate();

    const handleChange = (value: string) => {
        // Erlaubt nur Zahlen (0-9) und Buchstaben -> ignoriert alles andere
        if (/^[a-zA-Z0-9]*$/.test(value)) {
            setClasses(value);
        }
    };

    const isCorrect = classes.toUpperCase() === "I4C"; // Hier den Namen seiner Klasse anpassen

    return (
        <QuizContainer
            titleContent="In welcher Klasse war er?"
            onClick={() => navigate(routeMap.quiz8)}
            disabled={!isCorrect}
        >
            <AtomicInput
                value={classes}
                onChange={handleChange}
            />
        </QuizContainer>
    );
}

export default Quiz7Page;