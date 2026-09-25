"use server";

import z from "zod";
import { MemoryFlattenedError, MemorySchema } from "../models/zodModels/Memory";
import { addMemory, deleteMemories } from "./MemoriesController";
import { Memory } from "./types";
import { revalidatePath } from "next/cache";

export async function addMemoryAction(
  images: File[],
  error: { data?: Memory; error?: MemoryFlattenedError } | null,
  formData: FormData,
) {
  const memory = Object.fromEntries(formData) as unknown as Memory;
  console.log(memory);
  memory.images = images;
  const state = { data: memory } as {
    data?: Memory;
    error?: MemoryFlattenedError;
  };

  const validationResult = MemorySchema.safeParse(memory);
  console.log(validationResult);
  if (!validationResult.success) {
    state.error = z.flattenError(validationResult.error);
    return state;
  }
  try {
    await addMemory(memory);
  } catch (error) {
    state.error = { formErrors: [error as string], fieldErrors: {} };
    return state;
  }
  return state;
}

export async function deleteMemoryAction(memoryId: string) {
  try {
    await deleteMemories(memoryId);
    revalidatePath("/admin/memories");
  } catch (error) {
    throw error;
  }
}
