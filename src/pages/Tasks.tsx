import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/baseApi";
import type { ITask } from "@/types";
// import { selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
// import { useAppDispatch, useAppSelector } from "@/redux/hook";

const Tasks = () => {
    // const tasks = useAppSelector(selectTasks)
    // const dispatch = useAppDispatch();
    // const filter = useAppSelector(selectFilter)
    // const tasks = useAppSelector((state) => state.todo.tasks)
    // console.log(tasks);
    // console.log(filter);

    const { data, isLoading, isError } = useGetTasksQuery(undefined, {
        pollingInterval: 30000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true
    })

    if (isLoading) {
        return <p>Loading......</p>
    }

    console.log({ data, isLoading, isError });

    return (
        <div className="mx-auto max-w-7xl px-5 mt-20">
            <div className="flex justify-end items-center gap-5">
                <h1 className="mr-auto">Tasks</h1>
                <Tabs defaultValue="all">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger
                            // onClick={() => dispatch(updateFilter("all"))}
                            value="all">
                            All
                        </TabsTrigger>
                        <TabsTrigger
                            // onClick={() => dispatch(updateFilter("low"))}
                            value="low">
                            Low
                        </TabsTrigger>
                        <TabsTrigger
                            // onClick={() => dispatch(updateFilter("medium"))}
                            value="medium">
                            Medium
                        </TabsTrigger>
                        <TabsTrigger
                            // onClick={() => dispatch(updateFilter("high"))}
                            value="high">
                            High
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
                <AddTaskModal></AddTaskModal>
            </div>
            <div className="space-y-5 mt-5">
                {!isLoading && data?.tasks?.map((task: ITask) => (
                    <TaskCard key={task._id} task={task}></TaskCard>
                ))}
            </div>
        </div>
    );
};

export default Tasks;