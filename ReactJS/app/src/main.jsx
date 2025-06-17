import { createRoot } from "react-dom/client"
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import { Fragment } from "react";
import { ToastContainer } from "react-toastify";

const container = document.getElementById("root");

const root = createRoot(container)

root.render(<Fragment>
    <App />
    <ToastContainer autoClose={1000} />
</Fragment>)
