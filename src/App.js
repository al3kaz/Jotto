import React, { Component } from 'react';
import './App.css';
import GuessedWords from './components/GuessedWords/GuessedWords.component';
import Congrats from './components/Congrats/Congrats.component';

class App extends Component {
  state = {};
  render() {
    return (
      <div data-test="component-app" className="container">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessedWords
          guessedWords={[
            {
              guessedWord: 'train',
              letterMathCount: 3,
            },
          ]}
        />
      </div>
    );
  }
}

export default App;
