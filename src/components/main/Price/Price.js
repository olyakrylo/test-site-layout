import React from 'react'
import '../../../css/style.css'
import Item from './Item/Item'
import tariffs from './tariffs'
import Title from '../../lib/title/Title'

export default class Price extends React.Component {
    // componentDidMount() {
    //     window.addEventListener('scroll', this.props.colorHeaderItems.bind(null, 'price'));
    // }

    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.props.colorHeaderItems.bind(null, 'price'));
    // }

    * genPriceItems() {
        for (let tariff of tariffs.tariffs) {
            yield (<Item 
                        name={tariff.name}
                        price={tariff.price}
                        features={tariff.features}
                        key={`price-item-${tariff.name}`} />)
        }
    }

    render() {
        let infoText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam,`
        return (
            <div className='price'>
                <Title addClass={'price__info'} name={'Pricing Plan'} description={infoText} />
                <ul className='price__content'>
                    {[...this.genPriceItems()]}
                </ul>
            </div>
            
        )
    }
}