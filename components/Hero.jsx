"use client";
import { motion } from "framer-motion";
import { Map, Compass, Mountain, Tent } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center">
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block my-4 px-4 py-1 text-sm rounded-full bg-sky-100 text-sky-700"
          >
            Welcome to Nomadica
          </motion.span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Discover breathtaking places <br />
            <span className="text-sky-600">around the globe</span>
          </h1>
           
          <p className="mt-6 text-gray-600 max-w-lg">
            We help you explore top destinations, plan seamless journeys,
            and create unforgettable travel memories with trusted guides
            and curated experiences.
          </p>

          <div className=" mt-10 flex flex-wrap gap-4">
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-full transition">
              Explore Now
            </button>
            <button className="border border-sky-600 text-sky-600 px-8 py-3 rounded-full hover:bg-sky-50 transition">
              Learn More
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{opacity:0,scale:0.9}}
          animate={{opacity:1,scale:1}}
          transition={{duration:0.8}}
          className=" relative"
        >
          <img
            src="/images/hero.jpg"
            className=" rounded-3xl shadow-2xl relative z-10"
            alt="Travel Adventure"
          />

          <FloatingIcon
            icon={<Compass size={26} />}
            className="top-6 left-7"
            delay={0}
          />

          <FloatingIcon
            icon={<Mountain size={26} />}
            className="bottom-10 left-10"
            delay={1}
          />

          <FloatingIcon
            icon={<Tent size={26} />}
            className="top-10 right-10"
            delay={0.5}
          />

          <FloatingIcon
            icon={<Map size={26} />}
            className="bottom-6 right-16"
            delay={1.2}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

function FloatingIcon({ icon, className, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: [0, -12, 0] }}
      transition={{
        delay,
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute z-20 bg-white shadow-lg rounded-full p-4 text-sky-600 ${className}`}
    >
      {icon}
    </motion.div>
  );
}
