import ListGroup from 'react-bootstrap/ListGroup';
import React from 'react';
import PropTypes from 'prop-types';

const QuestionTrackerActiveElement = ({ text }) => (
  <ListGroup.Item as="li" active>
    {text}
  </ListGroup.Item>
);
QuestionTrackerActiveElement.propTypes = {
  text: PropTypes.string.isRequired,
};

export default QuestionTrackerActiveElement;
