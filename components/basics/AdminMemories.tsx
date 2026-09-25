import { Heart, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { getMemories } from "@/lib/addImages/MemoriesController";
import Image from "next/image";
import { format } from "date-fns";
import AdminMemorySettings from "./AdminMemorySettings";

export default async function AdminMemories() {
  const memories = await getMemories();

  return (
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
          <Button size="lg" className="rounded-full">
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
                <Image
                  src={memory.images[0]}
                  alt={memory.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  width={400}
                  height={300}
                />

                {/* {true && (
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur p-2 rounded-full shadow-sm text-primary">
                    <Heart className="h-4 w-4 fill-current" />
                  </div>
                )} */}
              </div>
              <CardContent className="p-6">
                <div className="text-xs font-semibold text-primary/80 mb-2 tracking-wider uppercase">
                  {memory.date
                    ? format(new Date(memory.date), "MMMM d, yyyy")
                    : "Unknown Date"}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2 line-clamp-1">
                  {memory.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {memory.description}
                </p>
              </CardContent>
              <AdminMemorySettings memoryId={memory.id} />
            </Card>
          ))}
        </div>
      )}
    </main>
  );
}
