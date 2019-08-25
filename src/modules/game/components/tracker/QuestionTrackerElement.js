import React from 'react';
import PropTypes from 'prop-types';

const QuestionTrackerElement = ({ text }) => <div>{text}</div>;
QuestionTrackerElement.propTypes = {
  text: PropTypes.string.isRequired,
};
export default QuestionTrackerElement;
