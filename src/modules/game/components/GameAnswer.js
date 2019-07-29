import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const GameAnswer = ({ handleQuestionAnswer, answer }) => (
  <Col>
    <Button
      variant="dark"
      size="lg"
      onClick={(e) => {
        handleQuestionAnswer(e, answer);
      }}
      type="submit"
    >
      {answer}
    </Button>
  </Col>
);

GameAnswer.propTypes = {
  handleQuestionAnswer: PropTypes.func.isRequired,
  answer: PropTypes.string.isRequired,
};

export default GameAnswer;
