import React from 'react'
import TaskItem from './TaskItem';

 function TaskList({listTasks, onComplete,onDeleteItem}) {
	return (
		<div>
			{
				listTasks.map((task, index) =>{
					return <TaskItem key={index} task={task} onComplete ={onComplete} onDeleteItem={onDeleteItem}/>
		} )
			}
		</div>
	)
}


export default TaskList;