import React from 'react'
import '../../../css/style.css'
import teamInfo from './teamInfo'
import InfoBlock from './InfoBlock/InfoBlock'
import BlockSwitcher from './BlockSwitcher/BlockSwitcher'

export default class Team extends React.Component {
    state = { currentBlock: 0 }

    setBlock = num => {
        this.setState({ currentBlock: num })
    }

    * genBlocks(amount) {
        for(let i = 0; i < amount; ++i) {
            yield <InfoBlock num={i} hidden={i === 0 ? false : true} />
        }
    }

    render() {
        let blocksAmount = Math.ceil(teamInfo.members.length / 3)
        return (
            <div id='team' className='team'>
                <div className='team__info'>
                    <h2>Our Team Member</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                </div>

                {[...this.genBlocks(blocksAmount)]}

                <BlockSwitcher amount={blocksAmount} setBlock={this.setBlock} />
            </div>
        )
    }
}