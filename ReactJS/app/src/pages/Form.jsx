import { useState } from "react";

export const Form = () => {
    const [input, setInput] = useState("")
    const [list, setList] = useState([])
    const [hide, setHide] = useState(true)
    const handleSubmit = () => {
        // console.log(input)
        setList([...list, input])
        setInput("")
    }
    return <div>
        <input type="password" placeholder="Enter text..." value={input} onChange={(event) => {
            setInput(event.target.value)
        }} />
        <button onClick={handleSubmit}>Submit</button>
        {list.join(", ")}

        <input type={hide ? "password" : "text"} />
        <button onClick={() => setHide(h => !h)}>{hide ? "show" : "hide"}</button>
    </div>
};