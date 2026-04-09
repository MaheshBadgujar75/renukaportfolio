import { PageWrapper } from "../components/PageWrapper";
import { resumeData } from "../data";
import { motion } from "motion/react";
import { User, Target, Award, Sparkles } from "lucide-react";

// Staggered text variants
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

export default function About() {
  return (
    <PageWrapper>
      <div className="w-full max-w-full block mx-auto px-4 md:px-12 py-16 md:py-24 overflow-x-clip">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-12 items-start justify-between mb-16 md:mb-24 relative z-10 border-b border-white/5 pb-16 md:pb-20">
          <div className="flex-1 shrink-0 lg:max-w-2xl">
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-8xl lg:text-[7rem] font-display font-black tracking-tighter leading-[0.9] md:leading-[0.85] uppercase flex flex-col"
            >
              <span className="overflow-hidden inline-block pb-1 md:pb-2">
                <motion.span variants={itemVariants} className="inline-block origin-bottom-left">PASSIONATE</motion.span>
              </span>
              <span className="overflow-hidden inline-block pb-1 md:pb-2">
                <motion.span variants={itemVariants} className="inline-block origin-bottom-left">
                  <span className="text-gradient">DESIGNER</span><span className="text-accent">.</span>
                </motion.span>
              </span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex-1 lg:max-w-xl relative mt-4 md:mt-8 lg:mt-12"
          >
            {/* Spinning decorative orbit */}
            <div className="absolute -top-16 -right-10 w-32 h-32 rounded-full border border-dashed border-accent/40 animate-[spin_15s_linear_infinite] flex items-center justify-center opacity-50 pointer-events-none hidden md:flex">
              <div className="w-2 h-2 bg-accent rounded-full absolute -top-1" />
              <Sparkles className="w-6 h-6 text-accent animate-pulse" />
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium relative z-10">
              {resumeData.summary}
            </p>

            {/* Impressive Stats Strip */}
            <div className="grid grid-cols-2 gap-4 mt-8 p-6 md:p-8 rounded-[2rem] bg-gradient-to-br from-accent/10 to-cyan-500/5 border border-white/5 backdrop-blur-md relative overflow-hidden group">
              <div className="absolute inset-0 bg-accent/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              <div className="relative z-10 flex flex-col justify-center">
                <h4 className="text-4xl md:text-5xl font-black text-gradient mb-1">5+</h4>
                <p className="text-[10px] md:text-xs uppercase text-muted-foreground tracking-[0.2em] font-bold">Years Exp.</p>
              </div>
              <div className="relative z-10 flex flex-col justify-center border-l border-white/10 pl-6 lg:pl-8">
                <h4 className="text-4xl md:text-5xl font-black text-gradient mb-1 drop-shadow-sm">100%</h4>
                <p className="text-[10px] md:text-xs uppercase text-muted-foreground tracking-[0.2em] font-bold">Dedication</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-6 relative z-10 auto-rows-auto md:auto-rows-[300px]">

          {/* Main Large Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 0.99 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
            className="md:col-span-2 md:row-span-2 relative rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-2xl min-h-[350px] md:min-h-full"
          >
            <motion.img
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              src="https://picsum.photos/seed/workspace/1200/800"
              alt="Workspace"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent p-8 md:p-10 flex flex-col justify-end">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-3 md:mb-4 bg-white/10 w-fit px-3 md:px-4 py-1.5 md:py-2 rounded-full backdrop-blur-md border border-white/20">
                  <Sparkles className="w-3 md:w-4 h-3 md:h-4 text-emerald-400" />
                  <span className="text-white font-bold tracking-widest uppercase text-[10px] md:text-xs">Creativity</span>
                </div>
                <h3 className="text-3xl md:text-4xl text-white font-black font-display leading-tight mb-2">
                  My Digital Workspace.
                </h3>
              </motion.div>
            </div>
          </motion.div>

          {/* Top Right Panel 1: Who I Am */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -5, rotate: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.4 }}
            className="md:col-span-1 md:row-span-1 rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 border border-white/10 dark:border-white/5 backdrop-blur-md p-8 md:p-8 flex flex-col relative overflow-hidden group min-h-[280px] md:min-h-[300px]"
          >
            <div className="absolute -right-5 -bottom-5 opacity-10 group-hover:scale-150 transition-transform duration-700">
              <User className="w-32 md:w-40 h-32 md:h-40" />
            </div>
            <div className="h-12 w-12 md:h-14 md:w-14 rounded-xl md:rounded-2xl bg-accent flex items-center justify-center text-black mb-auto z-10 shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform shrink-0">
              <User className="h-6 w-6 md:h-7 md:w-7" />
            </div>
            <div className="relative z-10 mt-6 md:mt-6">
              <h3 className="text-xl md:text-2xl font-black mb-2">Who I Am</h3>
              <p className="text-muted-foreground font-medium text-xs md:text-sm leading-relaxed">
                A UI/UX designer based in India, dedicated to creating digital products that are beautiful, accessible, and intuitive.
              </p>
            </div>
          </motion.div>

          {/* Top Right Panel 2: Goal */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -5, rotate: -1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: "spring", bounce: 0.4 }}
            className="md:col-span-1 md:row-span-1 rounded-[2rem] md:rounded-[3rem] bg-muted border border-border/50 p-8 md:p-8 flex flex-col relative overflow-hidden group min-h-[280px] md:min-h-[300px]"
          >
            <div className="h-12 w-12 md:h-14 md:w-14 rounded-xl md:rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-500 mb-auto z-10 shrink-0 group-hover:scale-110 transition-transform">
              <Target className="h-6 w-6 md:h-7 md:w-7" />
            </div>
            <div className="relative z-10 mt-6 md:mt-6 overflow-y-auto pr-2">
              <h3 className="text-xl md:text-2xl font-black mb-2">My Goal</h3>
              <p className="text-muted-foreground font-medium text-xs md:text-sm leading-relaxed">
                {resumeData.objective}
              </p>
            </div>
          </motion.div>

          {/* Bottom Right Panel: Education */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.01 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", bounce: 0.4 }}
            className="md:col-span-2 md:row-span-1 rounded-[2rem] md:rounded-[3rem] bg-black dark:bg-white text-white dark:text-black p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between relative overflow-hidden group min-h-[300px] shadow-2xl"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent/20 via-cyan-500/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"
            />
            <div className="relative z-10 flex items-center gap-4 md:gap-6 mb-8 md:mb-0">
              <div className="h-16 w-16 md:h-20 md:w-20 rounded-2xl md:rounded-[2rem] bg-accent flex items-center justify-center text-black shadow-lg shadow-accent/30 group-hover:rotate-12 transition-transform">
                <Award className="h-8 md:h-10 w-8 md:w-10" />
              </div>
              <h3 className="text-3xl md:text-5xl font-display font-black leading-tight">Education <br /><span className="text-accent italic">&</span> Journey.</h3>
            </div>

            <div className="relative z-10 space-y-4 md:space-y-6 md:w-1/2">
              {resumeData.education.map((edu, i) => (
                <div key={i} className="group/edu pl-4 md:pl-6 border-l-2 border-white/20 dark:border-black/20 hover:border-accent transition-colors">
                  <div className="font-black text-base md:text-xl uppercase tracking-wider mb-1 md:mb-2 group-hover/edu:text-accent transition-colors">{edu.degree}</div>
                  <div className="text-xs md:text-sm font-medium opacity-70">{edu.institution}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
}
