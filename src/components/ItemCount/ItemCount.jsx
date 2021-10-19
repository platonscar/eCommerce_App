import React, { useState } from 'react';
import './ItemCount.css'

const ItemCount = ({ count, limit }) => {
    const [counter, setCounter] = useState(count);
    const decrease = () => {
        if (counter <= 0) {
            alert("You can't have less than 0 dates");
        } else {
            setCounter(counter - 1)
        }
    }
    const increase = () => {
        if (counter === limit) {
            alert("You can't have more dates, is the limit");
        } else {
            setCounter(counter + 1);
        }
    }
    return (
        <div className="button_count_container-principal">
            <div className="button_count_container">
                <button className="button_count" id="decrease_button" onClick={decrease}>-</button>
                <span>{counter}</span>
                <button className="button_count" id="increase_button" onClick={increase}>+</button>
            </div>

        </div>
    )
}
export default ItemCount;

