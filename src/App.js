import React, {Component} from 'react';
import TaskList from './components/TaskList';
import { useState }from 'react';
import data from './data.json';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(data);
  const onComplete = (id)=>{
    console.log('task', id);
   setTasks( tasks.map((task)=>{
    return task.id === Number(id)?{...task, completed:!task.completed}:{...task}
  }))
  }
  const onDeleteItem = (id)=>{
    console.log('delete ' + id);
  }
  
  
  return (
    <div className="container">  
      <TaskList listTasks = {tasks} onComplete={onComplete} onDeleteItem={onDeleteItem}/>
    </div>
  );
}

export default App;
