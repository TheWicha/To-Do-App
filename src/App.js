import React from 'react';
import TodoForm from './components/TodoForm'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      passedValue: []
    }
  }

  addTodo = todo => {

    this.setState({
      todos: [todo, ...this.state.passedValue]
    })
  }

  render() {
    return (<div className='todo'>
        <TodoForm onSubmit={this.addTodo}/>
      </div>)
  }
}

export default App;


