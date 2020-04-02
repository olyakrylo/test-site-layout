import React from 'react'
import '../../../css/style.css'
import teamInfo from './teamInfo'
// import InfoBlock from './InfoBlock/InfoBlock'
import BlockSwitcher from './BlockSwitcher/BlockSwitcher'
import Title from '../../lib/title/Title'
import Card from './Card/Card'

export default class Team extends React.Component {
    state = { currentBlock: 0 }

    setBlock(num) {
        this.setState({ currentBlock: num })
    }

    componentDidMount() {
        let blocksAmount = Math.ceil(teamInfo.members.length / 3);
        let carousel = document.querySelector('.team__carousel');
        carousel.addEventListener('touchstart', (e) => {
            let { currentBlock } = this.state;
            let startX = e.changedTouches[0].clientX;

            let touchEnd = e => {
                let endX = e.changedTouches[0].clientX;
                let margin = Math.abs(parseFloat(getComputedStyle(carousel).marginLeft));
                let width = parseFloat(getComputedStyle(carousel).width);
                if (startX - endX > 80) {
                    if (margin + width / blocksAmount < width) {
                        carousel.style.marginLeft = `-${margin + width / blocksAmount}px`;
                        this.setBlock(++currentBlock);
                    }
                } else if (endX - startX > 80) {
                    if (margin > 0) {
                        carousel.style.marginLeft = `-${margin - width / blocksAmount}px`;
                        this.setBlock(--currentBlock);
                    }
                }
                carousel.removeEventListener('touchend', touchEnd);
            }

            carousel.addEventListener('touchend', touchEnd)
        })
    }

    * genCards(members) {
        for (let i in members) {
            yield (
                <Card
                    img={members[i].img} 
                    name={members[i].name} 
                    position={members[i].position} 
                    links={members[i].links}
                    key={`team-member-item-${i}`} />
            )
        }
    }

    render() {
        let blocksAmount = Math.ceil(teamInfo.members.length / 3)
        let infoText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
        // let { members } = teamInfo;
        return (
            <div id='team' className='team'>
                <Title addClass={'team__info'} name={'Our Team Members'} description={infoText} />

                <div className='team__carousel-container'>
                    <ul className='team__carousel'>
                        {[...this.genCards(teamInfo.members)]}
                    </ul>
                </div>

                <BlockSwitcher 
                    amount={blocksAmount}
                    currentBlock={this.state.currentBlock} 
                    setBlock={this.setBlock.bind(this)} />
            </div>
        )
    }
}