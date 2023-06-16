import logo from "./logo.svg";
import "./App.css";
//Import Components
import Button from "./components/Button/Button";

//Import Page
import CommunityPage from './pages/CommunityPage/CommunityPage.jsx'


function App() {
  return (
    <div className="App">
      {/* <div>
        <Button text={"See All"} />
      </div>
      <div>
        <Button text={"Join Event"} />
      </div> */}
      <CommunityPage />
    </div>
  );
}

export default App;
