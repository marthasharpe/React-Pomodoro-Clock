import React from 'react';
import './Session.css';

const Session = props => {
    return (
        <div className='session-container'>
            <h2 id='session-label'>Session Length</h2>
            
            <div className='button-container'>
                <button
                    id='session-increment'
                    onClick={props.incrementSession}
                    >
                +
                </button>

                <h2 id='session-length' style={{margin: 0}}>
                {props.sessionLength}
                </h2>
                
                <button
                    id='session-decrement'
                    onClick={props.decrementSession}
                    >
                -
                </button>
            </div>
        </div>
    )
}

export default Session;