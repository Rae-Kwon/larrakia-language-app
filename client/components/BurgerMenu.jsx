import React from 'react'
import { Link } from 'react-router-dom'
import { render } from 'react-dom'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'


class BurgerMenu extends React.Component {

  state = {
    isShowing: false
  }

  clickBurgerHandler = (event) => {
    this.setState({
      isShowing: !this.state.isShowing
    })
  }

  render() {
    return (
      <nav>
        <div className="hamburger" onClick={this.clickBurgerHandler}>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>
        <ul className={"nav-links " + (this.state.isShowing && "open")}>
          <li><a href= "#">Let's go back Home to Larrakia Country</a></li>
          <li>
            <NavLink to="/dictionary" activeClassName="current-page">
              Gulumirrgin Dictionary for Kids
            </NavLink>
          </li>
          <li><a href="/LarrakiaPeople">Larrakia People</a></li>
          <li><a href="/about">About </a></li>
        </ul>
      </nav>
    )
  }
}

export default BurgerMenu
