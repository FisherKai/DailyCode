import { useState, useRef, useMemo,useCallback } from "react";
import Child from "./Child";
import Child2 from "./Child2";

export default function Father() {
    const [fatherName, setFatherName] = useState("yukai");
    const fatherNameRef = useRef();
    const ChildMemo = useMemo(() => {
        return Child;
    },[fatherName]);
    const ChildMemo2 = useCallback(() => {
        return <Child2></Child2>;
    })
    return (
        <div>
            <p>Father</p>
            <p>fatherName：{fatherName}</p>
            <input type="text" ref={fatherNameRef} />
            <button onClick={() => { setFatherName(fatherNameRef.current.value); fatherNameRef.current.value = "" }}>更改名字</button>
            <ChildMemo fatherName={fatherName} fatherNameRef={fatherNameRef} setFatherValue={(value) => { setFatherName(value) }}></ChildMemo>
            <ChildMemo2></ChildMemo2>
        </div>
    )
}