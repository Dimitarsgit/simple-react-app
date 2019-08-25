import React, { Fragment } from 'react';
import JokerContainer from '../../modules/game/JokerContainer';
import GameMenuContainer from '../../modules/game/GameMenuContainer';
import QuestionTrackerContainer from '../../modules/game/QuestionTrackerContainer';

const GamePage = () => (
  <Fragment>
    <div
      style={{
        border: '2px solid',
        borderRadius: '20px',
        padding: '15px',
        width: 'auto',
        float: 'right',
        textAlign: 'center',
      }}
    >
      <JokerContainer />
      <QuestionTrackerContainer />
    </div>
    <div
      style={{
        float: 'right',
        width: '100%',
        align: 'center',
      }}
    >
      <GameMenuContainer />
    </div>
  </Fragment>
);

GamePage.propTypes = {};

export default GamePage;
