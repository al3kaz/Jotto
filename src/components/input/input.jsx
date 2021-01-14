import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessWord } from '../../redux/actions/actions';

export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);
    this.state = { currentGuess: '' };
  }

  handleChange = (e) => {
    this.setState({
      currentGuess: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const guessedWord = this.state.currentGuess;

    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
      this.setState({
        currentGuess: '',
      });
    }
  };

  handleGiveUpButton = (e) => {
    e.preventDefault();
    this.props.giveUp();
  };

  render() {
    const contents = this.props.success ? null : (
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-ms-3"
          id="word-guess"
          type="text"
          placeholder="enter guess"
          value={this.state.currentGuess}
          onChange={this.handleChange}
        />
        <button
          data-test="submit-button"
          type="submit"
          className="btn btn-primary m-2"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
        <button
          data-test="give-up-button"
          type="submit"
          className="btn btn-primary m-2"
          onClick={this.handleGiveUpButton}
        >
          Give Up
        </button>
      </form>
    );
    return <div data-test="component-input">{contents}</div>;
  }
}

const mapStateToProps = ({ success, giveUp }) => {
  return { success, giveUp };
};

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
