import React, { Component } from "react";
import "./Package.css";
import { NavLink } from "react-router-dom";

class Package extends Component {
  render() {
    return (
      <>
        <div className="backpckg">
          <div className="package">
            <div class="packdiv">
              <h2 className="livepack"> Our packages include:</h2>
              <div className="cpck1">
                <h5 className="cpck2">Customized Pack</h5>
                <p className="spack">
                  Get family trip for @<del>Rs20796</del>
                  <ins> Rs15499</ins> per person
                </p>
                <h3 className="crclpck1"> save Rs5297 </h3>
                <h3 className="crclpck">save Rs5297</h3>
                <p className="spack1">
                  88% people got this have availed this offer
                </p>
                <button className="butnpck">Know More</button>
              </div>
              <br />

              <div className="cpck1">
                <h5 className="cpck2">Family-Journey Pack</h5>
                <p className="spack">
                  5 member family pack @<del>Rs76679</del>
                  <ins> Rs70499</ins>
                </p>
                <h3 className="crclpck1"> save Rs6180</h3>
                <h3 className="crclpck">save Rs6180</h3>
                <p className="spack1">
                  25% people got this have availed this offer
                </p>
                <button className="butnpck">Know More</button>
              </div>
              <br />
              <div className="cpck1">
                <h5 className="cpck2">Couple-Trip Pack</h5>
                <p className="spack">
                  Special viewpoint habitation for 1 week @<del>Rs40579</del>
                  <ins> Rs34499</ins>
                </p>
                <h3 className="crclpck1"> save R1297 </h3>
                <h3 className="crclpck">save Rs6080</h3>
                <p className="spack1">
                  55% people got this have availed this offer
                </p>
                <button className="butnpck">Know More</button>
              </div>
              <br />
              <div className="cpck1">
                <h5 className="cpck2">Friends Trip Pack</h5>
                <p className="spack">
                  Get all 20 courses @<del>Rs14679</del>
                  <ins> Rs4499</ins>
                </p>
                <h3 className="crclpck1"> save R1297 </h3>
                <h3 className="crclpck">save Rs10180</h3>
                <p className="spack1">
                  75% people got this have availed this offer
                </p>
                <button className="butnpck">Know More</button>
              </div>
              <br/>
                <NavLink to='/' className="bckp">Back</NavLink>
              
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Package;