import React from 'react'
import '../../../css/style.css'
import PortfolioItem from './PortfolioItem/PortfolioItem'
import portfolioInfo from './portfolioInfo'
import Title from '../../lib/title/Title'

export default class Portfolio extends React.Component {
    componentDidMount() {
        window.addEventListener('scroll', this.props.colorHeaderItems);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.colorHeaderItems);
    }

    state = { all: false };

    * genItems() {
        let amount = this.state.all ? portfolioInfo.items.length : 3;

        for (let i = 0; i < amount; ++i) {
            let currItem = portfolioInfo.items[i];
            yield (<PortfolioItem 
                    img={currItem.img} 
                    title={currItem.title}
                    description={currItem.description}
                    key={`portfolio-item-${i}`} />)
        }
    }

    showOrHide = () => {
        if (this.state.all) {
            document.getElementById('portfolio').scrollIntoView({behavior: "smooth", block: "center"});
        }
        this.setState({all: !this.state.all})
    }

    render() {
        let infoText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
        return (
            <div className='portfolio' id='portfolio'>
                <Title addClass={'portfolio__info'} name={'Latest Works'} description={infoText} />
                <div className='portfolio__switcher'>
                    <button>ALL</button>
                    <button>WEB DESIGN</button>
                    <button>UI/UX DESIGN</button>
                    <button>MOCKUPS</button>
                </div>
                <ul className='portfolio__list' id='portfolio__list'>
                    {[...this.genItems()]}
                </ul>
                <button className='portfolio__show-all' onClick={this.showOrHide}>
                    {this.state.all ? 'HIDE' : 'SHOW ALL'}
                </button>
            </div>
        )
    }
}