import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const HomeComponent = () => (
  <Fragment>
    <h1>Welcome to Trivia game!</h1>
    <Link to="/game"> Start game</Link>
  </Fragment>
);

HomeComponent.propTypes = {};

export default HomeComponent;
