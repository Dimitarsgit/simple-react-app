import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const JokerAvailable = ({ handleJoker, name }) => (
  <Button variant="success" onClick={handleJoker}>
    {name}
  </Button>
);

JokerAvailable.propTypes = {
  handleJoker: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default JokerAvailable;
