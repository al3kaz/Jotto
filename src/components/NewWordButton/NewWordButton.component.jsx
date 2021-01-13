import React from 'react';
import propTypes from 'prop-types';

const NewWordButton = (props) => {
  if (props.success) {
    return (
      <div>
        <button
          data-test='component-new-word-button'
          className='btn btn-primary m-2'
          onClick={props.resetGame}
        >New Word</button>
      </div>
    );
  } else {
    return (
      <div>
        <div data-test='component-new-word-button'></div>
      </div>
    );
  }
};

NewWordButton.propTypes = {
  success: propTypes.bool,
  resetGame: propTypes.func,
};

export default NewWordButton;
