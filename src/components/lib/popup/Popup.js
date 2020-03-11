import React from 'react'
import './popup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default function Popup({addClass, isRight, text, isShowing, closePopup}) {
    function close() {
        let popup = document.getElementsByClassName('popup')[0];
        popup.classList.add('rollOut');
        setTimeout( () => {
            popup.classList.remove('rollOut');
            closePopup()
        }, 800);
    }

    return (
        <div className={`popup ${addClass} ${isRight ? '' : 'popup_wrong'} ${isShowing ? '' : 'popup_hidden'} animated rollIn`}>
            <div className='popup__close' onClick={close}>
                <FontAwesomeIcon icon={faTimes} />
            </div>
            <p>
                {text}
            </p>
        </div>
    )

}