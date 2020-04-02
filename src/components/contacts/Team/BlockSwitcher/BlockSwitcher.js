import React from 'react'
import '../../../../css/style.css'

export default function BlockSwitcher({amount, currentBlock, setBlock}) {
    function slide(num) {
        let carousel = document.querySelector('.team__carousel');
        carousel.style.marginLeft = `-${num * 80}vw`;
        setBlock(num);
    }


    function * genCircles(amount) {
        for(let i = 0; i < amount; ++i) {
            let cx = (i * 30 + 10).toString();
            yield (
                <circle id={'circle-' + i}
                    className={'block-switcher__item ' + (i === currentBlock ? "block-switcher__item_active" : "")} 
                    cx={cx} cy='10' r='10'
                    onClick={() => slide(i)}
                    key={`switcher-item-${i}`} />
            ) 
        }
    }

    return (
        <div className='block-switcher'>
            <svg width={amount * 25} height='20' viewBox={'0 0 ' + (amount * 20 + 20) + ' 20'}>
                {[...genCircles(amount)]}
            </svg>
        </div>
    )
}