import React from 'react'

export default function TodoWork(props) {

    const {children,index,deleteTodo,editTodo}=props

  return (
    <li>
        {children}
        <div className='buttons'>
            <button className='button1' onClick={()=>{deleteTodo(index)}}>
            <i class="fa-solid fa-xmark"></i>
        </button>
        <button onClick={()=>{editTodo(index)}}>
            <i class="fa-solid fa-pen"></i>
        </button>
        </div>
    </li>
  )
}
