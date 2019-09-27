import React from 'react';

const Reset = props => {
    return (
        <div>
            <button onClick={props.handleReset} id='reset'>Reset</button>
        </div>
    )
}

export default Reset;