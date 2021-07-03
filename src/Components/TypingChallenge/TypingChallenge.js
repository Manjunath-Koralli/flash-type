import React from 'react';
import './TypingChallenge.css';
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard';
import Typewriter from '../Typewriter/Typewriter';

const TypingChallenge = ({words,characters,wpm}) => {
    return (
        <div className="typing-challenge-container">
            <div className="details-container">
                <ChallengeDetailsCard cardName="Words" cardValue={words}/>
                <ChallengeDetailsCard cardName="Characters" cardValue={characters}/>
                <ChallengeDetailsCard cardName="Speed" cardValue={wpm}/>
            </div>

            <div className="typewriter-container">
                <Typewriter selectedParagraph="Hello World"/>
            </div>
        </div>
    )
}

export default TypingChallenge;