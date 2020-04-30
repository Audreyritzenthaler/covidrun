import React from "react";
import { Link } from "react-router-dom"
import { slide as Menu } from "react-burger-menu";
import './SideBar.css'

export default props => {
  return (
    <Menu>
        <nav>
            <ul className="ulNav">
                <li className="liNav"><Link className="linkNav" to='/'> Snake </Link></li>
                <li className="liNav"><Link className="linkNav" to='/TicTac'>Tic-Tac-Toe</Link></li>
                <li className="liNav"><Link className="linkNav" to='/WCS'>Wild code School</Link></li>
                <li className="liNav"><Link className="linkNav" to='/HACKATON'>#HACKATON</Link></li>
            </ul>    
        </nav>
    </Menu>
  );
};
