import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const JokerUnavailable = ({ name }) => (
  <Button variant="danger" disabled>
    {name}
  </Button>
);

JokerUnavailable.propTypes = {
  name: PropTypes.string.isRequired,
};

export default JokerUnavailable;
