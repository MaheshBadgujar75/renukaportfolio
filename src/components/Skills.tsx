import { motion } from "motion/react";
import { resumeData } from "@/src/data";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function Skills() {
  const allTools = [...resumeData.skills.tools, ...resumeData.skills.tools, ...resumeData.skills.tools, ...resumeData.skills.tools];

  return (
    <section id="skills" className="relative pb-16 md:pb-32 px-4 md:px-6">
      
      {/* Decorative background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] lg:text-[15vw] font-black text-accent/5 select-none pointer-events-none z-0 leading-none">
        TOOLKIT
      </div>

      {/* Dual Glass Marquee */}
      <div className="relative flex flex-col gap-4 md:gap-6 overflow-hidden py-8 md:py-12 mb-12 md:mb-24 z-10 w-full mx-auto">
        <div className="relative flex shrink-0">
          <div className="animate-marquee flex whitespace-nowrap gap-6 md:gap-12 items-center">
            {allTools.map((tool, index) => (
              <div
                key={`marquee-1-${tool}-${index}`}
                className="px-5 md:px-8 py-3 md:py-4 rounded-full text-lg md:text-2xl font-display font-black tracking-widest uppercase flex items-center gap-2 md:gap-4 group cursor-default text-zinc-400 dark:text-zinc-600 hover:text-accent transition-colors bg-accent/5 backdrop-blur-md border border-white/5 shadow-xl"
              >
                <span className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-accent/50 group-hover:bg-accent group-hover:animate-ping" />
                {tool}
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      </div>

      {/* Premium Interactive Rows Layout */}
      <div className="flex flex-col gap-6 md:gap-8 relative z-10 w-full mx-auto max-w-7xl">
        {resumeData.skills.categories.map((category, idx) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: idx * 0.1, duration: 0.7, type: "spring", bounce: 0.3 }}
            className="group relative flex flex-col lg:flex-row lg:items-center justify-between p-8 md:p-14 rounded-[2rem] md:rounded-[3rem] border border-white/5 bg-accent/5 backdrop-blur-md overflow-hidden hover:bg-black/40 transition-all duration-500 shadow-xl min-h-[220px] md:min-h-[250px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-cyan-500/0 to-accent/0 group-hover:from-emerald-500/5 group-hover:via-cyan-500/5 group-hover:to-accent/5 transition-all duration-700 pointer-events-none" />
            <div className="absolute -top-32 -left-32 h-64 w-64 bg-accent/10 rounded-full blur-[100px] group-hover:bg-accent/20 transition-colors duration-700 pointer-events-none" />
            
            <div className="lg:order-1 lg:w-1/3 mb-8 lg:mb-0 relative z-10 text-left">
              <div className="flex items-center gap-4 md:gap-6 mb-3 md:mb-4">
                <span className="text-xs md:text-sm font-black text-accent tracking-[0.3em] uppercase">0{idx + 1}</span>
                <div className="h-px bg-white/10 flex-1" />
              </div>
              <h3 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tighter shrink-0 drop-shadow-xl group-hover:text-accent transition-colors duration-500">
                {category.name}
              </h3>
            </div>
            
            <div className="lg:order-2 lg:w-2/3 flex flex-wrap gap-3 md:gap-4 lg:pl-16 relative z-10">
              {category.items.map((item, i) => (
                <Badge 
                  key={item} 
                  variant="secondary" 
                  className={cn(
                    "px-4 md:px-6 py-2.5 md:py-3.5 rounded-xl md:rounded-2xl text-[10px] md:text-base font-bold transition-all cursor-default border-none uppercase tracking-wider backdrop-blur-md shadow-lg",
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
