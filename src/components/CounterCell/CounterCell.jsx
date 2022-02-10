import React from "react";
import classnames from 'classnames';
import './CounterCell.css';
import propTypes from 'prop-types';



const  CounterCell = (props) => {
  return (
  <div
    className={classnames("flex-container", {
      green: props.count >= 8,
      yellow: props.count >= 5 && props.count <= 7,
      red: props.count < 5,
    })}
  >
    <p className="label">{props.count}</p>
    <div className="flex-container">
      <button onClick={ () => props.increment(props.id)}>+</button>
      <button disabled={props.count === 0} onClick={() => props.decrement(props.id)}>-</button>
    </div>
  </div>
  );
}

  CounterCell.propTypes = {
    count : propTypes.number.isRequired , 
    increment : propTypes.func.isRequired , 
    decrement : propTypes.func.isRequired , 
    id : propTypes.number.isRequired
  }


export default CounterCell;
