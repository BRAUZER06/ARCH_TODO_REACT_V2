export const changeInput = (event) => {
  return {
    type: 'CHANGE_INPUT',
    payload: event.target.value,
  };
};

export const changeCheckBox = (event) => {
  return {
    type: 'CHANGE_CHECKBOX',
    payload: event.target.checked,
  };
};
