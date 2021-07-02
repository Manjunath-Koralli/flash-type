import React from 'react';
import './TestContainer.css';
import TryAgain from '../TryAgain/TryAgain';

const TestContainer = ({words,characters,wpm}) => {
    return (
        <div className="test-container">
            <div data-aos="fade-up" className="typing-challenge-container">
                <h1>This is the test</h1>
            </div>
            {/* <div className="try-again-container">
                <TryAgain words={words} characters={characters} wpm={wpm} />
            </div> */}
        </div>
    )
}

export default TestContainer;