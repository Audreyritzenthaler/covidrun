import React, { Component } from 'react';
import Snake from './Snake';
import Food from './Food';

import './GameSnake.css'

const getRandomCoordinates = () => {
  let min = 1;
  let max = 90;
  let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  let y =  Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  return [x,y]
}

const initialState = {
  count: 0,
  food: getRandomCoordinates(),
  speed: 50,
  direction: 'RIGHT',
  snakeDots: [
    [0,0],
    [2,0],
  ]
}

class App extends Component {

  state = initialState;

  componentDidMount() {
    
    setInterval(this.moveSnake, this.state.speed);
    document.onkeydown = this.onKeyDown;
  }

  componentDidUpdate() {
    this.checkIfOutOfBorders();
    this.checkIfCollapsed();
    this.checkIfEat();
  }

  onKeyDown = (e) => {
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        this.setState({direction: 'UP'});
        break;
      case 40:
        this.setState({direction: 'DOWN'});
        break;
      case 37:
        this.setState({direction: 'LEFT'});
        break;
      case 39:
        this.setState({direction: 'RIGHT'});
        break;
    }
    this.setState({count: this.state.count + 1}) 
  }

  moveSnake = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];

    switch (this.state.direction) {
      case 'RIGHT':
        head = [head[0] + 2, head[1]];
        break;
      case 'LEFT':
        head = [head[0] - 2, head[1]];
        break;
      case 'DOWN':
        head = [head[0], head[1] + 2];
        break;
      case 'UP':
        head = [head[0], head[1] - 2];
        break;
    }
    dots.push(head);
    dots.shift();
    this.setState({
      snakeDots: dots
    })
  }

  checkIfOutOfBorders() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      this.onGameOver();
    }
  }

  checkIfCollapsed() {
    let snake = [...this.state.snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach(dot => {
      if (head[0] === dot[0] && head[1] === dot[1]) {
        this.onGameOver();
      }
    })
  }

  checkIfEat() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    let food = this.state.food;
    
    if (head[0] === food[0] && head[1] === food[1]) {
      this.setState({
        food: getRandomCoordinates()
      })
      this.enlargeSnake();
      // this.increaseSpeed();
      // if(this.state.snakeDots.length-2 > 2 && this.state.snakeDots.length-2 < 5){
      //   this.setState({speed: this.state.speed - 10})
      //   setInterval(this.moveSnake, this.state.speed);
      //   console.log(this.state.speed)
      // }
    }
  }

  enlargeSnake() {
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([])
    this.setState({
      snakeDots: newSnake
    })
  }

  increaseSpeed() {
    // if (this.state.snakeDots.length - 2 === 4) {
    //   console.log(this.state.snakeDots.length-2)
    //   this.setState({
    //     speed: this.state.speed - 20
    //   })
    // }
  }

  onGameOver() {
    alert(`TRY AGAIN ! You covided ${this.state.snakeDots.length - 2} humans !`);
    this.setState(initialState)

  }

  render() {
    // this.setState({speed: this.state.speed * this.state.snakeDots.length - 1})
    return (
      <div className="game-area">
        <p className="Score">{this.state.snakeDots.length - 2}</p>
        <Snake  snakeDots={this.state.snakeDots}/>
        <Food count={this.state.count} dot={this.state.food}/>
      </div>
    );
  }
}

export default App;