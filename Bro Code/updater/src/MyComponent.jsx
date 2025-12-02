
import React, { useState } from 'react';
function MyComponent() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const reset = () => {
        setCount(0);
    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    }
    
    return(
        <>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={reset}>reset</button>
            <button onClick={decrement}>decrement</button>
        </>
    );
}

export default MyComponent;