import ToDoItem from "./ToDoItem"
import { useState } from "react"

function ToDoList() {

    const [taskList, setTaskList] = useState([{title: 'task 1', description:'do laundry'}, {title: 'task 2', description:'do dishes'}, {title: 'task 3', description:'watch tv'}])
    const [newTask, setNewTask] = useState('')

    function addTask() {
        setTaskList(taskList.concat({title:'Task ' + (taskList.length+1), description:newTask}))
    }

    function setTaskText(e) {
        setNewTask(e.target.value)
    }

    return (
        <div>
            <h2>To Do List</h2>
            <input type="text" onChange={e => setTaskText(e)}/>
            <button onClick={addTask}>Add Task</button>
            {taskList.map(task => <ToDoItem key={task.title} title={task.title} description={task.description}/>)}
        </div>
    )
}

export default ToDoList