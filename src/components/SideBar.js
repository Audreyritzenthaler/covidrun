import React from "react";
import { Link } from "react-router-dom"
import { slide as Menu } from "react-burger-menu";
import './SideBar.css'

export default props => {
  return (
    <Menu right>
        <Link className="linkNav" to='/'> Snake </Link>
        <Link className="linkNav" to='/TicTac'>Tic-Tac-Toe</Link>
        <a className="linkNav" href="https://www.wildcodeschool.com/fr-FR" target="_blank">Wild Code School</a>
        <Link className="linkNav" to='/HACKATON'>#HACKATON</Link>
        <Link className="linkNav" to='/faq'>FAQ</Link>
    </Menu>
  );
};
