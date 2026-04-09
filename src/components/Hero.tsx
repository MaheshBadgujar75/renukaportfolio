import { motion } from "motion/react";
import { ArrowRight, Mail, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { resumeData } from "@/src/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: "100%", opacity: 0, rotate: 2 },
  visible: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
  }
};

export function Hero() {
  return (
    <section id="about" className="relative min-h-[85vh] flex flex-col justify-center px-4 md:px-12 overflow-x-clip py-16 md:py-24">
      <div className="w-full max-w-full block mx-auto">
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8"
          >
            <div className="h-px w-8 md:w-12 bg-accent" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-accent">UI/UX Designer & Researcher</span>
          </motion.div>

          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-8xl lg:text-[7rem] font-display font-black leading-[0.9] md:leading-[0.85] tracking-tighter mb-8 md:mb-12 uppercase flex flex-col"
          >
            <span className="overflow-hidden inline-block pb-1 md:pb-2">
              <motion.span variants={itemVariants} className="inline-block origin-bottom-left">CRAFTING</motion.span>
            </span>
            <span className="overflow-hidden inline-block pb-1 md:pb-2">
              <motion.span variants={itemVariants} className="inline-block origin-bottom-left">
                <span className="text-gradient italic">DIGITAL</span>
              </motion.span>
            </span>
            <span className="overflow-hidden inline-block pb-1 md:pb-2">
              <motion.span variants={itemVariants} className="inline-block origin-bottom-left">
                EXPERIENCE<span className="text-accent">.</span>
              </motion.span>
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 md:gap-12 items-start md:items-end relative z-20"
          >
            <p className="text-lg md:text-2xl lg:text-3xl text-muted-foreground max-w-2xl leading-snug font-medium">
              {resumeData.objective}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="h-14 md:h-16 px-8 md:px-10 rounded-2xl gap-3 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base md:text-lg shadow-xl shadow-accent/20 transition-all hover:scale-105 active:scale-95 group">
                Explore Work <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Decorative Text */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.05, x: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute bottom-0 right-0 lg:-bottom-20 lg:right-10 text-[25vw] lg:text-[15vw] font-black select-none z-10 cursor-pointer tracking-tighter transition-all duration-500 hover:text-accent/40 hover:drop-shadow-[0_0_30px_hsl(var(--accent)_/_0.8)] opacity-5 md:opacity-[0.05]"
      >
        DESIGN
      </motion.div>
    </section>
  );
}
