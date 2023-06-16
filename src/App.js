import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
//Components
import Button from "./components/Button/Button";
<<<<<<< HEAD
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
=======
//Pages
import HomePage from "./pages/homepage/homepage.jsx";
function App() {
  return (
    <div className="App">
      {/* <div>
        <Button text={"See All"} />
      </div>
      <div>
        <Button text={"Join Event"} />
      </div> */}
      {/* <HomePage /> */}
>>>>>>> 3d2ceb6cbba751ae65e2fcdb930e8a3d6951a13e
    </div>
  );
}

export default App;
