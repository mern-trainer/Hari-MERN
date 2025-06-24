import { BrowserRouter, Route, Routes } from "react-router";
import ParentComponent from "./pages/ParentComponent";
// import TodoList from "./pages/TodoList";
import TodoList from "./pages/TodoList";

const App = () => {
    return <BrowserRouter>
        {/* <Routes>
            <Route path="/list" Component={TodoList} />
            <Route path="/parent" Component={ParentComponent} />
            <Route path="/sample" element={<div>Hello</div>} />
            <Route path="/user/profile" element={<div>Profile</div>} />
            <Route path="/user/settings" element={<div>Settings</div>} />
            <Route path="/user/info" element={<div>User Info</div>} />
            <Route path="*" element={<div>404 | not found</div>} />
        </Routes> */}

        {/* Nested Routing */}

        <Routes>
            <Route path="/">
                <Route path="list" Component={TodoList} />
                <Route path="parent" Component={ParentComponent} />
                <Route path="sample" element={<div>Hello</div>} />
                <Route path="user">
                    <Route path="profile" element={<div>Profile</div>} />
                    <Route path="settings" element={<div>Settings</div>} />
                    <Route path="info" element={<div>User Info</div>} />
                </Route>
                <Route path="*" element={<div>404 | not found</div>} />
            </Route>
        </Routes>

    </BrowserRouter>
}

export default App;