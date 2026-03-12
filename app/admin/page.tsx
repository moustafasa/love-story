// import { useMemories, useDeleteMemory } from "@/hooks/use-memories";
// import { AdminMemoryForm } from "@/components/AdminMemoryForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Plus,
  Edit2,
  Trash2,
  Heart,
  ArrowLeft,
  Loader2,
  Image as ImageIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AddMemoriesDialog from "@/components/basics/AddMemoriesDialog";

export default function AdminPage() {
  const memories: number[] = [1, 2, 3];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Admin Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors p-2 -ml-2 rounded-full hover:bg-muted"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div>
              <h1 className="font-display text-2xl font-bold text-foreground">
                Curate Our Story
              </h1>
              <p className="text-sm text-muted-foreground hidden sm:block">
                Manage the memories displayed on the timeline.
              </p>
            </div>
          </div>

          <AddMemoriesDialog />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {!memories?.length ? (
          <div className="text-center py-24 glass-panel rounded-3xl">
            <Heart className="h-16 w-16 mx-auto text-primary/40 mb-4" />
            <h3 className="font-display text-2xl font-semibold mb-2">
              No memories yet
            </h3>
            <p className="text-muted-foreground max-w-sm mx-auto mb-8">
              Start building your beautiful timeline by adding your first memory
              together.
            </p>
            <Button
              //   onClick={handleCreateNew}
              size="lg"
              className="rounded-full"
            >
              <Plus className="h-5 w-5 mr-2" />
              Create First Memory
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {memories.map((memory, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-border/50 bg-white/50 hover:bg-white/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="aspect-4/3 relative overflow-hidden bg-muted">
                  {false ? (
                    // <Image
                    //   src={memory.imageUrl}
                    //   alt={memory.title}
                    //   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    //   width={400}
                    //   height={300}
                    // />
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground/30">
                      <ImageIcon className="h-12 w-12" />
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground/30">
                      <ImageIcon className="h-12 w-12" />
                    </div>
                  )}
                  {true && (
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur p-2 rounded-full shadow-sm text-primary">
                      <Heart className="h-4 w-4 fill-current" />
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  {/* <div className="text-xs font-semibold text-primary/80 mb-2 tracking-wider uppercase">
                    {memory.date
                      ? format(new Date(memory.date), "MMMM d, yyyy")
                      : "Unknown Date"}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 line-clamp-1">
                    {memory.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {memory.description}
                  </p> */}
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0 flex items-center justify-end gap-2 border-t border-border/30 mt-4 pt-4">
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
                          This will permanently remove this memory from your
                          timeline. This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="rounded-xl">
                          Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                          className="bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-xl"
                          //   onClick={() => deleteMutation.mutate(memory.id)}
                        >
                          {/* {deleteMutation.isPending
                            ? "Deleting..."
                            : "Delete Permanently"} */}
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
