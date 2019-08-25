import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import GameMenuAnswer from './GameMenuAnswer';

const GameMenu = ({ currentQuestion, handleQuestionAnswer }) => (
  <Fragment>
    <h1
      style={{
        border: '2px solid',
        borderRadius: '20px',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      {currentQuestion.getQuestion()}
    </h1>
    <Container>
      <Row>
        {currentQuestion.getAnswers().map((answer, index) => (
          <GameMenuAnswer
            key={index}
            answer={answer}
            handleQuestionAnswer={handleQuestionAnswer}
          />
        ))}
      </Row>
    </Container>
  </Fragment>
);

GameMenu.propTypes = {
  currentQuestion: PropTypes.shape({
    category: PropTypes.string,
    getId: PropTypes.func,
    getAnswers: PropTypes.func,
    getQuestion: PropTypes.func,
  }).isRequired,
  handleQuestionAnswer: PropTypes.func.isRequired,
};

export default GameMenu;
