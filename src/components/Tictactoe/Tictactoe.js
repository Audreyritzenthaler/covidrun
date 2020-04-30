import React from 'react';

import Game from './Game';

import './Tictactoe.css';


class Tictactoe extends React.Component {
    render(){
        return(
            <div className="morpions">
                <Game />
            </div>
        )
    }
}

export default Tictactoe
