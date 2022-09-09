import React, {useState} from "react"

const Todo = () => {

const [task, setTask] = useState("")
const [taskList, setTaskList] = useState([])
const handleChange = (e) => {
    setTask(e.target.value)
}
const AddTask = () => {
    if(task !== ""){
        const taskDetails = {
            id: Math.floor(Math.random()*1000),
            value: task,
            isCompleted: false
        }
        setTaskList([...taskList, taskDetails])
    }
}
const deleteTask = (e, id) => {
    e.preventDefault();
    setTaskList(taskList.filter((t) => t.id !== id))
}

const completedTask = (e, id) => {
    e.preventDefault();
    const element = taskList.findIndex(elm => elm.id ===id)

    const newTaskList = [...taskList]

    newTaskList[element] = {
        ...newTaskList[element],
        isCompleted: true
    }

    setTaskList(newTaskList)
}
return(
    <div>
        <div className='todoContainer'>
                <input 
                type="text" 
                name='text' 
                id='text' 
                placeholder='add task...'
                onChange={(e) => handleChange(e)}/>
                <button className='addBtn' onClick={AddTask}>add</button>
            </div>
            <ul>
                {taskList.map(t =>{return(
                    <li
                    key={t.id}
                    className={t.isCompleted ? "holdText" : "listItem"}>
                        {t.value}
                    <div className='listBtn'>
                        <button className='completedBtn' onClick={(e=> completedTask(e, t.id))}>
                            completed
                        </button>
                        <button className='deleteBtn' onClick={(e=> deleteTask(e, t.id))}>
                            delete
                        </button>
                    </div>
                    </li>)
                    })}
            </ul>
    </div>
)
}

export default Todo