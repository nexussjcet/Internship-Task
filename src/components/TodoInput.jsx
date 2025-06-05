import React from 'react'

export default function TodoInput(props) {

    const{newTodo,setNewTodo,addNewTodo}=props

  return (
    <header>
      <input type="text" placeholder='Enter your goal' value={newTodo} onChange={(event)=>{setNewTodo(event.target.value)}}/>
      <button onClick={()=>{addNewTodo(newTodo)
         setNewTodo('')}}>Add</button>
    </header>
  )
}
