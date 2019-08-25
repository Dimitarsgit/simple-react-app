import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const GameMenuAnswer = ({ handleQuestionAnswer, answer }) => (
  <Col>
    <Button
      variant="dark"
      size="lg"
      onClick={() => {
        handleQuestionAnswer(answer);
      }}
      type="submit"
    >
      {answer}
    </Button>
  </Col>
);

GameMenuAnswer.propTypes = {
  handleQuestionAnswer: PropTypes.func.isRequired,
  answer: PropTypes.string.isRequired,
};

export default GameMenuAnswer;
