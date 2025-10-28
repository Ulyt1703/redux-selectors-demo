import { createSlice, nanoid } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        items: [
            { id: 1, text: "Learn Redux", completed: false },
            { id: 2, text: "Drink coffee", completed: true },
        ],
        isLoading: false,
        error: null,
    },
    reducers: {
        addTask: {
            reducer(state, action) {
                state.items.push(action.payload);
            },
            prepare(text) {
                return { payload: { id: nanoid(), text, completed: false } };
            },
        },
        toggleTask(state, action) {
            const task = state.items.find(task => task.id === action.payload);
            if (task) task.completed = !task.completed;
        },
    },
});

export const { addTask, toggleTask } = tasksSlice.actions;
export default tasksSlice.reducer;