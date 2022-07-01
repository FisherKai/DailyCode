import { useState } from "react"
import './App.css';

function App() {
  let [id, setId] = useState(0);
  return (
    <div className="App">
      <p>{id}</p>
      <button onClick={() => { setId(id + 1) }}>+1</button>
    </div>
  );
}

export default App;
