

// useRef is similar to useState but does not re-render
// useRef() = "use Reference" Does not cause re-renders when its valye changes. 
//            When you want a component to "remember" some information, 
//            but you don't want that information to trigger new renders.

//            1. Accessing/interacting with DOM elements 
//            2. Handling Focus Animations, and Transitions 
//            3. Managing Timers and Intervals

import MyComponent from "./MyComponent";
function App() {
  return(
    <>
    <MyComponent />
    </>
  );
}

export default App;