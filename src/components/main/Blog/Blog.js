import React from 'react';
import '../../../css/style.css';
import Item from './Item';
import blogInfo from './blogInfo';
import Title from '../../lib/Title';
import Button from '../../lib/Button';

export default class Blog extends React.Component {
    componentDidMount() {
        window.addEventListener('scroll', this.props.colorHeaderItems);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.colorHeaderItems);
    }

    state = { 
        showingItems: 1,
        all: false
    };

    * genBlogItems() {  
        let items = blogInfo.blogItems;
        for (let i = 0; i < this.state.showingItems; ++i) {
            yield (<Item info={items[i]} key={`blog-item-${i}`} />);
        }
    }

    showMoreOrHide = () => {
        this.setState({
            showingItems:  this.state.all ? 1 : (this.state.showingItems + 1),
            all: this.state.showingItems === blogInfo.blogItems.length - 1
        })
    }

    render() {
        let infoText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam,`
        return (
            <div id='blog'>
                <Title addClass={'blog__info'} name={'Blog'} description={infoText} />

                <ul className='blog__content'>
                    {[...this.genBlogItems()]}
                </ul>

                <Button title={this.state.all ? 'HIDE' : 'MORE VIEW'}
                        addClasses='blog__button button_small button_seagreen'
                        clickFunction={this.showMoreOrHide.bind(this)} />
            </div>
        )
    }
}