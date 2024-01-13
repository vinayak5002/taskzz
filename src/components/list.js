import React from 'react';
import '../Style/list.css';

import Task from './task';
import Filter from './filter';

function List({Tasks, onDelete, onFilter}) {
    var n = Tasks.length;

    const taskList = Tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
    ));

    return (
        <div id="listBody">
            <div id="listCont">
                <p id="listTitle">ToDo list</p>
                <Filter filter={onFilter}/>
                <div id="number">
                    <div id="listDesc">Number of tasks</div>
                    <div id="numberBadge">{n}</div>
                </div>
                <div id="taskCont">
                    {n === 0 ?<div id="zero-task">No Tasks pending</div>: taskList}
                </div>
            </div>
        </div>
    );
}

export default List;