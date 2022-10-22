import React from 'react';
import Card from './Card';


const Cardlist = ({robots}) => {
    return(
    <div>
        {
        robots.map((id,i) => {
            return (<Card key={id} id={robots[i].id} name={robots[i].name} email={robots[i].email} />)
        })
        }
    </div>
    )
}
export default Cardlist;