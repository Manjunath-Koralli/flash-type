import React from 'react';
import './TryAgain.css';

const TryAgain = ({words,characters,wpm}) => {
    return (
        <div className="try-again-container">
            <h1>Test Results</h1>
            <div className="result-container">
                <p><b>Characters : </b> { characters }</p>
                <p><b>Words : </b> { words }</p>
                <p><b>WPM : </b> { wpm } wpm </p>
            </div>
            <div>
                <button className="end-buttons start-again-button">Re Try</button>
                <button onClick={() => {
                        window.open("https://www.facebook.com/sharer/sharer.php?u=theleanprogrammer.com/aam",
                        "facebook-share-dialog",
                        "width = 800,height=600"
                        );
                    }}
                    className="end-buttons share-button">Share</button>
                <button 
                    onClick={() => {
                        window.open("https://www.twitter.com/intent/tweet?text=theleanprogrammer.com/aam",
                        "twitter-share-dialog",
                        "width = 800,height=600"
                        );
                    }}
                className="end-buttons tweet-button">Tweet</button>
            </div>
        </div>
    )
}

export default TryAgain;