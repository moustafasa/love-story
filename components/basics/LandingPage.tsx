import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="bg-radial">
      {/* Hidden link for you to access the admin area */}
      <div className="absolute top-4 right-4 z-50 opacity-0 hover:opacity-100 transition-opacity">
        <Link
          href="/admin"
          className="text-xs px-3 py-1 bg-white/50 rounded-full text-muted-foreground shadow-sm"
        >
          Admin
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-primary/20 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-pulse" />
          <div
            className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-secondary/30 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 font-medium tracking-tight">
            Our Journey
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light max-w-xl mx-auto leading-relaxed text-balance">
            Every love story is beautiful, but ours is my absolute favorite.
            Here is a look back at the moments that led us to forever.
          </p>

          <div className="mt-16">
            <div className="w-[1px] h-24 bg-gradient-to-b from-primary/50 to-transparent mx-auto" />
          </div>
        </div>
      </section>
    </div>
  );
}
