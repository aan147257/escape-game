import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {TimerProvider} from "./TimerContext";
import Quiz1 from "./components/pages/Quiz1";
import Quiz2 from "./components/pages/Quiz2Page";
import Home from "./components/pages/Home";
import Quiz4 from "./components/pages/Quiz4Page";
import Quiz5 from "./components/pages/Quiz5Page";
import Quiz3 from "./components/pages/Quiz3Page";
import Quiz7 from "./components/pages/Quiz7Page";
import Quiz8 from "./components/pages/Quiz8Page";


function App() {
  return (
      <TimerProvider>
        <BrowserRouter>
            <Routes>
              <Route path={"/"} element={<Home/>}></Route>
                <Route path={"/1"} element={<Quiz1/>}></Route>
                <Route path={"/2"} element={<Quiz2/>}></Route>
                <Route path={"/3"} element={<Quiz3/>}></Route>
                <Route path={"/4"} element={<Quiz4/>}></Route>
                <Route path={"/5"} element={<Quiz5/>}></Route>
                <Route path={"/7"} element={<Quiz7/>}></Route>
                <Route path={"/8"} element={<Quiz8/>}></Route>
            </Routes>
        </BrowserRouter>
      </TimerProvider>
  );
}

export default App;
