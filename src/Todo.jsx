import React from 'react'
import { useContext } from 'react'
import { TodoContext } from './assignment question 2/TodoContext'

const Todo = () => {
    const todos = useContext(TodoContext);
    const [todo, setTodo] = React.useState('');
  return (
    <div>   
        <h1>Todo List</h1>

        <input value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        placeholder='Add Todo' type='text' />
        <button
        onClick={()=>{
            todos.addTodo(todo)
        }}
        >Add</button>
{
    todos.todos.map((item)=>{
        return (
            <div key={item.id} style={{border:'1px solid black', margin:'10px', padding:'10px'}}>
                <h3>{item.title}</h3>
                <p>Status: {item.status ? 'Completed' : 'Pending'}</p>
                <p>Created At: {item.createdAt}</p>
            </div>
        )
    })
}
    </div>
  )
}

export default Todo