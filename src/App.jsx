import { useState } from 'react';
import './App.css'
import { Grid, Typography } from '@mui/material';
import CardTask from './components/task/CardTask';
import NewTask from './components/newTask/NewTask';
import TaskFinish from './components/taskFinish/TaskFinish';

function App() {

  const tareas = [
    {
      id: 1,
      title: "Realizar práctica obligatoria 1",
      description: "Se deberá realizar la práctica presentada en el CVG opt 1",
      state: true,
    },
    {
      id: 2,
      title: "Realizar práctica obligatoria 2",
      description: "Se deberá realizar la práctica presentada en el CVG opt 2",
      state: true,
    },
    {
      id: 3,
      title: "Realizar práctica obligatoria 3",
      description: "Se deberá realizar la práctica presentada en el CVG opt 3",
      state: false,
    },
  ];

  const [task, setTask] = useState(tareas)

  const addedTaskHandler = (taskData) => {
    setTask((prev) => [...prev, taskData]);
  }

  const handleFinish = (id) => {
    const finishTask = task.map(work => {
      if (work.id === id) {
        return { ...work, state: false };
      }
      return work;
    });
    setTask(finishTask);
  };


  return (
    <div >
      <a href="https://frro.cvg.utn.edu.ar/pluginfile.php/215033/mod_resource/content/6/Ejercitación%20Unidad%20P2.1.pdf" target='_blank'>Ejercitación Unidad P2.1</a>
      <h2>To-Do List App</h2>
      <NewTask onTaskAdded={addedTaskHandler} />
      <Grid container sx={{p:2, mr:2}}>
        <Grid item md={6}>
          <b>Tareas activas</b>
          <CardTask
            task={task}
            handleFinish={handleFinish}
          />
        </Grid>
        <Grid item md={6}>
        <b>Tareas finalizadas</b>
          <TaskFinish
            task={task}
          />
        </Grid>
      </Grid>

    </div >
  );
}

export default App
