// react Hook = special function that allows functional components 
//              to use React without writing class components (react v16.8+) 
//              (useState, useEffect, useContext, useReducer, useCallback, etc.)
// useState = allows the creation of stateful variables and setter 
//            functions to update its value in the virtual DOM

import react, { useState} from "react";

import Counter from "./Counter";
import MyComponent from "./MyComponent";
function App() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [employed, setEmployed] = useState(false);

  const updateName = (name) => {
    setName(name);
  }

  const incrementAge = () => {
    setAge(age + 1);
  };

  const toggleEmployed = () => {
    setEmployed(!employed);
  }

  return (
    <>
    {/* <p>name: {name}</p>
    <button onClick={() => updateName("Bro's Code")}>set name</button>
    <p>age: {age}</p>
    <button onClick={() => incrementAge()}>increment age</button>
    <p>Employed: {employed ? "Yes" : "No"}</p>
    <button onClick={() => toggleEmployed()}>toggle employed</button> */}
    <Counter />
    </>
  );
}

export default App;