import React from 'react'
import '../../../../css/style.css'

export default function PriceItem(props) {

    function * genFeatures() {
        for (let feature of props.features) {
            yield <li>{feature}</li>
        }
    }

    return (
        <li>
            <div className='tariff'>
                <h2>{props.name}</h2>
                <p><span><sup>$</sup>{props.price}</span> per month</p>
            </div>
            <ul className='tariff__features'>
                {[...genFeatures()]}
            </ul>
            <button className='tariff__order-button'>ORDER NOW</button>
        </li>
    )
}