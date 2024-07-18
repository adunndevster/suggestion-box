import React from "react";
import "./styles/main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SuggestionBox from "./views/SuggestionBox";
import Header from "./views/components/Header";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SuggestionBox />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
