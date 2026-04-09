import { motion } from "motion/react";
import { ReactNode } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PageWrapperProps {
  children: ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen pt-24 pb-8 flex flex-col justify-between"
    >
      <div>
        {children}
      </div>

      <div className="w-full max-w-full block mx-auto px-6 md:px-12 mt-24">
        {/* Copyright Footer Strip */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-white/10 lg:px-4">
          <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full border border-white/10">
            <div className="h-2 w-2 rounded-full bg-accent animate-ping" />
            <div className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest">
              © {new Date().getFullYear()} RENUKA SHELAR. CRAFTED WITH PRECISION.
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full h-14 w-14 bg-white/5 hover:bg-accent border border-white/10 hover:text-black transition-all shadow-lg group"
          >
            <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
