import React from 'react'
import '../../../css/style.css'
import Item from './Item/Item'
import Title from '../../lib/title/Title'

export default class Services extends React.Component {
    componentDidMount() {
        window.addEventListener('scroll', this.props.colorHeaderItems);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.colorHeaderItems);
    }

    render() {
        let infoText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
        let blockText = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.'
        return(
            <div className='services' id='services'>
                <Title addClass='services__info' name='Our Services' description={infoText} />

                <ul className='services__content'>
                    <Item title='Research' text={blockText} />
                    <Item title='Portfolio' text={blockText} />
                    <Item title='Support' text={blockText} />
                    <Item title='Documentation' text={blockText} />
                    <Item title='Development' text={blockText} />
                    <Item title='Design' text={blockText} />
                </ul>
            </div>
        )
    }
}