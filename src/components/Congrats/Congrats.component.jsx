import React from 'react';
import PropTypes from 'prop-types';

const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats" className='alert alert-success'>
        <span data-test="component-message">
          Congratulations! You guessed the word!
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats"></div>;
  }
};

Congrats.PropTypes = {
  success: PropTypes.bool,
};

export default Congrats;
