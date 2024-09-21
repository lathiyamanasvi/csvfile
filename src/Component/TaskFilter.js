import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { Button, TextField, MenuItem, Grid, Card, CardContent, Box } from '@mui/material';

const TaskFilter = () => {
  const { applyFilter } = useTaskContext();
  const [filter, setFilter] = useState({
    status: '',
    priority: '',
    dueDate: '',
    assignee: ''
  });

  const handleFilter = () => applyFilter(filter);

  return (
    <Card>
      <CardContent>
        <Box pb={2}>
          <h3>Filter Tasks</h3>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Assignee"
              variant="outlined"
              value={filter.assignee}
              onChange={(e) => setFilter({ ...filter, assignee: e.target.value })}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Status"
              variant="outlined"
              value={filter.status}
              onChange={(e) => setFilter({ ...filter, status: e.target.value })}
              fullWidth
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Priority"
              variant="outlined"
              value={filter.priority}
              onChange={(e) => setFilter({ ...filter, priority: e.target.value })}
              fullWidth
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value="low">Low</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="high">High</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="date"
              label="Due Date"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              value={filter.dueDate}
              onChange={(e) => setFilter({ ...filter, dueDate: e.target.value })}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Box mt={2}>
              <Button variant="contained" color="primary" onClick={handleFilter} fullWidth>
                Apply Filters
              </Button>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TaskFilter;
