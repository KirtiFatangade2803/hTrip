import React, { Component } from 'react'
import './Accomodation1.css';
import A1 from "./cotg1.jpg";
import A2 from "./cotg2.jpg";
import A3 from "./cotg3.webp";
import A4 from "./cotg4.jpg";
import B1 from "./type1.jpg";
import B2 from "./type2.jpg";
import B3 from "./type3.jpg";
import B4 from "./type4.jpg";
import C1 from "./sort1.jpg";
import C2 from "./sort2.webp";
import C3 from "./sort3.webp";
import C4 from "./sort4.jpg";
import { NavLink } from 'react-router-dom';
 class Accomodation1 extends Component {
  render() {
    return (
      <>
      <div className="acolums">
            <h1 className="acolh1">
              <font style={{ fontSize: 60 }}>C</font>ottages That Blends Comfort
            </h1>
            <div className="acol">
              <img src={A1} className="acolimg" alt="This is an wildlife" />
              <div className="acoldiv">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
              </div>
              <div className="acolpara">
              Starts from Rs.3000 per day
              </div>
              <div className="acolpara1">
               Beach or Pool Side View.
              </div>
            </div>

            <div className="acol">
              <img src={A2} className="acolimg" alt="This is an heritage" />
              <div className="acoldiv">
              <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star "></span>
              </div>
              <div className="acolpara">
              Starts from Rs.3800 per day
              </div>
              <div className="acolpara1">
                Peaceful and Enjoyable Solitude
              </div>
            </div>

            <div className="acol">
              <img src={A3} className="acolimg" alt="This is an trekking" />
              <div className="acoldiv">
              <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star "></span>
                <span className="fa fa-star"></span>
              </div>
              <div className="acolpara">
              Starts from Rs.2500 per day
              </div>
              <div className="acolpara1">
               Feel the Elegance.
              </div>
            </div>

            <div className="acol">
              <img src={A4} className="acolimg" alt="This is an trekking" />
              <div className="acoldiv">
              <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star "></span>
                <span className="fa fa-star"></span>
              </div>
              <div className="acolpara">
              Starts from Rs.5000 per day
              </div>
              <div className="acolpara1">
               Chilled & Relaxing Vibes.
              </div>
            </div>
          </div>
<br/>
          <div className="acolums" >
            <h1 className="acolh1">
              <font style={{ fontSize: 60 }}>C</font>ottages as per Your Choice
            </h1>
            <div className="acol" id='ab'>
              <img src={B1} className="acolimg" alt="This is an wildlife" />
              <div className="acoldiv">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
              </div>
              <div className="acolpara">
              Starts from Rs.3000 per day
              </div>
              <div className="acolpara1">
               Hotels
              </div>
            </div>

            <div className="acol" id='ab'>
              <img src={B2} className="acolimg" alt="This is an heritage" />
              <div className="acoldiv">
              <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star "></span>
              </div>
              <div className="acolpara">
              Starts from Rs.3800 per day
              </div>
              <div className="acolpara1">
               Glamping Tents
              </div>
            </div>

            <div className="acol" id='ab'>
              <img src={B3} className="acolimg" alt="This is an trekking" />
              <div className="acoldiv">
              <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star "></span>
                <span className="fa fa-star"></span>
              </div>
              <div className="acolpara">
              Starts from Rs.2500 per day
              </div>
              <div className="acolpara1">
              Resorts
              </div>
            </div>

            <div className="acol" id='ab'>
              <img src={B4} className="acolimg" alt="This is an trekking" />
              <div className="acoldiv">
              <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
              </div>
              <div className="acolpara">
              Starts from Rs.5000 per day
              </div>
              <div className="acolpara1">
               Villas
              </div>
            </div>
          </div>
<br/>

<div className="acolums"  >
            <h1 className="acolh1">
              <font style={{ fontSize: 60 }}>C</font>ottages According the Prices
            </h1>
            <div className="acol" id='ac'>
              <img src={C1} className="acolimg" alt="This is an wildlife" />
              <div className="acoldiv">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
              </div>
              <div className="acolpara">
              Rs.1500- 2000 per day
              </div>
              <div className="acolpara1">
               Wide Rooms. 
              </div>
            </div>

            <div className="acol" id='ac'>
              <img src={C2} className="acolimg" alt="This is an heritage" />
              <div className="acoldiv">
              <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star "></span>
              </div>
              <div className="acolpara">
              Rs.2500- 3500 per day
              </div>
              <div className="acolpara1">
                Elegant Rooms.
              </div>
            </div>

            <div className="acol" id='ac'>
              <img src={C3} className="acolimg" alt="This is an trekking" />
              <div className="acoldiv">
              <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star "></span>
                <span className="fa fa-star"></span>
              </div>
              <div className="acolpara">
              Rs.3000- 4000 per day
              </div>
              <div className="acolpara1">
             Rooms for couples.
              </div>
            </div>

            <div className="acol" id='ac'>
              <img src={C4} className="acolimg" alt="This is an trekking" />
              <div className="acoldiv">
              <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star "></span>
                <span className="fa fa-star"></span>
              </div>
              <div className="acolpara">
              Rs.500- 2000 per day
              </div>
              <div className="acolpara1">
               Room for groups.
              </div>
            </div>
          </div>

<NavLink to="/home" className="back">Back</NavLink>
      </>
    )
  }
}
export default Accomodation1;