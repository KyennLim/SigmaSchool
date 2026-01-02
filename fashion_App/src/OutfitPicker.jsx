import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addOutfit } from "./outfitSlice";

function OutfitPicker() {

    const outfits = useSelector((state) => state.outfit.outfits);

    const [top, setTop] = useState("");
    const [bottom, setBottom] = useState("");
    
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Pick Your Outfit</h2>
            <div>
                <label>
                    Top:
                    <select 
                        value={top}
                        onChange={(e) => {
                            console.log("Top selected:", e.target.value);
                            setTop(e.target.value);
                        }}
                    >
                        <option value=""></option>
                        <option value="T-shirt">T-shirt</option>
                        <option value="Sweater">Sweater</option>
                        <option value="Jacket">Jacket</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    Bottom:
                    <select 
                        value={bottom}
                        onChange={(e) => {
                            console.log("Bottom selected:", e.target.value);
                            setBottom(e.target.value);
                        }}
                    >
                        <option value=""></option>
                        <option value="Jeans">Jeans</option>
                        <option value="Shorts">Shorts</option>
                        <option value="Skirt">Skirt</option>
                    </select>
                </label>
            </div>
            <button onClick={() =>{
                console.log("Dispatching:", { top, bottom });  // Add this
                dispatch(addOutfit({ top, bottom }))}}>
                Save Outfit
            </button>
            <div>
                <h3>Saved Outfit:</h3>
                <ul>{outfits.map((outfit, index) => (
                    <li key={index}>{outfit.top} + {outfit.bottom}</li>
                ))}</ul>
            </div>
        </div>
    )
};

export default OutfitPicker;