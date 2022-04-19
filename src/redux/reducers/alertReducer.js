const initialState = {
  open: false,
  message: '',
  severity: 'error',
};

const alertReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_ALERT':
      return {
        ...state,
        open: true,
        message: action.payload.message,
        severity: action.payload.severity ? action.payload.severity : 'error',
      };
    case 'CLEAR_ALERT':
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
};

export default alertReducer;
