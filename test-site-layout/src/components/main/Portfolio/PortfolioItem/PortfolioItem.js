import React from 'react'
import '../../../../css/style.css'

export default function PortfolioItem(props) {
    let imgPath = 'img/' + props.img
    return (
        <li className='portfolio__item'>
            <span>
                <img src={imgPath}></img>
            </span>
            <p>{props.text}</p>
        </li>
    );
}