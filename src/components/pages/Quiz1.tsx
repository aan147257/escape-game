import React, { useRef, useState } from 'react';
import ColorGrid from "../molecules/ColorGrid";
import QuizContainer from "../molecules/QuizContainer";
import { useNavigate } from "react-router-dom";
import { routeMap } from "../../App";
import ResultDialog from "../atoms/ResultDialog";

function Quiz1() {
    const colorsRef = useRef<string[]>([]);
    const [openPopup, setOpenPopup] = useState(false);
    const navigate = useNavigate();

    const handleSetColorsRef = (getter: () => string[]) => {
        colorsRef.current = getter();
    };

    const checkOrder = () => {
        const currentColors = colorsRef.current;

        const isCorrect =
            currentColors[0] === '#5dadfd' &&
            currentColors[1] === '#fd3e3e' &&
            currentColors[2] === '#fdfd2f' &&
            currentColors[3] === '#4efd4e' &&
            currentColors[4] === '#ffffff' &&
            currentColors[5] === '#000000';

        if (isCorrect) {
            setOpenPopup(true);
        }
    };

    const handlePopupSubmit = () => {
        setOpenPopup(false);
        navigate(routeMap.quiz2);
    };

    return (
        <QuizContainer onClick={checkOrder} titleContent={"Setze die Farben in die richtige Reihenfolge:"}>
            <ColorGrid setColorsRef={handleSetColorsRef} />
            <ResultDialog
                open={openPopup}
                onClose={() => setOpenPopup(false)}
                onSubmit={handlePopupSubmit}
                dialogContent={"Je ne suis ni le plus chaud ni le plus vif, et à mes côtés, l\'ombre s\'installe discrète et protectrice."}
            />
        </QuizContainer>
    );
}

export default Quiz1;
