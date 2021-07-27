import React from 'react'
import TdInput from './Input'
import TdList from './List'

export default function TodoList() {
    return (
        <div className="todo-list">
            <TdInput></TdInput>
            <TdList></TdList>
        </div>
    )
}
