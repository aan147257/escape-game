import {useState} from "react";
import {useNavigate} from "react-router-dom";
import AtomicInput from "../atoms/AtomicInput";
import QuizContainer from "../molecules/QuizContainer";
import { routeMap } from "../../App";

function Quiz8Page() {
    const [age, setAge] = useState("");
    const navigate = useNavigate();

    const handleChange = (value: string) => {
        // Erlaubt nur Zahlen (0-9) und ignoriert alles andere
        if (/^\d*$/.test(value)) {
            setAge(value);
        }
    };

    const isCorrect = age === "17"; // Hier sein Alter anpassen

    return (
        <QuizContainer
            titleContent="Was war sein alter?"
            onClick={() =>navigate(routeMap.quizWin)}
            disabled={!isCorrect}
        >
                <AtomicInput
                    value={age}
                    onChange={handleChange}
                />
        </QuizContainer>
    );
}

export default Quiz8Page;