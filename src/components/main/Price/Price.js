import React from 'react';
import '../../../css/style.css';
import Item from './Item';
import tariffs from './tariffs';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Title from '../../lib/Title';
import carouselScrolling from '../../lib/carouselScrolling';

export default class Price extends React.Component {
    state = {
        blocksAmount: 3,
        currentBlock: 0
    };

    componentDidMount() {
        let carousel = document.querySelector('.price__content');
        carousel.addEventListener('touchstart', e => carouselScrolling.call(this, e, carousel));
    }

    * genPriceItems() {
        for (let tariff of tariffs.tariffs) {
            yield (<Item 
                        name={tariff.name}
                        price={tariff.price}
                        features={tariff.features}
                        key={`price-item-${tariff.name}`} />)
        }
    }

    arrowClicked = (side) => {
        let carousel = document.querySelector('.price__carousel');
        let content = document.querySelector('.price__content');
        let width = parseFloat(getComputedStyle(carousel).width);
        let margin = parseFloat(getComputedStyle(content).marginLeft);

        content.style.marginLeft = `${margin + (side === 'left' ? width : -width)}px`;

        this.setState({ 
            currentBlock: this.state.currentBlock + (side === 'left' ? -1 : 1)
        });
    }

    render() {
        let infoText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam,`
        let { currentBlock } = this.state;
        let leftArrowClass = currentBlock === 0 ? 'price__caret_hidden' : '';
        let rightArrowClass = currentBlock === this.state.blocksAmount - 1 ? 'price__caret_hidden' : '';
        return (
            <div className='price'>
                <Title addClass={'price__info'} name={'Pricing Plan'} description={infoText} />
                <div className='price__carousel'>
                    <ul className='price__content'>
                        {[...this.genPriceItems()]}
                    </ul>
                </div>
                <FontAwesomeIcon icon={faCaretLeft} 
                                 className={`price__caret ${leftArrowClass}`}
                                 onClick={() => this.arrowClicked('left')} />
                <FontAwesomeIcon icon={faCaretRight} 
                                 className={`price__caret ${rightArrowClass}`}
                                 onClick={() => this.arrowClicked('right')} />
            </div>
        )
    }
}