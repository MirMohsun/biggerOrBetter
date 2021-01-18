
const initState = {
  id: 0, 
};

export const someReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
      case 'SET_ID': 
          return { ...state };       
      default:
          return state;
  };
};