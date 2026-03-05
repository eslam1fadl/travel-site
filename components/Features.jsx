"use client";

import { motion } from "framer-motion";
import { Map, Compass, CalendarCheck } from "lucide-react";

const features = [
  {
    title: "Offline Access",
    desc: "Download destinations and maps to explore anytime, even without internet.",
    icon: Map,
  },
  {
    title: "Smart Trip Builder",
    desc: "Create personalized travel plans tailosky to your time and preferences.",
    icon: Compass,
  },
  {
    title: "Seamless Booking",
    desc: "Book experiences, camps, and activities directly from the platform.",
    icon: CalendarCheck,
  },
];


const Features = () => {
  return (
    <section id="Features" className="py-28 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Powerful{" "}
            <span className="text-sky-600">
              Features
            </span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Powerful tools designed to simplify planning and elevate your travel experience.
          </p>

        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => {
            const Icon = f.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-emerald-500 opacity-0 group-hover:opacity-10 rounded-2xl transition"></div>

                {/* Icon */}
                <div className="mb-6 inline-flex p-4 rounded-xl bg-sky-100 text-sky-600">
                  <Icon size={32} />
                </div>

                <div className=" relative z-10">
                  <h3 className="text-xl font-semibold mb-3">
                    {f.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>



              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;