"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import AddMemoryForm from "./AddMemoryForm";

export default function AddMemoriesDialog() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={() => {
            setOpen(true);
          }}
          className="rounded-full shadow-md shadow-primary/20 hover-elevate px-6 border-primary-border"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Memory
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-background/95 backdrop-blur-xl border-white/20 shadow-2xl">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">
            {false ? "Edit Memory" : "Add a New Memory"}
          </DialogTitle>
          <DialogDescription>
            {false
              ? "Update the details of this beautiful moment."
              : "Fill in the details to add another milestone to your story."}
          </DialogDescription>
        </DialogHeader>
        {/* <AdminMemoryForm memory={editingMemory || undefined} onSuccess={handleFormSuccess} /> */}
        <AddMemoryForm />
      </DialogContent>
    </Dialog>
  );
}
