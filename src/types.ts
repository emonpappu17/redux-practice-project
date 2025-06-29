export interface ITask {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    isCompleted: boolean;
    priority: "low" | "medium" | "high"; // Use union type to restrict values
    assignedTo: string | null
}
export interface IUser {
    id: string,
    name: string
}
