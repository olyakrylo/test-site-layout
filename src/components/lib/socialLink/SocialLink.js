import React from 'react'
import './social-link.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SocialLink({link, icon}) {
    return (
        <a href={link} className='social-link'>
            <FontAwesomeIcon icon={icon} />
        </a>
    )
}