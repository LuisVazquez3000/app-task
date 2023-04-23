import React, { useState } from 'react'

function TaskForm({addTask}) {
	const[userInput, setUserInput] =  useState('');
	const handleOnchange = (e)=>{
		setUserInput(e.currentTarget.value)
	}
	
	const handleSubmit = (e)=>{
		e.preventDefault();
		if (userInput.trim() !== '' ) {
			addTask(userInput);
			setUserInput('');
		}
	}
	
	
	return (
		<div style={{margin:'20px'}}>
			<form onSubmit={handleSubmit}>
				<input type='text' value={userInput} onChange={handleOnchange}/>
				<button>Add Task</button>
			</form>
			
		</div>
	)
}


export default TaskForm;