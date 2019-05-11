import React from 'react';

export default (props) => (
  <li>
    <span onClick={props.toggleComplete} style={{ textDecoration: props.item.complete ? 'line-through' : '' }} >
      {props.item.inputValue}
    </span>
    <div className='todo-icons'>
      <i onClick={props.toggleComplete} style={{ color: props.item.complete ? '#5CBF2A' : '' }} className="fas fa-check"></i>
      <i className="fas fa-trash-alt" onClick={props.onDelete}></i>
    </div>
  </li>
)