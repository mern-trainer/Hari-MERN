import { useNavigate } from "react-router"

const Navigations = () => {

    const isLoggedIn = false
    const navigate = useNavigate()

    const handleNavigate = () => {
        if (isLoggedIn) {
            navigate("/home")
        } else {
            navigate("/login")
        }
    }

    return <div>
        <button onClick={handleNavigate}>Navigate</button>
    </div>
}

export default Navigations