import React from 'react'
import '../../../../css/style.css'
import Popup from '../../../lib/popup/Popup'

export default class Form extends React.Component {
    state = {
        name: '',
        email: '',
        message: '',
        isInfoFilled: false,
        isPopupShowing: false
    };

    sendForm = e => {
        let name = document.getElementById('form-name').value;
        let email = document.getElementById('form-email').value;
        let message = document.getElementsByTagName('textarea')[0].value
        if (name && email && message) {
            this.setState({
                name: document.getElementById('form-name').value,
                email: document.getElementById('form-email').value,
                message: document.getElementsByTagName('textarea')[0].value,
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
                <p>
                    name: {this.state.name} <br />
                    email: {this.state.email} <br />
                    text: {this.state.message}
                </p>
            )
        } else {
            return <p>type anything!</p>
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
                           placeholder='Your NAME' 
                           id='form-name'>
                    </input>
                    <input className='contacts-form__email' 
                           type='text' 
                           placeholder='Your Email' 
                           id='form-email'>
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