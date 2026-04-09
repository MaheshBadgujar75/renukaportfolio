import { motion } from "motion/react";
import { resumeData } from "@/src/data";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowUpRight, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 px-4 md:px-6">
      <div className="w-full max-w-full block mx-auto">
        <div className="grid grid-cols-1 gap-16 md:gap-32">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "group grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 md:gap-16 items-center",
                index % 2 !== 0 && "lg:grid-cols-[1fr_1.2fr]"
              )}
            >
              <div className={cn(
                "relative aspect-[16/10] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.01] shrink-0",
                index % 2 !== 0 && "lg:order-2"
              )}>
                <img
                  src={`https://picsum.photos/seed/${project.title.replace(/\s/g, '')}/1200/800`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-accent/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              <div className="flex flex-col gap-6 md:gap-8">
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="text-gradient font-black text-4xl md:text-6xl opacity-40 leading-none">0{index + 1}</span>
                  <div className="h-px flex-1 bg-border/50" />
                  <Badge variant="outline" className={cn(
                    "rounded-full font-black uppercase tracking-widest px-3 md:px-4 py-1 border-none",
                    index % 3 === 0 ? "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300" :
                    index % 3 === 1 ? "bg-cyan-500/20 text-cyan-700 dark:text-cyan-300" :
                    "bg-teal-500/20 text-teal-700 dark:text-teal-300"
                  )}>
                    {project.type}
                  </Badge>
                </div>

                <h3 className="text-3xl md:text-7xl font-display font-black tracking-tighter leading-tight md:leading-none group-hover:text-gradient transition-all duration-500">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2 md:gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-muted-foreground bg-muted/30 px-2 py-1 rounded-md">
                      #{tag}
                    </span>
                  ))}
                </div>

                <ul className="space-y-3 md:space-y-4">
                  {project.description.map((item, i) => (
                    <li key={i} className="text-base md:text-lg text-muted-foreground leading-relaxed flex items-start gap-3 md:gap-4">
                      <span className="mt-2.5 h-1.5 md:h-2 w-1.5 md:w-2 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button size="lg" variant="outline" className="w-fit h-14 md:h-16 px-8 md:px-10 rounded-2xl border-border/50 hover:border-accent hover:bg-accent hover:text-accent-foreground font-black text-base md:text-lg transition-all group/btn">
                  VIEW CASE STUDY <ArrowUpRight className="ml-2 h-4 md:h-5 w-4 md:w-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
