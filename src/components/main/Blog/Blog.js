import React from 'react'
import '../../../css/style.css'
import BlogItem from './BlogItem/BlogItem'
import blogInfo from './blogInfo'
import Title from '../../lib/title/Title'

export default class Blog extends React.Component {
    state = { 
        showingItems: 1,
        all: false
    };

    * genBlogItems() {  
        let items = blogInfo.blogItems;
        for (let i = 0; i < this.state.showingItems; ++i) {
            yield (<BlogItem info={items[i]} key={`blog-item-${i}`} />);
        }
    }

    showMoreOrHide = () => {
        this.setState({
            showingItems:  this.state.all ? 1 : (this.state.showingItems + 1),
            all: this.state.showingItems === blogInfo.blogItems.length - 1
        })
    }

    render() {
        let infoText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
        return (
            <div id='blog'>
                <Title addClass={'blog__info'} name={'Blog'} description={infoText} />
                <ul className='blog__content'>
                    {[...this.genBlogItems()]}
                </ul>
                <button className='blog__button' onClick={() => this.showMoreOrHide()}>
                    {this.state.all ? 'HIDE' : 'MORE VIEW'}
                </button>
            </div>
        )
    }
}