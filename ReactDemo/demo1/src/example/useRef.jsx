/**
 * useRef
 * 1、绑定dom
 * 2、保存数据
 */

import React, { useRef, useState, useCallback } from 'react';

function UseRefExample() {
    const inputRef = useRef();
    return (
        <div>
            <section>
                <section>
                    <label>输入：</label>
                    <input ref={inputRef}></input>
                </section>
                <button onClick={() => { alert(inputRef.current.value) }}>输出</button>
            </section>
            <section>
                <UseRefExample2></UseRefExample2>
            </section>
        </div>
    );
}


function UseRefExample2() {
    const [time, setTime] = useState(0);
    const timer = useRef(null);

    const handleStart = useCallback(() => {
        if (!timer.current) {
            timer.current = setInterval(() => {
                setTime((time) => time + 1);
            }, 100)
        }
    });

    const handleEnd = useCallback(() => {
        window.clearInterval(timer.current);
        timer.current = null;
    })

    return (
        <div>
            <p>{time / 10} seconds</p>
            <button onClick={handleStart}>开始</button>
            <button onClick={handleEnd}>暂停</button>
        </div>
    )
}

export default UseRefExample;