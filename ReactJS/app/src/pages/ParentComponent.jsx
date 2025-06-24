// properties - (props) ->

import { Link } from "react-router";
import ChildComponent from "./ChildComponent"

// props -> pass data from parent component to child component

const ParentComponent = () => {
    const age = 20;
    const handleDataFromChild = (value) => {
        console.log("Data received:", value);
    }
    return <div>
        <Link to="/list" className="btn btn-primary">Todo List</Link>
        <h3>Parent Component</h3>
        <ChildComponent age={age} callback={handleDataFromChild} />
    </div>
}

export default ParentComponent