import { useSelector, useDispatch } from "react-redux"
import './index.css'
import { addTask } from "./redux/tasksSlice"
import { statusFilters, setStatusFilter } from "./redux/filtersSlice"
import { TaskList } from "./components/TaskList"
import { TaskCounter } from "./components/TaskCounter"

function App() {
    let dispatch = useDispatch()
    let addNewTasks = () => {
        let textAdd = prompt("Enter descriptiom of your task")
        if(textAdd) {
            dispatch(addTask(textAdd))
        }
    }

    return (
        <div className="block-tasks" style={{ padding: "20px" }}>
            <h1>Redux Todo з Reselect</h1>
            <button className="btn-add" onClick={addNewTasks}>Додати завдання</button>

            <div className="box-controls" style={{ marginTop: "10px" }}>
                <button className="btn-all" onClick={() => dispatch(setStatusFilter(statusFilters.all))}>Всі</button>
                <button className="btn-active" onClick={() => dispatch(setStatusFilter(statusFilters.active))}>Активні</button>
                <button className="btn-finished" onClick={() => dispatch(setStatusFilter(statusFilters.completed))}>Виконані</button>
            </div>

            <TaskCounter />
            <TaskList />
        </div>
    )
}

export default App