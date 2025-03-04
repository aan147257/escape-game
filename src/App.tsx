import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {TimerProvider} from "./TimerContext";
import Quiz1 from "./components/pages/Quiz1";
import Home from "./components/pages/Home";
import Quiz4 from "./components/Quiz4Page";
import Quiz5 from "./components/Quiz5Page";

function App() {
  return (
      <TimerProvider>
        <BrowserRouter>
            <Routes>
              <Route path={"/"} element={<Home/>}></Route>
                <Route path={"/1"} element={<Quiz1/>}></Route>
                <Route path={"/"} element={<Quiz4/>}></Route>
                <Route path={"/"} element={<Quiz5/>}></Route>
            </Routes>
        </BrowserRouter>
      </TimerProvider>
  );
}

export default App;
