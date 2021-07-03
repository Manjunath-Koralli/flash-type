import React from 'react';
import './Typewriter.css';

const Typewriter = ({selectedParagraph, timeStarted, timeRemaining }) => {
    return (
        <div className="typing-challenge">
            <div className="timer-container">
                <p className="timer">00:
                        { timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}`}
                </p>
                <p className="timer-info">
                    { !timeStarted && "Start typing to start the test"}
                    
                </p>
            </div>

            <div className="text-area-container">
                <div className="text-area-left">
                    <div className="textarea test-paragraph">
                        {selectedParagraph}
                    </div>
                </div>
                <div className="text-area-right">
                    <textarea className="textarea" placeholder="Start typing here">

                    </textarea>
                </div>
            </div>
        </div>
    )
}

export default Typewriter;