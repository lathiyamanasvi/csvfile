// ImportTasks.js
import React, { useState } from 'react';
import Papa from 'papaparse';
import { CSVLink } from 'react-csv';

const ImportTasks = ({ addTasks, tasks }) => {
  const [errorReport, setErrorReport] = useState([]);

  const validateTask = (task) => {
    const errors = [];
    // Ensure task title is unique and not empty
    if (!task.title || tasks.find(t => t.title === task.title)) {
      errors.push("Invalid or duplicate title");
    }
    // Ensure due date is not in the past
    if (!task.dueDate || new Date(task.dueDate) < new Date()) {
      errors.push("Invalid due date");
    }
    // Validate task status (must be one of these values)
    const validStatuses = ["Pending", "Completed", "In Progress"];
    if (!validStatuses.includes(task.status)) {
      errors.push("Invalid status");
    }
    return errors;
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Limit CSV file size to 1MB
    const maxSize = 1 * 1024 * 1024;
    if (file.size > maxSize) {
      alert("File size exceeds 1MB");
      return;
    }

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const importedTasks = results.data;
        const validTasks = [];
        const errors = [];

        importedTasks.forEach((task, index) => {
          const validationErrors = validateTask(task);
          if (validationErrors.length > 0) {
            errors.push({ row: index + 2, errors: validationErrors.join(", ") });
          } else {
            validTasks.push(task);
          }
        });

        if (errors.length > 0) {
          setErrorReport(errors);
        } else {
          addTasks(validTasks);
        }
      },
    });
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      {errorReport.length > 0 && (
        <div>
          <h3>Error Report</h3>
          <CSVLink
            data={errorReport}
            headers={[{ label: "Row", key: "row" }, { label: "Error", key: "errors" }]}
            filename={"error-report.csv"}
          >
            Download Error Report
          </CSVLink>
        </div>
      )}
    </div>
  );
};

export default ImportTasks;
