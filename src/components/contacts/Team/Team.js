import React from 'react';
import '../../../css/style.css';
import teamInfo from './teamInfo';
import BlockSwitcher from './BlockSwitcher';
import Title from '../../lib/Title';
import Card from './Card';
import carouselScrolling from '../../lib/carouselScrolling';

export default class Team extends React.Component {
    state = { 
        currentBlock: 0,
        blocksAmount: document.documentElement.clientWidth <= 500
                      ? teamInfo.members.length
                      : Math.ceil(teamInfo.members.length / 3)
    }

    setBlock(num) {
        this.setState({ currentBlock: num })
    }

    componentDidMount() {
        let carousel = document.querySelector('.team__carousel');
        carousel.addEventListener('touchstart', e => carouselScrolling.call(this, e, carousel));
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

// function carouselScrolling(e, carousel) {
//     carousel.style.transition = 'none';
//     let startX = e.changedTouches[0].clientX;
//     let margin = Math.abs(parseFloat(getComputedStyle(carousel).marginLeft));
//     let width = parseFloat(getComputedStyle(carousel).width);
//     let { blocksAmount } = this.state;
//     let { currentBlock } = this.state

//     let touchMove = e => {
//         let x = e.changedTouches[0].clientX;
//         carousel.style.marginLeft = `${-margin + x - startX}px`;
//     }
    
//     let checkPoints = [];
//     for (let i = 0; i < blocksAmount; ++i) {
//         checkPoints[i] = i * width / blocksAmount;
//     }
//     let max = checkPoints[blocksAmount - 1];

//     let touchEnd = e => {
//         let endX = e.changedTouches[0].clientX;
//         carousel.style.transition = 'margin-left .3s ease-out';
//         if (startX - endX > 40) {
//             carousel.style.marginLeft = `-${checkPoints[currentBlock + 1] || max}px`;
//             currentBlock = Math.min(currentBlock + 1, blocksAmount - 1);
//         } else if (endX - startX > 40) {
//             carousel.style.marginLeft = `-${checkPoints[currentBlock - 1] || 0}px`;
//             currentBlock = Math.max(currentBlock - 1, 0);
//         }
//         this.setState({ currentBlock: currentBlock });
//         carousel.removeEventListener('touchend', touchEnd);
//     }
//     carousel.addEventListener('touchmove', touchMove);
//     carousel.addEventListener('touchend', touchEnd);
// }