import React from 'react';
// const Task = () => {
//     return (
//         <p>This is a task~</p>
//     )
// }

function Task(props){
    return (
        // <p>This is a task!</p>
        <div className='card' style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            <p className='title'>{props.title}</p>
            <p>Due:{props.deadline}</p>
            <p className='description'>{props.description}</p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
        </div>
    )

}

export default Task;