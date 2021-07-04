import React from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import Landing from '../Landing/Landing';
import ChallengeSection from '../ChallengeSection/ChallengeSection';
import Footer from '../Footer/Footer';
import { SAMPLE_PARAGRAPHS } from '../data/sampleParagraph';

const totalTime = 60;
const paragraphUrl = "http://metaphorpsum.com/paragraphs/1/8";
const defaultState = {
  selectedParagraph: "",
  timeStarted: false,
  timeRemaining: totalTime,
  words: 0,
  characters: 0,
  wpm: 0,
  testInfo: []
}

// Lifecycle methods comes with class based components, not with function based components
// Lifecycle methods - flow of execution of our particular react component

class App extends React.Component {
  state = defaultState;

  fetchNewParagraphCallback = () => {
    const paragraph = SAMPLE_PARAGRAPHS[
      Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)
    ];
    const selectedParagraphArray = paragraph.split("");
    const testInfo = selectedParagraphArray.map(selectedLetter => {
      return {
        testLetter: selectedLetter,
        status: "notAttempted"
      }
    });
    this.setState({ ...defaultState, testInfo: testInfo, selectedParagraph: paragraph })
  }

  fetchNewParagraph = () => {
    fetch(paragraphUrl)
      .then(response => response.text())
      .then(paragraph => {
        console.log("Api response is:", paragraph);
        // this.setState({
        //   selectedParagraph : paragraph
        // })
        // const selectedParagraphArray = this.state.selectedParagraph.split("");
        const selectedParagraphArray = paragraph.split("");
        const testInfo = selectedParagraphArray.map(selectedLetter => {
          return {
            testLetter: selectedLetter,
            status: "notAttempted"
          }
        });
        this.setState({ ...defaultState, testInfo: testInfo, selectedParagraph: paragraph })
      });
  }
  componentDidMount() {
    // this.fetchNewParagraph();
    this.fetchNewParagraphCallback();
  }

  startTimer = () => {
    this.setState({ timeStarted: true });
    const timer = setInterval(() => {
      if (this.state.timeRemaining > 0) {
        const timeSpent = totalTime - this.state.timeRemaining;
        const wpm = timeSpent > 0 ? (this.state.words / timeSpent) : 0;
        this.setState({
          timeRemaining: this.state.timeRemaining - 1,
          wpm: +wpm
        })
      }
      else {
        clearInterval(timer)
      }

    }, 1000)
  }

  handleUserInput = (inputValue) => {
    // console.log(inputValue);
    if (!this.state.timeStarted) this.startTimer();

    const characters = inputValue.length;
    const words = inputValue.split(" ").length;
    const index = characters - 1;
    if (index < 0) {
      this.setState({
        testInfo: [
          {
            testLetter: this.state.testInfo[0].testLetter,
            status: 'notAttempted'
          },
          ...this.state.testInfo.slice(1)
        ],
        characters,
        words
      });
      return;
    }

    if (index >= this.state.selectedParagraph.length) {
      this.setState({
        characters,
        words
      });
      return;
    }

    const testInfo = this.state.testInfo;
    if (!(index === this.state.selectedParagraph.length - 1)) {
      testInfo[index + 1].status = 'notAttempted';
    }

    const isCorrect = inputValue[index] === testInfo[index].testLetter;

    testInfo[index].status = isCorrect ? 'correct' : 'incorrect';
    this.setState({
      testInfo,
      words,
      characters
    })
  }

  startAgain = () => {
    // alert('Start again')
    // this.fetchNewParagraph();
    this.fetchNewParagraphCallback();
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
          onInputChange={this.handleUserInput}
          startAgain={this.startAgain}
        />
        <Footer />
      </div>
    )
  }
}

export default App;
