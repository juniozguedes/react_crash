import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';

import './App.css';

class App extends Component {
  state = {
   todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
        },
      {
        id: 2,
        title: 'Take out the thing',
        completed: false
        },
      {
        id: 3,
        title: 'Take out the stuff',
        completed: true
      }
  
    ]
  }

  //Toggle Complete
  markComplete = (id) =>{
   this.setState({ todos: this.state.todos.map(todo => {
     if(todo.id === id){
       todo.completed = !todo.completed
     }

     return todo;
   }) });    
  }

  //Delete Item
  deleteItem = (id) =>{
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });    
  }

  render() { 
    
    return(
    <div className="App">
      <Header/>
      <Todos todos={this.state.todos} markComplete={this.markComplete} deleteItem={this.deleteItem}/>
      <h1>This is an H1</h1>
    </div>
  );
  }
}

export default App;

