import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export default function AddMemoryForm() {
  return (
    <form className="space-y-4 py-4">
      <div className="space-y-2">
        <Label className="capitalize text-xl">title</Label>
        <Input className="h-9 rounded" placeholder="E.G Our First Date" />
      </div>
      <div className="space-y-2">
        <Label className="capitalize text-xl">date</Label>
        <Input className="h-9 rounded" type="date" />
      </div>
      <div className="space-y-2">
        <Label className="capitalize text-xl">The Story</Label>
        <Textarea
          placeholder="write something sweet about this memory"
          className="h-30 resize-none"
        />
      </div>
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
