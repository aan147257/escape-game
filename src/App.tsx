import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TimerProvider } from "./TimerContext";
import Quiz1 from "./components/pages/Quiz1";
import Quiz2 from "./components/pages/Quiz2Page";
import Home from "./components/pages/Home";
import Quiz3 from "./components/pages/Quiz3Page";
import Quiz4 from "./components/pages/Quiz4Page";
import Quiz5 from "./components/pages/Quiz5Page";
import Quiz6 from "./components/pages/Quiz6Page";
import Quiz7 from "./components/pages/Quiz7Page";
import Quiz8 from "./components/pages/Quiz8Page";
import GameOver from "./components/pages/GameOver";
import Win from "./components/pages/Win";


export const routeMap = {
    quiz1: "/a9xq2",
    quiz2: "/v7plm",
    quiz3: "/kd2cz",
    quiz4: "/tz9qf",
    quiz5: "/p3nxa",
    quiz6: "/b7wmd",
    quiz7: "/x5zcu",
    quiz8: "/d8lqp",
    home: "/h7Mwe",
    quizWin: "/Qw3qz4NWwQw3qz4NWw",
};

function App() {
    return (
        <BrowserRouter>
            <TimerProvider>
                <Routes>
                    <Route path="/h7Mwe" element={<Home />} />
                    <Route path="/a9xq2" element={<Quiz1 />} />
                    <Route path="/v7plm" element={<Quiz2 />} />
                    <Route path="/kd2cz" element={<Quiz3 />} />
                    <Route path="/tz9qf" element={<Quiz4 />} />
                    <Route path="/p3nxa" element={<Quiz5 />} />
                    <Route path="/b7wmd" element={<Quiz6 />} />
                    <Route path="/x5zcu" element={<Quiz7 />} />
                    <Route path="/d8lqp" element={<Quiz8 />} />
                    <Route path="/gmOv" element={<GameOver />} />
                    <Route path="/Qw3qz4NWwQw3qz4NWw" element={<Win />} />
                    <Route path="*" element={<GameOver />} />
                </Routes>
            </TimerProvider>
        </BrowserRouter>
    );
}


export default App;
