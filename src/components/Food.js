import React from 'react';

import sofa from '../Images/sofa.png'

export default (props) => {

  const style = {
    left: `${props.dot[0]}%`,
    top: `${props.dot[1]}%`,
    backgroundImage: `url("https://cdn.shopify.com/s/files/1/2660/5202/products/FE602774_Cabo_Crimson_800x.png?v=1558991140")` 

  }

  return (
    <div className="snake-food" style={style}></div>
  )
}