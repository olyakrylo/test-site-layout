import React from 'react';
import '../../../../css/style.css';
import Button from '../../../lib/Button';

export default function Item(props) {

    function * genFeatures() {
        for (let feature of props.features) {
            yield <li className='tariff__feature' key={`price-item-${feature}`}>{feature}</li>
        }
    }

    return (
        <li className='price__item tariff'>
            <div className='tariff__header'>
                <h2 className='tariff__title'>{props.name}</h2>
                <p className='tariff__price'><span><sup>$</sup>{props.price}</span> per month</p>
            </div>
            
            <ul className='tariff__features-list'>
                {[...genFeatures()]}
            </ul>

            <Button addClasses='button_black tariff__order-button' title='ORDER NOW' />
        </li>
    )
}