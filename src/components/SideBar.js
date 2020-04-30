import React from "react";
import { Link } from "react-router-dom"
import { slide as Menu } from "react-burger-menu";
import './SideBar.css'

export default props => {
  return (
    <Menu right>
        <Link className="linkNav" to='/'> Snake </Link>
        <Link className="linkNav" to='/TicTac'>Tic-Tac-Toe</Link>
        <Link className="linkNav" to='/WCS'>Wild code School</Link>
        <Link className="linkNav" to='/HACKATON'>#HACKATON</Link>
        <Link className="linkNav" to='/faq'>FAQ</Link>
    </Menu>
  );
};
