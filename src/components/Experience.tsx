import { motion } from "motion/react";
import { resumeData } from "@/src/data";
import { Briefcase, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 px-4 md:px-6 w-full max-w-full block mx-auto">
      <div className="grid grid-cols-1 gap-8 md:gap-12">
        {resumeData.experience.map((exp, index) => (
          <motion.div
            key={`${exp.company}-${index}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className="group relative p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-muted/20 border border-border/50 hover:bg-accent/5 transition-all duration-500"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8 mb-8 md:mb-12">
              <div className="flex items-center gap-4 md:gap-6">
                <div className={cn(
                  "h-14 w-14 md:h-20 md:w-20 rounded-2xl md:rounded-3xl flex items-center justify-center text-white transition-all duration-500 shadow-xl shrink-0",
                  index % 3 === 0 ? "bg-emerald-500 shadow-emerald-500/20" :
                  index % 3 === 1 ? "bg-cyan-500 shadow-cyan-500/20" :
                  "bg-teal-500 shadow-teal-500/20"
                )}>
                  <Briefcase className="h-6 w-6 md:h-10 md:w-10" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-4xl font-display font-black tracking-tighter group-hover:text-gradient transition-all duration-500 leading-tight">
                    {exp.role}
                  </h3>
                  <div className="text-lg md:text-xl font-bold text-muted-foreground">{exp.company}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl bg-background/50 border border-border/50 shadow-sm w-fit">
                <Calendar className={cn(
                  "h-4 w-4 md:h-5 md:w-5",
                  index % 3 === 0 ? "text-emerald-500" :
                  index % 3 === 1 ? "text-cyan-500" :
                  "text-teal-500"
                )} />
                <span className="text-[10px] md:text-sm font-black uppercase tracking-widest">{exp.period}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12">
              <ul className="space-y-4 md:space-y-6">
                {exp.description.map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="flex items-start gap-4 md:gap-6 text-base md:text-xl text-muted-foreground leading-relaxed"
                  >
                    <span className="mt-2 md:mt-3 h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-accent shrink-0 shadow-[0_0_10px_rgba(0,255,170,0.5)]" />
                    {item}
                  </motion.li>
                ))}
              </ul>
              
              <div className="hidden lg:block w-px bg-border/50 h-full" />
            </div>

            {/* Background Number */}
            <div className="absolute bottom-4 right-8 md:right-12 text-6xl md:text-9xl font-display font-black text-accent/5 select-none pointer-events-none group-hover:text-accent/10 transition-colors">
              0{index + 1}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
