import React from 'react'
import Form from './Form/index'
import TodoList from './TodoList/index'
import {useState,useEffect} from 'react'
import './index.css'
import { Divider } from 'semantic-ui-react'
import toDoService from '../../services/toDoService.js'


function Todos() {
    const [todos,setTodos]=useState([])
    
    const [completedTodoList,setCompletedTodos]=useState([])
    let todoAPI  =  new toDoService();
    
  
    useEffect(()=>{
        console.log(completedTodoList)
        
        todoAPI.getAllData().then(todo=>{
            const todos = todo.data;
            var titles = []
            for(var i = 0 ; i<todos.length ; i++){
                titles.push(todos[i].title)
            }
            setTodos(titles)
            console.log(todos)
        })
        
    },[])

    return (
        <div className='main'>
            <Form todos={todos} setTodos={setTodos}/>
            <TodoList todos={todos} completedTodoList={completedTodoList} setCompletedTodoList = {setCompletedTodos}/>
            <Divider></Divider>
        </div>
    )
}

export default Todos