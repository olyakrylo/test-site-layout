import React from 'react';
import '../../../css/style.css';
import Item from './Item';
import Title from '../../lib/Title';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import carouselScrolling from '../../lib/carouselScrolling';

export default class Services extends React.Component {
    state = {
        blocksAmount: 6,
        currentBlock: 0
    }

    componentDidMount() {
        window.addEventListener('scroll', this.props.colorHeaderItems);

        let blocks = document.querySelector('.services__content');
        blocks.addEventListener('mousedown', (e) => mouseDown(e, 'infoblock', blocks));

        let carousel = document.querySelector('.services__content');
        carousel.addEventListener('touchstart', (e) => carouselScrolling.call(this, e, carousel));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.colorHeaderItems);
    }

    arrowClicked = (side) => {
        let carousel = document.querySelector('.services__carousel');
        let content = document.querySelector('.services__content');
        let width = parseFloat(getComputedStyle(carousel).width);
        let margin = parseFloat(getComputedStyle(content).marginLeft);

        content.style.marginLeft = `${margin + (side === 'left' ? width : -width)}px`;

        this.setState({ 
            currentBlock: this.state.currentBlock + (side === 'left' ? -1 : 1)
        });
    }

    render() {
        let infoText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
        let blockText = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.'
        let { currentBlock } = this.state;
        let leftArrowClass = currentBlock === 0 ? 'services__caret_hidden' : '';
        let rightArrowClass = currentBlock === this.state.blocksAmount - 1 ? 'services__caret_hidden' : '';
        return(
            <div className='services' id='services'>
                <Title addClass='services__info' name='Our Services' description={infoText} />
                <div className='services__carousel'>
                    <ul className='services__content'>
                        <Item title='Research' text={blockText} />
                        <Item title='Portfolio' text={blockText} />
                        <Item title='Support' text={blockText} />
                        <Item title='Documentation' text={blockText} />
                        <Item title='Development' text={blockText} />
                        <Item title='Design' text={blockText} />
                    </ul>
                </div>
                <FontAwesomeIcon icon={faCaretLeft} 
                                 className={`services__caret ${leftArrowClass}`}
                                 onClick={() => this.arrowClicked('left')} />
                <FontAwesomeIcon icon={faCaretRight} 
                                 className={`services__caret ${rightArrowClass}`}
                                 onClick={() => this.arrowClicked('right')} />
            </div>
        )
    }
}
    
function mouseDown(e, className, blocks) {
    e.preventDefault();
    if (!e.target.closest(`.${className}`)) return;
    let block = e.target.closest(`.${className}`);
    let shiftX = e.clientX - block.getBoundingClientRect().left;
    let shiftY = e.clientY - block.getBoundingClientRect().top;
    let margin = getComputedStyle(block).margin;

    let invisibleBlock = document.createElement('li');
    invisibleBlock.style.width = getComputedStyle(block).width;
    invisibleBlock.style.height = getComputedStyle(block).height;
    invisibleBlock.style.margin = margin;
    block.before(invisibleBlock);

    block.style.position = 'absolute';
    block.style.zIndex = 100;
    block.style.margin = 0;
    document.body.append(block);
    move(e.pageX, e.pageY);

    for (let elem of blocks.children) {
        elem.classList.replace('infoblock', 'infoblock_without-hover');
    }

    document.addEventListener('mousemove', onMouseMove);

    function move(x, y) {
        block.style.left = x - shiftX + 'px';
        block.style.top = y - shiftY + 'px';
    }

    function onMouseMove (e) {
        move(e.pageX, e.pageY);

        let centerX = block.getBoundingClientRect().left + block.getBoundingClientRect().width / 2;
        let centerY = block.getBoundingClientRect().top + block.getBoundingClientRect().height / 2;
        for (let elem of blocks.children) {
            let coords = elem.getBoundingClientRect();

            if (elem !== invisibleBlock &&
                centerX > coords.x && centerX < coords.x + coords.width &&
                centerY > coords.y && centerY < coords.y + coords.height) {
                    let childrenArr = Array.from(blocks.children);
                    let invisibleIndex = childrenArr.findIndex(x => x === invisibleBlock);
                    let elemIndex = childrenArr.findIndex(x => x === elem);

                    if (invisibleIndex < elemIndex) {
                        elem.after(invisibleBlock);
                    } else {
                        elem.before(invisibleBlock);
                    }
            }
        }
    }

    block.addEventListener('mouseup', function up() {
        block.style.position = 'relative';
        block.style.left = '';
        block.style.top = '';
        block.style.zIndex = 0;
        block.style.margin = margin;
        invisibleBlock.before(block);
        invisibleBlock.remove();
        for (let elem of blocks.children) {
            elem.classList.replace('infoblock_without-hover', 'infoblock');
        }
        document.removeEventListener('mousemove', onMouseMove);
        block.removeEventListener('mouseup', up);
    })

    block.ondragstart = function() {
        return false;
    }
}