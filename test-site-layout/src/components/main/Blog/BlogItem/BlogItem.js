import React from 'react'
import '../../../../css/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faFile } from '@fortawesome/free-regular-svg-icons'

export default function BlogItem(props) {
    return (
        <li className='blog-item animated fadeIn'>
            <img src={props.info.imgPath} alt=''/>
            <div className='blog-item__content'>
                <h3>{props.info.title}</h3>
                <div className='blog-item__keys'>
                    <p>
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        &emsp;{props.info.date}
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faFile} />
                        &emsp;{props.info.category}
                    </p>
                </div>
                <p>{props.info.description}</p>
            </div>
        </li>
    )
}