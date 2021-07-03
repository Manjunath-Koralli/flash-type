import React from 'react';
import './TestContainer.css';
import TypingChallenge from '../TypingChallenge/TypingChallenge';
import TryAgain from '../TryAgain/TryAgain';

const TestContainer = ({words,characters,wpm}) => {
    const timeRemaining = 30;
    
    return (
        // curly braces is expression
        <div className="test-container">
            {
                timeRemaining > 0 ? (
                    <div data-aos="fade-up" className="typing-challenge-container">
                        <TypingChallenge words={words} characters={characters} wpm={wpm} />
                    </div>
                ) :
                (
                    <div className="try-again-container">
                        <TryAgain words={words} characters={characters} wpm={wpm} />
                    </div>
                )
            }
            
            
        </div>
    )
}

export default TestContainer;