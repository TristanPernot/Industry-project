import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
//Components
import Button from "./components/Button/Button";
import MyCommunity from "./components/MyCommunity/MyCommunity";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Button text={"See All"} />
        </div>
        <div>
          <Button text={"Join Event"} />
        </div>
        <div>
          <MyCommunity />
        </div>

        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
