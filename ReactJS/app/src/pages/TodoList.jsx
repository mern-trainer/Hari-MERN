import { Fragment, useContext, useState } from "react"
import { toast } from "react-toastify"
import { CiCircleCheck } from "react-icons/ci";
import { Link } from "react-router";
import { CounterContext } from "../context/CounterProvider";

const TodoList = () => {

    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState([])
    const [editableTask, setEditableTask] = useState(null)
    const [editTask, setEditTask] = useState("")
    const { counter, setCounter } = useContext(CounterContext)

    

    const handleChange = (event) => {
        setTodo(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (todo == "") {
            return toast.error("Task is required.")
        }
        const index = todoList.findIndex((item) => item.task.toLowerCase() == todo.toLowerCase())
        if (index != -1) {
            return toast.error("Task already exist.")
        }
        const taskObj = {
            id: crypto.randomUUID(),
            task: todo,
            is_completed: false,
            createdAt: new Date().toLocaleString(),
            updatedAt: new Date().toLocaleString()
        }
        setTodoList([taskObj, ...todoList])
        setTodo("")
        return toast.success("Task added successfully")
    }

    const handleDelete = id => {
        const res = todoList.filter(listItem => listItem.id != id)
        setTodoList(res)
        return toast.success("Task removed.")
    }

    const handleTodoUpdate = (id) => {
        const res = todoList.map(item => {
            if (item.id == id) {
                return { ...item, task: editTask, updatedAt: new Date().toLocaleString() }
            }
            return item
        })
        setTodoList(res)
        setEditableTask(null)
        setEditTask("")
    }

    const handleStatusUpdate = id => {
        const res = todoList.map(item => {
            if (item.id == id) {
                return { ...item, is_completed: true, updatedAt: new Date().toLocaleString() }
            }
            return item
        })
        setTodoList(res)
    }

    return <div className="d-flex flex-column align-items-center justify-content-center">
        <Link to="/parent" className="btn btn-primary">Parent Component</Link>
        <div>
            <div>{counter}</div>
            <button onClick={() => setCounter(c => c + 1)}>Update</button>
        </div>
        <form onSubmit={handleSubmit} className="w-100 d-flex gap-2 flex-column mt-2" style={{ maxWidth: "500px" }}>
            <label htmlFor="">Enter Task:</label>
            <input type="text" name="todo" placeholder="Eg: Buy something..." className="border border-2 p-2 outline-none" value={todo} onChange={handleChange} />
            <button className="btn btn-secondary rounded-0">Add Task</button>
        </form>
        <div className="w-100 mt-2 d-flex flex-column gap-2 " style={{ maxWidth: "500px" }}>
            {
                todoList.length > 0 && todoList.map(listItem => {
                    return <div key={listItem.id} className="border border-2 p-2">
                        {
                            editableTask?.id == listItem.id ? <input type="text" placeholder="Eg: Buy Something..." value={editTask} onChange={e => setEditTask(e.target.value)}/> : <h4>{listItem.task}</h4>
                        }
                        <p>Created: {listItem.createdAt}</p>
                        <p>Updated: {listItem.updatedAt}</p>
                        <p>Status: {listItem.is_completed ? "Completed" : <span>Pending <CiCircleCheck color="green" cursor={"pointer"} onClick={() => handleStatusUpdate(listItem.id)}/></span>} </p>
                        <div className="d-flex gap-2">
                            
                            {
                                editableTask?.id == listItem.id ?
                                    <Fragment>
                                        <button className="btn btn-primary w-100" onClick={() => handleTodoUpdate(listItem.id)}>Submit</button>
                                        <button className="btn btn-danger w-100" onClick={() => setEditableTask(null)}>Cancel</button>
                                    </Fragment>
                                    : <Fragment>
                                        {
                                            !listItem.is_completed && <button className="btn btn-primary w-100" onClick={() => {
                                                setEditableTask(listItem);
                                                setEditTask(listItem.task);
                                            }}>Edit Task</button>
                                        }
                                        <button className="btn btn-danger w-100" onClick={() => handleDelete(listItem.id)}>Delete</button>
                                    </Fragment>
                            }
                        </div>
                    </div>
                })
            }
            {
                todoList.length == 0 && <div>Task is empty.</div>
            }
        </div>
    </div>
}

export default TodoList