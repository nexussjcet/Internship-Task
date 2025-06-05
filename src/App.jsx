import { useEffect, useState } from "react"
import TodoInput from "./components/TodoInput"
import Todolist from "./components/Todolist"

function App() { 
  
  const [newTodo,setNewTodo]=useState('')
  const [todos,setTodos]=useState([])

  function persistData(todoArray)
  {
    localStorage.setItem('todos',JSON.stringify({todos:todoArray}))
  }

  function addNewTodo(newTodo)
  {
    const todoArray=[...todos,newTodo]
    
    setTodos(todoArray)
    persistData(todoArray)
  }

  function deleteTodo(index)
  {
    const todoArray=todos.filter((todo,todoIndex)=>
    {
      return todoIndex!==index
    })
    persistData(todoArray)
    setTodos(todoArray)
  }

  function editTodo(index)
  {
    const toEdit=todos[index]
    setNewTodo(toEdit)
    deleteTodo(index)

  }

  useEffect(()=>{
     if(!localStorage)
    {
      return;
    }
    let localTodos=localStorage.getItem('todos')
    if(!localTodos)
    {
      return
    }
    localTodos=JSON.parse(localTodos).todos;
    setTodos(localTodos) 
  },[])

  return (
    <>
      <TodoInput newTodo={newTodo} setNewTodo={setNewTodo} addNewTodo={addNewTodo}/>
      <Todolist todos={todos} deleteTodo={deleteTodo} editTodo={editTodo}/>
    </>
  )
}

export default App
