import { Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizContainer from "../molecules/QuizContainer";
import AtomicInput from "../atoms/AtomicInput";
import { routeMap } from "../../App";

function Quiz5Page() {
    const [inputs, setInputs] = useState(["", "", ""]);
    const navigate = useNavigate();

    const handleChange = (value: string, index?: number) => {
        if (/^[A-Za-zÀ-ÿ\- ]*$/.test(value) && index !== undefined) {
            const newInputs = [...inputs];
            newInputs[ index ] = value;
            setInputs(newInputs);
        }
    };


    const isCorrect = inputs[ 0 ].toLowerCase() === "calcium" && inputs[ 1 ].toLowerCase() === "oxygène" && inputs[ 2 ].toLowerCase() === "carbone";


    return (
        <QuizContainer
            titleContent={" Placez les éléments dans l'ordre correct:"}
            onClick={() => navigate(routeMap.quiz6)}
            disabled={!isCorrect}
        >
            {/* Eingabefelder nebeneinander */}
            <Box sx={{ display: "flex", justifyContent: "center", gap: "rem" }}>
                {inputs.map((input, index) => (
                    <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
                        <AtomicInput
                            value={input}
                            index={index}
                            onChange={handleChange}
                        />

                        {index < inputs.length - 1 && (
                            <Box sx={{ color: "#00E5FF", fontSize: "30px", fontWeight: "bold", mx: 2 }}>+</Box>
                        )}
                    </Box>
                ))}

            </Box>

        </QuizContainer>
    );
}

export default Quiz5Page;
