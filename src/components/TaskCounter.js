import { useSelector } from "react-redux"
import { selectTaskCount } from "../redux/selectors"

export const TaskCounter = () => {
    const count = useSelector(selectTaskCount)

    return (
        <div>
            <p>Активних: {count.active}</p>
            <p>Виконаних: {count.completed}</p>
        </div>
    )
}

export default TaskCounter