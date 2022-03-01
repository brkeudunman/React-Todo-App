import React from 'react'
import './index.css'
import { Checkbox,Divider } from 'semantic-ui-react'


import {useState} from 'react'



function TodoList({todos,completedTodoList}) {

  var [new_todos,setTodos]=useState(todos)
  var [new_CompletedTodoList,setCompletedTodoList] = useState(completedTodoList)


  var state = false


  const removeTodo = (index) => {
    new_todos=todos.splice(index,1)
    setTodos(new_todos)
  }

  const removeCompletedTodo = (index)=>{
    new_CompletedTodoList=completedTodoList.splice(index,1)
    setCompletedTodoList(new_CompletedTodoList)
    
  }

  const addCompletedTodo = (index)=>{
      completedTodoList.push(todos[index])
      removeTodo(index)
      console.log(todos[index])
      
      state = true
  }



  return (
    <div className='TodoList'>
      <ul className='list'>
        {
          todos.map((todo,index)=>
            <li key={index} >
              <Checkbox className='checkbox_padding' label={todo} onChange={()=>addCompletedTodo(index)} checked={state}/>
              
              <button id='removeButton' onClick={()=>{removeTodo(index)}}>Remove</button>
            </li>
          )
        }
      </ul>
      <Divider/>
      <ul className='completedTodos'>
        {
          completedTodoList.map((todo,index)=>
          <li key={index}>
            <div><Checkbox className = 'ticked_checkbox' onClick={()=>{removeCompletedTodo(index)}} checked={!state}/>
            <del className='font_ticked_todo'>{todo}</del></div>
          </li>
          )
        }
      </ul>
    </div>
  )
}

export default TodoList