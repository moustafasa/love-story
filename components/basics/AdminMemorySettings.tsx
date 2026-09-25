"use client";
import { CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { Edit2, Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "../ui/alert-dialog";
import { deleteMemoryAction } from "@/lib/addImages/MemoriesActions";

type Props = {
  memoryId: string;
};

export default function AdminMemorySettings({ memoryId }: Props) {
  return (
    <CardFooter className="px-6 pb-6 pt-4 flex items-center justify-end gap-2 border-t border-border/30 mt-4">
      <Button
        variant="outline"
        size="sm"
        className="h-9 px-4 rounded-lg bg-transparent  hover:bg-primary/5 hover:text-primary"
        // onClick={() => handleEdit(memory)}
      >
        <Edit2 className="h-4 w-4 mr-2" />
        Edit
      </Button>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="h-9 px-4 rounded-lg text-destructive hover:text-destructive hover:bg-destructive/10"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Delete
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="rounded-2xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="font-display">
              Delete this memory?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently remove this memory from your timeline. This
              action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="rounded-xl">Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-xl"
              onClick={async () => await deleteMemoryAction(memoryId)}
            >
              Delete Permanently
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </CardFooter>
  );
}
