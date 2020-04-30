import React from "react";
import axios from "axios";
import Header from './components/Header'
import GameSnake from './components/GameSnake'
import Footer from './components/Footer'
import {Switch,Route} from 'react-router-dom';

import "./App.css";

class App extends React.Component {
  state = {
    image: "https://images.unsplash.com/photo-1588160050429-3c281722cda9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzMDk5MX0"
  };

  // getImage = () => {
  //   axios
  //     .get(
  //       "https://api.unsplash.com/photos/random/?client_id=XsBWrsL88SU3i7ZQBjpURoIiYrVZ04VpNiIUNnJFUfc"
  //     )
  //     .then((res) => this.setState({ image: res.data.urls.regular }));
  // };

  // componentDidMount = () => {
  //   this.getImage();
  // };

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
