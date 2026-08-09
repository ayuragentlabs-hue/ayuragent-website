"use client";

import { motion } from "framer-motion";

export default function Home() {
  // Stagger animation for service cards
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="bg-emerald-50 text-emerald-950 selection:bg-emerald-200 overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="z-10"
        >
          <span className="text-emerald-700 font-semibold tracking-wider uppercase text-sm mb-4 block">
            AyurAgent Labs Pvt Ltd
          </span>
          <h1 
  className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-emerald-950" 
  style={{ fontFamily: 'var(--font-playfair), serif' }}
>
  Kerala's Premier <br /> Ayurveda Marketer.
</h1>
          <p className="text-lg md:text-xl text-emerald-800/80 max-w-2xl mx-auto mb-10">
            We build exclusive, hard-to-replicate digital growth systems that scale traditional wellness clinics into dominant online brands.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-emerald-800 text-white px-8 py-4 rounded-full font-medium shadow-2xl shadow-emerald-900/20 hover:bg-emerald-900 transition-colors"
          >
            Scale Your Clinic
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 text-emerald-600/60 font-medium"
        >
          ↓ Scroll to Explore
        </motion.div>
      </section>

      {/* --- VALUE PROPOSITION SECTION --- */}
      <section className="bg-emerald-950 py-32 px-6 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.1)] relative">
        {/* Subtle background glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-emerald-700 blur-[120px] opacity-30 pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Modern Systems for Ancient Sciences
            </h2>
            <p className="text-emerald-200/80 text-lg max-w-2xl mx-auto">
              We don't just run ads. We deploy comprehensive operational workflows and automated patient acquisition frameworks designed specifically for the Ayurvedic sector.
            </p>
          </motion.div>

          {/* Staggered Glassmorphism Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Card 1 */}
            <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl hover:bg-white/10 transition-colors duration-300">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 text-2xl border border-emerald-400/30">
                🌱
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Digital Presence</h3>
              <p className="text-emerald-100/70">High-converting landing pages and bespoke branding that reflects the purity and trust of your treatments.</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl hover:bg-white/10 transition-colors duration-300">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 text-2xl border border-emerald-400/30">
                ⚙️
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Smart Automation</h3>
              <p className="text-emerald-100/70">Proprietary lead tracking and consultation booking workflows that operate flawlessly without manual intervention.</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl hover:bg-white/10 transition-colors duration-300">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 text-2xl border border-emerald-400/30">
                📈
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Patient Acquisition</h3>
              <p className="text-emerald-100/70">Targeted regional campaigns across Kerala to drive high-intent patients directly to your consultation rooms.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- FOOTER / CTA SECTION --- */}
      <section className="bg-[#021c13] py-32 text-center px-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto bg-gradient-to-b from-emerald-900/40 to-transparent p-12 rounded-[3rem] border border-emerald-800/50 backdrop-blur-sm"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Ready to dominate your region?</h2>
          <p className="text-emerald-300/80 mb-10 text-lg">
            Let's build a patient-generation engine your competitors cannot replicate.
          </p>
          <button className="bg-white text-emerald-950 px-10 py-4 rounded-full font-bold shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform duration-300">
            Book a Strategy Call
          </button>
        </motion.div>
      </section>

    </main>
  );
}