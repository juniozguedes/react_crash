import React, { Component } from 'react'
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
    //console.log(props.todos[0].title)

    render(){
     return this.props.todos.map((todo) =>  (
        <TodoItem key={todo.id} 
        todo={todo}
        markComplete={this.props.markComplete}
        deleteItem={this.props.deleteItem}
        />
        ));
    }
}

//PropTypes - Good practice
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;



