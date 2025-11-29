
import react, { useState } from 'react';
function MyComponent() {
    const [name, setName] = useState('Guest');
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState('');
    const [payment, setPayment] = useState('');
    const [shipping, setShipping] = useState('delivery');

    function handleChangeName(event) {
        setName(event.target.value);
    }
    function handleChangeQuantity(event) {
        setQuantity(event.target.value);
    }
    function handleChangeComment(event) {
        setComment(event.target.value);
    }
    function handleChangePayment(event) {
        setPayment(event.target.value);
    }
    function handleChangeShipping(event) {
        setShipping(event.target.value);
    }

    return (
        <div>
            <input 
                value = {name}
                onChange = {(event) => handleChangeName(event)}
            />
            <p>Name: {name}</p>
            <input 
                type = "number"
                value = {quantity}
                onChange = {(event) => handleChangeQuantity(event)}
            />
            <p>Quantity: {quantity}</p>
            <textarea 
                type = "string"
                onChange = {(event) => handleChangeComment(event)}
                placeholder='Enter delivery instruction'
            />
            <p>comment: {comment}</p>

            <select value={payment}
                onChange = {(event) => handleChangePayment(event)}
            >
                <option value="">select an option</option>
                <option value="Visa">visa</option>
                <option value="Master Card">mastercard</option>
                <option value="Gift Card">gift card</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type='radio' value="Pick up"
                checked ={shipping === "Pick up"}
                onChange = {(event) => handleChangeShipping(event)} 
                />
                pickup order
            </label>
            <label>
                <input type='radio' value="delivery" 
                checked ={shipping === "delivery"}
                onChange = {(event) => handleChangeShipping(event)}
                />
                delivery
                <p>shipping: {shipping}</p>
            </label>
            

            
        </div>
    );
}

export default MyComponent;