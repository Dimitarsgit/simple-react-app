import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const GameMenu = ({ question, children }) => (
  <div
    style={{
      float: 'right',
      width: '100%',
      align: 'center',
    }}
  >
    <h1
      style={{
        border: '2px solid',
        borderRadius: '20px',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      {question}
    </h1>
    <Container>
      <Row>{children}</Row>
    </Container>
  </div>
);
const GameMenuAnswer = ({ handleQuestionAnswer, answer }) => (
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
GameMenu.propTypes = {
  question: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
GameMenuAnswer.propTypes = {
  handleQuestionAnswer: PropTypes.func.isRequired,
  answer: PropTypes.string.isRequired,
};
GameMenu.Answer = GameMenuAnswer;

export default GameMenu;
