import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

const ProgressMenu = ({ currentQuestion, questions }) => (
  <ListGroup>
    {questions.map((question) => {
      if (question.getId() === currentQuestion.getId()) {
        return (
          <ProgressMenuActiveLevel
            key={question.getId()}
            text={question.getPrice()}
          />
        );
      }
      return (
        <ProgressMenuLevel key={question.getId()} text={question.getPrice()} />
      );
    })}
  </ListGroup>
);

const ProgressMenuLevel = ({ text }) => <div>{text}</div>;
const ProgressMenuActiveLevel = ({ text }) => (
  <ListGroup.Item as="li" active>
    {text}
  </ListGroup.Item>
);

ProgressMenu.propTypes = {
  currentQuestion: PropTypes.shape({
    category: PropTypes.string,
    getId: PropTypes.func,
  }).isRequired,
  questions: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
ProgressMenuLevel.propTypes = {
  text: PropTypes.string.isRequired,
};
ProgressMenuActiveLevel.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ProgressMenu;
