import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ChildComponentA from "./ChildComponentA";

function App() {
  const [inputVal, setInputVal] = useState("A");
  return (
    <div className="App">
      App Component <br />
      {inputVal}
      <ChildComponentA inputVal={inputVal} setInputVal={setInputVal} />
    </div>
  );
}

export default App;
