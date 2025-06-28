export interface ITask {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    idCompleted: boolean;
    priority: "Low" | "Medium" | "High"; // Use union type to restrict values
}
