import { createContext } from "react";
import Router from "./Router";

export const Context = createContext()


const App = () => {
    const user = "John"
    return <Context.Provider value={user}>
        <Router />
    </Context.Provider>
}

export default App;