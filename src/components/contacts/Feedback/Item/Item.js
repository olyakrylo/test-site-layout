import React from 'react'
import '../../../../css/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Item({icon, text}) {
    return (
        <li className='list-item'>
            <div className='list-item__background'>
                <FontAwesomeIcon icon={icon} />
            </div>
            {text}
        </li>
    )
}