import * as React from 'react';
import { useState } from 'react';

const Button = ({ children }) => {
    return (React.createElement("button", { style: {
            padding: "10px 20px",
            fontSize: "1.2em",
            borderRadius: "5px",
            cursor: "pointer",
            backgroundColor: "pink",
            color: "black",
            border: "none"
        } }, children));
};

const useCounter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    return { count, increment, decrement };
};

export { Button, useCounter };
