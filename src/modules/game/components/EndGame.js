import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const EndGame = ({ message, startNewGame }) => (
  <div>
    <h1>{message}</h1>
    <Button variant="dark" onClick={startNewGame}>
      Start new game!
    </Button>
    <Button variant="dark">
      <Link to="/">Go to home page</Link>
    </Button>
  </div>
);

EndGame.propTypes = {
  message: PropTypes.string.isRequired,
  startNewGame: PropTypes.func.isRequired,
};

export default EndGame;
