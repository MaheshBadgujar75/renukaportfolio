import { PageWrapper } from "../components/PageWrapper";
import { Skills as SkillsSection } from "../components/Skills";
import { motion } from "motion/react";
import { Zap } from "lucide-react";

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

export default function Skills() {
  return (
    <PageWrapper>
      <div className="w-full max-w-full block mx-auto px-6 md:px-12 py-24 overflow-x-clip">

        {/* Asymmetrical Split-Layout Hero */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-start justify-between mb-24 relative z-10 border-b border-white/5 pb-20">
          <div className="flex-1 shrink-0 lg:max-w-2xl">
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-6xl md:text-8xl lg:text-[7rem] font-display font-black tracking-tighter leading-[0.85] uppercase flex flex-col items-start text-left"
            >
              <span className="overflow-hidden inline-block pb-2 pr-8">
                <motion.span variants={itemVariants} className="inline-block origin-bottom-left">EXPERTISE</motion.span>
              </span>
              <span className="overflow-hidden inline-block pb-2 pr-8">
                <motion.span variants={itemVariants} className="inline-block origin-bottom-left">
                  <span className="text-gradient">& TOOLS</span><span className="text-accent">.</span>
                </motion.span>
              </span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex-1 lg:max-w-xl relative mt-4 lg:mt-12"
          >
            {/* Spinning decorative orbit */}
            <div className="absolute -top-16 -right-10 w-32 h-32 rounded-full border border-dashed border-accent/40 animate-[spin_15s_linear_infinite] flex items-center justify-center opacity-50 pointer-events-none hidden md:flex">
              <div className="w-2 h-2 bg-accent rounded-full absolute -top-1" />
              <Zap className="w-6 h-6 text-accent animate-pulse" />
            </div>

            <p className="text-2xl text-muted-foreground leading-relaxed font-medium relative z-10 text-left">
              Mastering the craft of digital design with a comprehensive set of skills, frameworks, and industry-standard tools to deliver exceptional experiences.
            </p>
          </motion.div>
        </div>

        <SkillsSection />

      </div>
    </PageWrapper>
  );
}
