import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <Fragment>
    <h1>Welcome to Trivia game!</h1>
    <Link to="/game"> Start game</Link>
  </Fragment>
);

HomePage.propTypes = {};

export default HomePage;
