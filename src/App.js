import logo from "./logo.svg";
import "./App.css";
//Components
import Button from "./components/Button/Button";
//Pages
import HomePage from "./pages/homepage/homepage.jsx";
import Navbar from "./components/Navbar/Navbar"; 
function App() {
  return (

    <div className="App">
          <Navbar/>
      {/* <div>
        <Button text={"See All"} />
      </div>
      <div>
        <Button text={"Join Event"} />
      </div> */}
  
    </div>
  );
}

export default App;
