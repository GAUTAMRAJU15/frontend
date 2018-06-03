import React, { Component } from 'react';
import { Link } from "react-router";
import { LogoInfluence } from 'img';

class WebsiteHeader extends Component {
  render() {
    return (

      <div className="nav-container">
        <div>
          <div className="bar bar--sm visible-xs">
            <div className="container">
              <div className="row">
                <div className="col-3 col-md-2">
                  <Link to="/"> <img className="logo logo-light" alt="logo" src={ LogoInfluence } /> </Link>
                </div>
                <div className="col-9 col-md-10 text-right">
                  <Link to="/" className="hamburger-toggle" data-toggle-class="#menu1;hidden-xs hidden-sm"> 
                   <i className="icon icon--sm stack-interface stack-menu"></i> </Link>
                </div>
              </div>
            </div>
          </div>
<<<<<<< HEAD

          <nav id="menu1" className="bar bar-sm bar-1 hidden-xs bar--transparent">
            <div className="container pr-0 pl-0">
=======
          <nav id="menu1" className="bar bar--sm " id="menu3">
            <div className="container">
>>>>>>> f9bf0c8b2bd572da0fcffd34c9c94287e8fdc434
              <div className="row">
                <div className="col-lg-2 col-md-3 hidden-xs pl-0 pr-0">
                  <div className="bar__module">
                    <Link to="/"> <img className="logo logo-light" alt="logo" src={ LogoInfluence } /> </Link>
                  </div>
                </div>
                <div className="col-sm-0 pl-0 pr-0"></div>
                <div className="col-lg-10 col-md-11 text-right pr-0 pl-0 my-auto">
                  <div className="bar__module text-center">
                    <ul className="menu-horizontal text-center">
                      <li> <Link to="/how-it-works">How it works</Link> </li>
                      <li> <Link to="/integrations">INTEGRATIONS</Link> </li>
                      <li> <Link to="/pricing">PRICING</Link> </li>
                      <li> <Link to="/about">BLOG </Link> </li>
                    </ul>
                  </div>
                  <div className="bar__module ml-1">
                    <Link className="btn btn--sm type--uppercase" to="/login"> <span className="btn__text">Login</span> </Link>
                    <Link className="btn btn--sm btn--primary type--uppercase" to="/signup"> <span className="btn__text">sign up</span> </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default WebsiteHeader;
