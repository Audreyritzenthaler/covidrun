import React from "react";
import axios from "axios";
import Hackaton from './components/Hackaton'
import Header from './components/Header'
import GameSnake from './components/GameSnake'
import Faq from './components/Faq'
import Footer from './components/Footer'
import SideBar from "./components/SideBar"
import Tictactoe from './components/Tictactoe/Tictactoe'
import {Switch,Route} from 'react-router-dom';


import "./App.css";

class App extends React.Component {
  // state = {
  //   image: null
  // };

  // getImage = () => {
  //   axios
  //     .get(
  //       "http://www.splashbase.co/api/v1/images/random"
  //     )
  //     .then((res) => this.setState({ image: res.data.url }));
  // };

  // componentDidMount = () => {
  //   this.getImage();
  // };

  render() {
    // return this.state.image === null ? (
    //   "Loading"
    // ) : (
      return(
        <div className="App">
         <SideBar />
        <Header />
        <Switch>
          <Route exact path="/" component={GameSnake} />
          <Route path="/TicTac"  component={Tictactoe} />
          <Route path="/hackaton" component={Hackaton} />
          <Route path="/faq" component={Faq} />
        </Switch>
        <Footer />
      </div>
    // );
      )
  }
      
}

export default App;
