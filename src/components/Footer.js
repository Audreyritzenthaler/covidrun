import React from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import "./Footer.css";

class Footer extends React.Component {

  render() {
    return (
      <footer>
          <ul>
            <li><Link className="lili" to="/faq">FAQ</Link></li>
            <a className="lili" href="https://www.wildcodeschool.com/fr-FR" target="_blank">Wild Code School</a>
            <li><Link className="lili" to='/HACKATON'>#HACKATON</Link></li>
          </ul>
      </footer>
    );
  }
}

export default Footer;
