import React from 'react';
import './TestContainer.css';
import TypingChallenge from '../TypingChallenge/TypingChallenge';
import TryAgain from '../TryAgain/TryAgain';

const TestContainer = ({selectedParagraph, timeStarted, timeRemaining, words, characters, wpm, testInfo, onInputChange, startAgain}) => {    
    
    return (
        // curly braces is expression
        <div className="test-container">
            {
                timeRemaining > 0 ? (
                    <div data-aos="fade-up" className="typing-challenge-container">
                        <TypingChallenge selectedParagraph={selectedParagraph} timeStarted={timeStarted} timeRemaining={timeRemaining} 
                                    words={words} characters={characters} wpm={wpm} testInfo={testInfo} onInputChange={onInputChange}/>
                    </div>
                ) :
                (
                    <div className="try-again-container">
                        <TryAgain words={words} characters={characters} wpm={wpm} startAgain={startAgain} />
                    </div>
                )
            }
            
            
        </div>
    )
}

export default TestContainer;