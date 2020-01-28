import React, { useState } from 'react';

const Counter = ({firstname}) => {

    const [count, setCount] = useState(0);

    return (
        <>
            <h4>Welcome {firstname}</h4>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>increment</button>
            <button onClick={() => setCount(count - 1)}>decrement</button>
        </>
    )
}

export default Counter;