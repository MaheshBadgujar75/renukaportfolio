import { motion } from "motion/react";

export function Background() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      {/* Primary Glows - Colorful Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.3)_0%,_transparent_60%)]"
        style={{ willChange: "transform" }}
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          x: [0, -50, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
            }}
        className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.3)_0%,_transparent_60%)]"
        style={{ willChange: "transform" }}
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(20,184,166,0.25)_0%,_transparent_60%)]"
        style={{ willChange: "transform" }}
      />

      <motion.div
        animate={{
          scale: [1.15, 1, 1.15],
          x: [0, -75, 0],
          y: [0, 75, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(34,197,94,0.2)_0%,_transparent_60%)]"
        style={{ willChange: "transform" }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 dark:opacity-10" />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
