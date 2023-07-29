import React, { Component } from "react";
import "./Offer.css";
import J1 from "./offer4.jpg";
import J2 from "./city1.webp";
import J3 from "./city2.jpeg";
import J4 from "./city3.jpg";
import J5 from "./city4.cms";
import J6 from "./kerala.webp";
import J7 from "./Kashmir.webp";
import J8 from "./karl.png";
import J9 from "./himachal.jpg";
import { NavLink } from "react-router-dom";

class Offer extends Component {
  render() {
    return (
      <>
        <div className="Japan">
          <div className="japan1">
            <img src={J1} alt="Japan" width="550px" height="520px" />

            <p className="pjap">
              Let Us Plan
              <br />
              You a<font color="red"> Perfect Holiday</font>
              <br /> with
              <br />
              <br />
              <p1>
                * Best Packages <br />
                * Lot of Comfort <br />
                * Many things to explore <br />* Trip with lots of memories
              </p1>
            </p>
          </div>

          <br />
          <hr />
          <br />

          <div className="japcity">
            <h1 className="japh1">Offers on Top City</h1>

            <div className="citypic">
              <img
                src={J2}
                alt="Tokyo"
                width="280px"
                height="200px"
                className="japimg"
              />
              <h4 className="japh4">Delhi</h4>
            </div>

            <div className="citypic">
              <img
                src={J3}
                alt="Hiroshima"
                width="280px"
                height="200px"
                className="japimg"
              />
              <h4 className="japh4">Mumbai</h4>
            </div>

            <div className="citypic">
              <img
                src={J4}
                alt="Kobe"
                width="280px"
                height="200px"
                className="japimg"
              />
              <h4 className="japh4">Jaipur</h4>
            </div>

            <div className="citypic">
              <img
                src={J5}
                alt="Kyoto"
                width="280px"
                height="200px"
                className="japimg"
              />
              <h4 className="japh4">Banglore</h4>
            </div>
          </div>
          <br />
          <hr />
          <br />

          <div className="japcity">
            <h1 className="japh1">Offers by Nature Beauty</h1>

            <div className="citypic">
              <img src={J6} alt="Delhi" width="280px" height="200px" />
            
            </div>

            <div className="citypic">
              <img src={J7} alt="Hiroshima" width="280px" height="200px" />
            </div>

            <div className="citypic">
              <img src={J8} alt="Kobe" width="280px" height="200px" />
            </div>

            <div className="citypic">
              <img src={J9} alt="Kyoto" width="280px" height="200px" />
            </div>
          </div>
          <br />

          <div className="japdivlinks">
            <div className="japlinks">
              * Best Packages <br />
              * Lot of Comfort <br />
              * Many things to explore <br />
              * Trip with lots of memories
              <br />
              * Best Packages <br />
              * Lot of Comfort <br />
              * Many things to explore <br />
            </div>
            <br />
            <h2 className="japh2">
              <b>Why Choose Us?</b>
            </h2>
            More Than 20 Years Of Experience, Variety Of Tour Packages, Best
            Deals And Personalised Services.
            <br />
            <p className="jah2">
              
              <i>
                India is an island country in East Asia. It is situated in the
                northwest Pacific Ocean, and is bordered on the west by the Sea
                of Japan, while extending from the Sea of Okhotsk in the north
                toward the East China Sea and Taiwan in the south.
                <br />
                India is known worldwide for its traditional arts, including tea
                ceremonies, calligraphy and flower arranging. The country has a
                legacy of distinctive gardens, sculpture and poetry. India is
                home to more than a dozen UNESCO World Heritage sites and is the
                birthplace of sushi, one of its most famous culinary exports.
                <br />
                India is an island country in East Asia. It is situated in the
                northwest Pacific Ocean, and is bordered on the west by the Sea
                of India.
              </i>
            </p>
          </div>

          <br />

          
        </div>
        <NavLink to="/" className="returno">
            Back
          </NavLink>
      </>
    );
  }
}
export default Offer;
