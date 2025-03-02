import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import {TimerProvider} from "./TimerContext";

function App() {
  return (
      <TimerProvider>
        <BrowserRouter>
            <Routes>
              <Route path={"/"} element={<Home/>}></Route>
            </Routes>
        </BrowserRouter>
      </TimerProvider>
  );
}

export default App;
