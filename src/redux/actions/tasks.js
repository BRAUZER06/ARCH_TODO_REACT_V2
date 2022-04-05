export const addTask = (inputValue, completed) => {
  return {
    type: 'ADD_TASK',
    payload: {
      inputValue,
      completed,
    },
  };
};

export const removeTask = (id) => {
  return {
    type: 'DELETE_TASK',
    payload: id,
  };
};

export const toggleComplete = (id) => {
  return {
    type: 'TOGGLE_COMPLETED',
    payload: id,
  };
};

export const completeAllTasks = () => {
  return {
    type: 'COMPLETED_ALL',
  };
};

export const unCompleteAllTasks = () => {
  return {
    type: 'UNCOMPLETED_ALL',
  };
};

export const deleteAllTasks = () => {
  return {
    type: 'DELETE_ALL_TASKS',
  };
};

export const editTask = (id) => {
  return {
    type: 'EDIT_TASK',
    payload: id,
  };
};
