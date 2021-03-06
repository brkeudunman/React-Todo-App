import React from 'react'
import {useState} from 'react'
import toDoService from '../../../services/toDoService'
import './index.css'

function Form({todos,setTodos}) {

  const initialValue = ""
  const [input,setInput] = useState(initialValue)

  const changeHandler = (event)=>{
    setInput(event.target.value)
  }

  let todoAPI = new toDoService();

  const onSubmit = (event)=>{
      event.preventDefault();
      if(input===""){
          return false
      }
      setTodos([...todos,input])
      setInput(initialValue) 

      todoAPI.addData(input).then((response=>{
         console.log("test response")
         console.log(response)
      })) //API ADD 

  }

  return (
    <div className='Form'>
    <h1>A To Do App</h1>  

      <form action="" onSubmit={onSubmit}>
          <input 
          id='inputTodo'
          type="text" 
          placeholder='Enter a Todo'
          className='inputTodo'
          onChange={changeHandler}
          value={input}
          />

          <button className='addButton'>
          Add
          </button>
      </form>
    </div>
  )
}

export default Form

