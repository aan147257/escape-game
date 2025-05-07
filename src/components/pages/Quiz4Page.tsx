import {Box} from "@mui/material";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import AtomicInput from "../atoms/AtomicInput";
import QuizContainer from "../molecules/QuizContainer";
import {routeMap} from "../../App";
import ResultDialog from "../atoms/ResultDialog";
import { useTranslation } from "react-i18next";

function Quiz4Page() {
    const [inputs, setInputs] = useState(["", "", ""]);
    const [openPopup, setOpenPopup] = useState(false);
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleChange = (value: string, index?: number) => {
        if (/^[A-Za-zÀ-ÿ\- ]*$/.test(value) && index !== undefined) {
            const newInputs = [...inputs];
            newInputs[index] = value;
            setInputs(newInputs);
        }
    };

    const normalize = (str: string) =>
        str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().toLowerCase();

    const isCorrect =
        normalize(inputs[0]) === normalize(t("quiz4A1")) &&
        normalize(inputs[1]) === normalize(t("quiz4A2")) &&
        normalize(inputs[2]) === normalize(t("quiz4A3"));

    const handleSubmit = () => {
        if (isCorrect) {
            setOpenPopup(true);
        }
    };

    const handlePopupSubmit = () => {
        setOpenPopup(false);
        navigate(routeMap.quiz5);
    };

    return (
        <QuizContainer
            titleContent={t("quiz4Q")}
            onClick={() => handleSubmit()}
            disabled={!isCorrect}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "1rem",
                    flexWrap: "wrap",
                    width: "100%",
                }}
            >
                {inputs.map((input, index) => (
                    <Box sx={{display: "flex", alignItems: "center"}}>
                        <AtomicInput
                            key={index}
                            value={input}
                            index={index}
                            onChange={handleChange}
                        />
                        {index < inputs.length - 1 && (
                            <Box sx={{color: "#00E5FF", fontSize: "30px", fontWeight: "bold", mx: 2}}>+</Box>
                        )}
                    </Box>
                ))}
            </Box>

            <ResultDialog
                open={openPopup}
                onClose={() => setOpenPopup(false)}
                onSubmit={handlePopupSubmit}
                dialogContent={t("quiz4D")}
            />
        </QuizContainer>

    );
}

export default Quiz4Page;