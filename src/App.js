import React from "react";
import { Paper, Divider, Button, List, Tabs, Tab } from "@mui/material";
import { AddField } from "./components/AddField";
import { Item } from "./components/Item";
import { useSelector, useDispatch } from "react-redux";
import Filter from "./components/Filter";

import {
  addTask,
  removeTask,
  toggleComlet,
  completeaAll,
  cleaAll,
} from "./redux/actions/tasks.js";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  console.log(dispatch);

  const handleClickAdd = (text, checkbox) => {
    dispatch(addTask(text, checkbox));
  };

  const handleClickRemoveTask = (id) => {
    if (window.confirm("Удалить задачу ?")) {
      dispatch(removeTask(id));
    }
  };

  const handleClickToggle = (id) => {
    dispatch(toggleComlet(id));
  };

  const handleClickCompleteaAll = () => {
    dispatch(completeaAll());
  };

  const handleClickCleaAll = () => {
    if (window.confirm("Очистить все задачи ? ")) {
      dispatch(cleaAll());
    }
  };

  return (
    <div className="App">
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h4>Список задач</h4>
        </Paper>
        <AddField onAdd={handleClickAdd} />
        <Divider />
        <Filter />
        <Divider />
        <List>
          {state.tasks
            .filter((obj) => {
              if (state.filter.filterBy === "all") {
                return true;
              }
              if (state.filter.filterBy === "completed") {
                return obj.completed;
              }
              if (state.filter.filterBy === "active") {
                return !obj.completed;
              }
              return obj;
            })
            .map((obj) => (
              <Item
                onClickCheckbox={() => handleClickToggle(obj.id)}
                onClickRemove={() => handleClickRemoveTask(obj.id)}
                key={obj.id}
                completed={obj.completed}
                text={obj.text}
              />
            ))}
        </List>
        <Divider />
        <div className="check-buttons">
          <Button disabled={state.tasks.length === 0} onClick={handleClickCompleteaAll}>
            Отметить всё
          </Button>
          <Button disabled={state.tasks.length === 0} onClick={handleClickCleaAll}>
            Очистить
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;
