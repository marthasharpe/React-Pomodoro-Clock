import React from 'react';

const Reset = ({ handleReset }) => {
    return (
        <div>
            <button onClick={handleReset} id='reset'>Reset</button>
        </div>
    )
}

export default Reset;