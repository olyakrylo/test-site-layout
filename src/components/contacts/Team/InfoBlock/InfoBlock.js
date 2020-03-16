import React from 'react'
import '../../../../css/style.css'
import Card from './Card/Card'
import teamInfo from '../teamInfo'

export default function InfoBlock(props) {
    
    let start = props.num * 3
    let members = teamInfo.members.slice(start, start + 3)

    function* genMembers() {
        for(let i = 0; i < members.length; ++i) {
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
    
    return (
        <div id={'photo-block-' + props.num} 
             className={'team__content animated fadeIn ' + (props.hidden ? 'team__content_hidden' : '')}>
            {[...genMembers()]}
        </div>
    )
}