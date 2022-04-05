const initialState = [];

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      const taskId = state.length ? state[state.length - 1].id + 1 : 1;
      return [
        ...state,
        {
          id: taskId,
          ...action.payload,
        },
      ];

    case 'DELETE_TASK':
      return state.filter((task) => task.id !== action.payload);

    case 'TOGGLE_COMPLETED':
      return state.map((task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      });

    case 'COMPLETED_ALL':
      return state.map((task) => {
        return {
          ...task,
          completed: true,
        };
      });

    case 'UNCOMPLETED_ALL':
      return state.map((task) => {
        return {
          ...task,
          completed: false,
        };
      });

    case 'DELETE_ALL_TASKS':
      return [];

    case 'EDIT_TASK':
      return state.map((task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            inputValue: prompt('Редактировать задачу'),
          };
        }
        return task;
      });

    default:
      return state;
  }
};
