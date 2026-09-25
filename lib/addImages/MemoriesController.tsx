import { put } from "@vercel/blob";
import { Memory } from "./types";
import MemoryModel from "../models/Memories";
import dbConnect from "@/app/config/dbConnect";

const addMemoryImages = async (images: File[], title: string) => {
  try {
    const resultPromise = images.map(async (image) => {
      const result = await put(`/memories/${title}/${image.name}`, image, {
        access: "public",
        addRandomSuffix: true,
      });
      return result;
    });
    return await Promise.all(resultPromise);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    throw "error adding memory images";
  }
};

export const addMemory = async (memory: Memory) => {
  try {
    await dbConnect();
    const images = await addMemoryImages(memory.images, memory.title);
    console.log(memory);
    await MemoryModel.create({
      title: memory.title,
      date: memory.date,
      story: memory.story,
      images: images?.map((image) => image.url) || [],
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    throw "error adding memory";
  }
};

export const getMemories = async () => {
  try {
    await dbConnect();
    const memories = await MemoryModel.find({}).sort({ date: -1 });
    return memories;
  } catch (error) {
    console.log(error);
    throw "error getting memories";
  }
};

export const deleteMemories = async (id: string) => {
  try {
    await dbConnect();
    await MemoryModel.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw "error deleting memory";
  }
};
