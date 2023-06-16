import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button/Button";
import Navbar from "./components/Navbar/Navbar"; 

function App() {
  return (
    <>
    <div className="App">
      <div>
        <Button text={"See All"} />
      </div>
      <div>
        <Button text={"Join Event"} />
      </div>
    </div>
    
    
    <Navbar />
    </>
    
  );
}

export default App;
