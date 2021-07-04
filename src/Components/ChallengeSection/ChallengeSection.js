import React from 'react';
import './ChallengeSection.css';
import TestContainer from '../TestContainer/TestContainer';

const ChallengeSection = ({ selectedParagraph, timeStarted, timeRemaining, words, characters, wpm, testInfo, onInputChange}) => {
    return (
        <div className="challenge-section-container">
            <h1 data-aos="fade-down" className="challenge-section-header">
                Take a speed test now
            </h1>
            <TestContainer selectedParagraph={selectedParagraph} timeStarted={timeStarted} timeRemaining={timeRemaining} 
                    words={words} characters={characters} wpm={wpm} testInfo={testInfo} onInputChange={onInputChange} />
        </div>
    )
}

export default ChallengeSection;