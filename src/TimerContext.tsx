import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();

    useEffect(() => {
        const expiration = localStorage.getItem("timerExpiration");
        if (expiration) {
            const expirationTime = parseInt(expiration, 10);
            const currentTime = Date.now();
            const diff = Math.floor((expirationTime - currentTime) / 1000);
            if (diff > 0) {
                setSecondsLeft(diff);
                setIsRunning(true);
            } else {
                localStorage.removeItem("timerExpiration");
            }
        }
    }, []);

    useEffect(() => {
        if (!isRunning || secondsLeft <= 0) return;

        const interval = setInterval(() => {
            setSecondsLeft((prev) => {
                const newVal = Math.max(prev - 1, 0);
                if (newVal === 0) {
                    localStorage.removeItem("timerExpiration");
                    setIsRunning(false);
                }
                return newVal;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning, secondsLeft]);

    // 👇 NEW EFFECT to automatically navigate to GameOver when timer hits 0
    useEffect(() => {
        if (secondsLeft === 0 && !isRunning) {
            navigate("/gmOv");
        }
    }, [secondsLeft, isRunning, navigate]);

    const startTimer = (duration: number) => {
        const expirationTime = Date.now() + duration * 1000;
        localStorage.setItem("timerExpiration", expirationTime.toString());
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
