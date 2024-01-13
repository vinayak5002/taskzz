import React, {useState} from 'react';
import '../Style/input.css'


function Input({addTask}) {
    const [name, setName] = useState("");
    const [assignee, setAssignee] = useState("");
    const [project, setProject] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!name || !assignee || !project) {
            alert("Please fill all the fields");
            return;
        }
        addTask(name, assignee, project);
        setName("");
        setAssignee("");
        setProject("");
    }

    return(
        <div id="inputBody">
            <div id="inputCont">
                <p>Enter new task:</p>
                <form onSubmit={handleSubmit} >
                    <div id="getInput">
                        <p>Enter name of the task</p>
                        <textarea name="name" id="desc" cols="auto" rows="3" value={name} onChange={(e)=> setName(e.target.value)}></textarea>
                        <p>Enter name of the assignee:</p>
                        <textarea name="assignee" id="desc" cols="auto" rows="2" value={assignee} onChange={(e)=> setAssignee(e.target.value)}></textarea>
                        <p>Enter name of the project:</p>
                        <textarea name="project" id="desc" cols="auto" rows="2" value={project} onChange={(e)=> setProject(e.target.value)}></textarea>
                    </div>
                    <input type="submit" id="submit" value="Add task" />
                </form>
            </div>
        </div>
    ); 
}

export default Input;