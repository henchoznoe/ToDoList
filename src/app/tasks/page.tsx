import AddTaskForm from "@/components/tasks/AddTaskForm";
import { getTasks } from "@/actions/tasks";
import TaskItem from "@/components/tasks/TaskItem";

const Tasks = async () => {

  const tasks = await getTasks();

  return (
    <div className="flex flex-col md:flex-row min-h-svh">
      <div className="flex justify-center items-start w-full md:w-1/2 p-4">
        <div className="flex flex-col gap-4 bg-gray-200 rounded-md p-10 sticky top-4">
          <h1 className="text-xl md:text-3xl">Welcome on this ToDoList !</h1>
          <h2>
            This to-do list application allows you to effortlessly manage your tasks. You can add new tasks, modify
            existing ones, and delete tasks you no longer need. Additionally, you can mark tasks as completed, helping
            you keep track of your progress and stay organized.
          </h2>
          <AddTaskForm/>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center w-full md:w-1/2 gap-3 p-4">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task}/>
        ))}
      </div>
    </div>
  );
}

export default Tasks;