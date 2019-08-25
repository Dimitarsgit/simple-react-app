import React, {
  Fragment, useEffect, useState, useContext,
} from 'react';
import Spinner from 'react-bootstrap/Spinner';
import QuestionContext, {
  fetchQuestions,
} from '../../contexts/QuestionContext';

import QuestionTrackerContext from '../../contexts/QuestionTrackerContext';
import JokerContext from '../../contexts/JokerContext';
import EndGame from './components/EndGame';
import GameMenu from './components/gameMenu/GameMenu';
import ConfirmModal from '../modal/ConfirmModal';
import useToggleShow from '../toggleShow/ModalToggleShow';

function GameMenuContainer() {
  const [{ current }, dispatchQuestionTracker] = useContext(
    QuestionTrackerContext,
  );
  const [, dispatchJoker] = useContext(JokerContext);
  const [
    { currentQuestion, isQuestionFetchLoading, questions },
    dispatchQuestion,
  ] = useContext(QuestionContext);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isModalOpen, setIsModalOpen, modalActions] = useToggleShow(false);
  const [surePrice, setSurePrice] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    dispatchJoker({ type: 'reset' });
    dispatchQuestionTracker({ type: 'setCurrent', payload: { current: 14 } });
    fetchQuestions(dispatchQuestion).catch(e => console.error(e));
  }, [dispatchJoker, dispatchQuestion, dispatchQuestionTracker]);

  function startNewGame() {
    dispatchJoker({ type: 'reset' });
    dispatchQuestionTracker({ type: 'setCurrent', payload: { current: 14 } });
    fetchQuestions(dispatchQuestion)
      .then(() => {
        setIsPlaying(true);
        setSurePrice(0);
        setMessage('');
        setIsModalOpen(false);
      })
      .catch(e => console.error(e));
  }

  function handleCorrectAnswer() {
    if (!(current % 5)) {
      setSurePrice(currentQuestion.getPrice());
    }
    if (current === 0) {
      setIsPlaying(false);
      setMessage('You WON 1 MILLION !');
      return;
    }

    dispatchQuestionTracker({ type: 'increment' });
    dispatchQuestion({
      type: 'changeQuestion',
      payload: { questionNumber: current - 1 },
    });
    modalActions.toggleShow();
  }

  function proceedGame() {
    setMessage(
      `Correct answer! You can stop now and win $${currentQuestion.getPrice()} or proceed and win more.`,
    );
    modalActions.toggleShow();
  }

  function cancelGame() {
    setMessage(
      `Congrats! You stop the game and go home with $${currentQuestion.getPrice()}`,
    );
    setIsPlaying(false);
    modalActions.toggleShow();
  }

  function handleWrongAnswer() {
    setMessage(`You lose and go home with ${surePrice}`);
    setIsPlaying(false);
  }
  function handleQuestionAnswer(answer) {
    answer === currentQuestion.getCorrectAnswer()
      ? proceedGame()
      : handleWrongAnswer();
  }

  if (isQuestionFetchLoading || !questions.length) {
    return <Spinner animation="border" />;
  }

  if (!isPlaying) {
    return <EndGame startNewGame={startNewGame} message={message} />;
  }

  return (
    <Fragment>
      <h1>
        {' '}
Sure price: $
        {surePrice}
      </h1>
      <h2>{currentQuestion.getCorrectAnswer()}</h2>
      <GameMenu
        currentQuestion={currentQuestion}
        handleQuestionAnswer={handleQuestionAnswer}
      />
      <ConfirmModal
        show={isModalOpen}
        agreeAction={handleCorrectAnswer}
        toggleModal={modalActions.toggleShow}
        cancelAction={cancelGame}
        message={message}
      />
    </Fragment>
  );
}

export default GameMenuContainer;
