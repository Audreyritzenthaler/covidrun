import React from "react";

import sofa from "../Images/sofa.png";

export default (props) => {
  const style = {
    left: `${props.dot[0]}%`,
    top: `${props.dot[1]}%`,
    width: "50px"
  };

  return (
    <div className="snake-food" style={style}>
      <img
        src="https://lh3.googleusercontent.com/proxy/4YREvtJrKOO09a0eaWmhp4yHYy0xrUcJx_N-uI_0Wndx25eKmv_A1IfbUZuLunVZGOHBeM1_Z5K_i0W2W9CcwWG5NOg5fYIy"
        style={style} alt=""
      />
    </div>
  );
};












