import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

import Head from './components/head';
import List from './components/list';
import Input from './components/input';

function App() {

  const [TaskList, setTaskList] = useState([]);

  async function fetchAll() {
    fetch('http://localhost:8080/')
    .then(response => response.json())
    .then(json => {
      setTaskList(json);
      console.log(json.toString());
    })
    .catch(error => console.log(error));
  }

  useEffect(() => {
    fetchAll();
  }, []);
  

  function deleteTask(deleteTask) {
    const taskId = deleteTask.id;
  
    fetch(`http://localhost:8080/delTask/${taskId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete task');
        }
        setTaskList(TaskList.filter((e) => e.id !== taskId));
      })
      .catch(error => console.error(error));
  }
  
  async function addTask(name, assignee, project){
    const taskData = {
      name: name,
      assignee: assignee,
      project: project,
    };
  
    fetch('http://localhost:8080/addTask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log('Task added successfully:', data);
      setTaskList(TaskList.concat(data));
    })
    .catch(error => console.error('Error adding task:', error.message));
  }

  async function filter(by, query){
    console.log("Filtering");

    if(by === ""){
      if(query === ""){
        fetchAll()
      }
      return;
    }

    if(by === "name"){
      fetch(`http://localhost:8080/byName/${query}`)
      .then(response => {
        if (!response.ok) {
          if (response.status === 404) {
            console.log('Data not found');
            setTaskList([]);
          } else {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
        }
        return response.json();
      })
      .then(json => {
        setTaskList(json);
        console.log(json.toString());
      })
      .catch(error => console.log(error));    
    }
    if(by === "assignee") {
      fetch(`http://localhost:8080/byAssignee/${query}`)
      .then(response => {
        if (!response.ok) {
          if (response.status === 404) {
            // Handle 404 error (Not Found)
            console.log('Data not found');
          } else {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
        }
        return response.json();
      })
      .then(json => {
        setTaskList(json);
        console.log(json.toString());
      })
      .catch(error => console.log(error));
    
    }
  }

  return (
    <div className="App">
      <Head/>
      <div className="body">
        <div className="child list">
          <List Tasks={TaskList} onDelete={deleteTask} onFilter={filter}/>
        </div>
        <div className="child input"> 
          <Input addTask={addTask}/>
        </div>
      </div>
    </div>
  );
}

export default App;
