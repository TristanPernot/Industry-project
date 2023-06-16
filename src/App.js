import logo from "./logo.svg";
import "./App.css";
//Components
import Button from "./components/Button/Button";
//Pages
import HomePage from "./pages/homepage/homepage.jsx";
import CommunityPage from "./pages/CommunityPage/CommunityPage.jsx";
import Mycommunitypage from "./pages/Mycommunitypage/Mycommunitypage.jsx";
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
      <CommunityPage />
    </div>
  );
}

export default App;
