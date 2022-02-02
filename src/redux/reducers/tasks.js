const initialState = [
  {
    id: 1,
    text: "Это задача создана через редюсер",
    completed: true,
  },
];

export function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: Math.random().toString(36).substr(2, 9),
          text: action.payload.text,
          completed: action.payload.checkbox,
        },
      ];

    case "REMOVE_TASK":
      return state.filter((obj) => obj.id !== action.payload);

    case "TOGGLE_COMPLETED":
      return state.map((obj) =>
        obj.id === action.payload
          ? {
              ...obj,
              completed: !obj.completed,
            }
          : obj
      );

    case "COMPLETE-ALL":
      return state.map((obj) => ({
        ...obj,
        completed: true,
      }));

    case "CLEAR":
      return [];
    
    default:
      return state;
  }
}
