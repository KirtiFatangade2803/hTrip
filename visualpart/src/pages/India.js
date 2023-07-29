import React, { Component } from "react";
import "./India.css";
import img from "./img.png";
import D1 from "./Kashmir.webp";
import D2 from "./maharshtra.jpg";
import D3 from "./sikkim.png";
import D4 from "./tamilnadu.jpg";
import D5 from "./Rajasthan.jpg";
import D6 from "./Punjab.jpg";
import D7 from "./kerala.webp";
import D8 from "./Manipur.jpg";
import D9 from "./himachal.jpg";
// import { NavLink } from "react-router-dom";

class India extends Component {
  render() {
    return (
      <>
        <div className="bgmenu2">
          <div className="hdiv">
            <div className="hdiv1">
              <h1 className="desthead">Where would you like to go ?</h1>
              <p className="para">
                Feel the culture of India..!!! <br /> Visit the various states
                of India and start the beautiful journey with the authentic
                gesture now.
              </p>
            </div>
            <img src={img} alt="Hangout" className="hdiv2" />
          </div>

          <span className="mainspan">Explore the Destinations by States</span>
          <div className="group">
            <div className="elements">
              <img
                src={D1}
                alt="kashmir"
                className="img"
                width="270px"
                height="170px"
              />
              <h4 className="h4">Kashmir</h4>
            </div>

            <div className="elements">
              <img
                src={D2}
                alt="Maharashtra"
                className="img"
                width="270px"
                height="170px"
              />
              <h4 className="h4">Maharashtra</h4>
            </div>

            <div className="elements">
              <img
                src={D3}
                alt="Sikkim"
                className="img"
                width="270px"
                height="170px"
              />
              <h4 className="h4">Sikkim</h4>
            </div>

            <div className="elements">
              <img
                src={D4}
                alt="Tamil Nadu"
                className="img"
                width="270px"
                height="170px"
              />
              <h4 className="h4">Tamil Nadu</h4>
            </div>

            <div className="elements">
              <img
                src={D5}
                alt="Rajasthan"
                className="img"
                width="270px"
                height="170px"
              />
              <h4 className="h4">Rajasthan</h4>
            </div>

            <div className="elements">
              <img
                src={D6}
                alt="Punjab"
                className="img"
                width="270px"
                height="170px"
              />
              <h4 className="h4">Punjab</h4>
            </div>

            <div className="elements">
              <img
                src={D7}
                alt="Kerala"
                className="img"
                width="270px"
                height="170px"
              />
              <h4 className="h4">Kerala</h4>
            </div>

            <div className="elements">
              <img
                src={D8}
                alt="Manipur"
                className="img"
                width="270px"
                height="170px"
              />
              <h4 className="h4">Manipur</h4>
            </div>

            <div className="elements">
              <img
                src={D9}
                alt="Himachal Pradesh"
                className="img"
                width="270px"
                height="170px"
              />
              <h4 className="h4">Himachal Pradesh</h4>
            </div>
          </div>
          {/* <NavLink to="/menu" className="proceed">
            Proceed
          </NavLink> */}
        </div>
      </>
    );
  }
}
export default India;
