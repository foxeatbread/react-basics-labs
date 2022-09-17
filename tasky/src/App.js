import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title = "Dishes" deadline="Today" description = "Empty Dishwasher"/>
      <Task title = "Coding" deadline="Tonight" description = "Watching Googling and Wondering"/>
      <Task title = "Showering" deadline="Morning" description = "Boiling Water and Clean Up"/>
    </div>
  );
}

export default App;
