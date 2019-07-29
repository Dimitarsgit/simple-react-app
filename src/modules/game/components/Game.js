import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ProgressMenu from './ProgressMenu';
import GameMenu from './GameMenu';
import ConfirmModal from '../../modal/ConfirmModal';
import JokerModal from '../../modal/JokerModal';
import Jokers from './jokers/Jokers';
import GameAnswer from './GameAnswer';

const Game = ({
  questions,
  jokers,
  currentQuestion,
  handleQuestionAnswer,
  handleProceed,
  handleCancel,
  handleJokerCall,
  handleJokerHalf,
  handleJokerAudience,
  modalIsOpen,
  toggleModal,
  message,
  jokerModalIsOpen,
  toggleJokerModal,
}) => (
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
      <Jokers
        jokers={jokers}
        handleJokerHalf={handleJokerHalf}
        handleJokerAudience={handleJokerAudience}
        handleJokerCall={handleJokerCall}
      />
      <ProgressMenu
        questions={questions}
        currentQuestion={currentQuestion}
        handleJokerCall={handleJokerCall}
      />
    </div>
    <GameMenu question={currentQuestion.getQuestion()}>
      {currentQuestion.getAnswers().map((answer, index) => (
        <GameAnswer
          key={index}
          answer={answer}
          handleQuestionAnswer={() => handleQuestionAnswer(answer)}
        />
      ))}
    </GameMenu>
    <JokerModal
      show={jokerModalIsOpen}
      toggleModal={toggleJokerModal}
      message={message}
    />
    <ConfirmModal
      show={modalIsOpen}
      toggleModal={toggleModal}
      message={message}
      agreeAction={handleProceed}
      cancelAction={handleCancel}
    />
  </Fragment>
);

Game.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleQuestionAnswer: PropTypes.func.isRequired,
  handleProceed: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleJokerCall: PropTypes.func.isRequired,
  handleJokerHalf: PropTypes.func.isRequired,
  handleJokerAudience: PropTypes.func.isRequired,
  currentQuestion: PropTypes.shape({
    getQuestion: PropTypes.func,
    getAnswers: PropTypes.func,
  }).isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  jokerModalIsOpen: PropTypes.bool.isRequired,
  toggleJokerModal: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  jokers: PropTypes.shape({
    call: PropTypes.bool.isRequired,
    audience: PropTypes.bool.isRequired,
    half: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Game;
