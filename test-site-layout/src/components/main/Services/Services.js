import React from 'react'
import './services.css'

export default class aboutUs extends React.Component {
    serviceListElement(title) {
        let blockText = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.'
        return (
            <li>
                <div className='service__item'></div>
                <h3>{title}</h3>
                <p>{blockText}</p>
                <button>READ MORE</button>
            </li>
        )
    } 

    render() {
        let infoText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
        // let blockText = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.'
        return(
            <div className='services' id='services'>
                <div className='services__info'>
                    <h2>Our Services</h2>
                    <p>{infoText}</p>
                </div>

                <ul className='services__content'>
                    {this.serviceListElement('Research')}
                    {this.serviceListElement('Portfolio')}
                    {this.serviceListElement('Support')}
                    {this.serviceListElement('Documentation')}
                    {this.serviceListElement('Development')}
                    {this.serviceListElement('Design')}
                </ul>
            </div>
        )
    }
}