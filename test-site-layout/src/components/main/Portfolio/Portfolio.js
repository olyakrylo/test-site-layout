import React from 'react'
import '../../../css/style.css'
import PortfolioItem from './PortfolioItem/PortfolioItem'

export default class Portfolio extends React.Component {
    render() {
        let infoText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
        return (
            <div className='portfolio' id='portfolio'>
                <div className='portfolio__info'>
                    <h2>Latest Works</h2>
                    <p>{infoText}</p>
                </div>
                <div className='portfolio__switcher'>
                    <button>ALL</button>
                    <button>WEB DESIGN</button>
                    <button>UI/UX DESIGN</button>
                    <button>MOCKUPS</button>
                </div>
                <ul className='portfolio__list'>
                    <PortfolioItem img='Watch.jpg' text='p'/>
                    <PortfolioItem img='Pass.jpg' text=''/>
                    <PortfolioItem img='T-shirt.jpg' text=''/>
                    <PortfolioItem img='Bottle.jpg' text=''/>
                    <PortfolioItem img='Wine.jpg' text=''/>
                    <PortfolioItem img='Bag.jpg' text=''/>
                </ul>
                <button className='portfolio__show-all'>SHOW ALL</button>
            </div>
        )
    }
}