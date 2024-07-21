import React from "react";
import "./styles/main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SuggestionBox from "./views/SuggestionBox";
import Header from "./views/components/Header";
import { SuggestionProvider } from "./store/SuggestionContext";

function App() {
  return (
    <div className="app">
      <Header />
      <BrowserRouter>
        <SuggestionProvider>
          <Routes>
            <Route path="/" element={<SuggestionBox />} />
          </Routes>
        </SuggestionProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
