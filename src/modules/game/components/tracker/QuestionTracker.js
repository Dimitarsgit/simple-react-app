import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import QuestionTrackerElement from './QuestionTrackerElement';
import QuestionTrackerActiveElement from './QuestionTrackerActiveElement';

const QuestionTracker = ({ currentQuestion, questions }) => (
  <ListGroup>
    {questions.map(question => (question.getId() === currentQuestion.getId() ? (
      <QuestionTrackerActiveElement
        key={question.getId()}
        text={question.getPrice()}
      />
    ) : (
      <QuestionTrackerElement key={question.getId()} text={question.getPrice()} />
    )))}
  </ListGroup>
);

QuestionTracker.propTypes = {
  currentQuestion: PropTypes.shape({
    category: PropTypes.string,
    getId: PropTypes.func,
  }).isRequired,
  questions: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default QuestionTracker;
