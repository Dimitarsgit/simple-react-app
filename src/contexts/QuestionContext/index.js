import React from 'react';
import { getQuestions } from '../../modules/game/service/GameService';

const QuestionContext = React.createContext();

const initialState = {
  questions: [],
  currentQuestion: {},
  isQuestionFetchLoading: true,
};

function questionReducer(state, action) {
  switch (action.type) {
    case 'changeQuestion': {
      const currentQuestion = state.questions[action.payload.questionNumber];
      return Object.assign({}, { ...state, currentQuestion });
    }
    case 'reduceIncorrectAnswers': {
      const currentQuestion = Object.assign({}, state.currentQuestion);
      currentQuestion.reduceIncorrectAnswers();
      return Object.assign({}, state, currentQuestion);
    }
    case 'start-fetch': {
      return Object.assign({}, state, { isQuestionFetchLoading: true });
    }
    case 'finish-fetch': {
      return {
        questions: action.payload.questions,
        currentQuestion: action.payload.questions[14],
        isQuestionFetchLoading: false,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
function QuestionProvider({ children }) {
  const [state, dispatch] = React.useReducer(questionReducer, initialState);
  return (
    <QuestionContext.Provider value={[state, dispatch]}>
      {children}
    </QuestionContext.Provider>
  );
}

async function fetchQuestions(dispatch) {
  dispatch({ type: 'start-fetch' });
  try {
    getQuestions()
      .then((result) => {
        dispatch({ type: 'finish-fetch', payload: { questions: result } });
        return result;
      })
      .catch(e => console.error(e));
  } catch (e) {
    console.error(e);
  }
}

export { QuestionProvider, fetchQuestions };

export default QuestionContext;
