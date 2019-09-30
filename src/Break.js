import React from 'react';
import './Break.css';

const Break = props => {
    return (
        <div className='break-container'>
            <h2 id='break-label'>Break Length</h2>
            
            <div className='button-container'>
                <button
                    id='break-increment'
                    onClick={props.incrementBreak}
                    >
                +
                </button>

                <h2 id='break-length' style={{margin: 0}}>
                {props.breakLength}
                </h2>
                
                <button
                    id='break-decrement'
                    onClick={props.decrementBreak}
                    >
                -
                </button>
            </div>
        </div>
    )
}

export default Break;