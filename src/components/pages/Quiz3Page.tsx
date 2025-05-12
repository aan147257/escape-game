import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizContainer from "../molecules/QuizContainer";
import { routeMap } from "../../App";
import { useTranslation } from "react-i18next";
import { TimeField } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";

function Quiz3Page() {
    const [value, setValue] = useState<Dayjs | null>(dayjs("2000-01-01T00:00"));
    const navigate = useNavigate();
    const { t } = useTranslation();

    const checkAnswer = (time: Dayjs | null) => {
        if (time?.format("HH:mm") === "11:05") {
            navigate(routeMap.quiz4);
        }
    };

    return (
        <QuizContainer
            onClick={() => checkAnswer(value)}
            titleContent={t("quiz3Q")}
        >
            <TimeField
                value={value}
                onChange={(newValue) => setValue(newValue)}
                format="HH:mm"
                sx={{
                    flexGrow: 1,
                    minWidth: 60,
                    maxWidth: 200,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    border: "2px solid #00E5FF",
                    borderRadius: "8px",
                    textAlign: "center",
                    input: {
                        textAlign: "center",
                        color: "#FFFFFF",
                        fontSize: "2rem",
                        fontFamily: "'Orbitron', sans-serif",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        border: "2px solid #00E5FF",
                    },
                    "& .MuiInputBase-input": {
                        textShadow: "0 0 8px rgba(0, 229, 255, 0.8)",
                    },
                    "& .MuiInputLabel-root": {
                        color: "#FFFFFF",
                    },
                }}
            />
        </QuizContainer>
    );
}

export default Quiz3Page;
