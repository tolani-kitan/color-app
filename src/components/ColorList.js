import React from 'react';
import { Link } from 'react-router-dom';

const ColorList = ({ pryColors }) => {
        
        return (
            <div className='color-list'>
               {
                   pryColors.map((color, i ) => {
                     return <p key={i}> <Link to={`/colorDisplay/${color.name}`}>{color.name} </Link> </p>
                    })
               } 
            </div>
        )
    }


export default ColorList;