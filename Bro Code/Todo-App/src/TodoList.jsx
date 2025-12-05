import { useState } from "react";


function TodoList() {

    const [task,setTask] = useState(["Eat breakfast","take a shower","walk the dog"]);
    const [newTask, setNewTasks] = useState("");

    function handleInputChange(event){
        setNewTasks(event.target.value);
    }

    function addTask(){
        if(newTask.trim() != ""){
        setTask(prevTask => [...prevTask, newTask])
        setNewTasks("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = task.filter((_,i) => i != index);
        setTask(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0){
            const updatedTasks = [...task];
            [updatedTasks[index],updatedTasks[index-1] = updatedTasks[index-1],updatedTasks[index]]
            setTask(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < task.length-1){
            const updatedTasks = [...task];
            [updatedTasks[index],updatedTasks[index+1] = updatedTasks[index+1],updatedTasks[index]]
            setTask(updatedTasks);
        }
    }

    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>

            <div>
                <input 
                type="text"
                placeholder="Enter a task..."
                value={newTask}
                onChange={handleInputChange}
                />

                <button
                    className="add-button"
                    onClick={addTask}
                >Add</button>
            </div>

            <ol>
                {task.map((task, index) => 
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>delete</button>
                        <button className="move-button" onClick={() => moveTaskUp(index)}>up</button>
                        <button className="move-button" onClick={() => moveTaskDown(index)}>down</button>
                    </li>
                )}
            </ol>
        </div>
    );
}

export default TodoList;