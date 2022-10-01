import React from 'react'
import StarLogo from '../assets/star-fill.svg'

function Card (props) {
    let badgeText 
    if (props.card.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.card.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
      <section className="card">
            <div>
                {badgeText && <p className="card-abs">{badgeText}</p>}
                {/* <img className="card-img" src={`${props.img}`} alt="First-card-image" /> used when its a variable thats been set in as the props.img */}
                <img className="card-img" src={props.card.img} alt="First-card-image" />
            </div>

            <div className="card-items">
                <div className="card-item-flex">
                    <img className="card-logo" src={StarLogo} />
                    <p>
                        <span className="card-text-1">{props.card.rating}</span> 
                        <span className="card-text-gray">({props.card.figure}).USA</span>
                    </p>
                </div>
                <div>
                    <p>{props.card.desc}</p>
                </div>
                <div>
                    <p><span className="card-text-2">From ${props.card.price}</span> / person</p>
                </div>
            </div>
      </section>
    );
}
export default Card