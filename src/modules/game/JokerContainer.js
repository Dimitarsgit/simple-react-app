import React, { Fragment, useState, useContext } from 'react';
import Spinner from 'react-bootstrap/es/Spinner';
import QuestionContext from '../../contexts/QuestionContext';
import JokerContext from '../../contexts/JokerContext';
import Jokers from './components/jokers/Jokers';
import JokerModal from '../modal/JokerModal';
import useToggleShow from '../toggleShow/ModalToggleShow';

function JokerContainer() {
  const [
    { currentQuestion, isQuestionFetchLoading },
    dispatchQuestion,
  ] = useContext(QuestionContext);
  const [{ call, half, audience }, dispatchJoker] = useContext(JokerContext);

  const [message, setMessage] = useState('');
  const [isModalOpen, setIsModalOpen, modalActions] = useToggleShow(false);

  const useJokerCall = () => {
    dispatchJoker({ type: 'useCall' });
    setMessage(
      `Yor friend's answer was: ${currentQuestion.getRandomAnswer()}.`,
    );
    setIsModalOpen(true);
  };

  const useJokerHalf = () => {
    dispatchJoker({ type: 'useHalf' });
    dispatchQuestion({ type: 'reduceIncorrectAnswers' });
  };

  const useJokerAudience = () => {
    dispatchJoker({ type: 'useAudience' });
    setMessage(
      `The audience top answer was: ${currentQuestion.getAudienceAnswer()}.`,
    );
    setIsModalOpen(true);
  };

  if (isQuestionFetchLoading || !currentQuestion) {
    return <Spinner animation="border" />;
  }

  return (
    <Fragment>
      <Jokers
        jokers={{ call, half, audience }}
        handleJokerAudience={useJokerAudience}
        handleJokerCall={useJokerCall}
        handleJokerHalf={useJokerHalf}
      />
      <JokerModal
        show={isModalOpen}
        toggleModal={modalActions.toggleShow}
        message={message}
      />
    </Fragment>
  );
}

export default JokerContainer;
