import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../test/test.utils';
import GuessedWords from './GuessedWords.component';

const defaultProps = {
  guessedWords: [
    {
      guessedWord: 'train',
      letterMathCount: 3,
    },
  ],
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test('does not throw worning with expected props', () => {
  checkProps(GuessedWords, defaultProps);
});

describe('if there are no words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test('renders without errors', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });
  test('renders instruction to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guessed-instructions');
    expect(instructions.text().length).not.toBe(0);
  });
});

describe('if there are words guessed', () => {
  let wrapper;

  const guessedWords = [
    {
      guessedWord: 'train',
      letterMathCount: 3,
    },
    {
      guessedWord: 'agile',
      letterMathCount: 1,
    },
    {
      guessedWord: 'party',
      letterMathCount: 5,
    },
  ];

  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });
  test('renders without errors', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });
  test('renders guessed words seciotn', () => {
    const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
    expect(guessedWordsNode.length).toBe(1);
  });
  test('correct number of guessed words', () => {
    const guessedWordsNode = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordsNode.length).toBe(guessedWords.length);
  });
});
