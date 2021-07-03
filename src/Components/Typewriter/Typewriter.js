import React from 'react';
import './Typewriter.css';

const Typewriter = ({ selectedParagraph}) => {
    return (
        <div className="typing-challenge">
            <div className="timer-container">
                <p className="timer">00:60</p>
                <p className="timer-info">Start typing to start the test</p>
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