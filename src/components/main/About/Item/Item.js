import React from 'react'
import '../../../../css/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Item(props) {
    return(
        <li className='about-item'>
            <div className='about-item__img'>
                <FontAwesomeIcon icon={props.icon} />
            </div>
            <h3 className='about-item__title'>{props.title}</h3>
            <p className='about-item__description'>{props.blockText}</p>
        </li>
    )
}