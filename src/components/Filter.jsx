import React from 'react';
import { Tabs, Tab } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/actions/filter';

const filterIndex = {
  all: 0,
  uncompleted: 1,
  completed: 2,
};

export const Filter = () => {
  const dispatch = useDispatch();
  const filterBy = useSelector((state) => state.filter.filterBy);

  const handleFilter = (_, newIndex) => {
    const status = Object.keys(filterIndex)[newIndex];
    dispatch(setFilter(status));
  };

  return (
    <Tabs onChange={handleFilter} value={filterIndex[filterBy]}>
      <Tab label="Все" />
      <Tab label="Активные" />
      <Tab label="Завершённые" />
    </Tabs>
  );
};
