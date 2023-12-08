import React, { Component } from "react";
import "./Home.css";
import Home1 from "./Home1.js";
import H1 from "./wild.jpg";
import H2 from "./heritage.jpg";
import H3 from "./trek.webp";
import C1 from "./itiger.png";
import C2 from "./iheritage.png";
import C3 from "./itrek.png";
import { NavLink } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <>
        <div className="bckimg">
          <h1 className="mainhead">Let's plan your best holidays with</h1>
          <p className="headpara"> Happy-Trip</p>

          <NavLink to="/about" className="learn">
            Explore Us
          </NavLink>
        </div>

        <Home1 />

        <div className="colums">
          <h1 className="colh1">Know more about India and Indian Things</h1>
          <div className="col">
            <img src={H1} className="colimg" alt="This is an wildlife" />
            <div className="coldiv">
              <img src={C1} className="subcolimg" alt="This is an heritage" />
            </div>
            <div className="colpara">
              Indiags national parks & wildlife sanctuaries are home to a rich
              flora & fauna, and a Wildlife Safari
            </div>
          </div>

          <div className="col">
            <img src={H2} className="colimg" alt="This is an heritage" />
            <div className="coldiv">
              <img src={C2} className="subcolimg" alt="This is an heritage" />
            </div>
            <div className="colpara">
              We offer the best of our services in the heritage tours by
              arranging expert tour guides,ensuring a memorable experience.
            </div>
          </div>

          <div className="col">
            <img src={H3} className="colimg" alt="This is an trekking" />
            <div className="coldiv">
              <img src={C3} className="subcolimg" alt="This is an heritage" />
            </div>
            <div className="colpara">
              We offer nnumerable trekking trails to explore the natural beauty
              and thrill that is difficult to find anywhere else.
            </div>
          </div>
        </div>

        <div className="wlcm">
          <h2 className="hmenu"> Explore your favourite places.</h2>

          <div className="buttons">
            <NavLink to="/destn">
              <div className="bt" id="bt1">
                Destination
              </div>
            </NavLink>

            <NavLink to="/package">
              <div className="bt" id="bt2">
                Packages
              </div>
            </NavLink>

            <NavLink to="/accomodation">
              <div className="bt" id="bt3">
                Accomodation
              </div>
            </NavLink>

            <NavLink to="/offer">
              <div className="bt" id="bt4">
                Offers
              </div>
            </NavLink>
          </div>

          <NavLink to="/destn" className="plantrip">
            plan a trip
          </NavLink>
        </div>
      </>
    );
  }
}

export default Home;
