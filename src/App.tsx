import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Quiz3 from "./components/Quiz3Page";
import Quiz1 from "./components/Quiz1Page";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Quiz3/>}></Route>
            <Route path="/Quiz1Page" element={<Quiz1 />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
