import React from 'react';

const Square = props => (
  <button className={`${props.winnerClass} square`} onClick={props.onClick}>
    {props.value  === 'X' ? <img src="https://static.data.gouv.fr/avatars/1a/2ab7dce78c4a81a6426e92923b549a.png"/> : props.value === 'O' ?<img src="https://cdn3.iconfinder.com/data/icons/medical-and-health-1-13/52/12-512.png" /> : props.value }
  </button>
);

export default Square
