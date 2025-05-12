import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import QuizContainer from "../molecules/QuizContainer";
import { TextField } from "@mui/material";
import { routeMap } from "../../App";
import { useTranslation } from "react-i18next";

function Quiz2() {
    const [inputValue, setInputValue] = useState<number>(0);
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);
        if (!isNaN(value)) {
            setInputValue(value);
        }
    };

    const isCorrect = inputValue === 21;

    return (
        <QuizContainer
            onClick={() => {if (isCorrect)navigate(routeMap.quiz3)}}
            titleContent={t("quiz2Q")}
        >
            <TextField
                type="number"
                value={inputValue}
                onChange={handleChange}
                inputMode="numeric"
                onKeyDown={(e) => e.preventDefault()}
                inputProps={{
                    min: 0,
                    max: 25,
                    step: 1,
                }}
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
                        '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
                            WebkitAppearance: 'auto',
                            height: '1.5em',
                            width: '1.5em',
                            filter: 'invert(100%)',
                            opacity: 0.8,
                            cursor: 'pointer',
                            background: 'transparent', // <-- this line removes the square
                            border: 'none',             // <-- just in case there's a border
                            padding: 0,                 // <-- extra safe
                            margin: 0,                  // <-- extra safe
                        },
                        '&[type=number]': {
                            MozAppearance: 'textfield',
                        },
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
                }}
            />

        </QuizContainer>
    );
}

export default Quiz2;
