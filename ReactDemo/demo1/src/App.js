import { useState } from "react"
// import Father from "./components/Father";
import Example1 from "./example/useCallBack";
import Example2 from "./example/useMemo";
import './App.css';

function App() {
  let [id, setId] = useState(0);
  return (
    <div className="App">
      <section>
        {/* <Father></Father> */}
        {/* <Example1></Example1> */}
        <Example2></Example2>
      </section>
      <p>{id}</p>
      <button onClick={() => { setId(id + 1) }}>+1</button>
    </div>
  );
}

export default App;
