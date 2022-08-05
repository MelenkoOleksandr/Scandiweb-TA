import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';

import "./Navigation.scss";

class Navigation extends Component {
  render() {
    const { categories } = this.props;
    return (
      categories && (
        <nav className="navigation">
          <ul className="navigation-list">
            {categories.map(({ name }) => (
              <li className="navigation-item" key={name}>
                <NavLink
                  to={`/${name}`}
                  activeClassName="navigation-item__active"
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )
    );
  }
}

const mapStateToProps = state => ({
    categories: state.categories.categories
})

export default connect(mapStateToProps)(Navigation);
