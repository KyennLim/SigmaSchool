
// updater - A function passed as an argument to setState() 
//           usually ex. setYear(arrow function) Allow for safe updates 
//           and asynchronous functions.
//           Good practice to use updater functions

import React, { useState } from 'react';
import MyComponent from './MyComponent';

function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

export default App;