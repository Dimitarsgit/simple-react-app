import React from 'react';
import PropTypes from 'prop-types';
import { QuestionProvider } from './QuestionContext';
import { QuestionTrackerProvider } from './QuestionTrackerContext';
import { JokerProvider } from './JokerContext';

const ContextProvider = ({ children }) => (
  <QuestionProvider>
    <QuestionTrackerProvider>
      <JokerProvider>{children}</JokerProvider>
    </QuestionTrackerProvider>
  </QuestionProvider>
);

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
