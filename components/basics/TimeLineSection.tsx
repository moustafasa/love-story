import { getMemories } from "@/lib/addImages/MemoriesController";
import { format } from "date-fns";
import Image from "next/image";

export default async function TimeLineSection() {
  const sortedMemories = await getMemories();
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
      {!sortedMemories.length ? (
        <div className="text-center py-32">
          <p className="text-xl text-muted-foreground font-display italic">
            Our story is just beginning...
          </p>
        </div>
      ) : (
        <div className="relative">
          {/* Center Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-primary/0 via-primary/30 to-primary/0 md:-ml-[0.5px]" />

          <div className="space-y-24 md:space-y-32">
            {sortedMemories.map((memory, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  // initial={{ opacity: 0, y: 50 }}
                  // whileInView={{ opacity: 1, y: 0 }}
                  // viewport={{ once: true, margin: "-100px" }}
                  // transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Center Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-background md:-translate-x-1.5 shadow-sm z-10 hidden md:block" />

                  {/* Image Side */}
                  <div className="w-full md:w-1/2 flex justify-center px-8 md:px-0">
                    <div
                      // whileHover={{ scale: 1.02, rotate: isEven ? -1 : 1 }}
                      // transition={{ duration: 0.4 }}
                      className={`w-full max-w-md ${false ? "p-2 bg-linear-to-tr from-primary/20 to-secondary/20 rounded-3xl" : ""}`}
                    >
                      <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                        {/* HTML Comment: User provided image or generic beautiful placeholder */}
                        {/* landing page romantic memory placeholder */}
                        <Image
                          src={memory.images[0]}
                          alt={memory.title}
                          className="w-full h-full object-cover"
                          width={400}
                          height={400}
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-60" />

                        {/* {memory.isFavorite && (
                            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-3 rounded-full">
                              <Heart className="w-5 h-5 text-white fill-white" />
                            </div>
                          )} */}
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div
                    className={`w-full md:w-1/2 flex flex-col ${isEven ? "md:items-end md:text-right" : "md:items-start md:text-left"} px-8 md:px-0`}
                  >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-widest uppercase mb-4">
                      {true
                        ? format(new Date(memory.date), "MMMM d, yyyy")
                        : "Timeless"}
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4 font-medium leading-tight text-balance">
                      {memory.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-lg max-w-md text-balance font-light">
                      {memory.story}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
