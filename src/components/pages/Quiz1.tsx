import React, { useRef } from 'react';
import ColorGrid from "../molecules/ColorGrid";
import QuizContainer from "../molecules/QuizContainer";
import { useNavigate } from "react-router-dom";
import { routeMap } from "../../App";

function Quiz1() {
    const colorsRef = useRef<string[]>([]);
    const navigate = useNavigate();
    const correctOrder = ['#fd3e3e', '#fd8658', '#fdfd2f', '#4efd4e', '#5dadfd', '#ad65fd', '#fd7fc0', '#b3b3b3'];

    const handleSetColorsRef = (getter: () => string[]) => {
        // Speichere den aktuellen Getter
        colorsRef.current = getter();
    };

    const checkOrder = () => {
        const currentColors = colorsRef.current;
        if (JSON.stringify(currentColors) === JSON.stringify(correctOrder)) {
            navigate(routeMap.quiz2)
        } 
    };


    return (
        <QuizContainer onClick={checkOrder} titleContent={ "Setze die Farben in die richtige Reihenfolge:"}>
            <ColorGrid setColorsRef={handleSetColorsRef} />
        </QuizContainer>
    );
}

export default Quiz1;