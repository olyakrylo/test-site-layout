import React from 'react'
import '../../../../../css/style.css'
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faComments, faBullseye } from '@fortawesome/free-solid-svg-icons'
import SocialLink from '../../../../lib/socialLink/SocialLink'

export default function Card(props) {

    function* socialIcons (links) {
        let propNames = Object.keys(links);
        let icons = {
            [propNames[0]]: faFacebookF,
            [propNames[1]]: faTwitter,
            [propNames[2]]: faComments,
            [propNames[3]]: faBullseye
        };

        for (let key of propNames) {
            yield (
                <SocialLink link={links[key]} icon={icons[key]} key={`social-icon-${key}`}/>
            )
        }
    }

    let imgPath = 'img/' + props.img
    return (
        <div className='team__person-card person-card'>
            <img src={imgPath} alt=''/>

            <div className='person-card__info'>
                <h3 className='person-card__name'>{props.name}</h3>
                <p className='person-card__position'>{props.position}</p>
            </div>

            <div className='person-card__socials'>
                {[...socialIcons(props.links)]}
            </div>

        </div>
    )
}