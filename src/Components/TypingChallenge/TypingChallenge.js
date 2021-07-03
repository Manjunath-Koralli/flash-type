import React from 'react';
import './TypingChallenge.css';
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard';

const TypingChallenge = ({words,characters,wpm}) => {
    return (
        <div className="typing-challenge-container">
            <div className="details-container">
                <ChallengeDetailsCard cardName="Words" cardValue={words}/>
                <ChallengeDetailsCard cardName="Characters" cardValue={characters}/>
                <ChallengeDetailsCard cardName="Speed" cardValue={wpm}/>
            </div>

            <div className="typewriter-container">
                <p>This is the real challenge</p>
            </div>
        </div>
    )
}

export default TypingChallenge;