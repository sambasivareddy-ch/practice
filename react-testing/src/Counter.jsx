import React, { useState } from "react";

const Counter = ({ initialState }) => {
    const [count, setCount] = useState(initialState);

    const incrementCount = () => {
        setCount((prev) => prev + 1)
    }

    const decrementCount = () => {
        setCount((prev) => prev - 1)
    }

    const resetCount = () => {
        setCount(initialState)
    }

    return <div>
        <h3 data-testid="count">{count}</h3>
        
        <div>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    </div>
}

export default Counter;