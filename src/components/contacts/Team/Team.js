import React from 'react'
import '../../../css/style.css'
import teamInfo from './teamInfo'
import InfoBlock from './InfoBlock/InfoBlock'
import BlockSwitcher from './BlockSwitcher/BlockSwitcher'
import Title from '../../lib/title/Title'

export default class Team extends React.Component {
    state = { currentBlock: 0 }

    setBlock = num => {
        this.setState({ currentBlock: num })
    }

    * genBlocks(amount) {
        for(let i = 0; i < amount; ++i) {
            yield <InfoBlock 
                        num={i} 
                        hidden={i === 0 ? false : true} 
                        key={`infoblock-item-${i}`} />
        }
    }

    render() {
        let blocksAmount = Math.ceil(teamInfo.members.length / 3)
        let infoText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
        return (
            <div id='team' className='team'>
                <Title addClass={'team__info'} name={'Our Team Members'} description={infoText} />

                {[...this.genBlocks(blocksAmount)]}

                <BlockSwitcher amount={blocksAmount} setBlock={this.setBlock} />
            </div>
        )
    }
}