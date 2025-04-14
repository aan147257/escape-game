import {Box} from "@mui/material";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import AtomicInput from "../atoms/AtomicInput";
import QuizContainer from "../molecules/QuizContainer";
import {routeMap} from "../../App";
import ResultDialog from "../atoms/ResultDialog";

function Quiz4Page() {
    const [inputs, setInputs] = useState(["", "", ""]);
    const [openPopup, setOpenPopup] = useState(false);
    const navigate = useNavigate();

    const handleChange = (value: string, index?: number) => {
        if (/^[A-Za-zÀ-ÿ\- ]*$/.test(value) && index !== undefined) {
            const newInputs = [...inputs];
            newInputs[index] = value;
            setInputs(newInputs);
        }
    };

    const isCorrect = inputs[0].toLowerCase() === "carbone" && inputs[1].toLowerCase() === "oxygène" && inputs[2].toLowerCase() === "calcium";

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
            titleContent={"Placez les éléments dans l'ordre correct:"}
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
                    <Box key={index} sx={{display: "flex", alignItems: "center"}}>
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
            />
        </QuizContainer>

    );
}

export default Quiz4Page;