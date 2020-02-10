import React from 'react'
import '../../../css/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter,  } from '@fortawesome/free-brands-svg-icons'
import { faComments, faBullseye } from '@fortawesome/free-solid-svg-icons'

export default class Team extends React.Component {
    state = { currentBlock: 1 }

    teamMember = (img, name, position, links) => {
        let imgPath = 'img/' + img
        return (
            <div className='team__person-about'>
                <img src={imgPath} alt='fuck'/>
                <div className='team__person-info'>
                    <h3>{name}</h3>
                    <p>{position}</p>
                </div>
                {this.socialIcons(links)}
            </div>
        )
    }

    socialIcons = links => {
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

    changePhotoBlock = reqBlock => {
        for(let i = 1; i <= 3; ++i) {
            let blockId = 'photo-block-' + i
            let circleId = 'circle-' + i
            if (i === reqBlock) {
                document.getElementById(blockId).classList.remove('team__content_hidden')
                document.getElementById(circleId).classList.add('team__switcher_circle_active')
            } else {
                document.getElementById(blockId).classList.add('team__content_hidden')
                document.getElementById(circleId).classList.remove('team__switcher_circle_active')
            }
        }
        this.setState({ currentBlock: reqBlock })
    }

    render() {
        let links = {
            fb: '',
            twi: '',
            mess: '',
            ball: ''
        }

        return (
            <div id='team' className='team'>
                <div className='team__info'>
                    <h2>Our Team Member</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                </div>
                <div id='photo-block-1' className='team__content animated fadeIn'>
                    {this.teamMember('Doe.jpg', 'John Doe', 'General Manager', links)}
                    {this.teamMember('Biru.jpg', 'Alexa Biru', 'Office Director', links)}
                    {this.teamMember('Sing.jpg', 'Ronobir Sing', 'Admin', links)}
                </div>
                <div id='photo-block-2' className='team__content team__content_hidden animated fadeIn'>
                    {this.teamMember('Doe.jpg', 'John Doe', 'General Manager', links)}
                    {this.teamMember('Doe.jpg', 'Alexa Biru', 'Office Director', links)}
                    {this.teamMember('Doe.jpg', 'Ronobir Sing', 'Admin', links)}
                </div>
                <div id='photo-block-3' className='team__content team__content_hidden animated fadeIn'>
                    {this.teamMember('Sing.jpg', 'John Doe', 'General Manager', links)}
                    {this.teamMember('Sing.jpg', 'Alexa Biru', 'Office Director', links)}
                    {this.teamMember('Sing.jpg', 'Ronobir Sing', 'Admin', links)}
                </div>
                <div className='team__switcher'>
                    <svg width='60' heigt='15' viewBox='0 0 80 20'>
                        <circle id='circle-1'
                                className="team__switcher_circle_active"
                                cx='10' cy='10' r='10'
                                onClick={() => this.changePhotoBlock(1)} />
                        <circle id='circle-2'
                                cx='40' cy='10' r='10' 
                                onClick={() => this.changePhotoBlock(2)} />
                        <circle id='circle-3'
                                cx='70' cy='10' r='10'
                                onClick={() => this.changePhotoBlock(3)} />
                    </svg>
                </div>
            </div>
        )
    }
}