import React from "react";
import { Paper, Divider, Button, List, Tabs, Tab } from "@mui/material";
import { AddField } from "./components/AddField";
import { Item } from "./components/Item";
import { useSelector, useDispatch } from "react-redux";
import Filter from "./components/Filter";



function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
console.log(state);
console.log(dispatch);





  const addTask = (text, checkbox) => [
    dispatch({
      type: "ADD_TASK",
      payload: {
        text,
        checkbox,
      },
    }),
  ];

  const removeTask = (id) => {
    if (window.confirm("Удалить задачу ?")) {
      dispatch({
        type: "REMOVE_TASK",
        payload: id,
      });
    }
  };

  const toggleComlet = (id) => {
    dispatch({
      type: "TOGGLE_COMPLETED",
      payload: id,
    });
  };

  const completeaAll = () => {
    dispatch({
      type: "COMPLETE-ALL",
    });
  };

  const cleaAll = () => {
    if (window.confirm("Очистить все задачи ? ")) {
      dispatch({
        type: "CLEAR",
      });
    }
  };

 

  return (
    <div className="App">
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h4>Список задач</h4>
        </Paper>
        <AddField onAdd={addTask} />
        <Divider />
        <Filter />
        <Divider />
        <List>
          {state.tasks
            .filter((obj) => {
              if (state.filterBy === "all") {
                return true;
              }
              if (state.filterBy === "completed") {
                return obj.completed;
              }
              if (state.filterBy === "active") {
                return !obj.completed;
              }
              return obj;
            })
            .map((obj) => (
              <Item
                onClickCheckbox={() => toggleComlet(obj.id)}
                onClickRemove={() => removeTask(obj.id)}
                key={obj.id}
                completed={obj.completed}
                text={obj.text}
              />
            ))}
        </List>
        <Divider />
        <div className="check-buttons">
          <Button disabled={state.length === 0} onClick={completeaAll}>
            Отметить всё
          </Button>
          <Button disabled={state.length === 0} onClick={cleaAll}>
            Очистить
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;
