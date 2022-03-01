import React from 'react'
import Form from './Form/index'
import TodoList from './TodoList/index'
import {useState,useEffect} from 'react'
import './index.css'
import { Divider } from 'semantic-ui-react'

function Todos() {
    const [todos,setTodos]=useState([])
    
    const [completedTodoList,setCompletedTodos]=useState([])

  
    useEffect(()=>{
        console.log(completedTodoList)
    },[completedTodoList])

    return (
        <div className='main'>
            <Form todos={todos} setTodos={setTodos}/>
            <TodoList todos={todos} completedTodoList={completedTodoList} setCompletedTodoList = {setCompletedTodos}/>
            <Divider></Divider>
        </div>
    )
}

export default Todos