const initialState = {
  checked: false,
  color: '',
  backgroundColor: '',
  textDecoration: '',
};

const checkboxReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_CHECKBOX':
      return {
        ...state,
        checked: true,
        color: '#4caf50',
        backgroundColor: '#284e28',
        textDecoration: 'line-through',
      };
    case 'CLEAR_CHECKBOX':
      return {
        ...state,
        checked: false,
        color: '',
        backgroundColor: '',
        textDecoration: '',
      };
    default:
      return state;
  }
};

export default checkboxReducer;
