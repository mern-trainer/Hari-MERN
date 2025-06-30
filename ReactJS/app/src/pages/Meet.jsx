import { useParams } from "react-router"

const Meet = () => {

    const { code } = useParams()

    return <div>
        meet code - {code}
    </div>
}

export default Meet