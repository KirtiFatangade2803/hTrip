import React, { Component } from "react";
import T1 from "./founder1.jpg";
import T2 from "./manager.jpg";
import T3 from "./CEO1.jpg";
import T4 from "./reason1.jpg";
import T5 from "./reason2.jpg";
import "./about.css";
import { NavLink } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <>
        <div className="body">
          <div className="fisrtdiv">
            <img
              src={T5}
              alt="background"
              className="firstimg"
              width="400px"
              height="450px"
            />

            <p className="divp">
              We Plan You
              <br />
              <font color="red">
                <i> A Perfect Holiday </i>
              </font>
              ...!!
              <br />
              <p className="pabout">
                Enjoy and share new and meaningful experiences with friends and
                loved ones. Experience authentic and innovative experiences with
                a respectful relationship with the socio-cultural customs.
              </p>
            </p>
            <NavLink to="/register" className="planbutn1">
              Join Us
            </NavLink>
          </div>

          <div className="d1">
            <div className="d2">
              * Best Packages <br />
              * Experienced guides <br />
              * Quality and Value <br />
              * 24-Hours Support <br />
              * no hidden charges <br />
              * Trust <br />
              * Many things to explore <br />
            </div>
            <br />
            <h1 className="d3">
              <b>Why Choose Us?</b>
            </h1>
            More Than 20 Years Of Experience, Variety Of Tour Packages, Best
            Deals And Personalised Services.
            <br />
            <p className="dsub">
              <i>
                Travel takes us out of our comfort zones and inspires us to see,
                taste and try new things. It constantly challenges us, not only
                to adapt to and explore new surroundings, but also to engage
                with different people, to embrace adventures as they come and to
                share new and meaningful experiences with friends and loved
                ones.
                <br />
                We are a travel agency that provides authentic and innovative
                experiences with a respectful relationship with the
                socio-cultural customs.We have experinced and trustworthy people
                with us.
                <br />
                We believe that travel, done with care and compassion, is a
                tremendous force for good in the world.{" "}
              </i>
            </p>
          </div>

          <div className="d4" id="about">
            <div className="c1" id="cc1">
              <img src={T1} alt="" className="im1" />
            </div>
            <div className="c1">
              <img src={T2} alt="" className="im1" />
            </div>
            <div className="c1">
              <img src={T3} alt="" className="im1" />
            </div>

            <div className="descrip">Mr. Shiv Gupta</div>
            <div className="descrip1">Ms.Siya Mehta</div>
            <div className="descrip">Mr.Neo Jasy</div>

            <span className="span">Founder </span>
            <span className="span1">legal Manager </span>
            <span className="span1">CEO </span>
          </div>

          <div className="d5" id="contact">
            <div className="di">
              <img src={T4} alt="footer" className="footimg2" />
              <div className="over">
                <div className="txt">
                  Plan your dream vacations <br />
                  Get connected with us Now.!
                </div>
                <br />
                <NavLink to="/register" className="reg2">
                  Register Now
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
