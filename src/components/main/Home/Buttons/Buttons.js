import React from 'react'
import '../../../../css/style.css'
import Popup from '../../../lib/popup/Popup'
import Button from '../../../lib/button/Button'

export default class Buttons extends React.Component {
    state = {
        isPopupShowing: false
    }

    togglePopup() {
        if (this.state.isPopupShowing) {
            let popup = document.querySelector('.home-buttons__popup');
            popup.classList.add('rollOut');

            let handler = () => {
                popup.removeEventListener('animationend', handler);
                popup.classList.remove('rollOut');
                this.setState({ isPopupShowing: false });
            };
            
            popup.addEventListener('animationend', handler)
        } else {
            this.setState({ isPopupShowing: true });
        }
    }

    render() {
        return (
            <div className="home-buttons">
                <div className="home-buttons__container">
                    <Button title='OUR SERVICES' 
                            addClasses='button_white' 
                            clickFunction={() => this.props.scrollToItem('#services')} />
                </div>
                <div className="home-buttons__container">
                    <Popup addClass={'home-buttons__popup'}
                           isRight={true}
                           text={<span>hire is now))</span>}
                           isShowing={this.state.isPopupShowing}
                           closePopup={this.togglePopup.bind(this)} />
                    <Button title='HIRE IS NOW'
                            addClasses='button_seagreen'
                            clickFunction={this.togglePopup.bind(this)} />
                </div>
            </div>
        )
    }
}