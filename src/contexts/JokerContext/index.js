import React from 'react';

const JokerContext = React.createContext();

const initialState = {
  call: {
    available: true,
  },
  audience: {
    available: true,
  },
  half: {
    available: true,
  },
};

function jokerReducer(state, action) {
  switch (action.type) {
    case 'useCall': {
      return Object.assign({}, state, { call: { available: false } });
    }
    case 'useAudience': {
      return Object.assign({}, state, { audience: { available: false } });
    }
    case 'useHalf': {
      return Object.assign({}, state, { half: { available: false } });
    }
    case 'reset': {
      return Object.assign({}, initialState);
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function JokerProvider({ children }) {
  const [state, dispatch] = React.useReducer(jokerReducer, initialState);
  return (
    <JokerContext.Provider value={[state, dispatch]}>
      {children}
    </JokerContext.Provider>
  );
}

export { JokerProvider };
export default JokerContext;
