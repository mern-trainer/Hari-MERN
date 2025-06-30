import { BrowserRouter, Route, Routes } from "react-router"
import TodoList from "./pages/TodoList"
import ParentComponent from "./pages/ParentComponent"
import { State } from "./pages/State"
import Navigations from "./pages/Navigation"
import Meet from "./pages/Meet"
import Products from "./pages/Products"
import ProductSingle from "./pages/ProductSingle"

const Router = () => {
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
                <Route path="navigation" Component={Navigations} />
                <Route path="meet">
                    <Route path=":code?" Component={Meet} />
                </Route>
                <Route path="products">
                    <Route path="" Component={Products} />
                    <Route path=":id" Component={ProductSingle} />
                </Route>
                <Route path="state" Component={State} />
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

export default Router