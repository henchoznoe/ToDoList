"use client";

import { Task } from "@prisma/client";
import { CircleCheckBig, CircleOff } from "lucide-react";
import { updateTaskStatus } from "@/actions/tasks";
import { toast } from "sonner";
import { cn } from "@/utils/classNames";
import { Tooltip } from "react-tooltip";

type ChangeTaskStatusProps = {
  task: Task;
}

const ChangeTaskStatus = (props: ChangeTaskStatusProps) => {

  const { task } = props;

  const handleChangeStatus = async () => {
    const updated = await updateTaskStatus(task.id, !task.status);
    if ( !updated ) {
      toast.error("Failed to update task status");
    }
  }

  return (
    <>
      <button
        className={cn(task.status ? 'bg-gray-400' : 'bg-green-400', 'text-white p-2 rounded-xl')}
        onClick={handleChangeStatus}
        data-tooltip-id="tooltip-btn-change"
        data-tooltip-content={task.status ? "Mark as uncompleted" : "Mark as completed"}
        data-tooltip-place="bottom"
      >
        {task.status ? <CircleOff/> : <CircleCheckBig/>}
      </button>
      <Tooltip id="tooltip-btn-change"/>
    </>
  );
}

export default ChangeTaskStatus;