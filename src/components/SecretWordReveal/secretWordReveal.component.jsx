import React from 'react';
import propTypes from 'prop-types';

const SecretWordReveal = (props) => {
  if (props.display) {
    return <div data-test="component-secret-word-reveal"></div>;
  } else {
    return (
      <div data-test="component-secret-word-reveal">
        <span data-test="secret-word-message">
          The secret word was "{props.secretWord}"<br />
          Better luck next time!
        </span>
      </div>
    );
  }
};

SecretWordReveal.propTypes = {
  display: propTypes.bool.isRequired,
  scretWord: propTypes.string,
};

export default SecretWordReveal;
