import React from 'react'
import '../../../../css/style.css'

export default function BlockSwitcher(props) {

    function changePhotoBlock(reqBlock, amount) {
        for(let i = 0; i < amount; ++i) {
            let blockId = 'photo-block-' + i
            let circleId = 'circle-' + i
            if (i === reqBlock) {
                document.getElementById(blockId).classList.remove('team__content_hidden')
                document.getElementById(circleId).classList.add('team__switcher_circle_active')
            } else {
                document.getElementById(blockId).classList.add('team__content_hidden')
                document.getElementById(circleId).classList.remove('team__switcher_circle_active')
            }
        }
        props.setBlock(reqBlock)
        document.getElementById('photo-block-' + reqBlock).scrollIntoView({behavior: 'smooth', block: 'center'});
    }

    function * genCircles(amount) {
        for(let i = 0; i < amount; ++i) {
            let cx = (i * 30 + 10).toString();
            yield (
                <circle id={'circle-' + i}
                    className={i === 0 ? "team__switcher_circle_active" : ""} 
                    cx={cx} cy='10' r='10'
                    onClick={() => changePhotoBlock(i, amount)}
                    key={`switcher-${i}`} />
            ) 
        }
    }

    return (
        <div className='team__switcher'>
            <svg width={props.amount * 20} height='15' viewBox={'0 0 ' + (props.amount * 20 + 20) + ' 20'}>
                {[...genCircles(props.amount)]}
            </svg>
        </div>
    )
}