import Papa from 'papaparse';

// Export tasks to CSV
export const exportTasksToCSV = (tasks) => {
  const csvData = Papa.unparse(tasks);
  const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.href = url;
  link.setAttribute('download', 'tasks.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Import tasks from CSV
export const importTasksFromCSV = (file, onSuccess, onError) => {
  Papa.parse(file, {
    complete: (result) => {
      const tasks = result.data;
      let errors = [];
      tasks.forEach((task, index) => {
        if (!validateTask(task)) {
          errors.push({ row: index + 1, error: 'Invalid task data' });
        }
      });

      if (errors.length) {
        onError(errors);
      } else {
        onSuccess(tasks);
      }
    },
    header: true,
    skipEmptyLines: true,
  });
};

// Validation function
const validateTask = (task) => {
  const isValidTitle = task.title && task.title.trim() !== '';
  const isValidDate = new Date(task.dueDate) > new Date(); // Validating that the due date is in the future
  const isValidPriority = ['low', 'medium', 'high'].includes(task.priority);
  const isValidStatus = ['pending', 'completed'].includes(task.status);
  return isValidTitle && isValidDate && isValidPriority && isValidStatus;
};
