import React, { createContext, useState, useEffect, useContext } from "react";

interface TimerContextProps {
    secondsLeft: number;
    isRunning: boolean;
    startTimer: (duration: number) => void;
    pauseTimer: () => void;
    resumeTimer: () => void;
}

const TimerContext = createContext<TimerContextProps | undefined>(undefined);

export const TimerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [secondsLeft, setSecondsLeft] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (!isRunning || secondsLeft <= 0) return;

        const interval = setInterval(() => {
            setSecondsLeft((prev) => Math.max(prev - 1, 0));
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning, secondsLeft]);

    const startTimer = (duration: number) => {
        setSecondsLeft(duration);
        setIsRunning(true);
    };

    const pauseTimer = () => setIsRunning(false);
    const resumeTimer = () => setIsRunning(true);

    return (
        <TimerContext.Provider value={{ secondsLeft, isRunning, startTimer, pauseTimer, resumeTimer }}>
            {children}
        </TimerContext.Provider>
    );
};

export const useTimer = () => {
    const context = useContext(TimerContext);
    if (!context) throw new Error("useTimer must be used within a TimerProvider");
    return context;
};
