import ToDoItem from "./ToDoItem"
import { useState } from "react"

function ToDoList() {

    const [taskList, setTaskList] = useState([])
    const [newTask, setNewTask] = useState('')

    
    function setTaskText(e) {
        setNewTask(e.target.value)
    }

    function addTaskHandler() {
        setTaskList(taskList.concat({title:'Task ' + (taskList.length+1), description:newTask}))
        setNewTask('')
    }

    function deleteTaskHandler(e) {
        setTaskList(taskList.filter(item => item.title !== e.target.id))
    }

    function enterKeyHandler(e) {
        e.preventDefault();
        if (e.keyCode === 13) {
            document.getElementById("addTask").click();
        }
    }

    return (
        <div>
            <h2>To Do List</h2>
            <input type="text" onChange={setTaskText} onKeyUp={enterKeyHandler} value={newTask}/>
            <button id="addTask" onClick={addTaskHandler}>Add Task</button>
            {taskList.map(task => 
                <div key={task.title}>
                    <ToDoItem title={task.title} description={task.description}/>
                    <button id={task.title} onClick={deleteTaskHandler}>X</button>
                </div>
            )}
        </div>
    )
}

export default ToDoList