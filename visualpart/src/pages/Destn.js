import React, { Component } from 'react'
import "./Destn.css";
import India from "./India.js";
import { NavLink } from "react-router-dom";

 class Destn extends Component {
  render() {
    return (
      <>
      <div>
        <India/>
      </div>
      <NavLink to="/home" className="dmake">Back</NavLink>
      </>
    )
  }
}


export default Destn;
