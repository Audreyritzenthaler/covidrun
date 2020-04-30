import React from "react";
import axios from "axios";

// import Perso from './components/Perso';

import "./App.css";

class App extends React.Component {
  state = {
    webcamArray: [],
  };

  getWebcam = () => {
    axios
      .get(
        "https://api.windy.com/api/webcams/v2/list/orderby=popularity?show=webcams:image,location,player&key=v86LqZILmLPm1rCHTj4eDCcDGKc3Fveq"
      )
      .then((res) => this.setState({ webcamArray: res.data.result.webcams }));
  };

  componentDidMount = () => {
    this.getWebcam();
  };

  render() {
    // console.log(this.state.webcamArray)
    return this.state.image === null ? (
      "Loading"
    ) : (
      <div className="App">
        <img src={this.state.image} alt="" />
        <div className="mosaique">
          {this.state.webcamArray && this.state.webcamArray.map((webcam) => {
            return <div><img src={webcam.image.daylight.preview} alt={webcam.title} /></div>
          })}
        </div>
      </div>
    );
  }
}

export default App;
