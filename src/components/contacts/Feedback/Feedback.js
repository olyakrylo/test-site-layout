import React from 'react';
import '../../../css/style.css';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Title from '../../lib/Title';
import Form from './Form';
import Item from './Item';

export default class Feedback extends React.Component {

    render() {
        let infoText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
        return (
            <div className='contacts'>
                <Title addClass={'contacts__info'} name={'Contact Us'} description={infoText} />

                <div className='contacts__content'>
                    <ul className='contacts__items'>
                        <Item icon={faMapMarkerAlt}
                              text={<p>Nobinr savar, Dhaka <br /> Bangadesh</p>} />
                        <Item icon={faPhoneAlt}
                              text={<p>+8801743331996<br />+8801928737807</p>} />
                        <Item icon={faEnvelope}
                              text={<p>quickmasud@gmail.com<br />quickmasud@gmail.com</p>} />
                    </ul>

                    <Form />
                </div>
            </div>
        )
    }
}