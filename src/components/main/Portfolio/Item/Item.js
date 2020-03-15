import React from 'react'
import '../../../../css/style.css'

export default function Item(props) {
    let imgPath = 'img/' + props.img
    return (
        <li className='portfolio__item animated fadeIn'>
            <img src={imgPath} alt=''></img>
            <div className='portfolio__item_hover'>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </li>
    );
}