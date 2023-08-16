import React from 'react'

const Todo = (props) => {
const {todo , getDataFromChild } = props
  return <div className="card" style={{
    width:'18rem'
  }}>
  <img src="https://media.istockphoto.com/id/1193476717/photo/male-hands-making-a-to-do-list-in-a-notebook-over-an-office-desk.jpg?b=1&s=612x612&w=0&k=20&c=QFWZyHoAvAvcUz8tCHi4WufJEke-G1TFJO-KfZu7ErQ=" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">ToDo ID : {todo.id}</h5>
    <p className="card-text">{todo.todo}</p>
    <button className='btn btn-primary' onClick={()=> getDataFromChild(props.todo.id)}>Send To Parent</button>
  </div>
</div>
}

export default Todo




// todo : {
//     "id": 1,
//     "todo": "Do something nice for someone I care about",
//     "completed": true,
//     "userId": 26
// }