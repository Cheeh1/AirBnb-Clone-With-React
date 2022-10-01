import React from 'react'
 import MainPicture from '../assets/grid-pictures.png'


function Hero () {
    return (
      <section className="hero">
        <div>
            <img className="hero-picture" src={MainPicture} alt="pics-pple" />
            {/* <img className="hero-picture" src="/images/grid-pictures.png" alt="pics-pple" />
            <img className="hero-picture" src="../src/assets/grid-pictures.png" alt="pics-pple" /> */}
        </div>

        <div className="hero-main">
          <h1 className="hero-header">Online Experiences</h1>
          <p className="hero-text">
             Join unique interactive activities led by one-of-a-kind hosts—all
             without leaving home.
          </p>
        </div>
      </section>
    );
}
export default Hero