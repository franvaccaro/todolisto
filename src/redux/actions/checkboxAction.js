// eslint-disable-next-line import/prefer-default-export
export const handleCheckbox = (id) => (dispatch) => {
  dispatch({
    type: 'TOGGLE_CHECKBOX',
    payload: {
      id,
    },
  });
};
