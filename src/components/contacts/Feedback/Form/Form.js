import React from 'react';
import '../../../../css/style.css';
import Popup from '../../../lib/Popup';

export default class Form extends React.Component {
    state = {
        name: '',
        email: '',
        message: '',
        isInfoFilled: false,
        isPopupShowing: false
    };

    sendForm = e => {
        let name = document.querySelector('.contacts-form__name').value;
        let email = document.querySelector('.contacts-form__email').value;
        let message = document.querySelector('.contacts-form__message').value
        if (name && email && message) {
            this.setState({
                name: name,
                email: email,
                message: message,
                isInfoFilled: true
            });
        } else {
            this.setState({ isInfoFilled: false });
        }

        this.setState({ isPopupShowing: true });
    }

    setPopupText = () => {
        if (this.state.name) {
            return (
                <span>
                    name: {this.state.name} <br />
                    email: {this.state.email} <br />
                    text: {this.state.message}
                </span>
            )
        } else {
            return <span>type anything!</span>
        }
    }

    closePopup() {
        this.setState({ isPopupShowing: false });
    }

    render() {
        return (
            <div className='contacts-form'>
                <div className='contacts-form__userinfo'>
                    <input className='contacts-form__name' 
                           type='text' 
                           placeholder='Your NAME'>
                    </input>
                    <input className='contacts-form__email' 
                           type='text' 
                           placeholder='Your Email'>
                    </input>
                </div>

                <textarea className='contacts-form__message' placeholder='Write Message'></textarea>

                <div className='contacts-form__send-button'>
                    <Popup addClass={'contacts-form__popup'}
                           isRight={this.state.isInfoFilled}
                           text={this.setPopupText()}
                           isShowing={this.state.isPopupShowing}
                           closePopup={this.closePopup.bind(this)} />

                    <button className='contacts-form__button' onClick={this.sendForm}>SEND</button>
                </div>
            </div>
        )
    }
}