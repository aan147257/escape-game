import { Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizContainer from "../molecules/QuizContainer";
import AtomicInput from "../atoms/AtomicInput";
import { routeMap } from "../../App";
import { useTranslation } from "react-i18next";

function Quiz5Page() {
    const [inputs, setInputs] = useState(["", "", ""]);
    const navigate = useNavigate();
    const {t} = useTranslation();

    const handleChange = (value: string, index?: number) => {
        if (/^[A-Za-zÀ-ÿ\- ]*$/.test(value) && index !== undefined) {
            const newInputs = [...inputs];
            newInputs[ index ] = value;
            setInputs(newInputs);
        }
    };

    const normalize = (str: string) =>
        str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().toLowerCase();

    const isCorrect =
        normalize(inputs[0]) === normalize(t("quiz4A3")) &&
        normalize(inputs[1]) === normalize(t("quiz4A2")) &&
        normalize(inputs[2]) === normalize(t("quiz4A1"));

    return (
        <QuizContainer
            titleContent={t("quiz4Q")}
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
