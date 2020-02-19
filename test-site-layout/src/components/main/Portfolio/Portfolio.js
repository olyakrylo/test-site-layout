import React from 'react'
import '../../../css/style.css'
import PortfolioItem from './PortfolioItem/PortfolioItem'
import portfolioInfo from './portfolioInfo'

export default class Portfolio extends React.Component {
    state = { all: false };

    * genItems() {
        let amount = this.state.all ? portfolioInfo.items.length : 3;

        for (let i = 0; i < amount; ++i) {
            let currItem = portfolioInfo.items[i];
            yield (<PortfolioItem 
                    img={currItem.img} 
                    title={currItem.title}
                    description={currItem.description} />)
        }
    }

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
                    {[...this.genItems()]}
                </ul>
                <button className='portfolio__show-all' onClick={() => this.setState({all: !this.state.all})}>
                    {this.state.all ? 'HIDE' : 'SHOW ALL'}
                </button>
            </div>
        )
    }
}