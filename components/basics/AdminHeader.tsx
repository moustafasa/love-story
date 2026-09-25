import { ArrowLeft } from "lucide-react";
import AddMemoriesDialog from "./AddMemoriesDialog";
import Link from "next/link";

export default function AdminHeader() {
  return (
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
  );
}
