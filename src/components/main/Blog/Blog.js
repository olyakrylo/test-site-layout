import React from 'react'
import '../../../css/style.css'
import BlogItem from './BlogItem/BlogItem'
import blogInfo from './blogInfo'

export default class Blog extends React.Component {
    state = { 
        showingItems: 1,
        all: false
    };

    * genBlogItems() {  
        let items = blogInfo.blogItems;
        for (let i = 0; i < this.state.showingItems; ++i) {
            yield (<BlogItem info={items[i]} />);
        }
    }

    showMoreOrHide = () => {
        this.setState({
            showingItems:  this.state.all ? 1 : (this.state.showingItems + 1),
            all: this.state.showingItems === blogInfo.blogItems.length - 1
        })
        console.log(this.state.showingItems + '  ' + this.state.all)
    }

    render() {
        let infoText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
        return (
            <div id='blog'>
                <div className='blog__info block-header'>
                    <h2>Blog</h2>
                    <p>{infoText}</p>
                </div>
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