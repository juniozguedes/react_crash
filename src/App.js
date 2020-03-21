import React, { Component } from 'react';
import Todos from './components/Todos';

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
   component
  render(){ 
    return(
    <div className="App">
      <Todos todos={this.state.todos}/>
      <h1>app</h1>
    </div>
  );
  }
}

export default App;

