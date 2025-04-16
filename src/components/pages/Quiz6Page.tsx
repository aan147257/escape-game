import {Box } from "@mui/material";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import QuizContainer from "../molecules/QuizContainer";
import AtomicInput from "../atoms/AtomicInput";
import { routeMap } from "../../App";

function Quiz6() {
    const [inputs, setInputs] = useState<(string)[]>(["", "", "", "", ""]);
    const navigate = useNavigate();

    const handleChange = (value: string, index?: number) => {
        if (/^[0-9]*$/.test(value)  && index !== undefined) {
            const newInputs = [...inputs];
            newInputs[index] = value;
            setInputs(newInputs);
        }
    };

    const isCorrect = inputs[0] === '1' && inputs[1] === '4' && inputs[2] === '7' && inputs[3] === '9' && inputs[4] === '2';

    return (
        <QuizContainer
            onClick={() =>navigate(routeMap.quizWin)}
            disabled={!isCorrect}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "50vh",
                    width: "100%",
                    gap: "2rem",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "60%",
                        maxWidth: "100%",
                    }}
                >
                    <img
                        src={require('../../assets/phiole-quiz6.png')}
                        alt="Phiole Bild"
                        style={{
                            maxHeight: "100%",
                            maxWidth: "100%",
                            objectFit: "contain",
                        }}
                    />
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "20px",
                    }}
                >
                    {inputs.map((input, index) => (
                        <AtomicInput
                            value={input}
                            index={index}
                            onChange={handleChange}
                        />
                    ))}
                </Box>
            </Box>
        </QuizContainer>
    );
}

export default Quiz6;
