import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    tasks: ITask[];
    filter: "all" | "high" | "medium"
}

const initialState: InitialState = {
    tasks: [
        {
            id: "12354235",
            title: "Initialize frontend",
            description: "Create Home page, and routing",
            dueDate: "2025-2",
            idCompleted: false,
            priority: "High"
        },
        {
            id: "12354235",
            title: "Init github repo",
            description: "Create state branch",
            dueDate: "2025-2",
            idCompleted: false,
            priority: "Low"
        },
    ],
    filter: "all"
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {},
})

export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
}

export const selectFilter = (state: RootState) => {
    return state.todo.filter;
}

export default taskSlice.reducer;