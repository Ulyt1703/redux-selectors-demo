import { useSelector, useDispatch } from "react-redux"
import { selectVisibleTasks } from "../redux/selectors"
import { toggleTask } from "../redux/tasksSlice"

export const TaskList = () => {
    const tasks = useSelector(selectVisibleTasks)
    const dispatch = useDispatch()

    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <label>
                        <input 
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => dispatch(toggleTask(task.id))} 
                        />
                        {task.text}
                    </label>
                </li>
            ))}
        </ul>
    )
}

export default TaskList