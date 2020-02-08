import React from 'react'
import './aboutUs.css'

export default class aboutUs extends React.Component {
    render() {
        let infoText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
        let blockText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'
        return(
            <div className='aboutUs'>
                <div className='aboutUs__info'>
                    <h2>About Us</h2>
                    <p>{infoText}</p>
                </div>

                <ul className='aboutUs__content'>
                    <li>
                        <div className='aboutUs__img aboutUs__img_internet'></div>
                        <h3>Awesome Icons</h3>
                        <p>{blockText}</p>
                    </li>
                    <li>
                        <div className='aboutUs__img aboutUs__img_transfer'></div>
                        <h3>One Page</h3>
                        <p>{blockText}</p>
                    </li>
                    <li>
                        <div className='aboutUs__img aboutUs__img_head'></div>
                        <h3>Fully Responsive</h3>
                        <p>{blockText}</p>
                    </li>
                </ul>
            </div>
        )
    }
}