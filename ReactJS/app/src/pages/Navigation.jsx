import { useNavigate } from "react-router"

const Navigations = () => {

    const navigate = useNavigate()

    const createMeetId = () => {
        let i = 0
        const strings = 'abcdefghijklmnopqrstuvwxyz0123456789'
        let code = ""
        while (i < 10) {
            const randomIndex = Math.floor(Math.random() * strings.length)
            code += strings[randomIndex]
            if (i == 2 || i == 6) {
                code += "-"
            }
            i++
        }
        return code
    }

    const handleMeeting = () => {
        const code = createMeetId()
        navigate(`/meet/${code}`)
    }

    return <div className="d-flex justify-content-center mt-5">
        <button onClick={handleMeeting} className="btn btn-primary rounded">Create New Meeting</button>
    </div>
}

export default Navigations