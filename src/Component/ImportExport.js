import React, { useState } from 'react';
import { exportTasksToCSV, importTasksFromCSV } from '../utils/csvUtils';
import { useTaskContext } from '../context/TaskContext';
import { Button } from '@mui/material';

const ImportExport = () => {
  const { tasks, addTasks } = useTaskContext();
  const [errors, setErrors] = useState([]);

  const handleExport = () => exportTasksToCSV(tasks);

  const handleImport = (e) => {
    const file = e.target.files[0];
    importTasksFromCSV(file, addTasks, setErrors);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleExport}>Export Tasks</Button>
      <input type="file" onChange={handleImport} />
      {errors.length > 0 && (
        <div>
          <h4>Error Report</h4>
          <ul>
            {errors.map((err) => (
              <li key={err.row}>Row {err.row}: {err.error}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ImportExport;
