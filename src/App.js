import React from 'react';
import { TaskProvider } from './context/TaskContext';
import TaskTable from './Component/TaskTable';
import TaskFilter from './Component/TaskFilter';
import { Box, Container, Typography } from '@mui/material';
import ImportExport from './Component/ImportExport';
// import ImportExport from './Component/ImportExport';

function App() {
  return (
    <TaskProvider>
    <Container>
        <Box py={4}>
          <Typography variant="h4" align="center" gutterBottom>
            Task Management App
          </Typography>
        </Box>
        <div className='d-flex'>
            <div className='w-50 me-2'><TaskTable /></div>
            <div className='w-50'> <TaskFilter /></div>
        </div>
        
        <ImportExport/>
       
      </Container>
  </TaskProvider>
  );
}

export default App;
