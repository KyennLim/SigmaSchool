import { useState } from "react";


function MyComponent() {

    const [food, setFood] = useState(["Apple","Orange","Banana"]);
    
    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFood(prevFood => [...prevFood,newFood]);

    }

    function handleRemoveFood(index){
        setFood(prevFood => prevFood.filter((_,i) => i != index));
    }
    return(
        <div>
            <h2>List of food</h2>
            <ul>
                {food.map((food,index) => 
                <li 
                key={index} onClick={() => handleRemoveFood(index)}>
                    {food}
                </li>
            )}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name" />
            <button onClick={handleAddFood}>Add food</button>
        </div>

    );
}

export default MyComponent;