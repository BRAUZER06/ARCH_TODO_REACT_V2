const initialState = {
  inputValue: '',
  completed: false,
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputValue: action.payload,
      };

    case 'CHANGE_CHECKBOX':
      return {
        ...state,
        completed: action.payload,
      };

    default:
      return state;
  }
};
