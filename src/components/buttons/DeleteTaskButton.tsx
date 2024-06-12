"use client";

import { deleteTask } from "@/actions/tasks";
import { Trash } from "lucide-react";
import { toast } from "sonner";

type DeleteTaskButtonProps = {
  id: string;
}

const DeleteTaskButton = (props: DeleteTaskButtonProps) => {

  const handleDeleteTask = async () => {
    const deleted = await deleteTask(props.id);
    if ( !deleted ) {
      toast.error("Failed to delete task");
    }
  }

  return (
    <button
      className="bg-red-400 text-white p-2 rounded-xl"
      onClick={handleDeleteTask}
    >
      <Trash/>
    </button>
  );
}

export default DeleteTaskButton;