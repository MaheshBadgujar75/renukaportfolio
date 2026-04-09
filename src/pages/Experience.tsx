import { PageWrapper } from "../components/PageWrapper";
import { Experience as ExperienceList } from "../components/Experience";
import { motion } from "motion/react";

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

export default function Experience() {
  return (
    <PageWrapper>
      <div className="w-full max-w-full block mx-auto px-4 md:px-12 py-16 md:py-24 overflow-x-clip">
        
        {/* Asymmetrical Split-Layout Hero */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-12 items-start justify-between mb-16 md:mb-24 relative z-10 border-b border-white/5 pb-16 md:pb-20">
          <div className="flex-1 shrink-0 lg:max-w-2xl text-left">
            <motion.h1 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-8xl lg:text-[7rem] font-display font-black tracking-tighter leading-[0.9] md:leading-[0.85] uppercase flex flex-col items-start text-left"
            >
              <span className="overflow-hidden inline-block pb-1 md:pb-2">
                <motion.span variants={itemVariants} className="inline-block origin-bottom-left">MY</motion.span>
              </span>
              <span className="overflow-hidden inline-block pb-1 md:pb-2">
                <motion.span variants={itemVariants} className="inline-block origin-bottom-left">
                  <span className="text-gradient">EXPERIENCE</span><span className="text-accent">.</span>
                </motion.span>
              </span>
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex-1 lg:max-w-xl relative mt-4 md:mt-8 lg:mt-12 text-left"
          >
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium relative z-10">
              A track record of delivering high-quality design solutions across various industries and projects.
            </p>
          </motion.div>
        </div>
        
        <ExperienceList />
      </div>
    </PageWrapper>
  );
}
