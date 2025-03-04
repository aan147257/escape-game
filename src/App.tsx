import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {TimerProvider} from "./TimerContext";
import Quiz1 from "./components/pages/Quiz1";
import Home from "./components/pages/Home";
import Quiz4 from "./components/pages/Quiz4Page";
import Quiz3 from "./components/pages/Quiz3Page";


function App() {
  return (
      <TimerProvider>
        <BrowserRouter>
            <Routes>
              <Route path={"/"} element={<Home/>}></Route>
                <Route path={"/1"} element={<Quiz1/>}></Route>
                <Route path={"/3"} element={<Quiz3/>}></Route>
                <Route path={"/4"} element={<Quiz4/>}></Route>
            </Routes>
        </BrowserRouter>
      </TimerProvider>
  );
}

export default App;
