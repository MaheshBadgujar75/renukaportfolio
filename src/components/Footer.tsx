import { resumeData } from "@/src/data";
import { Mail, Phone, Linkedin, ArrowUp, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="py-8 md:py-12 px-4 md:px-12 w-full max-w-full block mx-auto relative z-10">

      {/* Redesigned Premium Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start mb-16 md:mb-24 w-full">

        {/* Left Side: Contact Information Cards */}
        <div className="lg:col-span-4 flex flex-col gap-4 md:gap-6">
          <motion.a
            whileHover={{ scale: 1.02 }}
            href={`mailto:${resumeData.email}`}
            className="group relative overflow-hidden p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-accent/5 hover:bg-accent/10 border border-white/5 backdrop-blur-md transition-all flex flex-col items-start gap-4 md:gap-6 shadow-xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl rounded-full pointer-events-none group-hover:bg-accent/20 transition-all" />
            <div className="h-12 w-12 md:h-14 md:w-14 rounded-xl md:rounded-2xl bg-accent text-black flex items-center justify-center shrink-0 shadow-lg shadow-accent/20 group-hover:rotate-12 transition-transform">
              <Mail className="h-5 w-5 md:h-6 md:w-6" />
            </div>
            <div>
              <div className="text-[10px] md:text-xs text-muted-foreground font-black uppercase tracking-[0.2em] mb-1 md:mb-2">Email Directly</div>
              <div className="text-lg md:text-2xl font-display font-black text-gradient group-hover:text-accent transition-colors break-all leading-tight">{resumeData.email}</div>
            </div>
          </motion.a>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 h-full">
            <motion.a
              whileHover={{ scale: 1.02, y: -5 }}
              href={`tel:${resumeData.phone}`}
              className="group relative overflow-hidden p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-muted/30 hover:bg-black border border-white/5 backdrop-blur-md transition-all flex flex-col items-start gap-4 md:gap-6 shadow-xl"
            >
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg md:rounded-xl bg-cyan-500/20 text-cyan-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              <div className="mt-auto">
                <div className="text-[9px] md:text-[10px] text-muted-foreground font-black uppercase tracking-[0.2em] mb-1">Call Me</div>
                <div className="text-base md:text-lg font-black text-gradient group-hover:text-cyan-400 transition-colors whitespace-nowrap">{resumeData.phone}</div>
              </div>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02, y: -5 }}
              href="#"
              className="group relative overflow-hidden p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-muted/30 hover:bg-black border border-white/5 backdrop-blur-md transition-all flex flex-col items-start gap-4 md:gap-6 shadow-xl"
            >
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg md:rounded-xl bg-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              <div className="mt-auto">
                <div className="text-[9px] md:text-[10px] text-muted-foreground font-black uppercase tracking-[0.2em] mb-1">Connect</div>
                <div className="text-base md:text-lg font-black text-gradient group-hover:text-emerald-400 transition-colors">LinkedIn</div>
              </div>
            </motion.a>
          </div>
        </div>

        {/* Right Side: Form Bento */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-8 bg-black/40 backdrop-blur-xl p-8 md:p-14 rounded-[1.5rem] md:rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden h-full flex flex-col"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[80px] rounded-full pointer-events-none" />

          <div className="flex items-center gap-4 mb-8 md:mb-10">
            <h3 className="text-2xl md:text-4xl font-display font-black text-white uppercase tracking-tighter">Draft a Message</h3>
            <div className="flex-1 h-px bg-white/10" />
            <Send className="w-4 h-4 md:w-5 md:h-5 text-accent opacity-50" />
          </div>

          <form className="space-y-4 md:space-y-6 relative z-10 flex-1 flex flex-col justify-end" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2 text-left">
                <label className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-accent ml-2">Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-5 md:px-6 py-4 md:py-5 rounded-xl md:rounded-[1.5rem] bg-white/5 border border-white/10 focus:border-accent outline-none transition-all focus:ring-4 focus:ring-accent/10 focus:bg-white/10 text-white placeholder:text-muted-foreground/50 text-sm md:text-base"
                  required
                />
              </div>
              <div className="space-y-2 text-left">
                <label className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-accent ml-2">Email</label>
                <input
                  type="email"
                  placeholder="hello@planet.com"
                  className="w-full px-5 md:px-6 py-4 md:py-5 rounded-xl md:rounded-[1.5rem] bg-white/5 border border-white/10 focus:border-accent outline-none transition-all focus:ring-4 focus:ring-accent/10 focus:bg-white/10 text-white placeholder:text-muted-foreground/50 text-sm md:text-base"
                  required
                />
              </div>
            </div>
            <div className="space-y-2 text-left">
              <label className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-accent ml-2">Objective</label>
              <textarea
                placeholder="Let's build the future..."
                rows={3}
                className="w-full px-5 md:px-6 py-4 md:py-5 rounded-xl md:rounded-[1.5rem] bg-white/5 border border-white/10 focus:border-accent outline-none transition-all focus:ring-4 focus:ring-accent/10 focus:bg-white/10 text-white placeholder:text-muted-foreground/50 resize-none text-sm md:text-base"
                required
              ></textarea>
            </div>
            <Button className="w-full mt-2 md:mt-4 py-6 md:py-8 rounded-xl md:rounded-[1.5rem] bg-accent hover:bg-accent/90 text-black font-black text-base md:text-lg tracking-widest uppercase shadow-xl shadow-accent/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
              SEND MESSAGE
            </Button>
          </form>
        </motion.div>
      </div>
    </footer>
  );
}
