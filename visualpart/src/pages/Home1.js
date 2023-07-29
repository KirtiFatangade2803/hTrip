import React, { Component } from "react";
import "./Home1.css";
import img from "./india1.jpg";

class Menu1 extends Component {
  render() {
    return (
      <>
  
        <div className="mdiv">
          <div className="mdiv1">
            <h1 className="mdesthead">India has a diverse culture..!!</h1>
            <p className="mpara">
              Indian tradition and cultures are the contiguous of honesty,
              truth, affection, respect and brotherhood with justice, right to
              human. India is a country of rich culture and heritage where
              people have humanity, tolerance, unity, strong social bonds and
              other good qualities.People in India are highly devoted to their
              culture and know good manners to maintain social relations.
            </p>
          </div>
          <img
            src={img}
            alt="Hangout"
            className="mdiv2"
          />
        </div>
      </>
    );
  }
}
export default Menu1;
