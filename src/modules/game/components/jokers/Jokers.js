import React from 'react';
import PropTypes from 'prop-types';
import JokerAvailable from './JokerAvailable';
import JokerUnavailable from './JokerUnavailable';

const Jokers = ({
  jokers,
  handleJokerCall,
  handleJokerAudience,
  handleJokerHalf,
}) => (
  <div>
    {jokers.call ? (
      <JokerAvailable handleJoker={handleJokerCall} name="Call" />
    ) : (
      <JokerUnavailable name="Call" />
    )}
    {jokers.half ? (
      <JokerAvailable handleJoker={handleJokerHalf} name="50/50" />
    ) : (
      <JokerUnavailable name="50/50" />
    )}
    {jokers.audience ? (
      <JokerAvailable handleJoker={handleJokerAudience} name="Audience" />
    ) : (
      <JokerUnavailable name="Audience" />
    )}
  </div>
);

Jokers.propTypes = {
  handleJokerCall: PropTypes.func.isRequired,
  handleJokerAudience: PropTypes.func.isRequired,
  handleJokerHalf: PropTypes.func.isRequired,
  jokers: PropTypes.shape({
    call: PropTypes.bool.isRequired,
    audience: PropTypes.bool.isRequired,
    half: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Jokers;
