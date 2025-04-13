import { Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AtomicInput from "../atoms/AtomicInput";
import QuizContainer from "../molecules/QuizContainer";
import { routeMap } from "../../App";

function Quiz4Page() {
    const [inputs, setInputs] = useState(["", "", "", "", ""]);
    const navigate = useNavigate();

    const handleChange = (index: number, value: string) => {
        if (/^[A-Za-z]*$/.test(value)) {
            const newInputs = [...inputs];
            newInputs[index] = value;
            setInputs(newInputs);
        }
    };

    const isCorrect = inputs[0] === "C" && inputs[1] === "Ca" && inputs[2] === "Cl" && inputs[3] === "N" && inputs[4] === "O";

    return (
       <QuizContainer
           titleContent={"Placez les éléments dans l'ordre correct:"}
           onClick={() => navigate(routeMap.quiz5)}
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
                   <AtomicInput
                       key={index}
                       value={input}
                       index={index}
                       onChange={(value, i) => handleChange(i!, value)}
                   />
               ))}
           </Box>

       </QuizContainer>
    );
}

export default Quiz4Page;
