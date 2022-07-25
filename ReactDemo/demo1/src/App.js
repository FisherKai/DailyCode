import { useState } from "react"
import Father from "./components/Father";
import './App.css';

function App() {
  let [id, setId] = useState(0);
  return (
    <div className="App">
      <section>
        <Father></Father>
      </section>
      <p>{id}</p>
      <button onClick={() => { setId(id + 1) }}>+1</button>
    </div>
  );
}

export default App;
