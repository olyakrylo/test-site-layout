import React from 'react'
import '../../../../../css/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faComments, faBullseye } from '@fortawesome/free-solid-svg-icons'
export default function TeamMember(props) {
    function socialIcons (links) {
        return (
            <div className='team__person-socials'>
                <a href={links.fb}>
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href={links.twi}>
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href={links.mess}>
                    <FontAwesomeIcon icon={faComments} />
                </a>
                <a href={links.ball}>
                    <FontAwesomeIcon icon={faBullseye} />
                </a>
            </div>
        )
    }

    let imgPath = 'img/' + props.img
    return (
        <div className='team__person-about'>
            <img src={imgPath} alt='fuck'/>
            <div className='team__person-info'>
                <h3>{props.name}</h3>
                <p>{props.position}</p>
            </div>
            {socialIcons(props.links)}
        </div>
    )
}