import { createSlice } from "@reduxjs/toolkit";

export const statusFilters = {
    all: "all",
    active: "active",
    completed: "completed",
};

const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        status: statusFilters.all,
    },
    reducers: {
        setStatusFilter(state, action) {
            state.status = action.payload;
        },
    },
});

export const { setStatusFilter } = filtersSlice.actions;
export default filtersSlice.reducer;