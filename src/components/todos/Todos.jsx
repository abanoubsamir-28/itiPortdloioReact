import React from 'react'
import Todo from '../item/Todo'
import {TODOS} from '../../DATA'
const myTodos = TODOS
const Todos = () => {
   const getDataFromChild = (dataFromChild) => {
        console.log("Parent" , dataFromChild)
    } 


  return <div className='d-flex gap-2 flex-wrap justify-content-center py-3'>
    {myTodos.map(todo => <Todo todo={todo} getDataFromChild={getDataFromChild} />)}
  </div>
  
}

export default Todos