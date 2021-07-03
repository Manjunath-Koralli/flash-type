import React from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import Landing from '../Landing/Landing';
import ChallengeSection from '../ChallengeSection/ChallengeSection';
import Footer from '../Footer/Footer';

const totalTime = 60;
const paragraphUrl = "http://metaphorpsum.com/paragraphs/1/9";

// Lifecycle methods comes with class based components, not with function based components
// Lifecycle methods - flow of execution of our particular react component

class App extends React.Component {
  state = {
    selectedParagraph: "My Name is Manjunath Koralli ! Engineer-Software",
    timeStarted: false,
    timeRemaining: totalTime,
    words: 0,
    characters: 0,
    wpm: 0,
    testInfo : []
  }

  componentDidMount() {
    // fetch(paragraphUrl)
    //   .then(response => response.text())
    //   .then(paragraph => {
    //     console.log("Api response is:", paragraph);
    //     this.setState({
    //       selectedParagraph : paragraph
    //     })
    //   });  
    
    const selectedParagraphArray = this.state.selectedParagraph.split("");
    const testInfo = selectedParagraphArray.map(selectedLetter => {
      return {
        testLetter : selectedLetter,
        status : "notAttempted"
      }
    });

    this.setState({testInfo : testInfo})
  }

  render() {
    return (
      <div className="app">
        <Nav />
        <Landing />
        <ChallengeSection
          selectedParagraph={this.state.selectedParagraph}
          words={this.state.words}
          characters={this.state.characters}
          wpm={this.state.wpm}
          timeRemaining={this.state.timeRemaining}
          timeStarted={this.state.timeStarted}
          testInfo={this.state.testInfo}
        />
        <Footer />
      </div>
    )
  }
}

export default App;
