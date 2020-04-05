import React from 'react';
import '../../../css/style.css';
import Item from './Item';
import Switcher from './Switcher';
import portfolioInfo from './portfolioInfo';
import Title from '../../lib/Title';
import Button from '../../lib/Button';

export default class Portfolio extends React.Component {
    componentDidMount() {
        window.addEventListener('scroll', this.props.colorHeaderItems);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.colorHeaderItems);
    }

    state = { all: false };

    * genItems() {
        let amountInBlock = document.documentElement.clientWidth <= 900 ? 2 : 3;
        let amount = this.state.all ? portfolioInfo.items.length : amountInBlock;

        for (let i = 0; i < amount; ++i) {
            let currItem = portfolioInfo.items[i];
            yield (<Item 
                    img={currItem.img} 
                    title={currItem.title}
                    description={currItem.description}
                    key={`portfolio-item-${i}`} />)
        }
    }

    showOrHide = () => {
        if (this.state.all) {
            document.querySelector('#portfolio').scrollIntoView({behavior: "smooth", block: "center"});
        }
        this.setState({all: !this.state.all})
    }

    render() {
        let infoText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
        return (
            <div className='portfolio' id='portfolio'>
                <Title addClass={'portfolio__info'} name={'Latest Works'} description={infoText} />
                <Switcher />
                <ul className='portfolio__list' id='portfolio__list'>
                    {[...this.genItems()]}
                </ul>
                <Button title={this.state.all ? 'HIDE' : 'SHOW ALL'}
                        addClasses='button_seagreen button_small portfolio__button portfolio__show-all'
                        clickFunction={this.showOrHide.bind(this)} />
            </div>
        )
    }
}