"use client";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section id="CTA" className="relative overflow-hidden min-h-screen flex items-center">

      {/* Background Blobs */}
      <motion.div
        className="absolute -top-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl text-sky-600 md:text-5xl font-bold leading-tight"
        >
          Start Planning Your <br />
          <span className="text-sky-600">Next Journey Today</span>
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-black/80 max-w-xl mx-auto"
        >
          Discover curated destinations, build your itinerary in minutes,
          and explore the world with smart travel tools designed for modern explorers.
        </motion.p>

        <button className="bg-white text-sky-700 font-semibold px-8 mt-10 py-4 rounded-full shadow-lg hover:scale-105 cursor-pointer transition">
          Get Started
        </button>


      </div>
    </section>
  );
};

export default CTA;