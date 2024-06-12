"use server";

// Create a new task
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

// Get all tasks
export const getTasks = async () => {
  try {
    return await prisma.task.findMany({
      select: {
        id: true,
        label: true,
        status: true,
        updatedAt: true
      },
      orderBy: [
        { status: 'asc' },
        { updatedAt: 'desc' }
      ]
    });
  } catch ( error ) {
    console.error(error);
    return [];
  }
};

// Add a new task
export const addTask = async (label: string) => {
  try {
    await prisma.task.create({
      data: {
        label,
        status: false
      }
    });
    revalidatePath("/tasks");
    return true;
  } catch ( error ) {
    console.error(error);
    return false;
  }
};

// Update a task's label
export const updateTaskLabel = async (id: string, label: string) => {
  try {
    await prisma.task.update({
      where: {
        id
      },
      data: {
        label,
        updatedAt: new Date()
      }
    });
    revalidatePath("/tasks");
    return true;
  } catch ( error ) {
    console.error(error);
    return false;
  }
};

// Update a task's status
export const updateTaskStatus = async (id: string, status: boolean) => {
  try {
    await prisma.task.update({
      where: {
        id
      },
      data: {
        status,
        updatedAt: new Date()
      }
    });
    revalidatePath("/tasks");
    return true;
  } catch ( error ) {
    console.error(error);
    return false;
  }
};

// Delete a task
export const deleteTask = async (id: string) => {
  try {
    await prisma.task.delete({
      where: {
        id
      }
    });
    revalidatePath("/tasks");
    return true;
  } catch ( error ) {
    console.error(error);
    return false;
  }
};