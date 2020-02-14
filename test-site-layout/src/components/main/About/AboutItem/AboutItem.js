import React from 'react'
import '../../../../css/style.css'

export default class AboutItem extends React.Component {

    render() {
        let styleClass = 'about__img ' + 'about__img_' + this.props.imgName
        return(
            <li>
                <div className={styleClass}></div>
                <h3>{this.props.title}</h3>
                <p>{this.props.blockText}</p>
            </li>
        )
    }

}