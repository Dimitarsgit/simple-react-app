import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
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

GameMenu.propTypes = {
  question: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default GameMenu;
