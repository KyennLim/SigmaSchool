

function Buttion(){
    // const handleClick2 = (name) => {
        console.log(`${name}, stop clicking me!`);
    // }

    // let count = 1
    // const handleClick = (name) => {
    //     if(count < 3){
    //         ++count
    //         console.log(`${name}, you clicked me ${count} times`);
    //     } else {
    //         console.log(`Stop clicking me!`);
    //     }
    // }

    const handleClick = (e) => {
        e.target.textContent = "Ouch!";
    }
    return( 
        <>
        {/* <button onClick={(e) => handleClick(e)}>Click Me</button> */}
        <button onDoubleClick={(e) => handleClick(e)}>Click Me</button>
        </>
    );
}

export default Buttion