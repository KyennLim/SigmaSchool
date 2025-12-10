
import React,{useState, useEffect, useRef} from "react";

function MyComponent() {
    const inputRef1 = useRef();
    const inputRef2 = useRef();
    const inputRef3 = useRef();

    useEffect(() =>
    {
        console.log("COMPONENT RENDERED")
        console.log(inputRef1)
    });

    function handleClick1(){
        inputRef1.current.focus()
        console.log(inputRef1.current)
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }
    function handleClick2(){
        inputRef2.current.focus()
        console.log(inputRef2.current)
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";
    }
    function handleClick3(){
        inputRef3.current.focus()
        console.log(inputRef3.current)
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "yellow";
    }


    return(
        <>
        <button onClick={handleClick1}>
            Click me 1!
        </button>
        <input ref={inputRef1}/>
        <button onClick={handleClick2}>
            Click me 2!
        </button>
        <input ref={inputRef2}/>
        <button onClick={handleClick3}>
            Click me 3!
        </button>
        <input ref={inputRef3}/>
        </>
    );
}

export default MyComponent;