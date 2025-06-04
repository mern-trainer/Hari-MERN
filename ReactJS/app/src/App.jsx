import { Fragment } from "react"

const App = () => { // component

    const age = 30;
    const city = "Bangalore";

    const handleClick = () => {
        console.log("Button Clicked")
    } // function

    const handleClickWithArg = (arg) => {
        console.log("Button Clicked with arg", arg)
    } // function

    const generateRandomPassword = () => {
        const string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
        let password = "";
        for (let i = 0; i < 16; i++){
            const randomIndex = Math.floor(Math.random() * string.length);
            password += string[randomIndex];
        }
        document.getElementById("pass").innerHTML = password;
        document.getElementById("history").innerHTML += password + "<br/>"
    }

    return <Fragment>
        {/* <div>{age}</div>
        <div>City: {city}</div>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={() => handleClickWithArg(10)}>Click Me - Arg</button> */}
        <div>
            <div id="pass"></div>
            <button onClick={generateRandomPassword}>Generate Password</button>
            <div id="history"></div>
        </div>
    </Fragment>
}

export default App;