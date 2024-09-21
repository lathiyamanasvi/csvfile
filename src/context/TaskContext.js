import React, { createContext, useState, useContext } from 'react';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  // Add tasks function
  const addTasks = (newTasks) => {
    setTasks((prevTasks) => [...prevTasks, ...newTasks]);
    setFilteredTasks((prevTasks) => [...prevTasks, ...newTasks]); // Update filtered tasks as well
  };

  // Apply filters
  const applyFilter = (filter) => {
    const filtered = tasks.filter(task => {
      return (
        (filter.status ? task.status === filter.status : true) &&
        (filter.priority ? task.priority === filter.priority : true) &&
        (filter.dueDate ? task.dueDate === filter.dueDate : true) &&
        (filter.assignee ? task.assignee === filter.assignee : true)
      );
    });
    setFilteredTasks(filtered);
  };

  return (
    <TaskContext.Provider value={{ tasks, filteredTasks, setFilteredTasks, addTasks, applyFilter }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
