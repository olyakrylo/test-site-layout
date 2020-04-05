// example of usage:
// carousel.addEventListener('touchstart', e => carouselScrolling.call(this, e, carousel));

// state = {
//     blocksAmount: 6,
//     currentBlock: 0
// }

function carouselScrolling(e, carousel) {
    carousel.style.transition = 'none';
    let startX = e.changedTouches[0].clientX;
    let margin = Math.abs(parseFloat(getComputedStyle(carousel).marginLeft));
    let width = parseFloat(getComputedStyle(carousel).width);
    let { blocksAmount } = this.state;
    let { currentBlock } = this.state;
    let diffX = null;
    let lastX = startX;

    let touchMove = e => {
        let x = e.changedTouches[0].clientX;
        carousel.style.marginLeft = `${-margin + x - startX}px`;
        diffX = x > lastX ? -1 : 1;
        lastX = x;
    }
    
    let checkPoints = [];
    for (let i = 0; i < blocksAmount; ++i) {
        checkPoints[i] = i * width / blocksAmount;
    }
    let max = checkPoints[blocksAmount - 1];

    let touchEnd = e => {
        let endX = e.changedTouches[0].clientX;
        carousel.style.transition = 'margin-left .3s ease-out';
        if (diffX === 1 && startX > endX) {
            carousel.style.marginLeft = `-${checkPoints[currentBlock + 1] || max}px`;
            currentBlock = Math.min(currentBlock + 1, blocksAmount - 1);
        } else if (diffX === -1 && endX > startX) {
            carousel.style.marginLeft = `-${checkPoints[currentBlock - 1] || 0}px`;
            currentBlock = Math.max(currentBlock - 1, 0);
        } else {
            carousel.style.marginLeft = `-${margin}px`;
        }
        this.setState({ currentBlock: currentBlock });
        carousel.removeEventListener('touchend', touchEnd);
    }
    carousel.addEventListener('touchmove', touchMove);
    carousel.addEventListener('touchend', touchEnd);
}

export default carouselScrolling;