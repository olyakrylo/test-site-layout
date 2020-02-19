import React from 'react'
import '../../../css/style.css'
import PriceItem from './PriceItem/PriceItem'
import tariffs from './tariffs'

export default class Price extends React.Component {
    * genPriceItems() {
        for (let tariff of tariffs.tariffs) {
            yield (<PriceItem 
                        name={tariff.name}
                        price={tariff.price}
                        features={tariff.features} />)
        }
    }

    render() {
        let infoText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
        return (
            <div className='price'>
                <div className='portfolio__info'>
                    <h2>Pricing Plan</h2>
                    <p>{infoText}</p>
                </div>
                <ul className='price__content'>
                    {[...this.genPriceItems()]}
                </ul>
            </div>
        )
    }
}