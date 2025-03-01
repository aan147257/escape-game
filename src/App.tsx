import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Quiz4 from "./components/Quiz4Page";
import Quiz1 from "./components/Quiz1Page";
import Quiz5 from "./components/Quiz5Page";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Quiz4/>}></Route>
            <Route path={"/"} element={<Quiz1/>}></Route>
            <Route path={"/"} element={<Quiz5/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
