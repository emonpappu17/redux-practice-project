import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Tasks = () => {
    const tasks = useAppSelector(selectTasks)
    // const filter = useAppSelector(selectFilter)
    // const tasks = useAppSelector((state) => state.todo.tasks)
    console.log(tasks);
    // console.log(filter);

    return (
        <div className="mx-auto max-w-7xl px-5 mt-20">
            <div className="flex justify-between items-center">
                <h1>Task</h1>
                <AddTaskModal></AddTaskModal>
            </div>
            <div className="space-y-5 mt-5">
                {/* <TaskCard></TaskCard>
                <TaskCard></TaskCard> */}
                {tasks.map((task, idx) => (
                    <TaskCard key={idx} task={task}></TaskCard>
                ))}
            </div>
        </div>
    );
};

export default Tasks;