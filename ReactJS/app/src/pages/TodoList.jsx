import { useState } from "react"

const TodoList = () => {

    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState([])

    const handleChange = (event) => {
        setTodo(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (todo == "") {
            return console.log("Task is required.")
        }
        const index = todoList.findIndex((item) => item.task.toLowerCase() == todo.toLowerCase())
        if (index != -1) {
            return console.log("Task already exist.")
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
    }

    const mappedList = todoList.map(listItem => {
        // identifier (key) -> Which element is created, updated or deleted
        return <div key={listItem.id} className="border border-2 p-2">
            <h2>{listItem.task}</h2>
            <p>Created: {listItem.createdAt}</p>
            <p>Updated: {listItem.updatedAt}</p>
        </div>
    })

    return <div className="d-flex flex-column align-items-center justify-content-center">
        <form onSubmit={handleSubmit} className="w-100 d-flex gap-2 flex-column mt-2" style={{maxWidth: "500px"}}>
            <label htmlFor="">Enter Task:</label>
            <input type="text" name="todo" placeholder="Eg: Buy something..." className="border border-2 p-2 outline-none" value={todo} onChange={handleChange} />
            <button className="btn btn-secondary rounded-0">Add Task</button>
        </form>
        <div className="w-100 mt-2 d-flex flex-column gap-2 " style={{ maxWidth: "500px" }}>
            {mappedList}
        </div>
    </div>
}

export default TodoList