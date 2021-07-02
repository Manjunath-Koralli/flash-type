import React from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import Landing from '../Landing/Landing';
import ChallengeSection from '../ChallengeSection/ChallengeSection';
import Footer from '../Footer/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <Landing />
        <ChallengeSection />
        <Footer />
      </div>
    )
  }
}

export default App;