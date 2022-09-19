import './App.css';
import Task from './components/Task';
import React, {useState} from 'react';

function App() {
  const [taskState, setTaskState] = useState({
    tasks:[ 
    {id:1,title:"Dishes",deadline:"Tomorrow",description:"Empty dishwasher"},
    {id:2,title:"Coding",deadline:"Tonight",description:"Waching Googling and Wondering"},
    {id:3,title:"Showering",deadline:"Morning",description:"Boiling Water and Clean Up"},
    {id:4,title:"Living",deadline:"NobodyCares",description:"Often Confuse and Seldom Sober"},
    {id:5,title:"Sleeping",deadline:"WakeUp",description:"Have a Good Rest~"}
  ]
})


  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task) => (
        <Task
        title={task.title}
        description={task.description}
        deadline={task.deadline}
        key = {task.id}
        />
      ))}

    </div>
  );
}

export default App;
