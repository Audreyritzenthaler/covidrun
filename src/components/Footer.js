import React from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import "./Footer.css";

class Footer extends React.Component {
    state={
        emoticones: []
    }
  getImage = () => {
    axios
      .get(
        "https://emoji-api.com/emojis?access_key=21a71517aa9c4d05e7513311b9c3dc47c02ff105"
      )
      .then((res) => console.log(this.setState({emoticones: res.data})))
  }

componentDidMount(){
    this.getImage()
}
  render() {
    return (
      <footer>
          {/* {this.state.emoticones.map(emo =>{
              return <p>{emo.character}</p>
          })} */}
          <ul>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
      </footer>
    );
  }
}

export default Footer;
