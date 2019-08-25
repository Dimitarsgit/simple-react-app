import React, { useContext } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import QuestionContext from '../../contexts/QuestionContext';
import QuestionTracker from './components/tracker/QuestionTracker';

function QuestionTrackerContainer() {
  const [questionState] = useContext(QuestionContext);
  const { isQuestionFetchLoading, questions, currentQuestion } = questionState;

  if (isQuestionFetchLoading || !questions.length) {
    return <Spinner animation="border" />;
  }

  return (
    <QuestionTracker currentQuestion={currentQuestion} questions={questions} />
  );
}

export default QuestionTrackerContainer;
