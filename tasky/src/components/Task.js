import React from 'react';
// const Task = () => {
//     return (
//         <p>This is a task~</p>
//     )
// }

function Task(props){
    return (
        // <p>This is a task!</p>
        <div className='card'>
            <p className='title'>{props.title}</p>
            <p>Due:{props.deadline}</p>
            <p className='description'>{props.description}</p>
        </div>
    )

}

export default Task;