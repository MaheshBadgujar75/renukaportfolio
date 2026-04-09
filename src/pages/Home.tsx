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
      
      <section ref={containerRef} className="py-20 md:py-32 px-4 md:px-6 w-full max-w-full block mx-auto relative z-10 overflow-x-clip">
         {/* Crazy Background Floating elements */}
         <motion.div 
           style={{ y: y1, rotate: rotate }} 
           className="absolute top-20 left-10 w-32 h-32 bg-accent/30 rounded-full blur-3xl z-0 pointer-events-none"
         />
         <motion.div 
           style={{ y: y2, scale: scale }} 
           className="absolute bottom-20 right-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px] z-0 pointer-events-none"
         />

        <div className="relative z-10 mb-12 md:mb-20 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          >
            <h2 className="text-4xl md:text-7xl lg:text-8xl font-display font-black tracking-tighter leading-[0.95] md:leading-[0.9] mix-blend-difference mb-4">
              BEYOND <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-accent to-cyan-400 italic block mt-2">ORDINARY</span>
            </h2>
            <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mt-4 md:mt-6 font-medium leading-relaxed">
              Transforming complex problems into elegant, dynamic experiences. 
              Step into the new era of interactive design.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid Layout */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 md:gap-6 auto-rows-auto md:auto-rows-[250px]">
          
          {/* Main Large Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            whileHover={{ y: -5, scale: 0.99 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
            className="md:col-span-2 md:row-span-2 group relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-muted shadow-2xl min-h-[350px] md:min-h-[400px]"
          >
            <motion.img 
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              src="https://picsum.photos/seed/uiux/800/800" 
              alt="Creative Vision" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-6 md:p-10 flex flex-col justify-end">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-3 md:mb-4 bg-white/10 w-fit px-3 md:px-4 py-1.5 md:py-2 rounded-full backdrop-blur-md border border-white/20">
                  <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-accent" />
                  <span className="text-white font-bold tracking-widest uppercase text-[10px] md:text-xs">Vision</span>
                </div>
                <h3 className="text-3xl md:text-5xl text-white font-black font-display leading-tight mb-4 md:mb-6">
                  Visual <br />Symphony.
                </h3>
                <Button asChild className="rounded-full bg-white text-black hover:bg-accent hover:text-white transition-all duration-300 font-bold h-12 md:h-14 px-6 md:px-8 text-base md:text-lg hover:scale-105 active:scale-95 shadow-xl">
                  <Link to="/projects">See Magic <ArrowRight className="ml-2 md:ml-3 h-4 w-4 md:h-5 md:w-5" /></Link>
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
            className="md:col-span-2 md:row-span-1 rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-accent/20 to-cyan-500/10 border border-white/10 backdrop-blur-md p-8 md:p-10 flex flex-col justify-center relative overflow-hidden min-h-[200px] md:min-h-[250px]"
          >
            <div className="absolute -right-5 md:-right-10 -bottom-5 md:-bottom-10 text-[8rem] md:text-[12rem] font-black text-accent/10 pointer-events-none select-none leading-none">
              99
            </div>
            <h4 className="text-5xl md:text-7xl font-black text-accent mb-2 md:mb-3 relative z-10">99%</h4>
            <p className="text-muted-foreground font-bold uppercase tracking-[0.2em] text-[10px] md:text-sm relative z-10 w-2/3 leading-relaxed">Global Client Satisfaction Rate</p>
          </motion.div>

          {/* Middle Right Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -5, rotate: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="md:col-span-1 md:row-span-1 rounded-[2rem] md:rounded-[3rem] bg-accent text-white p-6 md:p-8 flex flex-col justify-between shadow-2xl shadow-accent/20 cursor-pointer min-h-[220px] md:min-h-[250px]"
          >
             <div className="bg-white/20 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center backdrop-blur-md shrink-0">
               <Target className="w-6 h-6 md:w-8 md:h-8 text-white" />
             </div>
             <div className="mt-4">
               <h4 className="text-2xl md:text-3xl font-black mb-1 md:mb-2">Agile</h4>
               <p className="text-white/80 font-medium text-xs md:text-sm leading-relaxed">Iterating rapidly with deep user empathy.</p>
             </div>
          </motion.div>

          {/* Middle Far Right Info Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.05, rotate: -1 }}
            transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
            className="md:col-span-1 md:row-span-1 rounded-[2rem] md:rounded-[3rem] bg-black dark:bg-white border border-white/20 dark:border-black/20 p-6 md:p-8 flex flex-col justify-center items-center text-center text-white dark:text-black cursor-pointer shadow-xl min-h-[220px] md:min-h-[250px]"
          >
            <Zap className="w-10 h-10 md:w-14 md:h-14 text-yellow-400 mb-4 md:mb-6 drop-shadow-lg" />
            <h4 className="text-3xl md:text-4xl font-black">24H</h4>
            <p className="text-white/60 dark:text-black/60 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mt-2">Prototyping</p>
          </motion.div>

          {/* Bottom Long Strip */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="md:col-span-4 md:row-span-1 rounded-[2rem] md:rounded-[3rem] bg-gradient-to-r from-muted/80 to-muted/30 border border-border/50 backdrop-blur-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 overflow-hidden relative group cursor-pointer shadow-lg"
          >
             <motion.div 
               className="absolute inset-0 bg-gradient-to-r from-accent/10 via-cyan-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" 
             />
             <div className="relative z-10 max-w-3xl text-center md:text-left">
               <h3 className="text-3xl md:text-5xl font-display font-black mb-4 leading-tight">
                 Designing with <span className="italic text-accent">Purpose.</span>
               </h3>
               <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
                 Every micro-interaction is carefully crafted. A beautiful interface means nothing if the underlying experience fails to evoke an emotion. Let's build what matters.
               </p>
             </div>
             <motion.div 
               whileHover={{ rotate: 180, scale: 1.1 }}
               transition={{ duration: 0.5, type: "spring" }}
               className="relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-full bg-background border-2 border-border flex items-center justify-center shrink-0 group-hover:border-accent transition-colors shadow-xl"
             >
               <ArrowRight className="w-8 h-8 md:w-10 md:h-10 text-foreground group-hover:text-accent transition-colors" />
             </motion.div>
          </motion.div>

        </div>
      </section>
    </PageWrapper>
  );
}
