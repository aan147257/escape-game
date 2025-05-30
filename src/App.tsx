import React from "react";
import { HashRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { TimerProvider } from "./TimerContext";
import Quiz1 from "./components/pages/Quiz1";
import Quiz2 from "./components/pages/Quiz2Page";
import Home from "./components/pages/Home";
import Quiz3 from "./components/pages/Quiz3Page";
import Quiz4 from "./components/pages/Quiz4Page";
import Quiz5 from "./components/pages/Quiz5Page";
import Quiz6 from "./components/pages/Quiz6Page";
import GameOver from "./components/pages/GameOver";
import Win from "./components/pages/Win";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";


export const routeMap = {
    quiz1: "/a9xq2",
    quiz2: "/v7plm",
    quiz3: "/kd2cz",
    quiz4: "/tz9qf",
    quiz5: "/p3nxa",
    quiz6: "/b7wmd",
    home: "/h7Mwe",
    quizWin: "/Qw3qz4NWwQw3qz4NWw",
};

function App() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Router>
                <TimerProvider>
                    <Routes>
                        <Route path="/h7Mwe" element={<Home />} />
                        <Route path="/a9xq2" element={<Quiz1 />} />
                        <Route path="/v7plm" element={<Quiz2 />} />
                        <Route path="/kd2cz" element={<Quiz3 />} />
                        <Route path="/tz9qf" element={<Quiz4 />} />
                        <Route path="/p3nxa" element={<Quiz5 />} />
                        <Route path="/b7wmd" element={<Quiz6 />} />
                        <Route path="/gmOv" element={<GameOver />} />
                        <Route path="/Qw3qz4NWwQw3qz4NWw" element={<Win />} />
                        <Route path="*" element={<GameOver />} />
                        <Route path="/" element={<Navigate to="/h7Mwe" />} />
                    </Routes>
                </TimerProvider>
            </Router>
        </LocalizationProvider>
    );
}


export default App;
