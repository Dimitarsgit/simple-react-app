import React from 'react';

const QuestionTrackerContext = React.createContext();

const initialState = {
  current: 14,
};

function questionTrackerReducer(state, action) {
  switch (action.type) {
    case 'increment': {
      if (!state.current) return Object.assign({}, { ...state, current: state.current });
      return Object.assign({}, { ...state, current: state.current - 1 });
    }
    case 'setCurrent': {
      return Object.assign({}, { ...state, current: action.payload.current });
    }
    case 'reset': {
      return Object.assign({}, initialState);
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function QuestionTrackerProvider({ children }) {
  const [state, dispatch] = React.useReducer(
    questionTrackerReducer,
    initialState,
  );
  return (
    <QuestionTrackerContext.Provider value={[state, dispatch]}>
      {children}
    </QuestionTrackerContext.Provider>
  );
}

export { QuestionTrackerProvider };
export default QuestionTrackerContext;
