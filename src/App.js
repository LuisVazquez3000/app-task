import React, {Component} from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { useState }from 'react';
import data from './data.json';
import './App.css';



function App() {
  //Manejo de estados 
  const [tasks, setTasks] = useState(data);
  
  //funciones controllers
  const onComplete = (id)=>{
    console.log('task', id);
   setTasks( tasks.map((task)=>{
    return task.id === Number(id)?{...task, completed:!task.completed}:{...task}
  }))
  }
  const onDeleteItem = (id)=>{
    setTasks([...tasks].filter(task=>task.id !== id));
    console.log('delete ' + id);
  }
  
  const addTask = (newTask)=>{
    console.log('newTask', newTask);
    let newItem = { id:+new Date(), task:newTask, completed:false};
    setTasks([...tasks, newItem] );
  }
  
  
  return (
    <div className="container">  
       <TaskForm addTask={addTask}/> 
      <TaskList listTasks = {tasks} onComplete={onComplete} onDeleteItem={onDeleteItem}/>
      
    </div>
  );
}

export default App;
