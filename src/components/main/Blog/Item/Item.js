import React from 'react'
import '../../../../css/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faFile } from '@fortawesome/free-regular-svg-icons'

export default function Item(props) {
    return (
        <li className='blog-item animated fadeIn'>
            <img src={props.info.imgPath} alt=''/>
            <div className='blog-item__content'>
                <h3 className='blog-item__title'>{props.info.title}</h3>
                <div className='blog-item__keylist'>
                    <span className='blog-item__key'>
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        &emsp;{props.info.date}
                    </span>
                    <span className='blog-item__key'>
                        <FontAwesomeIcon icon={faFile} />
                        &emsp;{props.info.category}
                    </span>
                </div>
                <p className='blog-item__description'>{props.info.description}</p>
            </div>
        </li>
    )
}