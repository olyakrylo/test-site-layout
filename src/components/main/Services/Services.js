import React from 'react'
import '../../../css/style.css'
import ListElement from './ListElement/ListElement'
import Title from '../../lib/title/Title'

export default class Services extends React.Component {
    componentDidMount() {
        window.addEventListener('scroll', this.props.colorHeaderItems.bind(null, 'services'));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.colorHeaderItems.bind(null, 'services'));
    }

    render() {
        let infoText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
        let blockText = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum iti atque corrupti quos.'
        return(
            <div className='services' id='services'>
                <Title addClass={'services__info'} name={'Our Services'} description={infoText} />

                <ul className='services__content'>
                    <ListElement title='Research' text={blockText} />
                    <ListElement title='Portfolio' text={blockText} />
                    <ListElement title='Support' text={blockText} />
                    <ListElement title='Documentation' text={blockText} />
                    <ListElement title='Development' text={blockText} />
                    <ListElement title='Design' text={blockText} />
                </ul>
            </div>
        )
    }
}