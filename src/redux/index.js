
import { createStore } from "redux";

function reducer(state, action) {
  if (action.type === "ADD_TASK") {
    return {
      ...state,
      tasks: [
        ...state.tasks,
        {
          id: Math.random().toString(36).substr(2, 9),
          text: action.payload.text,
          completed: action.payload.checkbox,
        },
      ],
    };
  }

  if (action.type === "REMOVE_TASK") {
    return {
      ...state,
      tasks: state.tasks.filter((obj) => obj.id !== action.payload),
    };
  }

  if (action.type === "TOGGLE_COMPLETED") {
    // return [...state].map((obj) => {
    //   if (obj.id === action.payload) {
    //     return { ...obj, completed: !obj.completed };
    //   }
    //   return obj;
    // });
    return {
      ...state,
      tasks: state.tasks.map((obj) =>
        obj.id === action.payload
          ? {
              ...obj,
              completed: !obj.completed,
            }
          : obj
      ),
    };
  }

  if (action.type === "COMPLETE-ALL") {
    return {
      ...state,
      tasks: state.tasks.map((obj) => ({
        ...obj,
        completed: true,
      })),
    };
  }
  if (action.type === "CLEAR") {
    return { ...state, tasks: [] };
  }

  if (action.type === "SET_FILTER") {
    return {
      ...state,
      filterBy: action.payload,
    };
  }
  return state
}

const store = createStore(reducer, {
  filterBy: "all",
  tasks: [
    {
      id: 1,
      text: "Это задача создана через редюсер",
      completed: true,
    },
  ],
});


export default store;