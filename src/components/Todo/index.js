import React from 'react';

export default (props) => (
  <li>
    <i onClick={props.toggleComplete} style={{ color: props.item.complete ? '#5CBF2A' : '' }} className="fas fa-check"></i>
    <span onClick={props.toggleComplete} style={{ textDecoration: props.item.complete ? 'line-through' : '' }} >
      {props.item.inputValue}
    </span>
    <i className="fas fa-trash-alt" onClick={props.onDelete}></i>
  </li>
)