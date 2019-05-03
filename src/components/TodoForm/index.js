import React from 'react';
import TodoList from '../TodoList'
import Todo from '../Todo'


class TodoForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      passedValues: []
    }

  }

  addTodo = (todo) => {
    this.setState({ passedValues: [...this.state.passedValues, todo] })
  }

  toggleComplete = (id) => {
    this.setState({
      passedValues: this.state.passedValues.map(todo => {
        if (todo.id === id) {
          return {...todo, complete: !todo.complete};
        } else {
          return todo;
        }
      })
    })
  }

  handleDeleteTodo = (id) => {
    this.setState({
      passedValues: this.state.passedValues.filter(todo => todo.id !== id)
    })
    console.log(this.state.passedValues)
  }

  render() {
    const { passedValues } = this.state
    return (
      <div className="todo">
        <h3>ToDo</h3>
        <p>What needs to be done?</p>
        <div className='list-wrapper'>
        <ol>
          {passedValues.map((item) => (
            <Todo
              key={item.id}
              item={item}
              toggleComplete={() => this.toggleComplete(item.id)}
              onDelete={() => this.handleDeleteTodo(item.id)}
            />
          ))}
        </ol>
        </div>
        <TodoList passedValues={passedValues} onSubmit={this.addTodo} />
      </div>
    )
  }
}

export default TodoForm;

