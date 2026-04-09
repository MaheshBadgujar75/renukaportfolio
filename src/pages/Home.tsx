import { PageWrapper } from "../components/PageWrapper";
import { Hero } from "../components/Hero";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Sparkles, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.8]);

  return (
    <PageWrapper>
      <Hero />
      
      <section ref={containerRef} className="py-32 px-6 w-full max-w-full block mx-auto w-full relative z-10 overflow-x-clip">
         {/* Crazy Background Floating elements */}
         <motion.div 
           style={{ y: y1, rotate: rotate }} 
           className="absolute top-20 left-10 w-32 h-32 bg-accent/30 rounded-full blur-3xl z-0 pointer-events-none"
         />
         <motion.div 
           style={{ y: y2, scale: scale }} 
           className="absolute bottom-20 right-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px] z-0 pointer-events-none"
         />

        <div className="relative z-10 mb-20 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tighter leading-[0.9] mix-blend-difference mb-4">
              BEYOND <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-accent to-cyan-400 italic block mt-2">ORDINARY</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mt-6 font-medium leading-relaxed">
              Transforming complex problems into elegant, dynamic experiences. 
              Step into the new era of interactive design.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid Layout */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 md:auto-rows-[250px]">
          
          {/* Main Large Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            whileHover={{ y: -10, scale: 0.98 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
            className="md:col-span-2 md:row-span-2 group relative rounded-[3rem] overflow-hidden bg-muted shadow-2xl min-h-[400px]"
          >
            <motion.img 
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              src="https://picsum.photos/seed/uiux/800/800" 
              alt="Creative Vision" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-10 flex flex-col justify-end">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-4 bg-white/10 w-fit px-4 py-2 rounded-full backdrop-blur-md border border-white/20">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-white font-bold tracking-widest uppercase text-xs">Vision</span>
                </div>
                <h3 className="text-5xl text-white font-black font-display leading-tight mb-6">
                  Visual <br />Symphony.
                </h3>
                <Button asChild className="rounded-full bg-white text-black hover:bg-accent hover:text-white transition-all duration-300 font-bold h-14 px-8 text-lg hover:scale-105 active:scale-95 shadow-xl">
                  <Link to="/projects">See Magic <ArrowRight className="ml-3 h-5 w-5" /></Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Top Right Stats Box */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="md:col-span-2 md:row-span-1 rounded-[3rem] bg-gradient-to-br from-accent/20 to-cyan-500/10 border border-white/10 backdrop-blur-md p-10 flex flex-col justify-center relative overflow-hidden min-h-[250px]"
          >
            <div className="absolute -right-10 -bottom-10 text-[12rem] font-black text-accent/10 pointer-events-none select-none leading-none">
              99
            </div>
            <h4 className="text-7xl font-black text-accent mb-3 relative z-10">99%</h4>
            <p className="text-muted-foreground font-bold uppercase tracking-[0.2em] text-sm relative z-10 w-2/3">Global Client Satisfaction Rate</p>
          </motion.div>

          {/* Middle Right Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -10, rotate: 2 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="md:col-span-1 md:row-span-1 rounded-[3rem] bg-accent text-white p-8 flex flex-col justify-between shadow-2xl shadow-accent/20 cursor-pointer min-h-[250px]"
          >
             <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-md">
               <Target className="w-8 h-8 text-white" />
             </div>
             <div>
               <h4 className="text-3xl font-black mb-2">Agile</h4>
               <p className="text-white/80 font-medium text-sm leading-relaxed">Iterating rapidly with deep user empathy.</p>
             </div>
          </motion.div>

          {/* Middle Far Right Info Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.1, rotate: -2 }}
            transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
            className="md:col-span-1 md:row-span-1 rounded-[3rem] bg-black dark:bg-white border border-white/20 dark:border-black/20 p-8 flex flex-col justify-center items-center text-center text-white dark:text-black cursor-pointer shadow-xl min-h-[250px]"
          >
            <Zap className="w-14 h-14 text-yellow-400 mb-6 drop-shadow-lg" />
            <h4 className="text-4xl font-black">24H</h4>
            <p className="text-white/60 dark:text-black/60 text-xs font-bold uppercase tracking-[0.2em] mt-2">Prototyping</p>
          </motion.div>

          {/* Bottom Long Strip */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="md:col-span-4 md:row-span-1 rounded-[3rem] bg-gradient-to-r from-muted/80 to-muted/30 border border-border/50 backdrop-blur-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative group cursor-pointer shadow-lg"
          >
             <motion.div 
               className="absolute inset-0 bg-gradient-to-r from-accent/10 via-cyan-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" 
             />
             <div className="relative z-10 max-w-3xl">
               <h3 className="text-4xl md:text-5xl font-display font-black mb-4">
                 Designing with <span className="italic text-accent">Purpose.</span>
               </h3>
               <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                 Every micro-interaction is carefully crafted. A beautiful interface means nothing if the underlying experience fails to evoke an emotion. Let's build what matters.
               </p>
             </div>
             <motion.div 
               whileHover={{ rotate: 180, scale: 1.1 }}
               transition={{ duration: 0.5, type: "spring" }}
               className="relative z-10 w-24 h-24 rounded-full bg-background border-2 border-border flex items-center justify-center shrink-0 group-hover:border-accent transition-colors shadow-xl"
             >
               <ArrowRight className="w-10 h-10 text-foreground group-hover:text-accent transition-colors" />
             </motion.div>
          </motion.div>

        </div>
      </section>
    </PageWrapper>
  );
}
