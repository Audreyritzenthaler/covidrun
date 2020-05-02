import React from "react";

export default (props) => {
  const style = {
    left: `${props.dot[0]}%`,
    top: `${props.dot[1]}%`,
    width: "50px"
  };
  

  return (
    <div className="snake-food" style={style}>
      <img
        src="https://image.flaticon.com/icons/svg/1057/1057335.svg"
        style={style} alt="avatar-couch"
      />
    </div>
  );
};  
