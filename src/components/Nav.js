import React, { Component } from "react";
import { Link } from 'react-router-dom';


class Nav extends Component {
  render() {
    console.log('NAV THIS PROPS', this.props);
    return (
      <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Shoply</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ml-auto">
              <Link className="nav-link" to="/cart"><i className="fas fa-shopping-cart mr-1"></i>{this.props.cart.length}</Link>
            </li>
          </ul>
        </div>
      </nav>
      </div>
    );
  }
}

export default Nav;