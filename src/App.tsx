import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {TimerProvider} from "./TimerContext";
import Quiz1 from "./components/pages/Quiz1";
import Home from "./components/pages/Home";

function App() {
  return (
      <TimerProvider>
        <BrowserRouter>
            <Routes>
              <Route path={"/"} element={<Home/>}></Route>
                <Route path={"/1"} element={<Quiz1/>}></Route>
            </Routes>
        </BrowserRouter>
      </TimerProvider>
  );
}

export default App;
