import React from 'react'
import '../../../css/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default class ContactsBlock extends React.Component {
    state = {
        name: '',
        email: '',
        message: ''
    };

    sendForm = e => {
        let name = document.getElementById('form-name').value;
        let email = document.getElementById('form-email').value;
        let message = document.getElementsByTagName('textarea')[0].value
        let popup = document.getElementById('popup')
        if (name && email && message) {
            this.setState({
                name: document.getElementById('form-name').value,
                email: document.getElementById('form-email').value,
                message: document.getElementsByTagName('textarea')[0].value
            });
            popup.classList.remove('wrong')
        } else {
            popup.classList.add('wrong')
        }

        popup.classList.add('show')
    }

    closePopup = () => {
        document.getElementById('popup').classList.remove('show')
    }

    render() {
        let infoText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
        let info = 'name: ' + this.state.name + '\nemail: ' + this.state.email + '\nmessage: ' + this.state.message;
        return (
            <div className='contacts'>
                <div className='contacts__info'>
                    <h2>Contact Us</h2>
                    <p>{infoText}</p>
                </div>
                <div className='contacts__content'>
                    <ul className='contacts__items'>
                        <li>
                            <div className='item__background'>
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </div>
                            <p>Nobinagar savar, Dhaka<br/>Bangadesh</p>
                        </li>
                        <li>
                            <div className='item__background'>
                                <FontAwesomeIcon icon={faPhoneAlt} />
                            </div>
                            <p>+8801743331996<br/>+8801928737807</p>
                        </li>
                        <li>
                            <div className='item__background'>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <p>quickmasud@gmail.com<br/>quickmasud@yahoo.com</p>
                        </li>
                    </ul>
                    <div className='contacts__form'>
                        <div className='userinfo'>
                            <input type='text' placeholder='Your NAME' id='form-name'></input>
                            <input type='text' placeholder='Your Email' id='form-email'></input>
                        </div>
                        <textarea placeholder='Write Message'></textarea>
                        <div className='contacts__send-button'>
                            <div className='popup' id='popup'>
                                <span className='popup__close' onClick={this.closePopup}>close</span>
                                <span>
                                    {this.state.name ? info : 'type anything!'}
                                </span>
                            </div>
                            <button onClick={this.sendForm}>SEND</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}