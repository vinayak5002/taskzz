import React from 'react';
import '../Style/task.css'
import './list'

function Task({task, onDelete}) {
    return (
        <div id="card">
            <div id="cardCont">
                <div id="taskName">
                    <div id="taskField">Name: {task.name}</div>
                    <div id="taskField">Assignee: {task.assignee}</div>
                    <div id="taskField">Project: {task.project}</div>
                </div>
                <button id="delete" onClick={()=>{onDelete(task)}}>
                    <img width="30px" height="30px" src="https://img.icons8.com/ios-filled/50/fa314a/delete--v1.png"/>
                </button>

            </div>
        </div>
    );
}

export default Task;