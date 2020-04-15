import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ColorList from './ColorList';


class Home extends Component { 
    
    render() {
        // const { pryColors } = this.props;
        return (
            <div>
                <div className='cont-black'>
                 <h1> Welcome to the color factory</h1>
                <Link to={'/colors/new'}> <h2>Add a color</h2></Link>
                </div>

                <div className='color-div'>
                    <ColorList pryColors={this.props.pryColors} />
                </div>

    
            </div>
        )
    }

}

export default Home;

