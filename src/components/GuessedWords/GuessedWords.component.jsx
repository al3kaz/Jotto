import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
  let contents;

  if (props.guessedWords.length === 0) {
    contents = (
      <span data-test="guessed-instructions">
        Try to guess the secret word!
      </span>
    );
  } else {
    const guessedWordsRow = props.guessedWords.map((word, index) => {
      return (
        <tr data-test="guessed-word" key={index}>
          <td>{word.guessedWord}</td>
          <td>{word.letterMatchCount}</td>
        </tr>
      );
    });

    contents = (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <table className="table table-sm">
          <thead className="table-secondary">
            <tr>
              <th>Guess</th>
              <th>Mathing Letter</th>
            </tr>
          </thead>
          <tbody>{guessedWordsRow}</tbody>
        </table>
        <h3>Total Guesses: {props.guessedWords.length}</h3>
      </div>
    );
  }

  return <div data-test="component-guessed-words">{contents}</div>;
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      // letterMathCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;
