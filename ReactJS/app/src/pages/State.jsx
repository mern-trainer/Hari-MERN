import { useContext, useState } from "react";
import { CounterContext } from "../context/CounterProvider";
import { Link } from "react-router";

export const State = () => {

    // const [counter, setCounter] = useState(0)
    const [username, setUsername] = useState("Alice")
    const { counter, setCounter } = useContext(CounterContext)


    const handleAgeUpdate = () => {
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
        <Link to={"/list"}>to todo</Link>
    </div>
};