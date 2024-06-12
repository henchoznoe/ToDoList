"use client";

import AddTaskButton from "@/components/buttons/AddTaskButton";
import { addTask } from "@/actions/tasks";
import { useRef } from "react";
import { toast } from "sonner";

const AddTaskForm = () => {

  const formRef = useRef<HTMLFormElement>(null);

  const handleAddTask = async (data: FormData) => {
    const taskName = data.get('label')!.toString();
    if ( !taskName || taskName.trim().length === 0 ) {
      toast.error("Task name cannot be empty");
      return;
    }
    const added = await addTask(taskName);
    if ( added ) {
      formRef.current?.reset();
    } else {
      toast.error("Failed to add task");
    }
  }

  return (
    <>
      <form className="flex flex-col gap-3" action={handleAddTask} ref={formRef}>
        <input
          type="text"
          name="label"
          id="label"
          placeholder="Add a new task"
          className="border-2 border-gray-300 rounded-md p-2"
        />
        <AddTaskButton/>
      </form>
    </>
  );
}

export default AddTaskForm;