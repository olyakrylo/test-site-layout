import React from 'react';
import '../../../../css/style.css';

export default function BlockSwitcher({amount, currentBlock, setBlock}) {
    function slide(num) {
        let carousel = document.querySelector('.team__carousel');
        carousel.style.marginLeft = `-${num * 80}vw`;
        setBlock(num);
    }

    function* genPathes(amount) {
        for (let i = 0; i < amount; ++i) {
            yield (
                <g transform={`translate(${24 * i},0)`} key={i}>
                    <path fillRule="evenodd" clipRule="evenodd" 
                          d={`M24 0H0V24H24V0ZM12 20C16.4183 20 20 16.4183 20 12
                              C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12
                              C4 16.4183 7.58172 20 12 20Z`} fill="#ffffff"
                              stroke='#ffffff' strokeWidth='1'/>
                </g>
            );
        }
    }

    function* genClickablePathes(amount, w) {
        for (let i = 0; i < amount; ++i) {
            yield (
                <rect x={w * i} y='0' width={w} height={w} opacity='0'
                      onClick={() => slide(i)}
                      key={i}
                      className={'block-switcher__item '} />
            )
        }
    }

    return (
        <div className='block-switcher'>
            <svg width={amount * 24} height='24' viewBox={`0 0 ${amount * 24} 24`} >
                <rect x='1' y='1' width={amount * 24 - 2} height='22' fill='#00897b' />
                <circle cx={12 + currentBlock * 24} cy='12' r='9' fill='#3949ab' className='block-switcher__circle' />
                {[...genPathes(amount)]}
                {[...genClickablePathes(amount, 24)]}
            </svg>
        </div>
    )
}