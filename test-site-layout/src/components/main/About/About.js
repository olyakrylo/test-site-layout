import React from 'react'
import '../../../css/style.css'

export default class aboutUs extends React.Component {
    render() {
        let infoText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
        let blockText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'

        return(
            <div className='about' id='about'>
                <div className='about__info'>
                    <h2>About Us</h2>
                    <p>{infoText}</p>
                </div>

                <ul className='about__content'>
                    <li>
                        <div className='about__img about__img_internet'></div>
                        <h3>Awesome Icons</h3>
                        <p>{blockText}</p>
                    </li>
                    <li>
                        <div className='about__img about__img_transfer'></div>
                        <h3>One Page</h3>
                        <p>{blockText}</p>
                    </li>
                    <li>
                        <div className='about__img about__img_head'></div>
                        <h3>Fully Responsive</h3>
                        <p>{blockText}</p>
                    </li>
                </ul>
            </div>
        )
    }
}