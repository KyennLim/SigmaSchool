
// useContext() - React Hook that allowsw you to share valyes 
//                between multiple levels of components 
//                without assing props though each level

// PROVIDER COMPONENT
// 1. import {createContext} from 'react;
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//      <Child />
//    </MyContext.Provider>

// CONSUMER COMPONENTS
// 1. Import react, { useContext } from 'react';
//    Import { myContext } from './ComponentA';
// 2. const value = useContext(MyContext)

import ComponentA from "./ComponentA";

function App() {
  return(
    <>
      <ComponentA />
    </>
  );
}

export default App;