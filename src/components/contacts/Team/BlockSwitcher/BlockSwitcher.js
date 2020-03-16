import React from 'react'
import '../../../../css/style.css'

export default function BlockSwitcher({amount, setBlock}) {

    function changePhotoBlock(reqBlock, amount) {
        for(let i = 0; i < amount; ++i) {
            let blockId = 'photo-block-' + i
            let circleId = 'circle-' + i

            if (i === reqBlock) {
                document.getElementById(blockId).classList.remove('team__content_hidden')
                document.getElementById(circleId).classList.add('block-switcher__item_active')
            } else {
                document.getElementById(blockId).classList.add('team__content_hidden')
                document.getElementById(circleId).classList.remove('block-switcher__item_active')
            }
        }
        
        setBlock(reqBlock);
        document.getElementById('photo-block-' + reqBlock).scrollIntoView({behavior: 'smooth', block: 'center'});
    }

    function * genCircles(amount) {
        for(let i = 0; i < amount; ++i) {
            let cx = (i * 30 + 10).toString();
            yield (
                <circle id={'circle-' + i}
                    className={'block-switcher__item ' + (i === 0 ? "block-switcher__item_active" : "")} 
                    cx={cx} cy='10' r='10'
                    onClick={() => changePhotoBlock(i, amount)}
                    key={`switcher-item-${i}`} />
            ) 
        }
    }

    return (
        <div className='block-switcher'>
            <svg width={amount * 20} height='15' viewBox={'0 0 ' + (amount * 20 + 20) + ' 20'}>
                {[...genCircles(amount)]}
            </svg>
        </div>
    )
}