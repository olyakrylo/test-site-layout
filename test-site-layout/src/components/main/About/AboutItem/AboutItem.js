import React from 'react'
import '../../../../css/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function AboutItem(props) {
    return(
        <li>
            <div className='about__img'>
                <FontAwesomeIcon icon={props.icon} />
            </div>
            <h3>{props.title}</h3>
            <p>{props.blockText}</p>
        </li>
    )
}