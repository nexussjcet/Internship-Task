import React from 'react'
import TodoWork from './TodoWork'

export default function Todolist(props) {

    const {todos}=props

  return (
    <ul className="list">
        {
            todos.map((todo,todoIndex)=>{
                return(
                    <TodoWork index={todoIndex} {...props}>
                        <p>{todo}</p>
                    </TodoWork>
                )
            })
        }
    </ul>
  )
}
