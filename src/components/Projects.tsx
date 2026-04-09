import { motion } from "motion/react";
import { resumeData } from "@/src/data";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowUpRight, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="w-full max-w-full block mx-auto">
        <div className="grid grid-cols-1 gap-32">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "group grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-center",
                index % 2 !== 0 && "lg:grid-cols-[1fr_1.2fr]"
              )}
            >
              <div className={cn(
                "relative aspect-[16/10] rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]",
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

              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-4">
                  <span className="text-gradient font-black text-6xl opacity-40">0{index + 1}</span>
                  <div className="h-px flex-1 bg-border/50" />
                  <Badge variant="outline" className={cn(
                    "rounded-full font-black uppercase tracking-widest px-4 py-1 border-none",
                    index % 3 === 0 ? "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300" :
                    index % 3 === 1 ? "bg-cyan-500/20 text-cyan-700 dark:text-cyan-300" :
                    "bg-teal-500/20 text-teal-700 dark:text-teal-300"
                  )}>
                    {project.type}
                  </Badge>
                </div>

                <h3 className="text-5xl md:text-7xl font-display font-black tracking-tighter leading-none group-hover:text-gradient transition-all duration-500">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
                      #{tag}
                    </span>
                  ))}
                </div>

                <ul className="space-y-4">
                  {project.description.map((item, i) => (
                    <li key={i} className="text-lg text-muted-foreground leading-relaxed flex items-start gap-4">
                      <span className="mt-2.5 h-2 w-2 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button size="lg" variant="outline" className="w-fit h-16 px-10 rounded-2xl border-border/50 hover:border-accent hover:bg-accent hover:text-accent-foreground font-black text-lg transition-all group/btn">
                  VIEW CASE STUDY <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
