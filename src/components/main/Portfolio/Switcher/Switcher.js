import React from 'react'
import '../../../../css/style.css'
import Button from '../../../lib/button/Button'

export default function Switcher() {

    function clicked(e) {
        let selectedClass = 'portfolio__button_selected';
        document.querySelector(`.${selectedClass}`).classList.remove(selectedClass);
        e.target.classList.add(selectedClass);
    }

    return (
        <div className='portfolio__switcher'>
            <Button title='ALL' 
                    addClasses='portfolio__button portfolio__button_selected button_seagreen-black button_small'
                    clickFunction={clicked} />
            <Button title='WEB DESIGN' 
                    addClasses='portfolio__button button_seagreen-black button_small'
                    clickFunction={clicked} />
            <Button title='UI/UX DESIGN' 
                    addClasses='portfolio__button button_seagreen-black button_small'
                    clickFunction={clicked} />
            <Button title='MOCKUPS' 
                    addClasses='portfolio__button button_seagreen-black button_small'
                    clickFunction={clicked} />
        </div>
    )
}