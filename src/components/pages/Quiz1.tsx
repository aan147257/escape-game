import React, { useRef } from 'react';
import ColorGrid from "../molecules/ColorGrid";
import QuizContainer from "../molecules/QuizContainer";
import { useNavigate } from "react-router-dom";
import { routeMap } from "../../App";

function Quiz1() {
    const colorsRef = useRef<string[]>([]);
    const navigate = useNavigate();
    const correctOrder = ['#5dadfd', '#fd3e3e', '#fdfd2f', '#4efd4e', '#ffffff', '#000000'];

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
            alert('Je ne suis ni le plus chaud ni le plus vif, et à mes côtés, l\'ombre s\'installe discrète et protectrice.');
            navigate(routeMap.quiz2);
        }
    };

    return (
        <QuizContainer onClick={checkOrder} titleContent={"Setze die Farben in die richtige Reihenfolge:"}>
            <ColorGrid setColorsRef={handleSetColorsRef} />
        </QuizContainer>
    );
}

export default Quiz1;
