import React from 'react';
import './TestContainer.css';

const TestContainer = ({words,character,wpm}) => {
    return (
        <div className="test-container">
            <div className="try-again-container">
                This is try again
            </div>
        </div>
    )
}

export default TestContainer;