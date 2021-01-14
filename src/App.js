import React from 'react';
import { connect } from 'react-redux';
import { getSecretWord, resetGame } from './redux/actions/actions';
import Input from './components/input/input';
import GuessedWords from './components/GuessedWords/GuessedWords.component';
import Congrats from './components/Congrats/Congrats.component';
import './App.css';
import NewWordButton from './components/NewWordButton/NewWordButton.component';
import SecretWordReveal from './components/SecretWordReveal/secretWordReveal.component';

export class UnconnectedApp extends React.Component {
  componentDidMount() {
    this.props.getSecretWord();
  }

  render() {
    return (
      <div data-test="component-app" className="container">
        <h1>Jotto</h1>
        <div>The secret word is {this.props.secretWord}</div>
        <Congrats success={this.props.success} />
        <SecretWordReveal
          display={this.props.giveUp}
          secretWord={this.props.secretWord}
        />
        <NewWordButton
          success={this.props.success}
          resetGame={this.props.resetGame}
        />
        <Input secretWord={this.props.secretWord} giveUp={this.props.giveUp} />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord, giveUp } = state;
  return { success, guessedWords, secretWord, giveUp };
};
const actions = {
  getSecretWord,
  resetGame,
};

export default connect(mapStateToProps, actions)(UnconnectedApp);
