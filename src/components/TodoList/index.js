import React, { Component } from 'react';
import shortid from 'shortid';


export default class TodoList extends Component {

  constructor(props){
    super(props)
      this.state = {
        inputValue: ''
      }
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit({
      inputValue: this.state.inputValue,
      complete: false,
      id: shortid.generate()
    });
    this.setState({
      inputValue: ''
    })
  }


  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div>
        <form className="newForm"
          onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.inputValue}
            name="inputValue"
            onChange={this.handleChange}
          />
          <button className="submitBtn">Add #{this.props.passedValues.length + 1}</button>
        </form>
      </div>
    )
  }
}

