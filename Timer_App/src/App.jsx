import { useEffect, useState } from "react";


function Timer() {
  const [count, setCount] = useState(10);

  useEffect(() =>{
    const intervalId = setInterval(() =>{
      setCount((prevCount) => prevCount - 1)
    }, 1000)

    return () => clearInterval(intervalId);
  },[count])

  return <div>Time remaining: {count}s</div> 
}

function App() {
  const [ showTimer, setShowTimer ] = useState(true);
  const toggleTimer = () => setShowTimer(!showTimer);

  return(
    <div>
      <h1>React Timer App</h1>
      {showTimer && <Timer />}
      <button onClick={toggleTimer}>
        {showTimer ?  "hide timer": "show timer"}
      </button>
    </div>
  );
}

export default App;