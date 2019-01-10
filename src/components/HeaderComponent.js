import React, { Component } from "react";
import { Navbar, NavbarBrand, Jumbotron } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar dark>
          <div className="container">
            <NavbarBrand href="/">Ristorenate Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Ristorante Con Fusion</h1>
                <p>
                  WE take inspiration from the World's best cusiines, and create
                  a unique fusion experience . Out lipmacking creation will
                  tickle your{" "}
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Header;
