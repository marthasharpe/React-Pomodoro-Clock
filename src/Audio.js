import React from 'react';
import soundfile from './ride.wav'

export default class Audio extends React.Component {
    render() {
        return  <audio
                    id='beep'
                    //ref={myAudio}
                    src={soundfile}
                    type='audio'
                />
    }
}