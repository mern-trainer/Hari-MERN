// properties - (props) ->

// props -> pass data from parent component to child component

const ChildComponent = ({ age, callback }) => {
    const name = "John"
    return <div>
        <h3>Child Component</h3>
        <h3>{age}</h3>
        <button onClick={() => callback(name)}>Click</button>
    </div>
}

export default ChildComponent