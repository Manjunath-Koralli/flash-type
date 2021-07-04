import React from 'react';
import './Typewriter.css';
import TestLetter from '../TestLetter/TestLetter';

const Typewriter = ({selectedParagraph, timeStarted, timeRemaining, testInfo, onInputChange }) => {
    // console.log("Inside typewriter:",testInfo)
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
                        {/* {selectedParagraph} */}
                        {
                            testInfo.map((individualLetterInfo,index) => {
                                return (
                                    <TestLetter key={index} individualLetterInfo={individualLetterInfo} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="text-area-right">
                    <textarea 
                        className="textarea" 
                        placeholder="Start typing here"
                        onChange = {(e) => onInputChange(e.target.value)}>
                    </textarea>
                </div>
            </div>
        </div>
    )
}

export default Typewriter;