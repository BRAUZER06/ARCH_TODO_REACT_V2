export const addTask = (text, checkbox) => {
  return {
    type: "ADD_TASK",
    payload: {
      text,
      checkbox,
    },
  };
};

export const removeTask = (id) => {
  return {
    type: "REMOVE_TASK",
    payload: id,
  };
};

export const toggleComlet = (id) => {
  return {
    type: "TOGGLE_COMPLETED",
    payload: id,
  };
};

export const completeaAll = () => {
  return { type: "COMPLETE-ALL" };
};
export const cleaAll = () => {
  return {
    type: "CLEAR"
  };
};
