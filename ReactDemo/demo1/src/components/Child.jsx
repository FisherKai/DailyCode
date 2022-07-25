import { useRef } from "react"

export default function Child(props) {
    const childInputRef = useRef();
    console.log(props);
    return (
        <div>
            <p>从Father组件拿到的fatherName:{props.fatherName}</p>
            <input type="text" ref={childInputRef} />
            <button onClick={()=>{props.setFatherValue(childInputRef.current.value);childInputRef.current.value=""}}>子组件设置父组件的值</button>
        </div>
    )
}