import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSecretWord } from './redux/actions/actions';
import Input from './components/input/input';
import GuessedWords from './components/GuessedWords/GuessedWords.component';
import Congrats from './components/Congrats/Congrats.component';
import './App.css';

class App extends Component {
  state = {};
  render() {
    return (
      <div data-test="component-app" className="container">
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <Input secretWord={this.props.secretWord} />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
};

export default connect(mapStateToProps, { getSecretWord })(App);
