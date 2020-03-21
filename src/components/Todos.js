import React from 'react'

function Todos(props) {
    console.log(props.todos[0].title)
    
    
     return  (
    <div>{props.todos.map(todo => (<h1>{todo.title}</h1>)
        )
     } 
    </div>)
}


export default Todos;