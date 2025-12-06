// useEffect() - React Hook that tells React DO SOME CODE WHEN (pick one): 
//               This component re-render 
//               This component mounts 
//               The state of a value

// useEffect(function, [dependency])

// mount is to add a component to a DOM and unmount is to remove from DOM

import React, {useState, useEffect} from "react";
function MyComponent() {
//     const [count, setCount] = useState(0);
//     const [color, setColor] = useState("Green")

//     useEffect(() => {
//         document.title = `count: ${count} ${color}`
// }, [count, color])

//     function addCount(){
//         setCount(prevCount=> prevCount +1)
//     }
//     function subtractCount(){
//         setCount(prevCount=> prevCount -1)
//     }

//     function changeColor() {
//         setColor(color == "green" ? "red": "green")
//     }

//     return(
//         <>
//         <p style={{color: color}}>Count: {count}</p>
//         <button onClick={addCount}>add</button>
//         <button onClick={subtractCount}>subtract</button><br />
//         <button onClick={changeColor}>Change Color</button>
//         </>
//     );


    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`
    }, [width,height])

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener("resize",handleResize)

        return () => {
            window.removeEventListener("resize",handleResize)
        }
    }, []);
    
    
    return(
        <>
        <p>
            Window Width: {width}px <br />
            Window Hight: {height}px
        </p>
        </>
    )
}

export default MyComponent;