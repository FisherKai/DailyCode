import React, { useRef } from 'react'

export default function TdInput() {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <div className="td-input">
            <input type="text" placeholder="请输入代办项" />
            <button>增加</button>
        </div>
    )
}
