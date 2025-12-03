
import React, { useState } from 'react';
function MyComponent() {
    const [car, setCar] = useState({
        year: 2024,
        make: "Ford",
        model: "Mustang",
    });

    function handleYearChange(event) {
        // setCar({year = 2025}); // This would overwrite the entire car object, losing make and model.
        setCar(prevCar => ({
            ...prevCar, year:event.target.value
        })); // Correct way to update year while preserving other properties.
    }

    function handleMakeChange(event) {
        setCar(prevCar => ({
            ...prevCar, make:event.target.value
        }));
    }

    function handleModelChange(event) {
        setCar(prevCar => ({
            ...prevCar, model:event.target.value
        }));
    }



    return (
        <div>
            <p>Your favorite car is: {car.year}, {car.make}, {car.model}</p>
            <input type="number" value={car.year} onChange={handleYearChange}/><br />
            <input type="text" value={car.make} onChange={handleMakeChange}/><br />
            <input type="text" value={car.model} onChange={handleModelChange}/><br />
        </div>
    );
}

export default MyComponent;