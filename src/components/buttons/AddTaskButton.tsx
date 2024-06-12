"use client";

import { useFormStatus } from 'react-dom';

const AddTaskButton = () => {

  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-blue-500 text-white rounded-xl p-2"
      disabled={pending}
    >
      {pending ? "Loading..." : "Add Task"}
    </button>
  );
}

export default AddTaskButton;