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
    <main className="bg-white text-emerald-950 font-sans selection:bg-emerald-200 overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
            AyurAgent Labs Pvt Ltd
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-emerald-900">
            Kerala's Premier <br /> Ayurveda Marketer.
          </h1>
          <p className="text-lg md:text-xl text-emerald-700/80 max-w-2xl mx-auto mb-10">
            We build exclusive, hard-to-replicate digital growth systems that scale traditional wellness clinics into dominant online brands.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-emerald-700 text-white px-8 py-4 rounded-full font-medium shadow-xl shadow-emerald-900/20 hover:bg-emerald-800 transition-colors"
          >
            Scale Your Clinic
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 text-emerald-400"
        >
          ↓ Scroll to Explore
        </motion.div>
      </section>

      {/* --- VALUE PROPOSITION SECTION --- */}
      <section className="bg-emerald-900 py-32 px-6 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <div className="max-w-6xl mx-auto">
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
            <p className="text-emerald-100/80 text-lg max-w-2xl mx-auto">
              We don't just run ads. We deploy comprehensive operational workflows and automated patient acquisition frameworks designed specifically for the Ayurvedic sector.
            </p>
          </motion.div>

          {/* Staggered Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Card 1 */}
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-3xl shadow-xl">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6 text-2xl">
                🌱
              </div>
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Digital Presence</h3>
              <p className="text-emerald-700">High-converting landing pages and bespoke branding that reflects the purity and trust of your treatments.</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-3xl shadow-xl">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6 text-2xl">
                ⚙️
              </div>
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Smart Automation</h3>
              <p className="text-emerald-700">Proprietary lead tracking and consultation booking workflows that operate flawlessly without manual intervention.</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-3xl shadow-xl">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6 text-2xl">
                📈
              </div>
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Patient Acquisition</h3>
              <p className="text-emerald-700">Targeted regional campaigns across Kerala to drive high-intent patients directly to your consultation rooms.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- FOOTER / CTA SECTION --- */}
      <section className="bg-emerald-950 py-32 text-center px-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto bg-emerald-900/50 p-12 rounded-[3rem] border border-emerald-800/50"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Ready to dominate your region?</h2>
          <p className="text-emerald-200 mb-10 text-lg">
            Let's build a patient-generation engine your competitors cannot replicate.
          </p>
          <button className="bg-white text-emerald-900 px-10 py-4 rounded-full font-bold shadow-lg hover:bg-emerald-50 transition-colors">
            Book a Strategy Call
          </button>
        </motion.div>
      </section>

    </main>
  );
}