import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
//Components
import Button from "./components/Button/Button";
import MyCommunity from "./components/MyCommunity/MyCommunity";
import Navbar from "./components/Navbar/Navbar";
//Pages
import HomePage from "./pages/homepage/homepage.jsx";
import CommunityPage from "./pages/CommunityPage/CommunityPage.jsx";
import Mycommunitypage from "./pages/Mycommunitypage/Mycommunitypage.jsx";
import MyCommunityAndEvent from "./components/MyCommunityAndEvent/MyCommunityAndEvent";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* <div>
          <Button text={"See All"} />
        </div>
        <div>
          <Button text={"Join Event"} />
        </div> */}
        {/* <div>
          <MyCommunity />
        </div> */}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/communities" element={<CommunityPage />} />
          <Route path="/mycommunity" element={<Mycommunitypage />} />
        </Routes>
        <div>
          <MyCommunityAndEvent />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
