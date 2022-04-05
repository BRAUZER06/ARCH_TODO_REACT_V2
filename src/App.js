import React from 'react';
import { Paper, Divider, Button, List } from '@mui/material';
import { AddField } from './components/AddField';
import { Item } from './components/Item';
import { Filter } from './components/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { changeInput, changeCheckBox } from './redux/actions/form';
import {
  addTask,
  removeTask,
  toggleComplete,
  completeAllTasks,
  unCompleteAllTasks,
  deleteAllTasks,
  editTask,
} from './redux/actions/tasks';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [handleTasks, setHandleTasks] = React.useState(true);

  const onChangeInput = (event) => {
    dispatch(changeInput(event));
  };

  const onChangeCheckbox = (event) => {
    dispatch(changeCheckBox(event));
  };

  const handleAddTask = () => {
    if (!state.form.inputValue.trim()) {
      alert('Введите текст задачи!');
    } else {
      dispatch(addTask(state.form.inputValue, state.form.completed));
      state.form.inputValue = '';
      state.form.completed = false;
    }
  };

  const handleRemoveTask = (id) => {
    if (window.confirm('Вы действительно хотите удалить задачу?')) {
      dispatch(removeTask(id));
    }
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleCompleteAllTasks = () => {
    if (handleTasks) {
      dispatch(completeAllTasks());
      setHandleTasks(false);
    } else {
      dispatch(unCompleteAllTasks());
      setHandleTasks(true);
    }
  };

  const handleDeleteAllTasks = () => {
    if (window.confirm('Вы действительно хотите удалить все задачи?')) {
      dispatch(deleteAllTasks());
    }
  };

  const handleEditTask = (id) => {
    dispatch(editTask(id));
  };

  const disableButton = Boolean(!state.tasks.length);

  return (
    <div className="App">
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h4>Список задач</h4>
        </Paper>
        <AddField
          onChangeCheckbox={onChangeCheckbox}
          onChangeInput={onChangeInput}
          inputValue={state.form.inputValue}
          isCompleted={state.form.completed}
          handleAddTask={handleAddTask}
        />
        <Divider />
        <Filter />
        <Divider />
        <List>
          {state.tasks.length > 0 ? (
            state.tasks
              .filter((task) => {
                if (state.filter.filterBy === 'all') {
                  return true;
                }
                if (state.filter.filterBy === 'completed') {
                  return task.completed;
                }
                if (state.filter.filterBy === 'uncompleted') {
                  return !task.completed;
                }
              })
              .map((task) => {
                return (
                  <Item
                    key={task.id}
                    id={task.id}
                    text={task.inputValue}
                    completed={task.completed}
                    handleRemoveTask={handleRemoveTask}
                    editTask={() => handleEditTask(task.id)}
                    onClickCheckbox={() => handleToggleComplete(task.id)}
                  />
                );
              })
          ) : (
            <h3 style={{ textAlign: 'center', color: '#1976D2' }}>Список задач пуст</h3>
          )}
        </List>
        <Divider />
        <div className="check-buttons">
          <Button disabled={disableButton} onClick={handleCompleteAllTasks}>
            {handleTasks ? 'Отметить всё' : 'Снять отметки'}
          </Button>
          <Button disabled={disableButton} onClick={handleDeleteAllTasks}>
            Очистить
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;
