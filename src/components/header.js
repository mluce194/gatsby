import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Nav from "./nav"
import logo from"../images/logo-MLBeraudo.png"

const Header = ({ siteTitle }) => (
  <header>

    <section className="header__logo">
      <Link
          to="/">
            <img src={logo} alt={ siteTitle } />
      </Link>
      <h1>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >{ siteTitle }
        </Link> 
      </h1>
    </section>
      
    <Nav />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
