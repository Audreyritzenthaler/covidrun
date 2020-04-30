import React from 'react';
import {Link} from 'react-router-dom';

import '../App.css'


class Header extends React.Component{
    
    render(){
        return(
            <div className="header">
                <h1 className='title'>Covid Run</h1>
                <nav>
                    <ul className="ulNav">
                        <li className="liNav"><Link to='/'> Snake </Link></li>
                        <li className="liNav"><Link to='/TicTac'>Tic-Tac-Toe</Link></li>
                        <li className="liNav"><Link to='/WCS'>Wild code School</Link></li>
                        <li className="liNav"><Link to='/HACKATON'>#HACKATON</Link></li>
                    </ul>    
                </nav>
                
            </div>
        )
    }
}

export default Header