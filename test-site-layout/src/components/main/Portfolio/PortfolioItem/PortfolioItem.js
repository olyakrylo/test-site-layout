import React from 'react'
import '../../../../css/style.css'

export default function PortfolioItem(props) {
    let imgPath = 'img/' + props.img
    return (
        <li className='animated fadeIn'>
            <img src={imgPath}></img>
            <div className='portfolio__item-hover'>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </li>
    );
}