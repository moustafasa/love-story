import ImagesUrlContextProvider from "@/utilities/ImagesUrlContext";
import AdminHeader from "@/components/basics/AdminHeader";
import AdminMemories from "@/components/basics/AdminMemories";

export default function AdminPage() {
  return (
    <ImagesUrlContextProvider>
      <div className="min-h-screen bg-background pb-20">
        <AdminHeader />
        <AdminMemories />
      </div>
    </ImagesUrlContextProvider>
  );
}
