import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { Card, CardContent, Typography, Chip, Grid, Box, Button, TextField, MenuItem, Paper } from '@mui/material';

const TaskTable = () => {
  const { filteredTasks, addTasks } = useTaskContext();
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: '',
    status: 'pending',
    assignee: '',
    assigner: '',
    category: '',
  });

  const handleAddTask = () => {
    addTasks([newTask]);
    setNewTask({
      title: '',
      description: '',
      dueDate: '',
      priority: '',
      status: 'pending',
      assignee: '',
      assigner: '',
      category: ''
    });
  };

  return (
    <Box p={3}>
      
      {/* Display existing tasks */}
      <Grid container spacing={3}>
        {filteredTasks.map((task, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" gutterBottom>{task.title}</Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>{task.description}</Typography>
                <Chip
                  label={task.status === 'completed' ? 'Completed' : task.status}
                  color={task.status === 'completed' ? 'success' : 'warning'}
                  size="small"
                  sx={{ mb: 1 }}
                />
                <Typography variant="body2"><strong>Priority:</strong> {task.priority}</Typography>
                <Typography variant="body2"><strong>Due Date:</strong> {task.dueDate}</Typography>
                <Typography variant="body2"><strong>Category:</strong> {task.category}</Typography>
                <Typography variant="body2"><strong>Assigned By:</strong> {task.assigner}</Typography>
                <Typography variant="body2"><strong>Assigned To:</strong> {task.assignee}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Add New Task */}
      <Paper elevation={3} sx={{ mt: 4, p: 3 }}>
        <Typography variant="h5" gutterBottom>Add New Task</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Title"
              variant="outlined"
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Assignee"
              variant="outlined"
              value={newTask.assignee}
              onChange={(e) => setNewTask({ ...newTask, assignee: e.target.value })}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Assigned By"
              variant="outlined"
              value={newTask.assigner}
              onChange={(e) => setNewTask({ ...newTask, assigner: e.target.value })}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Status"
              variant="outlined"
              value={newTask.status}
              onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
              fullWidth
            >
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="in_progress">In Progress</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Category"
              variant="outlined"
              value={newTask.category}
              onChange={(e) => setNewTask({ ...newTask, category: e.target.value })}
              fullWidth
            >
              <MenuItem value="development">Development</MenuItem>
              <MenuItem value="design">Design</MenuItem>
              <MenuItem value="testing">Testing</MenuItem>
              <MenuItem value="management">Management</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="date"
              label="Due Date"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              value={newTask.dueDate}
              onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleAddTask}>
              Add Task
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default TaskTable;
