import React from 'react';
import './Session.css';

const Session = ({sessionLength}) => {
    return (
        <div className='session-container'>
            <h2 id='session-label'>Session Length</h2>
            
            <div className='button-container'>
                <button
                    id='session-increment'
                    >
                +
                </button>

                <h2 id='session-length' style={{margin: 0}}>
                {sessionLength}
                </h2>
                
                <button
                    id='session-decrement'
                    >
                -
                </button>
            </div>
        </div>
    )
}

export default Session;