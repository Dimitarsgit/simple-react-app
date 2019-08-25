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
    {jokers.call.available ? (
      <JokerAvailable handleJoker={handleJokerCall} name="Call" />
    ) : (
      <JokerUnavailable name="Call" />
    )}
    {jokers.half.available ? (
      <JokerAvailable handleJoker={handleJokerHalf} name="50/50" />
    ) : (
      <JokerUnavailable name="50/50" />
    )}
    {jokers.audience.available ? (
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
    call: PropTypes.shape({
      available: PropTypes.bool,
    }),
    audience: PropTypes.shape({
      available: PropTypes.bool,
    }),
    half: PropTypes.shape({
      available: PropTypes.bool,
    }),
  }).isRequired,
};

export default Jokers;
