import React from 'react'
import '../../../css/style.css'
import teamInfo from './teamInfo'
import BlockSwitcher from './BlockSwitcher/BlockSwitcher'
import Title from '../../lib/title/Title'
import Card from './Card/Card'

export default class Team extends React.Component {
    state = { 
        currentBlock: 0,
        blocksAmount: Math.ceil(teamInfo.members.length / 3)
    }

    setBlock(num) {
        this.setState({ currentBlock: num })
    }

    componentDidMount() {
        let { blocksAmount } = this.state;
        let carousel = document.querySelector('.team__carousel');
        carousel.addEventListener('touchstart', (e) => {
            carousel.style.transition = 'none';
            let startX = e.changedTouches[0].clientX;
            let margin = Math.abs(parseFloat(getComputedStyle(carousel).marginLeft));
            let width = parseFloat(getComputedStyle(carousel).width);

            let move = e => {
                let x = e.changedTouches[0].clientX;
                let resMargin = -margin + x - startX;
                let minMargin = width * (1 - 1 / blocksAmount);
                if (resMargin >= 0) {
                    carousel.style.marginLeft = '0px';
                } else if (resMargin <= -minMargin) {
                    carousel.style.marginLeft = `-${minMargin}px`;
                } else {
                    carousel.style.marginLeft = `${resMargin}px`
                }
            }

            let touchEnd = () => {
                let resMargin = Math.abs(parseFloat(getComputedStyle(carousel).marginLeft));
                let checkPoints = [];
                for (let i = 0; i < blocksAmount; ++i) {
                    checkPoints[i] = i * width / blocksAmount;
                }
                let minDiff = 10000;
                let closestMargin = 0;
                let blockIndex = 0;
                checkPoints.forEach((elem, i) => {
                    let diff = Math.abs(resMargin - elem);
                    if (diff < minDiff) {
                        minDiff = diff;
                        closestMargin = elem;
                        blockIndex = i;
                    }
                })
                carousel.style.transition = 'margin-left .2s ease-out';
                carousel.style.marginLeft = `${-closestMargin}px`
                this.setBlock(blockIndex);
            }

            carousel.addEventListener('touchmove', move);
            carousel.addEventListener('touchend', touchEnd);
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
        let infoText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam,`;
        return (
            <div id='team' className='team'>
                <Title addClass={'team__info'} name={'Our Team Members'} description={infoText} />

                <div className='team__carousel-container'>
                    <ul className='team__carousel'>
                        {[...this.genCards(teamInfo.members)]}
                    </ul>
                </div>

                <BlockSwitcher 
                    amount={this.state.blocksAmount}
                    currentBlock={this.state.currentBlock} 
                    setBlock={this.setBlock.bind(this)} />
            </div>
        )
    }
}