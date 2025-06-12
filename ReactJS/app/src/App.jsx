// state -> An object for handle the data of a component
// Hooks -> Function for handle states and life cycles of a component.

import { useState } from "react"

// useState() -> It is a hook.
// It is a function.
// It returns an array.
// It has two elements.
// 1. state variable
// 2. function to update the state variable

const App = () => {
    
    const [counter, setCounter] = useState(0)
    const [username, setUsername] = useState("Alice")

    const handleAgeUpdate = () => {
        setCounter((c) => c + 1)
        setCounter((c) => c + 1)
        setCounter((c) => c + 1)
        setCounter((c) => c + 1)
        setCounter((c) => c + 1)        
    }

    // if (10 < 20) {
    //     // true
    // } else {
    //     // false
    // }
    // // condn ? true : false;
    // const res = 10 < 20 ? "10 is less than 20" : false;
    // console.log(res);

    return <div className="p-3 d-flex gap-2 flex-column align-items-center">
        <div>{counter}</div>
        <button onClick={handleAgeUpdate} className="btn btn-success">Update Counter</button>
        <div>Current Username: {username}</div>
        <button className="btn btn-primary" onClick={() => {
            setUsername(username == "Alice" ? "Alex" : "Alice")
        }}>Set username to {username == "Alice" ? "Alex" : "Alice"}</button>
    </div>
}

export default App;