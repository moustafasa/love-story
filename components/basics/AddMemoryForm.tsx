"use client";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import {
  startTransition,
  useActionState,
  useCallback,
  useEffect,
  useState,
} from "react";
import FileInput from "../ui/FileInput";
import FileInputShowItem from "../ui/FileInputShowItem";
import { addMemoryAction } from "@/lib/addImages/MemoriesActions";

export default function AddMemoryForm() {
  const [images, setImages] = useState<File[]>([]);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setImages((prev) => [
        ...prev,
        ...Array.from(e.target.files || []).filter(
          (file) =>
            !images.find(
              (fl) =>
                fl.name === file.name &&
                fl.size === file.size &&
                fl.lastModified === file.lastModified,
            ),
        ),
      ]);
    });
  };

  const deleteImage = useCallback((image: File) => {
    setImages((prev) => prev.filter((fl) => fl.name !== image.name));
  }, []);
  const [state, action] = useActionState(
    addMemoryAction.bind(null, images),
    null,
  );

  useEffect(() => {
    if (state?.data && !state.error) {
      startTransition(() => {
        setImages([]);
        state.data = undefined;
      });
    }
  }, [state]);

  return (
    <form className="space-y-4 py-5" action={action}>
      <div className="space-y-2">
        <Label className="capitalize text-xl">title</Label>
        <Input
          className="h-9 rounded"
          name="title"
          placeholder="E.G Our First Date"
          defaultValue={state?.data?.title || ""}
        />
        {state?.error?.fieldErrors?.title && (
          <p className="text-destructive">{state.error.fieldErrors.title}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label className="capitalize text-xl">date</Label>
        <Input
          className="h-9 rounded"
          name="date"
          type="date"
          defaultValue={state?.data?.date || ""}
        />
        {state?.error?.fieldErrors?.date && (
          <p className="text-destructive">{state.error.fieldErrors.date}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label className="capitalize text-xl">The Story</Label>
        <Textarea
          placeholder="write something sweet about this memory"
          className="h-30 resize-none"
          name="story"
          defaultValue={state?.data?.story || ""}
        />
        {state?.error?.fieldErrors?.story && (
          <p className="text-destructive">{state.error.fieldErrors.story}</p>
        )}
      </div>
      <div className="space-y-2 mb-10">
        <Label className="capitalize text-xl">memory Images</Label>
        <FileInput
          input={{
            type: "file",
            id: "memory-images",
            label: " images",
            multible: true,
          }}
          onChange={handleFileChange}
        />
        {state?.error?.fieldErrors?.images && (
          <p className="text-destructive">{state.error.fieldErrors.images}</p>
        )}
      </div>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-3 px-4">
        {images.map((image) => (
          <FileInputShowItem
            key={image.name}
            file={image}
            deleteMethod={() => deleteImage(image)}
          />
        ))}
      </ul>

      <Button
        type="submit"
        disabled={false}
        className="w-full h-12 text-lg rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
      >
        Add Memory
      </Button>
    </form>
  );
}
