import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <div>
        <Button text={"See All"} />
      </div>
      <div>
        <Button text={"Join Event"} />
      </div>
    </div>
  );
}

export default App;
