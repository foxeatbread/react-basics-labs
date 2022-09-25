import './App.css';
import Task from './components/Task';
import React, {useState} from 'react';
import AddTaskForm from './components/Form';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [taskState, setTaskState] = useState({
    tasks:[ 
    {id:1,title:"Dishes",deadline:"Tomorrow",description:"Empty dishwasher",done:false},
    {id:2,title:"Coding",deadline:"Tonight",description:"Waching Googling and Wondering",done:false},
    {id:3,title:"Showering",deadline:"Morning",description:"Boiling Water and Clean Up",done:false},
    {id:4,title:"Living",deadline:"NobodyCares",description:"Often Confuse and Seldom Sober",done:false},
    {id:5,title:"Sleeping",deadline:"WakeUp",description:"Have a Good Rest~",done:false}
  ]
})
  const [ formState, setFormState ] = useState({
    title: "",
    description: "",
    deadline: ""
  });

  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTaskState({tasks});
    console.log(`${taskIndex}${tasks[taskIndex].done}`);
  }
  const deleteHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks.splice(taskIndex, 1);
    setTaskState({tasks});
  } 
  const formSubmitHandler = (event) => {
    event.preventDefault();

    const tasks = [...taskState.tasks];
    const form = {...formState};

    form.id = uuidv4();

    tasks.push(form);
    setTaskState({tasks});
  }
  const formChangeHandler = (event) => {
    let form = {...formState};

    switch(event.target.name) {
      case "title":
          form.title = event.target.value;
          break;
      case "description":
          form.description = event.target.value;
          break;
      case "deadline":
          form.deadline = event.target.value;
          break;
      default:
          form = formState;
    }
    setFormState(form);
  }
  


  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task,index) => (
        <Task
        title={task.title}
        description={task.description}
        deadline={task.deadline}
        key = {task.id}
        done = {task.done}
        markDone={() => doneHandler(index)}
        deleteTask = {() => deleteHandler(index)}
        />
      ))}
      <AddTaskForm submit={formSubmitHandler} change={formChangeHandler} />
    </div>
  );

}

// export default App;
