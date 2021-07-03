import React from 'react';
import './TestContainer.css';
import TypingChallenge from '../TypingChallenge/TypingChallenge';
import TryAgain from '../TryAgain/TryAgain';

const TestContainer = ({words,characters,wpm}) => {
    return (
        <div className="test-container">
            <div data-aos="fade-up" className="typing-challenge-container">
                <TypingChallenge words={words} characters={characters} wpm={wpm} />
            </div>
            {/* <div className="try-again-container">
                <TryAgain words={words} characters={characters} wpm={wpm} />
            </div> */}
        </div>
    )
}

export default TestContainer;