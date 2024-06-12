"use client";

import { type Task } from "@prisma/client";
import DeleteTaskButton from "@/components/buttons/DeleteTaskButton";
import { calculateTimeInThePast } from "@/utils/dateFormat";
import { useState } from "react";
import { updateTaskLabel } from "@/actions/tasks";
import ChangeTaskStatus from "@/components/buttons/ChangeTaskStatus";
import { toast } from "sonner";

type TaskItemProps = {
  task: Task;
}

const TaskItem = (props: TaskItemProps) => {

  const { task } = props;

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [label, setLabel] = useState<string>(task.label);

  const handleBlur = async () => {
    setIsEditing(false);
    if ( label !== task.label ) {
      const updated = await updateTaskLabel(task.id, label);
      if ( !updated ) {
        toast.error("Failed to update task");
      }
    }
  };

  return (
    <div className="p-3 bg-gray-200 rounded-md w-full">
      <div className="flex justify-between items-center p-3 bg-gray-200 rounded-md w-full">
        {isEditing ? (
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            onBlur={handleBlur}
            autoFocus
            className="border rounded px-2"
          />
        ) : (
          <span onClick={() => setIsEditing(true)}>{label}</span>
        )}
        <div className="flex gap-1">
          <ChangeTaskStatus task={task}/>
          <DeleteTaskButton id={task.id}/>
        </div>
      </div>
      <div>
        <span className="italic font-light" suppressHydrationWarning>{calculateTimeInThePast(task.updatedAt)}</span>
      </div>
    </div>
  );
}

export default TaskItem;