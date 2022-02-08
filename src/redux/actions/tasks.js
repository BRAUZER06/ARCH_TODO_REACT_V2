export const addTask = (text, checkbox) => ({
  type: "ADD_TASK",
  payload: {
    text,
    checkbox,
  },
});
export const fetchTasks = () => 
  async (dispatch) => {
    const resp = await fetch(
      "https://61d153f0da87830017e591da.mockapi.io/KursReact"
    );
    if (resp.ok) {
      const data = await resp.json();
      dispatch({
        type: "SET_TASKS",
        payload: data,
      });
    }
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
    type: "CLEAR",
  };
};
