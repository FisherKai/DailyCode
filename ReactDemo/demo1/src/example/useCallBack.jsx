import React, { useState, useCallback, useEffect } from "react";
export default function Parent() {
    const [count, setCount] = useState(1);
    const [value, setValue] = useState(1);

    const callback = useCallback(() => {
        return count;
    }, [count]);

    return (
        console.log(`父组件渲染了`),
        <div>
            <h1>Parent:{count}</h1>
            <h1>Value:{value}</h1>
            <Child callback={callback}></Child>
            <div>
                <button onClick={() => setCount(count + 1)}>Count+1</button>
                <button onClick={() => setValue(value + 1)}>Value+1</button>
            </div>
        </div>
    )
}

function Child({ callback }) {
    const [count, setCount] = useState(() => callback());
    useEffect(() => {
        setCount(callback())
    }, [callback])

    return (
        console.log(`子组件渲染了`),
        <h2>Child:{count}</h2>
    )
}