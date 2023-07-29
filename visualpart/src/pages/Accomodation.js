import React, { Component } from "react";
import "./Accomodation.css";
import Accomodation1 from "./Accomodation1.js";
// import { NavLink } from 'react-router-dom';

export default class Accomodation extends Component {
  render() {
    return (
      <>
        <div className="bgacco">
          <div className="accodiv">
            <div className="accodiv1">
              <h1 className="accohead">
                Watch the Stars and <br />
                Soak up the sun.! <br /> Experience peace & comfort.
              </h1>
              <p className="accopara">
                Feel the culture of India..!!! <br /> Visit the various states
                of India and start the beautiful <br />
                journey with the authentic gesture now.
                <br />
                We offer the best of our services in the heritage tours by
                <br />
                arranging expert tour guides, transportation, <br />
                and accommodations and ensuring a memorable experience.
                <br />
                We organize and handcraft the best travel experience that <br />
                is comfortable and full of insights.
              </p>
            </div>
          </div>
          <Accomodation1/>
        </div>
      </>
    );
  }
}
