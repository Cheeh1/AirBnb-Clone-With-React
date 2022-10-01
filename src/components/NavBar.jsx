import React from 'react'
import Logo from '../assets/airbnb 1.png'


function NavBar () {
    return (
        <nav>
          <img className="nav-body" src={Logo} alt="AirBnb-Logo" />
        </nav>
    );
}
export default NavBar