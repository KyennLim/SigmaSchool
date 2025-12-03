
// Updater function - A function passed as an argument to setState() 
//                    usually ex. setYear(prevYear => prevYear + 1) 
//                    Allows for safe updates based on previous state values. 
//                    Used with multiple updates and asynchronous function. 
//                    Good practice to use updater function.
import React from "react";

import MyComponent from "./MyComponent";
function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

export default App;
