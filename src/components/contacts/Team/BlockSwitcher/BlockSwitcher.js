import React from 'react';
import '../../../../css/style.css';

export default function BlockSwitcher({amount, currentBlock, setBlock}) {
    function slide(num) {
        let carousel = document.querySelector('.team__carousel');
        carousel.style.marginLeft = `-${num * 80}vw`;
        setBlock(num);
    }


    function * genCircles(amount) {
        for(let i = 0; i < amount; ++i) {
            let cx = (i * 22.5 + 7.5).toString();
            yield (
                <circle id={'circle-' + i}
                    className={'block-switcher__item ' + (i === currentBlock ? "block-switcher__item_active" : "")} 
                    cx={cx} cy='7.5' r='7.5'
                    onClick={() => slide(i)}
                    key={`switcher-item-${i}`} />
            ) 
        }
    }

    return (
        <div className='block-switcher'>
            <svg width={amount * 22.5 - 7.5} height='15' viewBox={'0 0 ' + (amount * 22.5 - 7.5) + ' 15'}>
                {[...genCircles(amount)]}
            </svg>
        </div>
    )
}