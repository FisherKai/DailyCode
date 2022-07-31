import React, { useState,useMemo } from 'react';

// function WithoutMemo() {
//     const [count, setCount] = useState(1);
//     const [value, setValue] = useState(1);

//     function expensive() {
//         console.log(`compute`);
//         let sum = 0;
//         for (let i = 0; i < count * 1000; i++) {
//             sum += i;
//         }
//         return sum;
//     }

//     return (
//         <div>
//             <h1>Count: {count}</h1>
//             <h1>Value: {value}</h1>
//             <h1>Expensive:{expensive()}</h1>
//             <div>
//                 <button onClick={() => setCount(count + 1)}>Count + 1</button>
//                 <button onClick={() => setValue(value + 2)}>Value + 2</button>
//             </div>
//         </div>
//     );
// }

// export default WithoutMemo;


function useMemoExample() {
    const [count, setCount] = useState(1);
    const [value, setValue] = useState(1);

    const expensive = useMemo(() => {
        console.log(`compute`);
        let sum = 0;
        for (let i = 0; i < count * 1000; i++) {
            sum += i;
        }
        return sum;
    }, [count]);

    return (
        <div>
            <h1>Count: {count}</h1>
            <h1>Value: {value}</h1>
            <h1>Expensive:{expensive}</h1>
            <div>
                <button onClick={() => setCount(count + 1)}>Count + 1</button>
                <button onClick={() => setValue(value + 2)}>Value + 2</button>
            </div>
        </div>
    );
}

export default useMemoExample;