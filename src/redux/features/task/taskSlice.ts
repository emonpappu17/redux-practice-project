import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, type PayloadAction, nanoid } from "@reduxjs/toolkit";


interface InitialState {
    tasks: ITask[];
    filter: "all" | "high" | "medium"
}

const initialState: InitialState = {
    tasks: [
        // {
        //     id: "12354235",
        //     title: "Initialize frontend",
        //     description: "Create Home page, and routing",
        //     dueDate: "2025-2",
        //     idCompleted: false,
        //     priority: "High"
        // },
        // {
        //     id: "123e45634235",
        //     title: "Init github repo",
        //     description: "Create state branch",
        //     dueDate: "2025-2",
        //     idCompleted: false,
        //     priority: "Low"
        // },
    ],
    filter: "all"
}

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: DraftTask): ITask => {
    return { id: nanoid(), isCompleted: false, ...taskData }
};

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<DraftTask>) => {
            const taskData = createTask(action.payload);
            state.tasks.push(taskData);
        }
    },
})

export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
}

export const selectFilter = (state: RootState) => {
    return state.todo.filter;
}

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;