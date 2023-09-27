import React from 'react';

import './Card.css'

function Card(props) {
    //console.log(props.openSpots)
    let badgeText;
    if(props.openSpots === 0) {
        badgeText = 'SOLD OUT'
    } else if(props.location === 'Online') {
        badgeText = 'ONLINE'
    }

    return(
        <div className="card">
            <div>
                {badgeText && <span className="card--badge">{badgeText}</span>}
            </div>
            <img src={`../images/${props.coverImg}`} className="card--img" />
            <div className="card--stats">
                <img src="./../../public/images/star.png" className="card--star" />
                <span>{props.stats.rating}</span>
                <span className='gray'>({props.stats.reviewCount}) </span>
                <span className='gray'>{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}


export default Card;