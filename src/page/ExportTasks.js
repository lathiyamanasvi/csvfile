// ExportTasks.js
import React from 'react';
import { CSVLink } from 'react-csv';

const ExportTasks = ({ tasks }) => {
  const headers = [
    { label: "Title", key: "title" },
    { label: "Description", key: "description" },
    { label: "Due Date", key: "dueDate" },
    { label: "Priority", key: "priority" },
    { label: "Status", key: "status" },
    { label: "Assigned Users", key: "assignedUsers" },
  ];

  return (
    <CSVLink data={tasks} headers={headers} filename={"tasks.csv"}>
      Export Tasks
    </CSVLink>
  );
};

export default ExportTasks;
