import React from "react";
import axios from "axios";
import Header from './components/Header'
import GameSnake from './components/GameSnake'
import Footer from './components/Footer'
import {Switch,Route} from 'react-router-dom';

import "./App.css";

class App extends React.Component {
  state = {
    image: null
  };

  getImage = () => {
    axios
      .get(
        "http://www.splashbase.co/api/v1/images/random"
      )
      .then((res) => this.setState({ image: res.data.url }));
  };

  componentDidMount = () => {
    this.getImage();
  };

  render() {
    return this.state.image === null ? (
      "Loading"
    ) : (
      <div className="App" style={{background:`url(${this.state.image}) no-repeat center` }}>
        <Header />
        <Switch>
          <Route exact path="/" component={GameSnake}/>
          <Route to="/TicTac" />
          <Route to="/WCS" />
          <Route to="/HACKATON" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
