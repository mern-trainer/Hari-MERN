import Router from "./Router";
import { CounterProvider } from "./context/CounterProvider";

const App = () => {
    return <CounterProvider>
        <Router />
    </CounterProvider>
}

export default App;