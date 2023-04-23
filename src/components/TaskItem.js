import React from 'react'

 function TaskItem({task, onComplete, onDeleteItem}) {
		const getStyle = ()=>{
				 return { 
					textDecoration: task.completed ? 'line-through':'none',
					margin:'20px',
					border:'2px solid #FFFFFF',
					backGroundColor:'#CCF7E3',
					padding:'5px',
					listStyle:'none'
				}
			
		}
		return (
				<div style={getStyle()}>
					<input type='checkbox' checked={task.completed} onChange={()=>onComplete(task.id)} />
					{task.task}
					<button className='add-btn' onClick={()=>onDeleteItem(task.id)}>X</button>
				</div>
			
		)
	
}


export default TaskItem;