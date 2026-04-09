import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const location = useLocation();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 lg:pt-8 pointer-events-none px-6">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.4, duration: 1 }}
        className="pointer-events-auto flex items-center gap-2 md:gap-4 lg:gap-6 px-4 md:px-6 py-2.5 md:py-3.5 backdrop-blur-2xl bg-background/70 border border-border/50 rounded-full shadow-2xl w-full max-w-fit"
      >
        <Link to="/" className="flex items-center gap-2 group px-2 shrink-0">
          <motion.div 
            whileHover={{ rotate: 180 }}
            className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-gradient-to-br from-emerald-400 via-accent to-cyan-400 flex items-center justify-center text-white font-display font-black text-[10px] md:text-lg shadow-[0_0_20px_rgba(0,255,170,0.3)] transition-shadow group-hover:shadow-[0_0_30px_rgba(0,255,170,0.6)]"
          >
            RS
          </motion.div>
        </Link>
        
        <div className="flex items-center overflow-x-auto scrollbar-hide gap-1 md:gap-2 relative no-scrollbar mask-edges">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 md:px-6 py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all relative overflow-hidden whitespace-nowrap shrink-0",
                  isActive 
                    ? "text-black dark:text-black" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-accent rounded-full -z-10 shadow-[0_0_15px_rgba(0,255,170,0.4)]"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            )
          })}
        </div>

        <div className="w-px h-6 md:h-10 bg-border/50 shrink-0 mx-1 md:mx-2 lg:mx-3" />
        
        <ThemeSwitcher />
      </motion.nav>
    </div>
  );
}
