import { motion } from "motion/react";
import { resumeData } from "@/src/data";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function Skills() {
  const allTools = [...resumeData.skills.tools, ...resumeData.skills.tools, ...resumeData.skills.tools, ...resumeData.skills.tools];

  return (
    <section id="skills" className="relative pb-32">
      
      {/* Decorative background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-accent/5 select-none pointer-events-none z-0">
        TOOLKIT
      </div>

      {/* Dual Glass Marquee */}
      <div className="relative flex flex-col gap-6 overflow-hidden py-12 mb-24 z-10 w-full mx-auto">
        <div className="relative flex shrink-0">
          <div className="animate-marquee flex whitespace-nowrap gap-12 items-center">
            {allTools.map((tool, index) => (
              <div
                key={`marquee-1-${tool}-${index}`}
                className="px-8 py-4 rounded-full text-2xl font-display font-black tracking-widest uppercase flex items-center gap-4 group cursor-default text-zinc-400 dark:text-zinc-600 hover:text-accent transition-colors bg-accent/5 backdrop-blur-md border border-white/5 shadow-xl"
              >
                <span className="h-2 w-2 rounded-full bg-accent/50 group-hover:bg-accent group-hover:animate-ping" />
                {tool}
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      </div>

      {/* Premium Interactive Rows Layout */}
      <div className="flex flex-col gap-8 relative z-10 w-full mx-auto max-w-7xl">
        {resumeData.skills.categories.map((category, idx) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: idx * 0.1, duration: 0.7, type: "spring", bounce: 0.3 }}
            className="group relative flex flex-col lg:flex-row lg:items-center justify-between p-10 md:p-14 rounded-[3rem] border border-white/5 bg-accent/5 backdrop-blur-md overflow-hidden hover:bg-black/40 transition-all duration-500 shadow-xl min-h-[250px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-cyan-500/0 to-accent/0 group-hover:from-emerald-500/5 group-hover:via-cyan-500/5 group-hover:to-accent/5 transition-all duration-700 pointer-events-none" />
            <div className="absolute -top-32 -left-32 h-64 w-64 bg-accent/10 rounded-full blur-[100px] group-hover:bg-accent/20 transition-colors duration-700 pointer-events-none" />
            
            <div className="lg:w-1/3 mb-10 lg:mb-0 relative z-10">
              <div className="flex items-center gap-6 mb-4">
                <span className="text-sm font-black text-accent tracking-[0.3em] uppercase">0{idx + 1}</span>
                <div className="h-px bg-white/10 flex-1" />
              </div>
              <h3 className="text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tighter shrink-0 drop-shadow-xl group-hover:text-accent transition-colors duration-500">
                {category.name}
              </h3>
            </div>
            
            <div className="lg:w-2/3 flex flex-wrap gap-4 lg:pl-16 relative z-10">
              {category.items.map((item, i) => (
                <Badge 
                  key={item} 
                  variant="secondary" 
                  className={cn(
                    "px-6 py-3.5 rounded-2xl text-sm md:text-base font-bold transition-all cursor-default border-none uppercase tracking-wider backdrop-blur-md shadow-lg",
                    i % 3 === 0 ? "bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500 hover:text-white" :
                    i % 3 === 1 ? "bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500 hover:text-white" :
                    "bg-teal-500/10 text-teal-300 hover:bg-teal-500 hover:text-white"
                  )}
                >
                  {item}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
