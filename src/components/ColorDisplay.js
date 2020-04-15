import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ColorDisplay() {
    const { color } = useParams();
        console.log('color', color);
    return (
        <div className='color-display' style={{background: `${color}`}}>
            <h1> This is color {color} </h1>
            <Link to={'/'}><h1>Go Back</h1></Link>
        </div>
    )
}


