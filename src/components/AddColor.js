import React from 'react';

const AddColor = ({ getColorName, getColorValue, newColor}) => {
    return (
        <div className='main'>
            <form className='form-container'>
            <div>
                <label> Enter a Color: </label>
                <input className='input' type='text' onChange={getColorName} />
            </div>
            <div>
                <label> Select Color Value: </label>
                <input type='color' onChange={getColorValue}  />
            </div>
            <div>
                <button onClick={newColor} > Add Color</button>
            </div>
            </form>
            
        </div>
    )
}

export default AddColor;